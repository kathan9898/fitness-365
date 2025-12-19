import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import { FiMenu, FiX } from 'react-icons/fi';
import Button from './Button';
import styles from './Navbar.module.css';
import { useLeadModal } from '../context/LeadModalContext';

const navLinks = [
    { name: 'Programs', href: '#programs' },
    { name: 'Classes', href: '#classes' },
    { name: 'Coaches', href: '#coaches' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Results', href: '#results' },
];

import logo from '../assets/logo.png';

const Navbar: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    const { openModal } = useLeadModal();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobile = () => setIsMobileOpen(!isMobileOpen);

    return (
        <header className={clsx(styles.header, isScrolled && styles.scrolled)}>
            <div className={clsx('container', styles.navContainer)}>
                <a href="#" className={styles.logo}>
                    <img src={logo} alt="Fitness 365" style={{ height: '50px', borderRadius: '50%' }} />
                </a>

                {/* Desktop Nav */}
                <nav className={styles.desktopNav}>
                    <ul className={styles.navLinks}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a href={link.href} className={styles.navLink}>
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <Button
                        variant="ghost"
                        size="sm"
                        style={{ opacity: 0.6, cursor: 'not-allowed', marginRight: '1rem' }}
                        title="Coming Soon"
                    >
                        Member Portal
                    </Button>
                    <Button variant="primary" size="sm" onClick={openModal}>Book Free Trial</Button>
                </nav>

                {/* Mobile Toggle */}
                <button className={styles.mobileToggle} onClick={toggleMobile} aria-label="Toggle menu">
                    {isMobileOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Mobile Menu */}
                <div className={clsx(styles.mobileMenu, isMobileOpen && styles.mobileMenuOpen)}>
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={styles.mobileLink}
                            onClick={() => setIsMobileOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" size="lg" onClick={() => { setIsMobileOpen(false); openModal(); }}>
                        Book Free Trial
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
