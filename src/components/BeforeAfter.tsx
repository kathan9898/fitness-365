import React, { useState } from 'react';
import styles from './BeforeAfter.module.css';

interface BeforeAfterProps {
    before: string;
    after: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ before, after }) => {
    const [sliderPosition, setSliderPosition] = useState(50);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSliderPosition(Number(e.target.value));
    };

    return (
        <div className={styles.container}>
            <img src={after} alt="After" className={styles.image} />
            <img
                src={before}
                alt="Before"
                className={styles.image}
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            />
            <div className={styles.handle} style={{ left: `${sliderPosition}%` }} />
            <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleChange}
                className={styles.slider}
                aria-label="Comparison slider"
            />
            <span className={clsx(styles.label, styles.labelBefore)}>Before</span>
            <span className={clsx(styles.label, styles.labelAfter)}>After</span>
        </div>
    );
};

import clsx from 'clsx';
export default BeforeAfter;
