"use client";

import React, { useState } from 'react';
import { useLang } from '@/app/lib/LangContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { tr } = useLang();

  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', subject: '', message: '',
  });
  const [errors, setErrors] = useState<FormData>({
    name: '', email: '', subject: '', message: '',
  });
  const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const validateForm = (): boolean => {
    let valid = true;
    const newErrors: FormData = { name: '', email: '', subject: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = tr("form_name_error");
      valid = false;
    }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = tr("form_email_error");
      valid = false;
    }
    if (!formData.subject.trim()) {
      newErrors.subject = tr("form_subject_error");
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = tr("form_message_error");
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');

    if (validateForm()) {
      setIsLoading(true);
      try {
        const response = await fetch('/api/sendEmail', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
          setFormStatus('success');
          setFormData({ name: '', email: '', subject: '', message: '' });
        } else {
          setFormStatus('error');
          setErrorMessage(
            data.details && Array.isArray(data.details)
              ? data.details.join('. ')
              : data.error || tr("form_connection_error")
          );
        }
      } catch {
        setFormStatus('error');
        setErrorMessage(tr("form_connection_error"));
      } finally {
        setIsLoading(false);
      }
    } else {
      setFormStatus('error');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-black">
          {tr("form_email_label")}
        </label>
        <input
          type="email" name="email" id="email"
          value={formData.email} onChange={handleChange}
          className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-black ${errors.email ? 'border-red-500' : ''}`}
          required />
        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
      </div>

      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-black">
          {tr("form_name_label")}
        </label>
        <input
          type="text" name="name" id="name"
          value={formData.name} onChange={handleChange}
          className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-black ${errors.name ? 'border-red-500' : ''}`}
          required />
        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-black">
          {tr("form_subject_label")}
        </label>
        <input
          type="text" name="subject" id="subject"
          value={formData.subject} onChange={handleChange}
          className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-black ${errors.subject ? 'border-red-500' : ''}`}
          required />
        {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-black">
          {tr("form_message_label")}
        </label>
        <textarea
          name="message" id="message"
          value={formData.message} onChange={handleChange}
          className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-black ${errors.message ? 'border-red-500' : ''}`}
          required />
        {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-secondary text-white p-2 rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
        {isLoading ? (
          <>
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {tr("form_sending")}
          </>
        ) : (
          tr("form_submit")
        )}
      </button>

      {/* Status messages */}
      {formStatus === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">{tr("form_success_title")} </strong>
          <span className="block sm:inline">{tr("form_success_text")}</span>
        </div>
      )}
      {formStatus === 'error' && errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
          <strong className="font-bold">{tr("form_error_prefix")}</strong>
          <span className="block sm:inline">{errorMessage}</span>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
