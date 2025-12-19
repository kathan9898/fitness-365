// To use your local images:
// 1. Place your images in src/assets/images/coaches/
// 2. Uncomment the imports below
// 3. Replace the 'image' property with the imported variable

import coachA from '../assets/images/coaches/coach-a.png';
import coachB from '../assets/images/coaches/coach-b.jpeg';
import coachC from '../assets/images/coaches/coach-c.jpeg';

export const COACHES = [
    {
        name: 'Expert Trainer',
        role: 'Head Coach',
        // Replace with: image: coachA,
        image: coachA,
        // image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1374&auto=format&fit=crop',
        bio: 'Specialist in strength conditioning and body transformation.',
        socials: {
            instagram: 'https://www.instagram.com/the.beard.boss/'
        }
    },
    {
        name: 'Zumba Instructor',
        role: 'Group Class Lead',
        // Replace with: image: coachB,
        image: coachB,
        // image: 'https://images.unsplash.com/photo-1611672585731-fa1060a80910?q=80&w=1374&auto=format&fit=crop',
        bio: 'Bringing energy and rhythm to every session.',
        socials: {
            instagram: 'https://www.instagram.com/fitness_arjun_82/'
        }
    },
    {
        name: 'Yoga Guide',
        role: 'Mobility Specialist',
        // Replace with: image: coachC,
        image: coachC,
        // image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1469&auto=format&fit=crop',
        bio: 'Helping you move better and recover faster.',
        socials: {
            instagram: 'https://www.instagram.com/_shaktisinh_rana_/#'
        }
    }
];
