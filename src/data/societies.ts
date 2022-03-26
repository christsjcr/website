export interface Society {
    title: string;
    category: "sports" | "subject" | "other";
    icon?: string;
    description?: string;
    email?: string;
}

export const societies: Society[] = [
    { title: 'Access Society (Christ\'s Reps)', category: 'other' },
    { title: 'Art Society', category: 'subject', icon: "🎨" },
    { title: 'Board Games Society', category: 'other', icon: "♟" },
    { title: 'Bookworms', category: 'other', icon: "📚" },
    { title: 'Card Game Society', category: 'other', icon: "🃏" },
    {
        title: 'Christ\'s Amateur Dramatic Society (CADS)',
        category: 'other', icon: "🎭"
    },
    {
        title: 'Christian Union (joint with Sidney Sussex)',
        category: 'other', icon: "✝"
    },
    {
        title: 'Darwin Society [Christ\'s science society]',
        category: 'subject', icon: "🧪"
    },
    { title: 'Engineering Society (CCES)', category: 'subject', icon: "🛠" },
    { title: 'Feminist Society [currently inactive]', category: 'other', icon: "♀️" },
    { title: 'History Society', category: 'subject', icon: "📜" },
    { title: 'Law Society', category: 'subject', icon: "⚖" },
    { title: 'Maths Society', category: 'subject', icon: "📊" },
    { title: 'Medical Society', category: 'subject', icon: "🩺" },
    { title: 'Music Society (CCMS)', category: 'subject', icon: "🎶" },
    { title: 'Nollywood Society', category: 'other', icon: "🎥" },
    { title: 'Organic Synthesis Society', category: 'subject', icon: "🧫" },
    { title: 'Poetry Society', category: 'subject', icon: "🧾" },
    { title: 'Wine Society', category: 'other', icon: "🍷" },
    { title: 'Badminton Club', category: 'sports', icon: "🏸" },
    { title: 'Basketball', category: 'sports', icon: "🏀" },
    { title: 'Boat Club', category: 'sports', icon: "⛵" },
    { title: 'Climbing Club', category: 'sports', icon: "🧗‍♀️" },
    { title: 'Cricket', category: 'sports', icon: "🏏" },
    { title: 'Darts Corporation', category: 'sports', icon: "🎯" },
    { title: 'Hippolytans', category: 'sports', icon: "🏃‍♀️" },
    {
        title: 'Hot Wheelz Society [roller skating and similar sports]',
        category: 'sports',
        icon: "⛸"
    },
    { title: 'Lawn Tennis', category: 'sports', icon: "🎾" },
    { title: 'Marguerites', category: 'sports', icon: "🏃‍♂️" },
    { title: 'Men\'s Football', category: 'sports', icon: "⚽" },
    { title: 'Men\'s Hockey', category: 'sports', icon: "🏑" },
    { title: 'Men\'s Rugby', category: 'sports', icon: "🏉" },
    { title: 'Mixed Lacrosse', category: 'sports', icon: "🥍" },
    { title: 'Mixed Netball', category: 'sports', icon: "🏀" },
    { title: 'Squash', category: 'sports', icon: "🎾" },
    { title: 'Swimming', category: 'sports', icon: "🏊‍♂️" },
    { title: 'Table Tennis', category: 'sports', icon: "🏓" },
    { title: 'Volleyball', category: 'sports', icon: "🏐" },
    { title: "Women's Football", category: 'sports', icon: "⚽" }
];
