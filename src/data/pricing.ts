export const PRICING_PLANS = [
    {
        id: 'solo',
        name: 'SOLO',
        price: '₹6,999',
        period: '/year',
        description: 'Perfect for individuals committed to a year of transformation.',
        features: [
            'Full Gym Access',
            'Strength Training Area',
            'Zumba Classes Included',
            'Yoga & Tabata Sessions',
            'Personal Training Available',
            'Locker & Changing Room'
        ],
        popular: false,
        target: 'For Individuals'
    },
    {
        id: 'couple',
        name: 'COUPLE',
        price: '₹12,999',
        period: '/year',
        description: 'Train together and save. Ideal for partners or gym buddies.',
        features: [
            'Membership for 2 People',
            'Full Gym Access',
            'Strength Training Area',
            'Zumba Classes Included',
            'Yoga & Tabata Sessions',
            'Personal Training Available',
            'Locker & Changing Room'
        ],
        popular: true,
        target: 'For 2 People'
    },
    {
        id: 'group',
        name: 'GROUP',
        price: '₹19,999',
        period: '/year',
        description: 'Best value for friends or corporate groups. Get fit together.',
        features: [
            'Membership for up to 4 People',
            'Best Value Per Person',
            'Full Gym Access',
            'Strength Training Area',
            'Zumba Classes Included',
            'Yoga & Tabata Sessions',
            'Personal Training Available'
        ],
        popular: false,
        target: 'For Groups (3-4)'
    }
];
