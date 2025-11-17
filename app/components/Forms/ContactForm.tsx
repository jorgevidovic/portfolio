import React, { useState } from 'react';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [errors, setErrors] = useState<FormData>({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);
    const [formStatus, setFormStatus] = useState<null | 'success' | 'error'>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string>('');

    // Función para validar el formulario
    const validateForm = (): boolean => {
        let valid = true;
        const newErrors: FormData = { name: '', email: '', subject: '', message: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'El nombre es obligatorio.';
            valid = false;
        }

        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Por favor, introduce un correo electrónico válido.';
            valid = false;
        }

        if (!formData.subject.trim()) {
            newErrors.subject = 'El asunto es obligatorio.';
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'El mensaje no puede estar vacío.';
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
        setSubmitted(true);
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
                    setSubmitted(false); 
                } else {
                    setFormStatus('error');
                    setErrorMessage(data.error || 'Error al enviar el formulario. Inténtalo nuevamente.');
                    
                    // Show specific errors if available
                    if (data.details && Array.isArray(data.details)) {
                        setErrorMessage(data.details.join('. '));
                    }
                }
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                setFormStatus('error');
                setErrorMessage('Error de conexión. Por favor, verifica tu conexión a internet.');
            } finally {
                setIsLoading(false);
            }
        } else {
            setFormStatus('error');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {/* Campo de Correo Electrónico */}
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-black">
                    Correo Electrónico
                </label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-black ${errors.email ? 'border-red-500' : ''}`}
                    required/>
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            {/* Campo de Nombre */}
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-black">
                    Nombre
                </label>
                <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-black ${errors.name ? 'border-red-500' : ''}`}
                    required/>
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            {/* Campo de Asunto */}
            <div>
                <label htmlFor="subject" className="block text-sm font-medium text-black">
                    Asunto
                </label>
                <input
                    type="text"
                    name="subject"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-black ${errors.subject ? 'border-red-500' : ''}`}
                    required/>
                {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>

            {/* Campo de Mensaje */}
            <div>
                <label htmlFor="message" className="block text-sm font-medium text-black">
                    Mensaje
                </label>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 block w-full border border-gray-300 rounded-md p-2 text-black ${errors.message ? 'border-red-500' : ''}`}
                    required/>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            {/* Botón para Enviar */}
            <button
                type="submit"
                disabled={isLoading}
                className="bg-secondary text-white p-2 rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                {isLoading ? (
                    <>
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Enviando...
                    </>
                ) : (
                    'Enviar'
                )}
            </button>

            {/* Mensajes de estado */}
            {formStatus === 'success' && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">¡Éxito! </strong>
                    <span className="block sm:inline">Tu mensaje ha sido enviado correctamente. Te responderé pronto.</span>
                </div>
            )}

            {formStatus === 'error' && errorMessage && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{errorMessage}</span>
                </div>
            )}
        </form>
    );
};

export default ContactForm;
