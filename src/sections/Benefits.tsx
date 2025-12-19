import React from 'react';
import { FiActivity, FiTarget, FiTrendingUp, FiUserCheck, FiZap, FiRefreshCw } from 'react-icons/fi';
import Section from '../components/Section';
import Card from '../components/Card';
import styles from './Benefits.module.css';

const benefits = [
    {
        icon: <FiTrendingUp />,
        title: 'Strength Training',
        description: 'Build raw power and muscle density with our scientifically programmed strength cycles.'
    },
    {
        icon: <FiTarget />,
        title: 'Fat Loss',
        description: 'High-intensity intervals designed to torch calories and boost your metabolism for hours.'
    },
    {
        icon: <FiZap />,
        title: 'Functional Fitness',
        description: 'Train for life. Improve your movement patterns, stability, and real-world strength.'
    },
    {
        icon: <FiRefreshCw />,
        title: 'Mobility & Recovery',
        description: 'Stay injury-free and move better with dedicated mobility sessions and recovery tools.'
    },
    {
        icon: <FiActivity />,
        title: 'HIIT',
        description: 'Push your limits with heart-pumping cardio sessions that maximize endurance.'
    },
    {
        icon: <FiUserCheck />,
        title: 'Personalized Coaching',
        description: 'Expert guidance tailored to your specific goals, injuries, and lifestyle.'
    }
];

const Benefits: React.FC = () => {
    return (
        <Section
            id="benefits"
            title="Why Fitness 365"
            subtitle="The Advantage"
            dark
        >
            <div className={styles.grid}>
                {benefits.map((benefit, index) => (
                    <Card key={index} hoverEffect className={styles.card}>
                        <div className={styles.iconWrapper}>
                            {benefit.icon}
                        </div>
                        <h3 className={styles.cardTitle}>{benefit.title}</h3>
                        <p className={styles.cardText}>{benefit.description}</p>
                    </Card>
                ))}
            </div>
        </Section>
    );
};

export default Benefits;
