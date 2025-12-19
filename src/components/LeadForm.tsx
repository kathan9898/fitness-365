import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiCheckCircle } from 'react-icons/fi';
import Button from './Button';
import styles from './LeadForm.module.css';

interface LeadFormData {
    fullName: string;
    email: string;
    phone: string;
    goal: string;
    preferredTime: string;
    message: string;
}

const LeadForm: React.FC<{ onSuccess?: () => void }> = ({ onSuccess }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<LeadFormData>();
    const [isSubmitted, setIsSubmitted] = useState(false);

    const onSubmit = (data: LeadFormData) => {
        console.log(data);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            if (onSuccess) onSuccess();
        }, 1000);
    };

    if (isSubmitted) {
        return (
            <div className={styles.successMessage}>
                <FiCheckCircle className={styles.successIcon} />
                <h3 className={styles.successTitle}>You're In!</h3>
                <p className={styles.successText}>
                    We've received your request. A coach will reach out to you within 24 hours to schedule your trial.
                </p>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formGroup}>
                <label className={styles.label}>Full Name</label>
                <input
                    {...register('fullName', { required: 'Name is required' })}
                    className={styles.input}
                    placeholder="John Doe"
                />
                {errors.fullName && <span className={styles.error}>{errors.fullName.message}</span>}
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
                    placeholder="(555) 123-4567"
                />
                {errors.phone && <span className={styles.error}>{errors.phone.message}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Primary Goal</label>
                <select {...register('goal', { required: 'Please select a goal' })} className={styles.select}>
                    <option value="">Select a goal...</option>
                    <option value="strength">Build Strength</option>
                    <option value="weight_loss">Weight Loss</option>
                    <option value="endurance">Endurance/Cardio</option>
                    <option value="general">General Health</option>
                </select>
                {errors.goal && <span className={styles.error}>{errors.goal.message}</span>}
            </div>

            <div className={styles.formGroup}>
                <label className={styles.label}>Preferred Time</label>
                <select {...register('preferredTime')} className={styles.select}>
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

            <Button type="submit" fullWidth size="lg">
                Book Free Trial
            </Button>
        </form>
    );
};

export default LeadForm;
