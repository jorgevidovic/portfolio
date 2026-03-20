"use client";

import React, { useState } from 'react';
import { useLang } from '@/app/lib/LangContext';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const inputClass = (hasError: boolean) =>
  `mt-1.5 block w-full rounded-xl px-4 py-2.5 text-sm text-white placeholder-white/25 bg-white/5 border ${
    hasError
      ? 'border-red-500/70 focus:border-red-500'
      : 'border-white/10 focus:border-secondary/60'
  } outline-none transition-colors duration-200 focus:bg-white/8`;

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

    if (!formData.name.trim()) { newErrors.name = tr("form_name_error"); valid = false; }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = tr("form_email_error"); valid = false;
    }
    if (!formData.subject.trim()) { newErrors.subject = tr("form_subject_error"); valid = false; }
    if (!formData.message.trim()) { newErrors.message = tr("form_message_error"); valid = false; }

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

      {/* Email + Name row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-white/50">
            {tr("form_email_label")}
          </label>
          <input
            type="email" name="email" id="email"
            value={formData.email} onChange={handleChange}
            className={inputClass(!!errors.email)}
            placeholder="you@example.com"
          />
          {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-white/50">
            {tr("form_name_label")}
          </label>
          <input
            type="text" name="name" id="name"
            value={formData.name} onChange={handleChange}
            className={inputClass(!!errors.name)}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="subject" className="block text-xs font-semibold uppercase tracking-wider text-white/50">
          {tr("form_subject_label")}
        </label>
        <input
          type="text" name="subject" id="subject"
          value={formData.subject} onChange={handleChange}
          className={inputClass(!!errors.subject)}
          placeholder="..."
        />
        {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-white/50">
          {tr("form_message_label")}
        </label>
        <textarea
          name="message" id="message" rows={4}
          value={formData.message} onChange={handleChange}
          className={`${inputClass(!!errors.message)} resize-none`}
          placeholder="..."
        />
        {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="w-full py-3 rounded-xl bg-secondary hover:bg-orange-500 text-white font-semibold text-sm transition-all hover:scale-[1.01] active:scale-[0.99] shadow-[0_0_20px_rgba(245,116,28,0.3)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {tr("form_sending")}
          </>
        ) : tr("form_submit")}
      </button>

      {/* Status */}
      {formStatus === 'success' && (
        <div className="flex items-start gap-3 rounded-xl bg-emerald-500/10 border border-emerald-500/25 px-4 py-3" role="alert">
          <svg className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-emerald-400">{tr("form_success_title")}</p>
            <p className="text-xs text-emerald-400/70 mt-0.5">{tr("form_success_text")}</p>
          </div>
        </div>
      )}
      {formStatus === 'error' && errorMessage && (
        <div className="flex items-start gap-3 rounded-xl bg-red-500/10 border border-red-500/25 px-4 py-3" role="alert">
          <svg className="w-5 h-5 text-red-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p className="text-sm font-semibold text-red-400">{tr("form_error_prefix")}{errorMessage}</p>
          </div>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
