import React from 'react';
import { FiCheck } from 'react-icons/fi';
import clsx from 'clsx';
import Section from '../components/Section';
import Button from '../components/Button';
import styles from './Pricing.module.css';
import { useLeadModal } from '../context/LeadModalContext';
import { PRICING_PLANS } from '../data/pricing';

const Pricing: React.FC = () => {
    const { openModal } = useLeadModal();

    return (
        <Section id="pricing" title="Membership Plans" subtitle="Invest In Yourself">
            <div className={styles.grid}>
                {PRICING_PLANS.map((plan) => (
                    <div key={plan.id} className={clsx(styles.card, plan.popular && styles.popular)}>
                        {plan.popular && <span className={styles.popularLabel}>Most Popular</span>}
                        <h3 className={styles.planName}>{plan.name}</h3>
                        <div className={styles.price}>
                            {plan.price}
                            <span className={styles.period}>{plan.period}</span>
                        </div>
                        <p className={styles.target}>{plan.target}</p>
                        <p className={styles.description}>{plan.description}</p>
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
                        <p className={styles.note}>No hidden fees. Yearly commitment.</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Pricing;
