import React from 'react';
import clsx from 'clsx';
import { motion } from 'framer-motion';
import styles from './Section.module.css';

interface SectionProps {
    id?: string;
    className?: string;
    title?: string;
    subtitle?: string;
    dark?: boolean;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
    id,
    className,
    title,
    subtitle,
    dark = false,
    children
}) => {
    return (
        <section
            id={id}
            className={clsx(
                styles.section,
                dark ? styles.dark : styles.default,
                'section-padding',
                className
            )}
        >
            <div className="container">
                {(title || subtitle) && (
                    <div className={styles.header}>
                        {subtitle && (
                            <motion.span
                                className={styles.subtitle}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                            >
                                {subtitle}
                            </motion.span>
                        )}
                        {title && (
                            <motion.h2
                                className={styles.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                            >
                                {title}
                            </motion.h2>
                        )}
                    </div>
                )}
                {children}
            </div>
        </section>
    );
};

export default Section;
