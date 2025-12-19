import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import clsx from 'clsx';
import Section from '../components/Section';
import styles from './FAQ.module.css';
import { FAQS } from '../data/faq';

const FAQ: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <Section id="faq" title="Common Questions" subtitle="FAQ">
            <div className={styles.container}>
                {FAQS.map((faq, index) => (
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
