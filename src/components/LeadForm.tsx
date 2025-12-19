import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiCheckCircle, FiAlertCircle } from 'react-icons/fi';
import Button from './Button';
import styles from './LeadForm.module.css';
import { sendLeadEmail, type EmailData } from '../utils/emailjs';

const LeadForm: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<EmailData>();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (data: EmailData) => {
        setIsLoading(true);
        setError(null);
        try {
            await sendLeadEmail(data);
            setIsSubmitted(true);
            reset();
            if (onSuccess) onSuccess();
        } catch (err) {
            setError('Something went wrong. Please try again or contact us directly.');
        } finally {
            setIsLoading(false);
        }
    };

    if (isSubmitted) {
        return (
            <div className={styles.successMessage}>
                <FiCheckCircle className={styles.successIcon} />
                <h3 className={styles.successTitle}>You're In!</h3>
                <p className={styles.successText}>
                    We've received your request. A coach will reach out to you within 24 hours to schedule your trial.
                </p>
                <Button variant="outline" size="sm" onClick={() => setIsSubmitted(false)} style={{ marginTop: '1rem' }}>
                    Send Another
                </Button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            {error && (
                <div style={{ color: '#ff4d4d', display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 77, 77, 0.1)', padding: '0.75rem', borderRadius: '4px' }}>
                    <FiAlertCircle /> {error}
                </div>
            )}

            <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input
                    {...register('full_name', { required: 'Name is required' })}
                    className={styles.input}
                    placeholder="John Doe"
                />
                {errors.full_name && <span className={styles.error}>{errors.full_name.message}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Email</label>
                <input
                    {...register('email', {
                        required: 'Email is required',
                        pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                    })}
                    className={styles.input}
                    placeholder="john@example.com"
                />
                {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Phone</label>
                <input
                    {...register('phone', { required: 'Phone is required' })}
                    className={styles.input}
                    placeholder="+91 98765 43210"
                />
                {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Primary Goal</label>
                <select {...register('goal', { required: 'Please select a goal' })} className={styles.select}>
                    <option value="">Select a goal...</option>
                    <option value="strength">Build Strength</option>
                    <option value="weight_loss">Weight Loss</option>
                    <option value="muscle_gain">Muscle Gain</option>
                    <option value="zumba">Zumba / Dance</option>
                    <option value="yoga">Yoga / Mobility</option>
                    <option value="general">General Health</option>
                </select>
                {errors.goal && <span className={styles.error}>{errors.goal.message}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Preferred Time</label>
                <select {...register('preferred_time')} className={styles.select}>
                    <option value="morning">Morning (5AM - 9AM)</option>
                    <option value="afternoon">Afternoon (12PM - 4PM)</option>
                    <option value="evening">Evening (5PM - 9PM)</option>
                </select>
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Message (Optional)</label>
                <textarea
                    {...register('message')}
                    className={styles.textarea}
                    placeholder="Tell us about your fitness history..."
                />
            </div>

            <Button type="submit" fullWidth size="lg" disabled={isLoading}>
                {isLoading ? 'Sending...' : 'Book Free Trial'}
            </Button>
        </form>
    );
};

export default LeadForm;
