import React from 'react';
import { FiCheck } from 'react-icons/fi';
import clsx from 'clsx';
import Section from '../components/Section';
import Button from '../components/Button';
import styles from './Pricing.module.css';
import { useLeadModal } from '../context/LeadModalContext';

const plans = [
    {
        name: 'Starter',
        price: '$99',
        period: '/month',
        features: ['2 Classes per week', 'Open Gym Access', 'Locker Room Access', 'Free WiFi'],
        popular: false
    },
    {
        name: 'Unlimited',
        price: '$159',
        period: '/month',
        features: ['Unlimited Classes', 'Open Gym Access', 'Nutrition Guide', '1 Guest Pass/month', 'Quarterly Check-ins'],
        popular: true
    },
    {
        name: 'Elite',
        price: '$249',
        period: '/month',
        features: ['Unlimited Classes', '24/7 Open Gym', '1-on-1 Coaching (2x/mo)', 'Personalized Nutrition', 'Priority Booking'],
        popular: false
    }
];

const Pricing: React.FC = () => {
    const { openModal } = useLeadModal();

    return (
        <Section id="pricing" title="Membership Plans" subtitle="Invest In Yourself">
            <div className={styles.grid}>
                {plans.map((plan, index) => (
                    <div key={index} className={clsx(styles.card, plan.popular && styles.popular)}>
                        {plan.popular && <span className={styles.popularLabel}>Most Popular</span>}
                        <h3 className={styles.planName}>{plan.name}</h3>
                        <div className={styles.price}>
                            {plan.price}
                            <span className={styles.period}>{plan.period}</span>
                        </div>
                        <ul className={styles.features}>
                            {plan.features.map((feature, i) => (
                                <li key={i} className={styles.feature}>
                                    <FiCheck /> {feature}
                                </li>
                            ))}
                        </ul>
                        <Button
                            variant={plan.popular ? 'primary' : 'outline'}
                            fullWidth
                            onClick={openModal}
                        >
                            Choose {plan.name}
                        </Button>
                        <p className={styles.note}>No hidden fees. Cancel anytime.</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Pricing;
