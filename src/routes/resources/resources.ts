import links from "$data/links";
import type { ResourcePage } from "$lib/format";

const resources: {
    [x: string]: ResourcePage;
} = {
    "college-life": {
        title: "College Life",
        sections: [
            {
                title: "General",
                items: [
                    {
                        title: "Intranet",
                        url: links.general.INTRANET,
                    },
                    {
                        title: "Tutor Timetable",
                        url: links.general.TUTOR_TIMETABLE,
                    },
                    {
                        title: "Camcard Balance",
                        url: links.general.CAMCARD_BALANCE,
                    },
                    {
                        title: "Printing Balance",
                        url: links.general.PRINTING_BALANCE,
                    },
                ],
            },
            {
                title: "Meals",
                items: [
                    {
                        title: "Upper Hall Menu",
                        url: links.meals.UPPER_HALL_MENU
                    },
                    {
                        title: "Meal Booking",
                        url: links.meals.MEAL_BOOKING
                    },
                    {
                        title: "Meal Times",
                        url: links.meals.MEAL_TIMES,
                        info: [
                            "Breakfast: Mon-Fri 8:00-9:30 (Buttery)",
                            "Brunch: Sat 11:00-12:30, Sun 10:30-12:00",
                            "Lunch: Mon-Fri 12.00-13:45",
                            "Dinner (quiet period): 17:50-19:00 if there is a formal/grad hall, 17:50-20:00 otherwise",
                            "Out of term times will be displayed locally.",
                        ],
                    },

                ],
            },
            {
                title: "Facilities",
                items: [
                    {
                        title: "Room Booking",
                        url: links.facilities.ROOM_BOOKING,
                    },
                    {
                        title: "Fault Reporting",
                        url: links.facilities.FAULT_REPORTING,
                    },
                    {
                        title: "Airbed Booking",
                        url: links.facilities.AIRBED,
                        info: [
                            "Airbeds and accompanying bedding can be booked on the college intranet",
                            "An automated email will be sent specifying how to collect, inflate and return the mattress",
                            "There is a flat charge of £5 for 1-3 nights, as well as a deposit of £20 should the mattress or bedding be damaged, lost or not returned appropriately",
                            "All charges are handled automatically through the college intranet",
                        ],
                    },
                    {
                        title: "Room Database",
                        url: links.facilities.ROOM_DATABASE,
                    },
                    {
                        title: "Pool Rules",
                        url: links.facilities.POOL_RULES,
                    },
                ],
            },
            {
                title: "Contact",
                items: [
                    {
                        title: "Porters",
                        url: links.contacts.PORTERS_PHONE,
                        info: [
                            `Phone: [01223 334900](${ links.contacts.PORTERS_PHONE })`,
                            `Email: [porters@christs.cam.ac.uk](${ links.contacts.PORTERS_EMAIL })`,
                        ],
                    },
                    {
                        title: "Panther Taxis",
                        url: links.contacts.PANTHER_TAXI_WEBSITE,
                        info: [
                            `Phone: [01223 715715](${ links.contacts.PANTHER_TAXI_PHONE })`,
                            `App: [download](${ links.contacts.VEEZU_APP })`,
                        ],
                    },
                ],
            },
        ],
    },
    "academic-and-careers": {
        title: "Academic & Careers",
        sections: [
            {
                title: "Study",
                items: [
                    {
                        title: "Timetable",
                        url: links.academic.TIMETABLES,
                        info: [
                            "Contains dates and timings of lectures, labs, and other department-organised events",
                            "You can subscribe to the calendar to automatically add the events to your personal devices",
                        ],
                    },
                    {
                        title: "Moodle",
                        url: links.academic.MOODLE,
                        info: [
                            "Course resources and information",
                            "Tutor meetings",
                            "Study skills",
                        ],
                    },
                    {
                        title: "Christ's Library & Archives",
                        url: links.academic.CHRISTS_LIBRARY_ARCHIVES,
                        info: [
                            `Get started: [link](${ links.academic.CHRISTS_LIBRARY })`,
                            `Accessibility information: [link](${ links.welfare.LIBRARY_ASSISTIVE_RESOURCES })`,
                            `Wellbeing & library anxiety: [link](${ links.welfare.LIBRARY_WELLBEING })`,
                        ],
                    },
                    {
                        title: "iDiscover",
                        url: links.academic.IDISCOVER,
                        info: [
                            "Access to Cambridge Libraries Collections",
                            "Online resources",
                            "Useful citations",
                        ],
                    },
                ],
            },
            {
                title: "Reports & Results",
                items: [
                    {
                        title: "CamSIS",
                        url: links.academic.CAMSIS,
                        info: [
                            "Exam results",
                            "Course enrollments",
                            "Academic and personal record",
                        ],
                    },
                    {
                        title: "CamCORS",
                        url: links.academic.CAMCORS,
                        info: ["Supervision reports"],
                    },
                ],
            },
            {
                title: "Careers",
                items: [
                    {
                        title: "University Careers Service",
                        url: links.careers.UNI_CAREER_SERVICE,
                        info: [
                            "Navigate the job market",
                            "Connect with employers",
                            "Access consultations",
                        ],
                    },
                    {
                        title: "Handshake",
                        url: links.careers.HANDSHAKE,
                        info: [
                            "Early career network for students",
                            "Apply to internships and graduate positions",
                            "Attend virtual events",
                        ],
                    },
                    {
                        title: "Alumni Database",
                        url: links.careers.ALUMNI_DATABASE,
                        info: [
                            "Access a list of Christ's Alumni",
                            `Use these [account details](${ links.internal.ALUMNI_WEBSITE_CREDS }) to login (Christ's Undergrads only)`,
                        ],
                    },
                ],
            },
        ],
    },
    welfare: {
        title: "Welfare",
        sections: [
            {
                title: "General",
                items: [
                    {
                        title: "JCR Welfare Guide",
                        url: links.welfare.JCR_WELFARE_GUIDE,
                    },
                    {
                        title: "Tutor Timetable",
                        url: links.general.TUTOR_TIMETABLE,
                        info: [
                            "Shows walk-in / contact hours for tutors",
                            "It is best to visit your own tutor if possible, but you can always see any Tutor without an appointment",
                            "At all times other times (24/7), a Duty Tutor will be available via the porter's lodge",
                        ],
                    },
                    {
                        title: "JCR Welfare Officers",
                        url: "/about/committee#welfare-officers",
                        info: [
                            "You can contact Zain + Chris by their emails, which can be found on the [committee page](/about/committee).",
                            `You can also DM them on the [@ChristsWelfare](${ links.welfare.JCR_WELFARE_INSTAGRAM })` +
                                "instagram page, if you'd prefer.",
                        ],
                    },
                    {
                        title: "College Health & Wellbeing Appointments",
                        url: links.welfare.COLLEGE_NURSE_BOOKING,
                        info: [
                            "Allows students to directly book four types of appointments",
                            `[**Freshers Introduction Appointment**](${ links.welfare.COLLEGE_NURSE_BOOKING }) (Michaelmas term only): 
                                an opportunity to have a get to know a student that may have a physical, 
                                mental health or disability/accessibility need, to ensure that adequate support is in place`, 
                            `[**Wellbeing Drop-in**](${ links.welfare.COLLEGE_NURSE_BOOKING }): 
                                a 30m chat about wellbeing and/or small issues that students may be facing 
                                (a preventative approach, to help stop small issues becoming bigger ones)`,
                            `[**Physical Health Appointments**](${ links.welfare.COLLEGE_NURSE_BOOKING }): 
                                20m duration, for all non-urgent physical health issues and queries or review of ongoing conditions`,
                            `[**Mental Health Appointments**](${ links.welfare.COLLEGE_NURSE_BOOKING }): 
                                45min duration, for students who are experiencing mental health issues that are impacting on their 
                                day-to-day life and academics`,
                            "If you can't find a suitable appointment time, please email [Christ's Nurse](/resources?search=Nurse)",
                        ],
                    },
                    {
                        title: "Cambridge Student Advice Service",
                        url: links.welfare.CAM_STUDENT_ADVICE,
                        info: [
                            "An appointment-based support service for all undergraduates, graduates and postgraduates, open Mon-Fri 9:00-17:00 (except for Bank Holidays and when the SU is closed)",
                            "Phone: [01223 746999](tel:01223746999)",
                            "Email: [advice@cambridgesu.co.uk](mailto:advice@cambridgesu.co.uk)",
                            `Request an Appointment: [link](${ links.welfare.CAM_STUDENT_ADVICE_CONTACT })`,
                        ],
                    },
                ],
            },
            {
                title: "Physical & Sexual Health",
                items: [
                    {
                        title: "NHS Cambridgeshire and Peterborough",
                        url: links.welfare.NHS_LOCAL,
                    },
                    {
                        title: "Nurse",
                        url: links.welfare.COLLEGE_NURSE,
                        info: [
                            "For regular appointments, see [College Health & Wellbeing Appointments](/resources?search=College%20Health%20%26%20Wellbeing%20Appointments)",
                            "For enquiries and urgent appointments: [nurse@christs.cam.ac.uk](mailto:nurse@christs.cam.ac.uk)",
                            "Mon, Wed: 10:00-12:30 and 14:00-15:30",
                            "Tue, Thu, Fri: 10:30-12:30",
                        ],
                    },
                    {
                        title: "Sexual Health PDF",
                        url: "/doc/sexual-health.pdf",
                        info: [
                            "Gives useful information about traditional and non-traditional sexual practices",
                            "Includes information about LGBT+ relationships, hygiene best-practices, sex work as a student, and sexual assault / abuse",
                            "The documnent is not intended to promote any particular practices, but to help ensure that people stay safe regardless of their preferences",
                        ],
                    },
                    {
                        title: "iCaSH",
                        url: links.welfare.ICASH,
                        info: [
                            "Access to contraception, routine sexual health screenings, treatment for sexually transmitted infections, and related advice",
                            "Kits can be ordered online",
                            "Phone: [03003 003030](tel:03003003030)",
                            "Address: Lime Tree Clinic, Brookfields Hospital, Sexual Health and Contraception, 351 Mill Road, Cambridge, CB13DF",
                        ],
                    },

                ],
            },
            {
                title: "Mental Health",
                items: [
                    {
                        title: "Togetherall",
                        url: links.welfare.TOGETHERALL,
                        info: [
                            "A safe, anonymous online space providing 24/7 access to an online global community to share your thoughts, complete self-guided courses, and help manage your wellbeing",
                            "You can sign up using your Cambridge email address",
                        ],
                    },
                    {
                        title: "Samaritans",
                        url: links.welfare.SAMARITANS,
                        info: [
                            "A registered charity aimed at providing 24/7 emotional support to anyone",
                            "Phone: [116123](tel:116123)",
                            "Email: [jo@samaritans.org](mailto:jo@samaritans.org)",
                            `App: ${ links.welfare.SAMARITANS }`,
                        ],
                    },
                    {
                        title: "Cambridge Nightline",
                        url: links.welfare.CAM_NIGHTLINE,
                        info: [
                            "A night-time listening support service, open from 19:00-7:00 during term time for students from Cambridge and Anglia Ruskin",
                            `Instant messaging: [link](${ links.welfare.CAM_NIGHTLINE_MESSAGING })`,
                            "Phone: [01223 744444](tel:01223744444)",
                            "Email: [email@cambridge.nightline.ac.uk](mailto:email@cambridge.nightline.ac.uk)",
                            "Skype: Cambridge.Nightline",
                        ],
                    },
                    {
                        title: "Shout",
                        url: links.welfare.SHOUT,
                        info: [
                            "A 24/7 confidential service for anyone struggling to cope",
                            "Text SHOUT to 85258",
                            "Despite the warnings about being charged, the service is free for EE, O2, Three, Vodafone, Virgin Mobile, BT Mobile, Giffgaff, Sky, Telecom Plus, Lebara, Tesco Mobile and iD Mobile users",
                        ],
                    },
                ],
            },
            {
                title: "Disabilities",
                items: [
                    {
                        title: "Christ's Library Assistive Resources",
                        url: links.welfare.LIBRARY_ASSISTIVE_RESOURCES,
                        info: [
                            "Contains details about the many services available to anyone wanting to use the Christ's library.",
                        ],
                    },
                    {
                        title: "Disability Resource Centre",
                        url: links.welfare.DISABILITY_RESOURCE_CENTRE,
                        info: [
                            "A confidential and accessible service for disabled students and staff supporting them, providing guidance for current and prospective disabled students, developing support programmes and training for University and college staff",
                            `Tell the DRC about your support requirements: [link](${ links.welfare.DRC_SUPPORT_FORM })`,
                            "To get advice on being assessed for a specific learning difficulty, email with the subject heading 'Diagnostic Assessment'",
                            "Email: [disability@admin.cam.ac.uk](mailto:disability@admin.cam.ac.uk)",
                            "Phone: [01223 332301](tel:01223332301)",
                        ],
                    },
                    {
                        title: "Cambridge SU Disabled Students' Campain",
                        url: links.welfare.SU_DISABLED_STUDENTS,
                        info: [
                            "The campaign and community for disabled students within the University of Cambridge.",
                            "Comprised of all Cam students who have or have had a disability, as well as the DSC committee (including the full time Disabled Students' Officer, and college and campaign DSOs).",
                        ],
                    },
                ],
            },
            {
                title: "LGBT+",
                items: [
                    {
                        title: "Switchboard",
                        url: links.welfare.LGBT_SWITCHBOARD,
                        info: [
                            "A confidential helpline for those who identify as LGBT+",
                            `Instant Messaging: [link](${ links.welfare.LGBT_SWITCHBOARD_MESSAGING })`,
                            "Phone: [03003 300630](tel:03003300630) (10am-10pm everyday)",
                            "Email: [chris@switchboard.lgbt](mailto:chris@switchboard.lgbt)",
                        ],
                    },
                ],
            },
        ],
    },
    finance: {
        title: "Finance",
        sections: [
            {
                title: "Quick Links",
                items: [
                    {
                        title: "College Grants and Awards",
                        url: links.finance.COLLEGE_GRANTS,
                    },
                    {
                        title: "Cambridge SU Finance Page",
                        url: links.finance.SU_FINANCE,
                    },
                    {
                        title: "Christ's Financial Support for Home Students",
                        url: links.finance.FINANCIAL_SUPPORT_HOME,
                    },
                    {
                        title: "Christ's Financial Support for Overseas Students",
                        url: links.finance.FINANCIAL_SUPPORT_OVERSEAS,
                    },
                    {
                        title: "Christ's JCR Unified Funding Request Form 2024",
                        url: links.finance.JCR_FUNDING_REQUEST_FORM,
                    },
                ],
            },
            {
                title: "General",
                items: [
                    {
                        title: "Flexible Grant 2023-24",
                        url: links.finance.FLEXIBLE_GRANT,
                        info: [
                            "Every Christ's student is given a £1,200 grant for the duration of your degree",
                            "You can withdraw up to £400 of this per academic year (this doesn't have to be all at once, you can send in multiple forms throughout the year)",
                            "The Flexible Grant can be spent on a wide range of things (e.g. extra nights of accommodation in college; books relevant to your degree; extra curricular activities like sports or societies)",
                            "The annual deadline for withdrawals is 30th June",
                            "You can withdraw your grant using the application form on the page linked above",
                        ],
                    },
                    {
                        title: "Cambridge Bursary",
                        url: links.finance.CAM_BURSARY,
                        info: [
                            "The University gives bursaries of varying sizes to any students with household income under £62,215 who has taken out a student loan",
                            "No application is needed, as you will be automatically considered based on your Student Finance Application",
                            "It is given in three installments, a few weeks into each term",
                        ],
                    },
                ],
            },
            {
                title: "Hardship",
                items: [
                    {
                        title: "Christ's Contacts",
                        url: "",
                        info: [
                            "If you are experiencing financial hardship or specific financial issues, please reach out to your **Tutor**",
                            "There are a range of grants from which tutors can provide money to deal with any cases of hardship",
                            "If you would like some advice on your situation and don't feel comfortable speaking to your personal Tutor, please reach out to either another Tutor or a JCR Officer (such as Welfare or Class Act), who will be happy to talk and offer guidance",
                        ],
                    },
                    {
                        title: "Cambridge SU",
                        url: links.finance.SU_FINANCE,
                        info: [
                            `Cambridge SU has a useful page dedicated to resources for financial hardship, linked 
                                [here](${ links.finance.SU_FINANCE })`,
                            `You can also contact the SU for advice through the 
                                [Student Advice Service](${ links.welfare.CAM_STUDENT_ADVICE_CONTACT })`,
                        ],
                    },
                ],
            },
            {
                title: "Travel",
                items: [
                    {
                        title: "Long Vacation Travel Grants",
                        url: links.finance.COLLEGE_GRANTS,
                        info: [
                            "There are many grants available for summer travel for all students",
                            "You can apply to any applicable grants using a single form, linked on the intranet (link above)",
                            "The deadline is typically around late April",
                        ],
                    },
                    {
                        title: "Easter Vacation Travel Grants",
                        url: links.finance.COLLEGE_GRANTS,
                        info: [
                            "There are 5 funds available to a small range of humanities degrees",
                        ],
                    },
                ],
            },
            {
                title: "JCR",
                items: [
                    {
                        title: "Unified JCR Funding Form 2024",
                        url: links.finance.JCR_FUNDING_REQUEST_FORM,
                        info: [
                            "The JCR supports the financing of various college activities and amenities",
                            "All expenditure eligible for reimbursement from the JCR e.g. college society activities, JCR committee spendings and other subsidies can be claimed through the form linked above",
                            "This includes the Free Prescription Scheme that provides support for students who need to pay for their medications",
                        ],
                    },
                ],
            },
            {
                title: "Misc",
                items: [
                    {
                        title: "Vacation Residence in College",
                        url: links.finance.COLLEGE_GRANTS,
                        info: [
                            "Support is available for students staying in the Long Vacation for academic reasons",
                            "No specific funding for accomodation is available for the Easter or Christmas vacations (beyond the Flexible Grant)",
                        ],
                    },
                    {
                        title: "Other College Funding",
                        url: links.finance.COLLEGE_GRANTS,
                        info: [
                            "There are various other funds for specific causes, like sporting excellence, or furthering humanities' studies",
                            "The Levy-Plumb Fund for Humanities can ve used for long vacation residence in college, language courses, research etc",
                            "Apply via the form on the intranet page linked above",
                        ],
                    },
                    {
                        title: "Other External Awards and Grants",
                        url: links.finance.EXTERNAL_GRANTS,
                    },
                ],
            },
        ],
    },
    jcr: {
        title: "JCR",
        sections: [
            {
                title: "Quick Links",
                items: [
                    {
                        title: "JCR Google Drive",
                        url: links.internal.GOOGLE_DRIVE,
                    },
                    {
                        title: "Email Login Instructions",
                        url: links.internal.EMAIL_LOGIN_INSTRUCTION,
                    },
                ],
            },
        ],
    },
};

export default resources;