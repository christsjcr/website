import type { RoleCategory } from "$lib/format";

const categories: RoleCategory[] = [
    {
        category: "Core",
        items: [
            {
                title: "President",
                name: "Ossie Visick",
                pronouns: "he/him",
                id: "president",
                description:
                    "Hello! I'm Ossie, Christ's JCR President for 2023. I am the principal undergraduate representative in college and I am responsible for overseeing the JCR's activities. This year, my plans are to negotiate with college to mitigate rent rises, secure more study space for students, reform the scholars' system and look at alternative ways for heating the college pool. I am working closely with all officers on the JCR to make student representation as effective as it can be. Please get in touch if you have any questions or any concerns that you wish to discuss!",
            },
            {
                title: "Vice President",
                name: "Tamsin Wood",
                id: "vicepresident",
                description:
                    "Tamsin, our Vice President, will be continuing to help with Alt Bops at Christ's and promote them at the SU's Student Council, as well as work with Miles and Immi on ensuring that the JCR website is accessible and as informative as possible.",
            },
            {
                title: "Treasurer",
                name: "Fergus Kirman",
                id: "treasurer",
                description:
                    "Fergus, our Treasurer, manages the budgets and organises funding for the over 30 Christ's clubs and societies, as well as special JCR projects. Fergus also recently launched the Free Prescription Scheme, allowing all undergraduates to get free NHS prescriptions.",
            },
            {
                title: "Secretary",
                name: "Immi Sandhu",
                id: "secretary",
                description:
                    "Immi, our Secretary, is hoping to reinvent our JCR social media platforms, including partaking in the construction of the new JCR website, Instagram and Facebook, send important weekly email bulletins and organise the JCR meetings throughout term. After the success of the student takeovers and tours on Instagram last year, Immi would like to continue this and open this up to members of staff and more students across year groups and subjects.",
            },
        ],
    },
    {
        category: "Welfare Officers",
        items: [
            {
                title: "Welfare Officer",
                label: "Julen",
                name: "Julen Lippman-Errasti",
                id: "welfare-m",
                description:
                    "Hi, I'm Julen, your Male/Non-Binary Welfare Officer! Alongside Olivia, I'll be working to expand the college social spaces as well as running inclusive, relaxed events throughout term to help students take their minds off work, like weekly Welfare Walks. I'll work with other members of the JCR committee to make sure students feel welcome and safe around college, and to help the incoming freshers settle in. Please send me an email or message @ChristsWelfare on Instagram if you have any questions or want a chat!",
            },
            {
                title: "Welfare Officer",
                label: "Olivia",
                name: "Olivia Moynihan",
                pronouns: "she/her",
                id: "welfare-f",
                description:
                    "Hi, I'm Olivia, your Female/Non-Binary Welfare Officer! This year, I hope to ensure that Christ's is a supportive and welcoming environment for all students by being an approachable point of contact and liaising with college to ensure that their decisions are in the best interests of students' welfare. I'll be working with Julen to organise a plethora of welfare events throughout the year, and I'm also designing a welfare handbook for incoming freshers to support their transition to university. Feel free to get in touch via email or on the @ChristsWelfare Instagram if you have any queries or concerns, or just want to chat!",
            },
        ],
    },
    {
        category: "Year Reps",
        items: [
            {
                title: "Freshers' Reps",
                label: "Freshers'",
                name: "Vivek Bilous & Charlotte Westwood",
                id: "firstyearrep",
                description:
                    "Vivek and Charlotte, our Freps/First Year Officers, aim to make Christ's a welcoming environment for next year's Freshers, as well as host events for their year, such as college marriages, formals and a SuperBop.",
            },
        ],
    },
    {
        category: "Diversity",
        items: [

            {
                title: "Class Act Officer",
                label: "Class Act",
                name: "Kai Briggs",
                pronouns: "he/him",
                id: "classact",
                description:
                    "Hey! I'm Kai, your Class Act Officer for this year. My role is to support any student who has experienced educational, social, economic or cultural 'disadvantage' (basically continuing Access post-admissions, so I hope to collaborate a lot with our Access Officer so that you get the support you need). A few of my plans are to continue establishing the Class Act community at Christ's, to organise a range of events (socials, speakers, etc), and to create comprehensive resources about Class Act (especially on financial and welfare support). I also want to be available to support students myself, so please get in touch if you have feedback, questions, issues, or just anything Class Act related!",
            },
            {
                title: "Ethnic Diversity Officer",
                label: "Ethnic Diversity",
                name: "Abhi Gowda",
                id: "edo",
                description:
                    "Abhi, our Ethnic Diversity Officer, will be assisting with access work of applicants from diverse ethnic backgrounds, voicing any concerns from students regarding discrimination, celebrating various cultures through important events in collaboration with Hannah, and supporting the introduction of the prayer room in college for individuals of all faiths.",
            },
            {
                title: "Women's Officer",
                label: "Women's",
                name: "Ana-Maria Skaricic",
                pronouns: "she/her",
                id: "womens",
                description:
                    "Hi! I'm Ana-Maria, this year's Women's Officer. I'll be representing women/nonbinary people at college and making sure that Christ's continues to be an open and inclusive community for all genders! This year, I hope to expand FemSoc's events (swaps, arts & crafts nights, and speaker events), ensure that menstruating students have access to sustainable period products throughout college, and provide a safe space for students of all genders to air any concerns. Please get in touch with me if you have any feedback, concerns, or just want a chat!",
            },
            {
                title: "Internationals' Officer",
                label: "Internationals'",
                name: "Ju Yi Tai",
                pronouns: "she/her",
                id: "intl",
                description:
                    "Hi! I'm Ju Yi, a second-year medic from Malaysia, and I'm your international officer! This means I can help with anything international-related, whether that's storage, food, welfare, or if you just want someone to talk to. I'll also be organising events with other internationals from college and throughout Cambridge, as well as working with the college and JCR to make your stay in Cambridge as comfortable as possible. Feel free to raise things you'd like to see changed, ask me any questions about settling in, or just talk to me about anything on your mind - I'd be glad to chat!",
            },
        ],
    },
    {
        category: "Misc",
        items: [
            {
                title: "Access Officer",
                label: "Access",
                name: "Yii-Ling Deng",
                pronouns: "she/her",
                id: "access",
                description:
                    "Hey! I'm Yii-Ling, the Access Officer. My job is widening access and participation, working closely with the Admissions & Outreach department, prospective students and Christ's representatives, encouraging and supporting applicants in the admission process - especially those from under-represented and disadvantaged backgrounds. I'm focusing on making the 2023 Shadowing scheme run smoothly and enjoyably, developing the Bridging Course and collaborating with other JCR officers so that every aspect of access is covered for prospective and current students. My vision is to make more people realise that Cambridge is a possibility; a place they can thrive! Please drop me an email if you have any ideas/questions on anything related to access!",
            },
            {
                title: "Catering & Facilities Officer",
                label: "Catering & Facilities",
                name: "Mikolaj Rycek",
                pronouns: "he/him",
                id: "facilities",
                description:
                    "Hi! I'm Mikolaj, this year's Catering and Facilities officer. I hope to organise a college punt, listen to student feedback to ensure Upper Hall and the Buttery are satisfactory, and work with other members of the JCR committee with their projects. Please send a message or an email if you have any suggestions to improve the Catering and Facilities at Christ's!",
            },
            {
                title: "Events Officer (Ents)",
                label: "Ents",
                name: "Neha Pauly",
                pronouns: "she/her",
                id: "ents",
                description:
                    "Hello! I'm Neha, this year's Ents Officer. My job is to make Christs as fun as possible by organising bops, alt-bops, and various other events. This year, I hope to organise more events with other colleges, work with the Buttery staff on official college and seasonal drinks, as well as host a wider array of social events by collaborating with other officers and local businesses. Please do come talk to me or shoot me a message if you have any feedback or suggestions on how to make Christ's slay!",
            },
            {
                title: "Green Officer",
                label: "Green",
                name: "Rachel Doran",
                id: "green",
                description:
                    "Hi, I'm Rachel the Green and Charities Officer. My job is to work to try and make Christ's a more environmentally friendly college, as well as to organise fun charity events to raise money for our 3 college charities (currently these are Jimmy's Cambridge, Cancer Research UK and WaterAid). My plans currently include an overhaul of the food waste disposal system in college accommodation, setting up new end-of-term food bank collections, improving communication between college staff and students about green initiatives, and supporting the college in working towards the next Green Impact Award. Please do get in contact with me if you have any ideas/ suggestions for how to make Christ's greener!",
            },
            {
                title: "Webmaster",
                name: "Miles Watson",
                pronouns: "he/him",
                id: "webmaster",
                description:
                    "Hey, I'm Miles, the JCR Webmaster! I built the website you're currently looking at, and am constantly working to improve it. My current plans for the upcoming year include an improved anonymous feedback system, a better (customisable + subscribable) termcard, and an interactive questionnaire that students can use to determine their eligibility for various grants & bursaries. Please drop me an email if you find any bugs, or want to suggest a feature / improvement!",
            },
        ],
    },
];

export default categories;