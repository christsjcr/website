export interface Society {
    title: string;
    category: "sports" | "subject" | "other";
    icon?: string;
    description?: string;
    contacts?: { name: string, email: string }[],
    instagram?: string,
    facebook?: string,
}

export const societies: Society[] = [
    {
        title: 'Access Society (Christ\'s Reps)', category: 'other',
        contacts: [
            { name: "Romany Whittall", email: "raw82@cam.ac.uk" }
        ]
    },
    {
        title: 'Art Society', category: 'subject', icon: "🎨"
    },
    {
        title: 'Board Games Society', category: 'other', icon: "♟",
        contacts: [
            { name: "Tarun Chapman", email: "tsc41@cam.ac.uk" }
        ]
    },
    {
        title: 'Bookworms', category: 'other', icon: "📚",
        contacts: [
            { name: "Iona Phillips", email: "icp25@cam.ac.uk" },
            { name: "Will De Vivo", email: "wd281@cam.ac.uk" }
        ]
    },
    {
        title: 'Card Game Society', category: 'other', icon: "🃏",
        contacts: [
            { name: "Ardon Pillay", email: "amp214@cam.ac.uk" }
        ]
    },
    {
        title: 'Christ\'s Amateur Dramatic Society (CADS)',
        category: 'other', icon: "🎭",
        contacts: [
            { name: "Millie Yule", email: "ay335@cam.ac.uk" }
        ]
    },
    {
        title: 'Christian Union (joint with Sidney Sussex)',
        category: 'other', icon: "✝",
        contacts: [
            { name: "James Tett", email: "jt738@cam.ac.uk" }
        ]
    },
    {
        title: 'Darwin Society [Christ\'s science society]',
        category: 'subject', icon: "🧪",
        contacts: [
            { name: "James Tett", email: "jt738@cam.ac.uk" }
        ],
        instagram: "christsdarwinsoc",
        facebook: "DarwinSociety"
    },
    {
        title: 'Engineering Society (CCES)', category: 'subject', icon: "🛠",
        contacts: [
            { name: "Aditya Jain", email: "aj563@cam.ac.uk" }
        ],
    },
    {
        title: 'Feminist Society [currently inactive]', category: 'other', icon: "♀️",
        contacts: [
            { name: "JoJo Compton", email: "jfelc2@cam.ac.uk" }
        ],
    },
    {
        title: 'History Society', category: 'subject', icon: "📜",
        contacts: [
            { name: "Millie Yule", email: "ay335@cam.ac.uk" }
        ],
    },
    {
        title: 'Law Society', category: 'subject', icon: "⚖",
        contacts: [
            { name: "Aravynd Atwal", email: "aa2154@cam.ac.uk" }
        ],
    },
    {
        title: 'Maths Society', category: 'subject', icon: "📊"
    },
    {
        title: 'Medical Society', category: 'subject', icon: "🩺",
        contacts: [
            { name: "Mikesh Patel", email: "mkp41@cam.ac.uk" }
        ],
    },
    {
        title: 'Music Society (CCMS)', category: 'subject', icon: "🎶",
        contacts: [
            { name: "Felix Asare", email: "fkaa2@cam.ac.uk" }
        ],
        instagram: "ccmsofficial"
    },
    {
        title: 'Nollywood Society', category: 'other', icon: "🎥",
        contacts: [
            { name: "Joel Gayford", email: "jhg41@cam.ac.uk" }
        ],
    },
    {
        title: 'Organic Synthesis Society', category: 'subject', icon: "🧫",
        contacts: [
            { name: "James Proudfoot", email: "jp809@cam.ac.uk" }
        ],
    },
    {
        title: 'Poetry Society', category: 'subject', icon: "🧾",
        contacts: [
            { name: "Grace Beckett", email: "gsab2@cam.ac.uk" }
        ],
    },
    {
        title: 'Wine Society', category: 'other', icon: "🍷",
        contacts: [
            { name: "Hollie Wright", email: "heaw2@cam.ac.uk" }
        ],
    },
    {
        title: 'Badminton Club', category: 'sports', icon: "🏸",
        contacts: [
            { name: "Sahil Sindhi", email: "sjs261@cam.ac.uk" }
        ],
    },
    {
        title: 'Basketball', category: 'sports', icon: "🏀",
        contacts: [
            { name: "Nicholas Montague-Jones", email: "nm704@cam.ac.uk" }
        ],
    },
    {
        title: 'Boat Club', category: 'sports', icon: "⛵",
        contacts: [
            { name: "Katy Hempson", email: "klh76@cam.ac.uk" },
            { name: "Richard Turner", email: "rjt87@cam.ac.uk" }
        ],
    },
    {
        title: 'Climbing Club', category: 'sports', icon: "🧗‍♀️",
        contacts: [
            { name: "Petros Georgiou", email: "pg502@cam.ac.uk" }
        ],
    },
    {
        title: 'Cricket', category: 'sports', icon: "🏏",
        contacts: [
            { name: "Satyam Verma", email: "sgv21@cam.ac.uk" }
        ],
    },
    {
        title: 'Darts Corporation', category: 'sports', icon: "🎯"
    },
    {
        title: 'Hippolytans', category: 'sports', icon: "🏃‍♀️",
        contacts: [
            { name: "Rosa Marks", email: "rm921@cam.ac.uk" }
        ],
    },
    {
        title: 'Hot Wheelz Society [roller skating and similar sports]',
        category: 'sports',
        icon: "⛸",
    },
    {
        title: 'Lawn Tennis', category: 'sports', icon: "🎾",
        contacts: [
            { name: "Oliver Norbury", email: "ojrn2@cam.ac.uk" }
        ],
    },
    {
        title: 'Marguerites', category: 'sports', icon: "🏃‍♂️",
        contacts: [
            { name: "Felix Asare", email: "fkaa2@cam.ac.uk" }
        ],
    },
    {
        title: 'Men\'s Football', category: 'sports', icon: "⚽",
        contacts: [
            { name: "Cameron Bicknell", email: "cjb283@cam.ac.uk" }
        ],
    },
    {
        title: 'Men\'s Hockey', category: 'sports', icon: "🏑",
        contacts: [
            { name: "Abhimanyu Gowda", email: "ag2166@cam.ac.uk" }
        ],
    },
    {
        title: 'Men\'s Rugby', category: 'sports', icon: "🏉",
        contacts: [
            { name: "Felix Asare", email: "fkaa2@cam.ac.uk" }
        ],
    },
    {
        title: 'Mixed Lacrosse', category: 'sports', icon: "🥍",
        contacts: [
            { name: "Caitlyn Furley", email: "cf525@cam.ac.uk" },
            { name: "Noah Hatchwell", email: "nh545@cam.ac.uk" }
        ],
    },
    {
        title: 'Mixed Netball', category: 'sports', icon: "🏀",
        contacts: [
            { name: "Rebecca Tyson", email: "rjt83@cam.ac.uk" }
        ],
    },
    {
        title: 'Squash', category: 'sports', icon: "🎾",
        contacts: [
            { name: "Jamie Handitye", email: "jmwh2@cam.ac.uk" }
        ],
    },
    {
        title: 'Swimming', category: 'sports', icon: "🏊‍♂️",
        contacts: [
            { name: "Isabelle Zou", email: "ixz20@cam.ac.uk" }
        ],
    },
    {
        title: 'Table Tennis', category: 'sports', icon: "🏓",
        contacts: [
            { name: "Arjun Tapasvi", email: "adt44@cam.ac.uk" }
        ],
    },
    {
        title: 'Volleyball', category: 'sports', icon: "🏐",
        contacts: [
            { name: "James Ho", email: "jxh21@cam.ac.uk" }
        ],
    },
    {
        title: "Women's Football", category: 'sports', icon: "⚽",
        contacts: [
            { name: "Rachel Adkins", email: "rka33@cam.ac.uk" }
        ],
    }
];
