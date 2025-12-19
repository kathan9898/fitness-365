import React, { useState } from 'react';
import { FiArrowRight } from 'react-icons/fi';
import Section from '../components/Section';
import Modal from '../components/Modal';
import Button from '../components/Button';
import styles from './Programs.module.css';

const programs = [
    {
        id: 1,
        title: 'Transformation 12',
        tag: '12 Weeks',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop',
        description: 'A complete body recomposition program designed to shed fat and build lean muscle.',
        details: 'Our signature 12-week program includes 3x weekly small group training, personalized nutrition planning, and weekly check-ins. Perfect for those looking for a serious lifestyle change.'
    },
    {
        id: 2,
        title: 'Strength 365',
        tag: 'Ongoing',
        image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop',
        description: 'Focus on the big three lifts and functional strength in a supportive team environment.',
        details: 'Join the strongest community in town. We focus on Squat, Bench, and Deadlift progression with accessory work to keep you balanced and injury-free.'
    },
    {
        id: 3,
        title: 'Athlete Conditioning',
        tag: 'High Intensity',
        image: 'https://images.unsplash.com/photo-1517963879466-e1b54ebd5914?q=80&w=1470&auto=format&fit=crop',
        description: 'Sports-specific conditioning to improve speed, agility, and explosive power.',
        details: 'Whether you are an off-season athlete or just want to train like one, this program pushes your aerobic and anaerobic systems to the limit.'
    }
];

const Programs: React.FC = () => {
    const [selectedProgram, setSelectedProgram] = useState<typeof programs[0] | null>(null);

    return (
        <Section id="programs" title="Signature Programs" subtitle="Train With Purpose">
            <div className={styles.grid}>
                {programs.map((program) => (
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
                        <Button fullWidth onClick={() => setSelectedProgram(null)}>
                            Interested? Contact Us
                        </Button>
                    </div>
                )}
            </Modal>
        </Section>
    );
};

export default Programs;
