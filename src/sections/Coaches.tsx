import React from 'react';
import { FiInstagram, FiTwitter, FiLinkedin } from 'react-icons/fi';
import Section from '../components/Section';
import styles from './Coaches.module.css';

const coaches = [
    {
        name: 'Sarah Jenkins',
        role: 'Head Coach / HIIT',
        image: 'https://images.unsplash.com/photo-1611672585731-fa1060a80910?q=80&w=1374&auto=format&fit=crop',
        bio: 'Former Olympian with 10+ years of experience in high-intensity training and nutrition.'
    },
    {
        name: 'David Ross',
        role: 'Strength & Conditioning',
        image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1374&auto=format&fit=crop',
        bio: 'Specializes in powerlifting and functional strength. Helping you lift heavier and safer.'
    },
    {
        name: 'Mike Thompson',
        role: 'Mobility & Recovery',
        image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop',
        bio: 'Certified physiotherapist focused on injury prevention and movement quality.'
    }
];

const Coaches: React.FC = () => {
    return (
        <Section id="coaches" title="Expert Coaches" subtitle="Meet The Team" dark>
            <div className={styles.grid}>
                {coaches.map((coach, index) => (
                    <div key={index} className={styles.card}>
                        <img src={coach.image} alt={coach.name} className={styles.image} />
                        <div className={styles.info}>
                            <h3 className={styles.name}>{coach.name}</h3>
                            <span className={styles.role}>{coach.role}</span>
                            <p className={styles.bio}>{coach.bio}</p>
                            <div className={styles.socials}>
                                <a href="#" className={styles.socialLink}><FiInstagram /></a>
                                <a href="#" className={styles.socialLink}><FiTwitter /></a>
                                <a href="#" className={styles.socialLink}><FiLinkedin /></a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Coaches;
