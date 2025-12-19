import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiAward, FiUnlock } from 'react-icons/fi';
import Button from '../components/Button';
import styles from './Hero.module.css';
import { useLeadModal } from '../context/LeadModalContext';

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
                    Strength • Conditioning • Transformation
                </motion.span>

                <motion.h1
                    className={styles.headline}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Commit to Strength.
                    <span>Progress 365.</span>
                </motion.h1>

                <motion.div
                    className={styles.actions}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Button variant="primary" size="lg" onClick={openModal}>Book Free Trial</Button>
                    <Button variant="outline" size="lg" onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}>
                        View Plans
                    </Button>
                </motion.div>

                <motion.div
                    className={styles.trustChips}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <div className={styles.chip}>
                        <FiClock /> Open 5AM–11PM
                    </div>
                    <div className={styles.chip}>
                        <FiAward /> Certified Coaches
                    </div>
                    <div className={styles.chip}>
                        <FiUnlock /> No Lock-in Options
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
