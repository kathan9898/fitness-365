import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Section from '../components/Section';
import Modal from '../components/Modal';
import Button from '../components/Button';
import styles from './Programs.module.css';
import { PROGRAMS } from '../data/programs';
import { useLeadModal } from '../context/LeadModalContext';

const Programs: React.FC = () => {
    const [selectedProgram, setSelectedProgram] = useState<typeof PROGRAMS[0] | null>(null);
    const { openModal } = useLeadModal();

    const handleInterested = () => {
        setSelectedProgram(null);
        openModal();
    };

    return (
        <Section id="programs" title="Our Programs" subtitle="Train With Purpose">
            <div className={styles.grid}>
                {PROGRAMS.map((program) => (
                    <div
                        key={program.id}
                        className={styles.programCard}
                        onClick={() => setSelectedProgram(program)}
                    >
                        <div className={styles.imageWrapper}>
                            <img src={program.image} alt={program.title} className={styles.image} />
                        </div>
                        <div className={styles.overlay}>
                            <span className={styles.tag}>{program.tag}</span>
                            <h3 className={styles.cardTitle}>{program.title}</h3>
                            <p className={styles.cardDesc}>{program.description}</p>
                            <span className={styles.learnMore}>
                                View Details <FiArrowRight />
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedProgram}
                onClose={() => setSelectedProgram(null)}
                title={selectedProgram?.title}
            >
                {selectedProgram && (
                    <div>
                        <img
                            src={selectedProgram.image}
                            alt={selectedProgram.title}
                            style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px', marginBottom: '1.5rem' }}
                        />
                        <p style={{ color: 'var(--color-text)', marginBottom: '1.5rem', lineHeight: '1.7' }}>
                            {selectedProgram.details}
                        </p>
                        <Button fullWidth onClick={handleInterested}>
                            Interested? Book a Trial
                        </Button>
                    </div>
                )}
            </Modal>
        </Section>
    );
};

export default Programs;
