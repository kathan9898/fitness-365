import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { FiX } from 'react-icons/fi';
import clsx from 'clsx';
import styles from './Modal.module.css';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleEsc);
            document.body.style.overflow = 'hidden';
        }
        return () => {
            document.removeEventListener('keydown', handleEsc);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return createPortal(
        <div className={clsx(styles.overlay, isOpen && styles.open)} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
                    <FiX />
                </button>
                {title && (
                    <div className={styles.header}>
                        <h3 className={styles.title}>{title}</h3>
                    </div>
                )}
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
