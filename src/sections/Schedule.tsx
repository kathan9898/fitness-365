import React, { useState } from 'react';
import clsx from 'clsx';
import Section from '../components/Section';
import Button from '../components/Button';
import styles from './Schedule.module.css';
import { useLeadModal } from '../context/LeadModalContext';

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const scheduleData: Record<string, Array<{ time: string; name: string; trainer: string; type: string }>> = {
    Monday: [
        { time: '06:00 AM', name: 'Morning Grind', trainer: 'Sarah J.', type: 'HIIT' },
        { time: '09:00 AM', name: 'Power Yoga', trainer: 'Mike T.', type: 'Mobility' },
        { time: '05:30 PM', name: 'Strength 101', trainer: 'David R.', type: 'Strength' },
        { time: '07:00 PM', name: 'CrossFit Lite', trainer: 'Sarah J.', type: 'Conditioning' },
    ],
    Tuesday: [
        { time: '06:00 AM', name: 'Cardio Blast', trainer: 'Mike T.', type: 'HIIT' },
        { time: '05:30 PM', name: 'Heavy Lifting', trainer: 'David R.', type: 'Strength' },
        { time: '07:00 PM', name: 'Mobility Flow', trainer: 'Sarah J.', type: 'Mobility' },
    ],
    Wednesday: [
        { time: '06:00 AM', name: 'Morning Grind', trainer: 'Sarah J.', type: 'HIIT' },
        { time: '12:00 PM', name: 'Lunch Crunch', trainer: 'David R.', type: 'Conditioning' },
        { time: '06:00 PM', name: 'Power Hour', trainer: 'Mike T.', type: 'Strength' },
    ],
    Thursday: [
        { time: '06:00 AM', name: 'Cardio Blast', trainer: 'Mike T.', type: 'HIIT' },
        { time: '05:30 PM', name: 'Heavy Lifting', trainer: 'David R.', type: 'Strength' },
    ],
    Friday: [
        { time: '06:00 AM', name: 'Morning Grind', trainer: 'Sarah J.', type: 'HIIT' },
        { time: '05:00 PM', name: 'Friday Night Lights', trainer: 'All Coaches', type: 'Competition' },
    ],
    Saturday: [
        { time: '09:00 AM', name: 'Team WOD', trainer: 'David R.', type: 'Conditioning' },
        { time: '10:30 AM', name: 'Open Gym', trainer: 'Staff', type: 'Open' },
    ],
    Sunday: [
        { time: '10:00 AM', name: 'Yoga & Recovery', trainer: 'Mike T.', type: 'Mobility' },
    ],
};

const Schedule: React.FC = () => {
    const [activeDay, setActiveDay] = useState('Monday');
    const { openModal } = useLeadModal();

    return (
        <Section id="classes" title="Class Schedule" subtitle="Find Your Rhythm" dark>
            <div className={styles.tabs}>
                {days.map((day) => (
                    <button
                        key={day}
                        className={clsx(styles.tab, activeDay === day && styles.activeTab)}
                        onClick={() => setActiveDay(day)}
                    >
                        {day}
                    </button>
                ))}
            </div>

            <div className={styles.scheduleList}>
                {scheduleData[activeDay]?.map((item, index) => (
                    <div key={index} className={styles.classItem}>
                        <span className={styles.time}>{item.time}</span>
                        <div className={styles.info}>
                            <h4 className={styles.className}>{item.name}</h4>
                            <span className={styles.trainer}>{item.trainer}</span>
                        </div>
                        <span className={styles.type}>{item.type}</span>
                        <Button variant="outline" size="sm" onClick={openModal}>Book</Button>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Schedule;
