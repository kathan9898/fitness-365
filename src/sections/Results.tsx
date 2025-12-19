import React from 'react';
import { FiStar } from 'react-icons/fi';
import Section from '../components/Section';
import BeforeAfter from '../components/BeforeAfter';
import styles from './Results.module.css';

const Results: React.FC = () => {
    return (
        <Section id="results" title="Real Results" subtitle="Success Stories">
            <div className={styles.grid}>
                <div className={styles.testimonials}>
                    <div className={styles.testimonialCard}>
                        <p className={styles.quote}>
                            "I've joined five gyms in the last ten years, but this is the only one I've stuck with. The community is unmatched."
                        </p>
                        <div className={styles.author}>
                            <div className={styles.avatar}>AM</div>
                            <div className={styles.authorInfo}>
                                <h4>Alex M.</h4>
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

                    <div className={styles.testimonialCard}>
                        <p className={styles.quote}>
                            "The coaching here is next level. They corrected my form on day one and I've been injury-free ever since."
                        </p>
                        <div className={styles.author}>
                            <div className={styles.avatar}>JT</div>
                            <div className={styles.authorInfo}>
                                <h4>James T.</h4>
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

                    <div className={styles.stats}>
                        <div>
                            <span className={styles.statNumber}>500+</span>
                            <span className={styles.statLabel}>Members</span>
                        </div>
                        <div>
                            <span className={styles.statNumber}>50+</span>
                            <span className={styles.statLabel}>Classes/Wk</span>
                        </div>
                        <div>
                            <span className={styles.statNumber}>4.9</span>
                            <span className={styles.statLabel}>Rating</span>
                        </div>
                    </div>
                </div>

                <div>
                    <BeforeAfter
                        before="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=1470&auto=format&fit=crop"
                        after="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop"
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
