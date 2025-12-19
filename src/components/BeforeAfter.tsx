import React, { useState, useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './BeforeAfter.module.css';

interface BeforeAfterProps {
    before: string;
    after: string;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({ before, after }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const directionRef = useRef<1 | -1>(1);

    // Better approach for the specific "wait 1.5s" requirement

    // Better approach for the specific "wait 1.5s" requirement
    useEffect(() => {
        if (!isAutoPlaying) return;

        let animationFrameId: number;
        let lastTime = performance.now();
        let waitTime = 0;

        const loop = (time: number) => {
            const delta = time - lastTime;
            lastTime = time;

            if (waitTime > 0) {
                waitTime -= delta;
                animationFrameId = requestAnimationFrame(loop);
                return;
            }

            setSliderPosition((prev) => {
                let next = prev + (directionRef.current * 0.5); // Speed factor

                if (next >= 100) {
                    next = 100;
                    directionRef.current = -1;
                    waitTime = 1500; // Wait 1.5s
                } else if (next <= 0) {
                    next = 0;
                    directionRef.current = 1;
                    waitTime = 1500; // Wait 1.5s
                }

                return next;
            });

            animationFrameId = requestAnimationFrame(loop);
        };

        animationFrameId = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(animationFrameId);
    }, [isAutoPlaying]);

    const handleManualChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsAutoPlaying(false); // Stop auto-play on interaction
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
                onChange={handleManualChange}
                className={styles.slider}
                aria-label="Comparison slider"
            />
            <span className={clsx(styles.label, styles.labelBefore)}>Before</span>
            <span className={clsx(styles.label, styles.labelAfter)}>After</span>
        </div>
    );
};

export default BeforeAfter;
