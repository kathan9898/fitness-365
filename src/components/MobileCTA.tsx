import React from 'react';
import Button from './Button';
import styles from './MobileCTA.module.css';
import { useLeadModal } from '../context/LeadModalContext';

const MobileCTA: React.FC = () => {
    const { openModal } = useLeadModal();

    return (
        <div className={styles.container}>
            <Button variant="primary" fullWidth size="lg" onClick={openModal}>
                Book Free Trial
            </Button>
        </div>
    );
};

export default MobileCTA;
