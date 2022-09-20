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
                label: "Christina",
                name: "Christina Lawrence",
                id: "welfare-f",
                description:
                    "Christina and Ossie, our Welfare Officers, are aiming to diversify the plethora of welfare activities throughout term, as well as ensuring that concerns around mental health are taken seriously by College whilst providing resources to mitigate sources of stress.",
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
                name: "Leah Almeida",
                id: "womens",
                description:
                    "Leah, our Womens' Officer, will be promoting a safe space for discussion surrounding gender expression, organising informative events on issues surrounding intersectional feminism and misogyny, holding FemSoc events and socials, as well as continuing with the sustainable period product scheme.",
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
                name: "Romany Whittall",
                id: "access",
                description:
                    "Romany, our Access officer, will be working with outside agencies and Cambridge-wide programmes to ensure students from non-traditional backgrounds are prepared for admission processes, make the 2022 Shadowing Scheme rewarding and enjoyable, develop the Bridging Course further for offer-holders, and support students who want to run their own Access and outreach events.",
            },
            {
                title: "Catering & Facilities Officer",
                label: "Catering & Facilities",
                name: "Jonathon Konig",
                id: "facilities",
                description:
                    "Jonathan, our Catering and Facilities Officer, will be hoping to improve Upper Hall menu options for all dietary preferences, work with Sam to bring back the college punt, and continue introducing new gym equipment and arrange seating plans for Formal Halls in an equitable fashion.",
            },
            {
                title: "Events Officer (Ents)",
                label: "Ents",
                name: "Hannah Huang",
                id: "ents",
                description:
                    "Hannah, our Ents Officer, is planning on increasing the diversity of events in collaboration with Abhi, bringing back SuperBops (Bops with other colleges) and continuing to form relationships with local businesses and venues.",
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