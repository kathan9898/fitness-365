import React, { useState } from 'react';
import { FiZoomIn } from 'react-icons/fi';
import Section from '../components/Section';
import Modal from '../components/Modal';
import styles from './Gallery.module.css';

const images = [
    'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1375&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=1374&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517963879466-e1b54ebd5914?q=80&w=1470&auto=format&fit=crop',
];

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <Section id="gallery" title="The Facility" subtitle="Where Work Gets Done" dark>
            <div className={styles.grid}>
                {images.map((src, index) => (
                    <div key={index} className={styles.item} onClick={() => setSelectedImage(src)}>
                        <img src={src} alt={`Facility ${index + 1}`} className={styles.image} />
                        <div className={styles.overlay}>
                            <FiZoomIn className={styles.icon} />
                        </div>
                    </div>
                ))}
            </div>

            <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
                {selectedImage && (
                    <img
                        src={selectedImage}
                        alt="Facility Full"
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                )}
            </Modal>
        </Section>
    );
};

export default Gallery;
