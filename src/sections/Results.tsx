import React from 'react';
import { FiStar } from 'react-icons/fi';
import Section from '../components/Section';
import BeforeAfter from '../components/BeforeAfter';
import styles from './Results.module.css';
import { TESTIMONIALS, STATS } from '../data/testimonials';

const Results: React.FC = () => {
    return (
        <Section id="results" title="Real Results" subtitle="Success Stories">
            <div className={styles.grid}>
                <div className={styles.testimonials}>
                    {TESTIMONIALS.map((testimonial, index) => (
                        <div key={index} className={styles.testimonialCard}>
                            <p className={styles.quote}>"{testimonial.quote}"</p>
                            <div className={styles.author}>
                                <div className={styles.avatar}>{testimonial.initials}</div>
                                <div className={styles.authorInfo}>
                                    <h4>{testimonial.author}</h4>
                                    <div className={styles.stars}>
                                        <FiStar fill="currentColor" />
                                        <FiStar fill="currentColor" />
                                        <FiStar fill="currentColor" />
                                        <FiStar fill="currentColor" />
                                        <FiStar fill="currentColor" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className={styles.stats}>
                        {STATS.map((stat, index) => (
                            <div key={index}>
                                <span className={styles.statNumber}>{stat.value}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <BeforeAfter
                        before="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
                        after="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop"
                    />
                    <p style={{ textAlign: 'center', marginTop: '1rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
                        Drag slider to see the transformation
                    </p>
                </div>
            </div>
        </Section>
    );
};

export default Results;
