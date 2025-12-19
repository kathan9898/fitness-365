import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
// You should call this once in your app, e.g., in main.tsx or App.tsx
export const initEmailJS = () => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
        emailjs.init(publicKey);
    } else {
        console.warn('EmailJS Public Key not found in environment variables.');
    }
};

export interface EmailData {
    full_name: string;
    email: string;
    phone: string;
    goal: string;
    preferred_time: string;
    message: string;
}

export const sendLeadEmail = async (data: EmailData) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        console.error('EmailJS configuration missing.');
        throw new Error('EmailJS configuration missing.');
    }

    try {
        const response = await emailjs.send(
            serviceId,
            templateId,
            {
                to_name: 'Fitness 365 Owner',
                from_name: data.full_name,
                from_email: data.email,
                phone: data.phone,
                goal: data.goal,
                preferred_time: data.preferred_time,
                message: data.message,
                reply_to: data.email,
            },
            publicKey
        );
        return response;
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
    }
};
