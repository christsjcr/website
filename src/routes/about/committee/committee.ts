import type { RoleCategory } from "$lib/format";

const categories: RoleCategory[] = [
    {
        category: "Core",
        items: [
            {
                title: "President",
                name: "Sam Carling",
                id: "president",
                description:
                    "Sam, our President, acts as the main undergraduate representative in College governance. He will be focusing on negotiating a reduction in yearly rent increases, heating the pool, bringing back the college punt, improving facilities in the hostels, and co-ordinating the JCR's responses to wider political issues that arise.",
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
                label: "Ossie",
                name: "Ossie Visick",
                id: "welfare-m",
                description:
                    "Christina and Ossie, our Welfare Officers, are aiming to diversify the plethora of welfare activities throughout term, as well as ensuring that concerns around mental health are taken seriously by College whilst providing resources to mitigate sources of stress.",
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
                name: "Laura Goodchild",
                id: "classact",
                description:
                    "Laura, our Class Act Officer, is aiming to establish a Class Act community at Christ's, support all students who self-identify as a Class Act and make Christ's more Class Act friendly.",
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
                name: "Tudor Serban",
                id: "intl",
                description:
                    "Tudor, our Internationals' Officer, is planning to create more opportunities for Internationals to meet with each other during Internationals' Week and throughout term, work with College and the JCR to ensure the welfare of International students, and expand the interactions of internationals from Christ's with those from other colleges.",
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
                    "Hi! I'm Mikolaj, this year's Catering and Facilities officer. I hope to organise a college punt, listen to student feedback to ensure upper hall and the buttery are satisfactory, and work with other members of the JCR committee with their projects. Please send a message or an email if you have any suggestions to improve the Catering and Facilities at Christ's!",
            },
            {
                title: "Events Officer (Ents)",
                label: "Ents",
                name: "Neha Pauly",
                pronouns: "she/her",
                id: "ents",
                description:
                    "Hello! I'm Neha (aka Slayha), this year's Ents Officer. My job is to make Christs as fun as possible by organising bops, alt-bops, and various other events. This year, I hope to organise more events with other colleges, work with the Buttery staff on official college and seasonal drinks, as well as host a wider array of social events by collaborating with other officers and local businesses. Please do come talk to me or shoot me a message if you have any feedback or suggestions on how to make Christ's slay!",
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
                id: "webmaster",
                description:
                    "Hey, I'm Miles, the JCR Webmaster! I built the website you're currently looking at, and am constantly working to improve it. Please drop me an email if you find any bugs, or want to suggest a feature / improvement!",
            },
        ],
    },
];

export default categories;