import React, { createContext, useContext, useState } from 'react';
import Modal from '../components/Modal';
import LeadForm from '../components/LeadForm';

interface LeadModalContextType {
    openModal: () => void;
    closeModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export const useLeadModal = () => {
    const context = useContext(LeadModalContext);
    if (!context) {
        throw new Error('useLeadModal must be used within a LeadModalProvider');
    }
    return context;
};

export const LeadModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <LeadModalContext.Provider value={{ openModal, closeModal }}>
            {children}
            <Modal isOpen={isOpen} onClose={closeModal} title="Start Your Journey">
                <LeadForm />
            </Modal>
        </LeadModalContext.Provider>
    );
};
