import React, { useState } from 'react';
import { FiZoomIn } from 'react-icons/fi';
import Section from '../components/Section';
import Modal from '../components/Modal';
import styles from './Gallery.module.css';
import { GALLERY_IMAGES } from '../data/gallery';

const Gallery: React.FC = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <Section id="gallery" title="The Facility" subtitle="Where Work Gets Done" dark>
            <div className={styles.grid}>
                {GALLERY_IMAGES.map((src, index) => (
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
