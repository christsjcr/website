export interface Society {
    title: string;
    icon?: string;
    description?: string;
    events?: string;
    interested?: string;
    people?: { name: string, crsid?: string }[],
    contact?: {
        /** username */
        instagram?: string,
        /** username */
        facebook?: string,
        /** group id */
        facebookGroup?: string,
        /** full url */
        messenger?: string,
        /** full url */
        whatsapp?: string,
        /** full url */
        register?: string,
        /** full email */
        email?: string,
        /** full url */
        website?: {
            name: string,
            url: string
        },
    },
    status: "funded" | "independent" | "inactive";
    type: "mens sport" | "womens sport" | "mixed sport" | "subject" | "other",
    notEndorsed?: true,
}

export const societies: Society[] = [
    {
        title: "Access Society (Christ's Reps)",
        description: "Christ's Representatives (CReps) encourage prospective students from all backgrounds to apply to Christ's. They do this by being there at events and open days, and sometimes give presentations and Q&A sessions about student life.",
        people: [
            { name: "Romany Whittall", crsid: "raw82" },
        ],
        status: "independent",
        type: "other",
    },
    {
        title: "Art Society", icon: "🎨",
        description: "Christ's Art Society is Christ's premier society catering for all forms of art. We provide free equipment and a chill environment, so that anyone - regardless of artistic skill or confidence - can express themselves creatively and take a break from the work.", events: "Weekly workshops, with zero commitment and no events with fees.", contact: { facebook: "ChristsArtSociety", email: "christsartsociety@gmail.com" }, people: [
            { name: "Vincent Forester", crsid: "vf273" },
        ],

        type: "other",
        status: "funded",
    },
    {
        title: "Board Games Society",
        icon: "♟",
        type: "other",
        status: "funded",
        people: [
            { name: "Ariel Hebditch", crsid: "ah2203" },
        ],
    },
    {
        title: "Bookworms", icon: "📚",
        status: "inactive",
        type: "other",
    },
    {
        title: "Card Game Society", icon: "🃏",
        description: "Christ's Card Game Society offers an opportunity for people of all levels and experiences to play card games, including poker, and to meet new people in a friendly environment.",
        people: [
            { name: "Ardon Pillay", crsid: "amp214" },
        ],

        status: "funded",
        type: "other",
    },
    {
        title: "Christ's Amateur Dramatic Society (CADS)",
        icon: "🎭",
        description: "CADS is Christ's friendly theatrical hub, funding comedy and drama around Cambridge and organising shows within College, most notably the Freshers’ Shows, Pantomimes, and May Week Shakespeare.",
        events: "The CADS committee meets regularly, and is always looking for new committee members. ",
        interested: "Any student interested in drama and eager to bring more theatre to Christ's can email using the address below.",
        people: [
            { name: "Daniel Pereira", crsid: "dlo30" },
        ],
        status: "independent",
        type: "other",
        contact: {
            facebook: "ChristsADS",
            instagram: "christsamdramsoc",
            email: "christsamdram@cambridgesu.co.uk",
        },
    },
    {
        title: "Christian Union (joint with Sidney Sussex)",
        icon: "✝",
        description: "The Sidney-Christ's Christian Union is an outward-looking, open community of Christians who aim to reflect the love of Jesus within our college. Anyone and everyone is welcome as we explore what it means to be followers of Jesus.",
        events: "Meetings have been on Saturdays 17:00-18:00 recently (i.e. in Lent 2022), but check the Instagram page / mailing list for any updates.",
        people: [
            { name: "James Tett", crsid: "jt738" },
        ],
        contact: {
            instagram: "sidchristscu",
            register: "https://forms.gle/BYZBKsyZQTY6X4Y78",
        },
        status: "funded",
        type: "other",
    },
    {
        title: "Darwin Society",
        icon: "🧪",
        description: "The Darwin Society is Christ's science society, which seeks to provide a space for people interested in science to connect and explore their interests together. It organises talks, socials, and formals, culminating in the annual black-tie Darwin Dinner!",
        people: [
            { name: "James Tett", crsid: "jt738" },
        ],
        type: "subject",
        status: "funded",
        contact: {
            instagram: "christsdarwinsoc",
            facebook: "DarwinSociety",
            register: "https://forms.gle/s37yQVsdtGawm92X9",
            website: {
                name: "darwinsociety.soc.srcf.net",
                url: "http://darwinsociety.soc.srcf.net/",
            },
        },
    },
    {
        title: "Engineering Society (CCES)", icon: "🛠",
        description: "CCES aims to provide opportunities for students studying any degree to explore the rich field of engineering outside the lecture halls. It organises the CCES Lecture Series, Project Talks, and Engineering Socials. Previous lecture speakers have included those working for the European Space Agency, Samsung AI Research Centre, and many more (detailed on CCES' website)!",
        interested: "For Facebook Messenger chat, contact Aditya Jain (aj563).",
        people: [
            { name: "Aditya Jain", crsid: "aj563" },
        ],
        type: "subject",
        status: "funded",
        contact: {
            website: {
                name: "christs.engineering",
                url: "https://www.christs.engineering/",
            },
            facebookGroup: "639979033442421",
        },
    },
    {
        title: "Feminist Society", icon: "♀️",
        type: "other",
        status: "inactive",
    },
    {
        title: "Film Society", icon: "🎥",
        status: "inactive",
        type: "other",
    },
    {
        title: "History Society", icon: "📜",
        description: "Christ's History Society caters for all Christ's students with an interest in History, whether or not they study it in their degree. It offers a variety of events throughout the year, including academic talks, lectures, and socials.",
        interested: "A sign up sheet for the mailing list will be available at the college freshers fair!",
        people: [
            { name: "Millie Yule", crsid: "ay335" },
        ],
        type: "subject",
        status: "funded",
        contact: { facebook: "christshistorysoc" },
    },
    {
        title: "Law Society", icon: "⚖",
        description: "Christ's Law Society is open to all Christ's students with an interest in Law, whether or not they study it in their degree. It offers a variety of events throughout the year, including talks, dinners and socials.",
        people: [
            { name: "Aravynd Atwal", crsid: "aa2154" },
        ],
        type: "subject",
        status: "funded",
    },
    {
        title: "Maths Society", icon: "📊",
        description: "Christ's Maths Society aims to broaden the mathematical perspectives of maths students beyond the theory taught in the Tripos, as well as to introduce non-mathematicians to ideas without delving deep into technical theory. It offers a variety of events throughout the year, including academic talks, lectures, and socials.",
        people: [
            { name: "Alise Furse", crsid: "af704" },
        ],
        type: "subject",
        status: "funded",
    },
    {
        title: "Medical Society", icon: "🩺",
        description: "Christ's Medical Society aims to bring together Christ's Medics - for welfare events, social events and academic talks, open to all students with an interest in Medicine.",
        people: [
            { name: "Mikesh Patel", crsid: "mkp41" },
        ],
        contact: { facebookGroup: "1418390265042766" },
        type: "subject",
        status: "funded",
    },
    {
        title: "Music Society (CCMS)", icon: "🎶",
        description: "Christ's College Music Society (CCMS) is one of College's most established and vibrant societies. CCMS puts on concerts and events throughout the year (weekly recitals, Week 5 Blues, Jazz in the Buttery etc.) and with its variety of ensembles - Folk, Pop, Jazz, Orchestra and Voices - open to players of any ability, CCMS has something for everyone.",
        events: "Weekly recital series (normally Fridays at 6pm in the Chapel), ensemble rehearsals (which are organised by individual ensemble leaders), and end-of-term Christmas and Lent Concerts.",
        interested: "Contact one of the ensemble leaders (details on the website) to find the relevant rehearsal times.",
        people: [
            { name: "Jemma Jeffrey", crsid: "jj536" },
        ],
        type: "subject",
        status: "funded",
        contact: {
            instagram: "ccmsofficial",
            facebook: "christsmusic",
            website: {
                name: "christsmusic.org.uk",
                url: "http://www.christsmusic.org.uk/",
            },
        },
    },
    {
        title: "Nollywood Society", icon: "🎥",
        description: "Christ's Nollywood Society seeks to boost the representation of international media (particularly Nigerian cinema) within Christ's. It holds social events featuring Nollywood films, for both Nollywood enthusiasts and for anyone who wants to learn more about the genre.",
        people: [
            { name: "Joel Gayford", crsid: "jhg41" },
        ],
        status: "funded",
        type: "other",
    },
    {
        title: "Organic Synthesis Society", icon: "🧫",
        description: "Christ's College Organic Synthesis Society (ChrOSS) is a student-run society focussing on organic synthesis, the science of making small molecules such as pharmaceuticals and naturally occuring chemicals.",
        events: "Tuesdays and Sundays 19:00 - 20:00. 1 - 2 events per week: case-studies, workshops, presentations, and journal article reading. Typically held in Z-basement supervision rooms.",
        people: [
            { name: "James Proudfoot", crsid: "jp809" },
        ],
        contact: { facebook: "ChrOSS.0" },
        status: "independent",
        type: "other",
    },
    {
        title: "Poetry Society", icon: "🧾",
        people: [
            { name: "Grace Beckett", crsid: "gsab2" },
        ],
        type: "other",
        status: "inactive",
    },
    {
        title: "Wine Society", icon: "🍷",
        description: "Wine Society organises tastings each term for everyone from beginners to veterans of the wine world. Expect blind and regional tastings throughout the year for a subsidised price and the chance to explore different wines from across the globe!",
        people: [
            { name: "Hollie Wright", crsid: "heaw2" },
        ],
        contact: {
            facebook: "christswinesociety",
            register: "https://docs.google.com/forms/d/e/1FAIpQLSfQd1NZsAQBhCm2uPVTv416_zjGMT5NN38YQkV5aCHcfuP97w/viewform",
            email: "christswine@gmail.com",
        },
        status: "funded",
        type: "other",
    },
    {
        title: "Badminton Club", icon: "🏸",
        description: "Christ's College Badminton Club provides badminton-loving students of all levels from beginner to professional  with an opportunity to play. Badminton Club holds weekly social sessions at Kelsey Kerridge, and organises two teams to particiapte in an inter-collegiate Badminton league.",
        events: "Badminton social sessions and training sessions at Kelsey Kerridge sports centre happen on Fridays (9-10pm) and Saturdays (7-9pm) during term time.",
        people: [
            { name: "Richard Zhang", crsid: "lz429" },
        ],
        type: "mixed sport",
        status: "funded",
        contact: { facebookGroup: "christsbadminton" },
    },
    {
        title: "Basketball", icon: "🏀",
        description: "Christ's College Basketball Club offers all students the chance to join in and play. It organises weekly training sessions and sometimes matches.",
        people: [
            { name: "Nicholas Montague-Jones", crsid: "nm704" },
        ],
        type: "mixed sport",
        status: "funded",
    },
    {
        title: "Boat Club", icon: "⛵",
        people: [
            { name: "Katy Hempson", crsid: "klh76" },
            { name: "Richard Turner", crsid: "rjt87" },
        ],
        type: "mixed sport",
        status: "independent",
    },
    {
        title: "Climbing Club", icon: "🧗‍♀️",
        description: "Christ's Climbing Club caters for anyone with an interest in climbing, regardless of ability or experience. It organises group climbing sessions, socials and events throughout the year, as well as making this activity more affordable for Christ's students.",
        people: [
            { name: "Ari Chan", crsid: "asc78" },
        ],
        type: "mixed sport",
        status: "funded",
    },
    {
        title: "Cricket Club", icon: "🏏",
        description: "Christ's Cricket Club encourages anyone with an interest in the sport (whatever their ability) to play. The club organises frequent sessions and events during the year.",
        people: [
            { name: "Satyam Verma", crsid: "sgv21" },
        ],
        type: "mixed sport",
        status: "funded",
    },
    {
        title: "Darts Corporation", icon: "🎯",
        description: "Darts Corporation aims to promote the sport of darts in Christ's, as a sport that can be played by anyone, regardless of skill or background.",
        type: "mixed sport",
        status: "funded",
    },
    {
        title: "Hippolytans", icon: "🏃‍♀️",
        description: "The Hippolytan's (affectionally named the Hippos) is Christ's College Women and Non-Binary Sports Society. We are a group of likeminded individuals who share a passion for sport and socialising, and throughout term time we hold a number of social events such as swaps, BBQ's, and sports days.",
        interested: "If you are interested in joining, please complete the google form below. We look forward to hearing from you! If you have any questions, please email Belle Rostron (alr64). ",
        people: [
            { name: "Belle Rostron", crsid: "alr64" },
        ],
        type: "womens sport",
        status: "independent",
        contact: { register: "https://docs.google.com/forms/d/e/1FAIpQLSdtdf3GZb6divIoW7Dbv_UugwdV6BrURpnmCYOahSNke5kgRQ/viewform?usp=sf_link" },
    },
    {
        title: "Hot Wheelz Society",
        description: "Hot Wheelz is Christ's open group dedicated to providing a safe and fun space for those interested in starting or developing their roller skating/blading/scootering/skateboarding skills. All abilities welcome!",
        events: "The Hot Wheelz have regular meet ups so students can get on their wheels while meeting other enthuisatic roller sport lovers.",
        icon: "⛸",
        type: "mixed sport",
        status: "funded",
        people: [
            { name: "Rachel Adkins", crsid: "rka33" },
        ],
    },
    {
        title: "Lawn Tennis", icon: "🎾",
        description: "Christ's Lawn Tennis Society aims to provide opportunities for tennis players to play socially and competitively. All abilities are welcome!",
        events: "Tennis matches against other clubs most weekends, social tennis usually organised in Easter Term",
        people: [
            { name: "Oliver Norbury", crsid: "ojrn2" },
        ],
        type: "mixed sport",
        status: "funded",

        contact: { facebookGroup: "753203991906817" },
    },
    {
        title: "Marguerites", icon: "🏃‍♂️",
        people: [
            { name: "Felix Asare", crsid: "fkaa2" },
        ],
        type: "mens sport",
        status: "independent",
    },
    {
        title: "Men's Football", icon: "⚽",
        description: "Men's football is one of the largest college sports societies with two teams playing in Division 3 and 5 of the Cambridge University Association Football League respectively, as well as the annual knock-out tournament (Cuppers). The first team is for players with a high ability whilst the second team is open to all!",
        events: "Both teams play a game each weekend and the two have a combined evening training session midweek. There are also regular socials, sometimes mixed with the Women's team.",
        interested: "Contact Oli Lewis via email (oel23) or on Facebook to be added to the mailing list.",
        people: [
            { name: "Oli Lewis", crsid: "oel23" },
        ],
        type: "mens sport",
        status: "funded",
    },
    {
        title: "Men's Hockey", icon: "🏑",
        description: "Christ's Hockey Club is the college's men's hockey team. The club  enables Christ's students of all levels of ability to train and participate in matches. The club is currently joint with Pembroke College.",
        people: [
            { name: "Abhimanyu Gowda", crsid: "ag2166" },
        ],
        type: "mens sport",
        status: "funded",
    },
    {
        title: "Men's Rugby Football", icon: "🏉",
        description: "Christ's Rugby Football Club is the men's rugby team. It is currently merged with Trinity College, and was recently promoted to Division 1. It offers opportunities for those of all levels to play and socialise.",
        events: "Training usually on Fridays and matches on Saturdays. The club competes in the College league in Michaelmas and Lent, with Cuppers (the collegiate cup) in late Lent/early Easter. There are also annual Old Boys fixtures.",
        people: [
            { name: "Harry Goodhew", crsid: "hfg23" },
        ],
        type: "mens sport",
        status: "funded",

        contact: { whatsapp: "https://chat.whatsapp.com/G3kpNeAE2FE2peqA5cJqE8" },
    },
    {
        title: "Mixed Lacrosse", icon: "🥍",
        description: "Christ's Lacrosse Team is a mixed sports team, open to all, which plays in weekly matches.",
        events: "A match every weekend with variable times.",
        people: [
            { name: "Caitlyn Furley", crsid: "cf525" },
            { name: "Noah Hatchwell", crsid: "nh545" },
        ],
        type: "mixed sport",
        status: "funded",
        contact: { whatsapp: "https://chat.whatsapp.com/K4DdTRvOXLh5ClZ3F4D6Wf" },
    },
    {
        title: "Netball", icon: "🏀",
        description: "Christ's College Netball includes a mixed team and a ladies team, and is open to all students of any ability who are interested in getting involved in netball.",
        events: "Both teams compete in weekly league matches as well as the big college cuppers tournament at the end of Lent Term.",
        interested: " - [Ladies netball FB group](https://www.facebook.com/groups/669403433201184)\n - [Mixed netball FB group](https://www.facebook.com/groups/592990420760172/)"
        ,
        people: [
            { name: "Camilla Olivieri", crsid: "co418" },
            { name: "Laura Herbert", crsid: "lgh30" },
        ],

        type: "mixed sport",
        status: "funded",
    },
    {
        title: "Rounders", icon: "⚾️",
        type: "mixed sport",
        status: "inactive",
    },
    {
        title: "Squash", icon: "🎾",
        description: "Squash Society is for anyone looking to try out squash or find more people who play it. It organises weekly friendly sessions, inter-college matches, and socials.",
        events: "Weekly friendly sessions usually take place on Tuesday or Thursday evenings: all details and sign ups are on the facebook.",
        people: [
            { name: "Olly Huggon", crsid: "oh282" },
        ],
        type: "mixed sport",
        status: "funded",
        contact: { facebookGroup: "christssquash" },
    },
    {
        title: "Swimming", icon: "🏊‍♂️",
        description: "Swimming Society organises a weekly swim session for Christ's undergraduate and postgraduate students in a private lane. All abilities are welcome, from those doing intense training to those who just want to socialise whilst having a dip.",
        events: "Sessions occur at 8.30-9.30pm, every Friday of term time at Parkside Pools.",
        people: [
            { name: "Isabelle Zou", crsid: "ixz20" },
        ],
        type: "mixed sport",
        status: "funded",
        contact: { facebookGroup: "345514909131796" },
    },
    {
        title: "Table Tennis", icon: "🏓",
        description: "Christ's Table Tennis Society organises weekly recreational sessions for people of all abilities, and facilitates entry to the College League where students can play matches against other colleges.",

        people: [
            { name: "Arjun Tapasvi", crsid: "adt44" },
        ],
        type: "mixed sport",
        status: "funded",
        contact: { register: "https://lists.cam.ac.uk/sympa/info/christs-tabletennis" },
    },
    {
        title: "Volleyball", icon: "🏐",
        description: "Christ's Volleyball Society is a community that welcomes volleyball players of all levels. It organises regular sessions for a fun and relaxing time while offering the opportunity to meet other volleyball players. It currently also has members from various other colleges, including Jesus.",
        events: "Weekly Volleyball sessions",
        people: [
            { name: "Yong Yin Yap", crsid: "yyy29" },
        ],
        type: "mixed sport",
        status: "funded",
        contact: { whatsapp: "https://chat.whatsapp.com/GxujOwuuAcH2bOtM4lJiqp" },
    },
    {
        title: "Women's Football", icon: "⚽",
        description: "The women's football team is open to women and non-binary students at Christ's to play against other colleges in the league and in Cuppers. It is open to all abilities and is an opportunity to learn the sport as well as make new friends and have fun. sIt is currently joint with Churchill and Lucy Cavendish Colleges.",
        people: [
            { name: "Rachel Adkins", crsid: "rka33" },
        ],
        type: "womens sport",
        status: "funded",
        contact: { facebookGroup: "CCCWomensFootball", instagram: "chuchristscavwomens" },
    },
];
