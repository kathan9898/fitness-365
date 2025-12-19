import React from 'react';
import { FiInstagram, FiPhone, FiMapPin, FiMail } from 'react-icons/fi';
import Button from './Button';
import styles from './Footer.module.css';
import { BUSINESS_INFO, SOCIAL_LINKS } from '../data/business';

import { sendLeadEmail } from '../utils/emailjs';

const Footer: React.FC = () => {
    const [email, setEmail] = React.useState('');
    const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleNewsletterSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !email.includes('@')) return;

        setStatus('loading');

        // Extract name from email (e.g. john.doe@example.com -> john.doe)
        const nameFromEmail = email.split('@')[0];

        try {
            await sendLeadEmail({
                full_name: nameFromEmail,
                email: email,
                phone: '1111111111', // Default dummy number
                goal: 'Newsletter Signup',
                preferred_time: 'Anytime',
                message: 'User subscribed to newsletter via footer.'
            });
            setStatus('success');
            setEmail('');
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brand}>
                        <h2><span>F</span>365</h2>
                        <p>
                            Premium strength and conditioning facility dedicated to your progress.
                            Join the community that pushes you further.
                        </p>
                        <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <a href={BUSINESS_INFO.mapsLink} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-white)' }}>
                                <FiMapPin /> {BUSINESS_INFO.address}
                            </a>
                            <a href={`tel:${BUSINESS_INFO.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-white)' }}>
                                <FiPhone /> {BUSINESS_INFO.phoneDisplay}
                            </a>
                            <a href={`mailto:${BUSINESS_INFO.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--color-white)' }}>
                                <FiMail /> {BUSINESS_INFO.email}
                            </a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3>Sitemap</h3>
                        <div className={styles.links}>
                            <a href="#programs">Programs</a>
                            <a href="#classes">Schedule</a>
                            <a href="#coaches">Coaches</a>
                            <a href="#pricing">Pricing</a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3>Connect</h3>
                        <div className={styles.links}>
                            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FiInstagram /> Instagram
                            </a>
                            <a href={SOCIAL_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <FiPhone /> WhatsApp
                            </a>
                        </div>
                    </div>

                    <div className={styles.column}>
                        <h3>Newsletter</h3>
                        <p>Get training tips and exclusive offers.</p>
                        {status === 'success' ? (
                            <p style={{ color: 'var(--color-primary)', marginTop: '1rem' }}>Thanks for joining!</p>
                        ) : (
                            <form className={styles.newsletterForm} onSubmit={handleNewsletterSubmit}>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className={styles.input}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <Button variant="primary" size="sm" disabled={status === 'loading'}>
                                    {status === 'loading' ? '...' : 'Join'}
                                </Button>
                            </form>
                        )}
                        {status === 'error' && <p style={{ color: '#ff4d4d', fontSize: '0.8rem', marginTop: '0.5rem' }}>Something went wrong.</p>}
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} {BUSINESS_INFO.name}. All rights reserved.</p>
                    <div className={styles.links} style={{ flexDirection: 'row', gap: '2rem' }}>
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
