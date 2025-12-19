import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiAward, FiUnlock, FiPhone } from 'react-icons/fi';
import Button from '../components/Button';
import styles from './Hero.module.css';
import { useLeadModal } from '../context/LeadModalContext';
import { BUSINESS_INFO, SOCIAL_LINKS } from '../data/business';

const Hero: React.FC = () => {
    const { openModal } = useLeadModal();

    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <img
                    src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
                    alt="Gym Background"
                    className={styles.bgImage}
                />
                <div className={styles.overlay} />
            </div>

            <div className={styles.content}>
                <motion.span
                    className={styles.subtext}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    Weight Loss • Muscle Gain • Zumba • Yoga
                </motion.span>

                <motion.h1
                    className={styles.headline}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Transform Your Body.
                    <span>Train 365.</span>
                </motion.h1>

                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button variant="primary" size="lg" onClick={openModal}>Book Free Trial</Button>
                    <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" size="lg">
                            <FiPhone style={{ marginRight: '0.5rem' }} /> Call / WhatsApp
                        </Button>
                    </a>
                </motion.div>

                <motion.div
                    className={styles.trustChips}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className={styles.chip}>
                        <FiClock /> {BUSINESS_INFO.openingHours.split('|')[0]}
                    </div>
                    <div className={styles.chip}>
                        <FiAward /> Certified Coaches
                    </div>
                    <div className={styles.chip}>
                        <FiUnlock /> Yearly Plans
                    </div>
                </motion.div>
            </div>

            <div className={styles.scrollIndicator}>
                <div className={styles.mouse}>
                    <div className={styles.wheel} />
                </div>
                <span>Scroll</span>
            </div>
        </section>
    );
};

export default Hero;
