import type { RoleCategory } from "$lib/format";

const categories: RoleCategory[] = [
    {
        category: "Core",
        items: [
            {
                title: "President",
                name: "Diya Jalan",
                id: "president",
                description:
                    "Hi! I'm Diya, a third year law student here at Christ's. I'm an international student from Singapore. I am excited to be your 2026 President and help represent your voice on student affairs at Christ's ❤️💙 Feel free to come to me with any ideas and suggestions you have to make Christ's a much better place for all 🙂",
            },
            {
                title: "Vice-President",
                name: "Gautam Wadhwa",
                pronouns: "he/him",
                id: "vicepresident",
                description:
                    "...",
            },
            {
                title: "Secretary",
                name: "Ev Kimber",
                pronouns: "she/her",
                id: "secretary",
                description:
                    "...",
            },
            {
                title: "Treasurer",
                name: "Tanya Gupta",
                pronouns: "she/her",
                id: "treasurer",
                description:
                    "...",
            }
        ],
    },
    {
        category: "Welfare Officers",
        items: [
            {
                title: "Welfare Officer",
                label: "welfare",
                name: "Sam Johnson / Hannah Huang",
                pronouns: "he/him (Sam) / she/her (Hannah)",
                id: "welfare",
                description:
                    "...",
            },
        ],
    },
    {
        category: "Diversity",
        items: [
            {
                title: "LGBT+ Officer",
                label: "LGBT+",
                name: "Lily Owens",
                pronouns: "they/them",
                id: "lgbt",
                description:
                    "...",
            },
            {
                title: "Ethnic Diversity Officer",
                label: "Ethnic Diversity",
                name: "Alisha Maybury",
                pronouns: "she/her",
                id: "edo",
                description:
                    "...",
            },
        ],
    },
    {
        category: "Misc",
        items: [
            {
                title: "Access Officer",
                label: "Access",
                name: "Georgia Halliday",
                pronouns: "she/her",
                id: "access",
                description:
                    "I'm Georgia, a third year studying Psychological and Behavioural Sciences from Liverpool. My aim is to support, work and develop Christ's outreach and access programmes and goals so they can target those most underrepresented.",
            },
            {
                title: "Class Act Officer",
                label: "Class Act",
                name: "Lori Flanagan",
                pronouns: "she/her",
                id: "classact",
                description:
                    "...",
            },
            {
                title: "Catering & Facilities Officer",
                label: "Catering & Facilities",
                name: "Evie Price",
                pronouns: "he/him",
                id: "facilities",
                description:
                    "...",
            },
            {
                title: "Webmaster",
                name: "Patrick Bowers",
                pronouns: "he/him",
                id: "webmaster",
                description:
                    "Hi all, I'm Patrick - a second year Geography student from Liverpool and your JCR Webmaster! It's my job to keep the digital aspects of college life running smoothly (including our lovely website), so give me a shout if you need any help with anything!"
            },
        ],
    },
];

export default categories;