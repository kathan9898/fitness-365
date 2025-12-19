import React, { useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './Card.module.css';

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, hoverEffect = false }) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || !hoverEffect) return;

        const rect = divRef.current.getBoundingClientRect();
        setPosition({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            className={clsx(styles.card, hoverEffect && styles.hoverEffect, className)}
            style={hoverEffect ? ({ '--mouse-x': `${position.x}px`, '--mouse-y': `${position.y}px` } as React.CSSProperties) : undefined}
        >
            {children}
        </div>
    );
};

export default Card;
