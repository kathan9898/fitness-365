import React from 'react';
import { FiInstagram } from 'react-icons/fi';
import Section from '../components/Section';
import styles from './Coaches.module.css';
import { COACHES } from '../data/coaches';

const Coaches: React.FC = () => {
    return (
        <Section id="coaches" title="Expert Coaches" subtitle="Meet The Team" dark>
            <div className={styles.grid}>
                {COACHES.map((coach, index) => (
                    <div key={index} className={styles.card}>
                        <img src={coach.image} alt={coach.name} className={styles.image} />
                        <div className={styles.info}>
                            <h3 className={styles.name}>{coach.name}</h3>
                            <span className={styles.role}>{coach.role}</span>
                            <p className={styles.bio}>{coach.bio}</p>
                            <div className={styles.socials}>
                                <a href={coach.socials.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                                    <FiInstagram />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Coaches;
