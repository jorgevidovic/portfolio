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

        if (validateForm()) {
            try {
                const response = await fetch('api/sendEmail', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(formData), 
                });

                if (response.ok) {
                    setFormStatus('success');
                    setFormData({ name: '', email: '', subject: '', message: '' }); 
                } else {
                    setFormStatus('error');
                }
            } catch (error) {
                console.error('Error al enviar el formulario:', error);
                setFormStatus('error');
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
                className="bg-secondary text-white p-2 rounded-md hover:bg-secondary-dark transition-colors">
                Enviar
            </button>

            {/* Mensajes de estado */}
            {submitted && formStatus === 'success' && (
                <p className="text-green-500 text-sm mt-3">¡Formulario enviado con éxito!</p>
            )}

            {submitted && formStatus === 'error' && (
                <p className="text-red-500 text-sm mt-3">Error al enviar el formulario. Inténtalo nuevamente.</p>
            )}
        </form>
    );
};

export default ContactForm;
