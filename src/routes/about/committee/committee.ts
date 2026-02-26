import type { RoleCategory } from "$lib/format";

const categories: RoleCategory[] = [
    {
        category: "Core",
        items: [
            {
                title: "President (testing123)",
                name: "Josie Iino",
                pronouns: "she/her",
                id: "president",
                description:
                    "My name is Josie, I am a second year History and Politics student. I am half-American, half-Japanese, but I grew up in Vienna, Austria. I now live between New York and Thailand. I am very excited to be your President, and it is an honor I take seriously. Please message me with any questions! ",
            },
            {
                title: "Vice-President",
                name: "Diya Jalan",
                pronouns: "she/her",
                id: "vicepresident",
                description:
                    "Hi! I’m Diya, a first year law student here at Christ’s. I’m an international student from Singapore. I am excited to be your 2025 Vice-President and help represent your voice on student affairs at Christ’s ❤️💙 Feel free to come to me with any ideas and suggestions you have to make Christ’s a better place for all :)",
            },
            {
                title: "Secretary",
                name: "Ev Kimber",
                pronouns: "she/her",
                id: "secretary",
                description:
                    "Hi! I’m Ev (she/her) a first year historian, and I’m excited to be your 2025 JCR Secretary! I’m in charge of the weekly bulletin, recording the meeting minutes and making sure you know exactly what’s happening at Christ’s each week. You’ll always hear from me in your emails! If you have any questions, ideas, or issues, feel free to get in touch.",
            },
            {
                title: "Treasurer",
                name: "Chris Lorde",
                pronouns: "any",
                id: "treasurer",
                description:
                    "Hey folks! My name’s Chris — I’m your JCR treasurer and a second-year sociologist here at Christ’s. My job is just making sure everyone gets paid — and that our bills do too. If you have any questions or concerns about reimbursements, budgets, or more, feel free to get in touch!",
            }
        ],
    },
    {
        category: "Welfare Officers",
        items: [
            {
                title: "Welfare Officer",
                label: "Welfare",
                name: "James Tam / Tanya Gupta",
                pronouns: "he/him (James) / she/her (Tanya)",
                id: "welfare",
                description:
                    "Hi! We are James and Tanya - your JCR Welfare Officers for 2025! Do come to speak to us if you have any suggestions or concerns, whether through our weekly drop-in sessions or dropping us an email. We are only one text away! Hope we can make college life a little less stressful this year for everyone, especially during exam season.",
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
                    "Hey! I’m Lily, your LGBT+ Officer. This year I am focusing on developing easier access pathways towards LGBT+ support resources and the Gender Expression Fund, as well as planning an engaging series of social events for Christ’s LGBT community, such as college swaps, themed charity formals and queer film screenings. I am looking to create a supportive environment and a dedicated queer space for students within college. As your JCR LGBT+ officer, I am always available for a chat. Feel free to send me an email If you’d like to talk or you’d like to make suggestions and changes within the college.",
            }
        ],
    },
    {
        category: "Misc",
        items: [
            {
                title: "Access Officer",
                label: "Access",
                name: "Isma Mirza",
                pronouns: "she/her",
                id: "access",
                description:
                    "Hi, I'm Isma, and I am delighted to be your Access Officer!  I plan to work alongside other officers on the JCR, especially the Class Act and BME. I also aim to work with the College Admissions Team to continue developing and expanding the outreach initiatives and widening participation events that Christ's is renowned for. Having benefitted from these access programmes, I am passionate about supporting students who come from underrepresented backgrounds. I'm looking forward to working with the SU, collaborating on initiatives with Access Officers from other Colleges and working with our CRep community to deliver various outreach events and socials. Please feel free to contact me if you have any questions or if you would like to get involved with any outreach-related work!",
            }
        ],
    },
];

export default categories;