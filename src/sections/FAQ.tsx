import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import clsx from 'clsx';
import Section from '../components/Section';
import styles from './FAQ.module.css';

const faqs = [
    {
        question: 'Can I try a class before committing?',
        answer: 'Absolutely. We offer a free trial class or a 3-day pass for anyone looking to experience Fitness 365 before joining.'
    },
    {
        question: 'What are your opening hours?',
        answer: 'We are open from 5:00 AM to 11:00 PM on weekdays, and 7:00 AM to 9:00 PM on weekends.'
    },
    {
        question: 'Do you offer personal training?',
        answer: 'Yes, we have a team of certified personal trainers available for 1-on-1 sessions. You can book them separately or as part of our Elite membership.'
    },
    {
        question: 'Is there a cancellation fee?',
        answer: 'We believe in flexibility. Our monthly plans can be cancelled with 30 days notice. No long-term lock-ins unless you choose an annual plan for a discount.'
    },
    {
        question: 'Do you have showers and lockers?',
        answer: 'Yes, our facility includes premium locker rooms with showers, towel service, and secure lockers.'
    },
    {
        question: 'I am a beginner. Is this gym for me?',
        answer: 'Fitness 365 is for everyone. Our coaches are trained to scale workouts for all fitness levels, from complete beginners to competitive athletes.'
    }
];

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section id="faq" title="Common Questions" subtitle="FAQ">
            <div className={styles.container}>
                {faqs.map((faq, index) => (
                    <div key={index} className={clsx(styles.item, openIndex === index && styles.open)}>
                        <button
                            className={styles.trigger}
                            onClick={() => toggle(index)}
                            aria-expanded={openIndex === index}
                        >
                            {faq.question}
                            <FiChevronDown className={styles.icon} />
                        </button>
                        <div
                            className={styles.content}
                            style={{ height: openIndex === index ? 'auto' : 0 }}
                        >
                            <div className={styles.inner}>{faq.answer}</div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default FAQ;
