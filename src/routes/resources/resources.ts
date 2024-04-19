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
                        url: "https://intranet.christs.cam.ac.uk",
                    },
                    {
                        title: "Tutor Timetable",
                        url: "https://intranet.christs.cam.ac.uk/system/files/2023-10/2023-24%20Undergraduate%20Open%20Tutorial%20Hours_0.pdf",
                    },
                    {
                        title: "Camcard Balance",
                        url: "https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fmealbooking%2FEPOS.aspx",
                    },
                    {
                        title: "Printing Balance",
                        url: "https://www.christs.cam.ac.uk/cp",
                    },
                ],
            },
            {
                title: "Meals",
                items: [
                    {
                        title: "Upper Hall Menu",
                        url: "https://intranet.christs.cam.ac.uk/upper-hall-menus",
                    },
                    {
                        title: "Meal Booking",
                        url: "https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fmealbooking%2F",
                    },
                    {
                        title: "Meal Times",
                        url: "https://intranet.christs.cam.ac.uk/meal-times",
                        info: [
                            "Breakfast: Mon-Fri 8:00-9:30 (Buttery)",
                            "Brunch: Sat 11:00-12:30, Sun 10:30-12:00",
                            "Lunch: Mon-Fri 12.00-13:45",
                            "Dinner: Mon-Fri 17:50-19:20, Sat-Sun 17:50-19:00",
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
                        url: "https://christscollege.roombookingsystem.co.uk/overviewday",
                    },
                    {
                        title: "Fault Reporting",
                        url: "https://intranet.christs.cam.ac.uk/fault-reporting",
                    },
                    {
                        title: "Airbed Booking",
                        url: "https://christscollege.roombookingsystem.co.uk/user/overviewweek",
                        info: [
                            "Airbeds and accompanying bedding can be booked on the college intranet",
                            "An automated email will be sent specifying how to collect, inflate and return the mattress",
                            "There is a flat charge of £5 for 1-3 nights, as well as a deposit of £20 should the mattress or bedding be damaged, lost or not returned appropriately",
                            "All charges are handled automatically through the college intranet",
                        ],
                    },
                    {
                        title: "Room Database",
                        url: "https://intranet.christs.cam.ac.uk/app/rooms/undergraduate",
                    },
                    {
                        title: "Pool Rules",
                        url: "https://docs.google.com/document/d/1mUff1QpIWbGjHwP4iUH2HNjor-md7eKDX2UGbEPFHEk/edit?usp=sharinge",
                    },
                ],
            },
            {
                title: "Contact",
                items: [
                    {
                        title: "Porters",
                        url: "tel:01223334900",
                        info: [
                            "Phone: [01223 334900](tel:01223334900)",
                            "Email: [porters@christs.cam.ac.uk](mailto:porters@christs.cam.ac.uk)",
                        ],
                    },
                    {
                        title: "Panther Taxis",
                        url: "https://www.panthertaxis.co.uk",
                        info: [
                            "Phone: [01223 715715](tel:01223715715)",
                            "App: [download](https://www.panthertaxis.app/)",
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
                        url: "https://timetable.cam.ac.uk",
                        info: [
                            "Contains dates and timings of lectures, labs, and other department-organised events",
                            "You can subscribe to the calendar to automatically add the events to your personal devices",
                        ],
                    },
                    {
                        title: "Moodle",
                        url: "https://www.vle.cam.ac.uk/login/index.php",
                        info: [
                            "Course resources and information",
                            "Tutor meetings",
                            "Study skills",
                        ],
                    },
                    {
                        title: "Christ's Library & Archives",
                        url: "https://www.christs.cam.ac.uk/library-archives",
                        info: [
                            "Get started: [link](https://www.christs.cam.ac.uk/library)",
                            "Accessibility information: [link](https://www.christs.cam.ac.uk/assist)",
                            "Wellbeing & library anxiety: [link](https://www.christs.cam.ac.uk/libwellbeing)",
                        ],
                    },
                    {
                        title: "iDiscover",
                        url: "https://idiscover.lib.cam.ac.uk/primo-explore/search?vid=44CAM_PROD",
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
                        url: "https://camsis.cam.ac.uk/psp/ravenprod/?cmd=login",
                        info: [
                            "Exam results",
                            "Course enrollments",
                            "Academic and personal record",
                        ],
                    },
                    {
                        title: "CamCORS",
                        url: "https://www.camcors.cam.ac.uk/",
                        info: ["Supervision reports"],
                    },
                ],
            },
            {
                title: "Careers",
                items: [
                    {
                        title: "University Careers Service",
                        url: "https://www.careers.cam.ac.uk/",
                        info: [
                            "Navigate the job market",
                            "Connect with employers",
                            "Access consultations",
                        ],
                    },
                    {
                        title: "Handshake",
                        url: "https://www.joinhandshake.co.uk/",
                        info: [
                            "Early career network for students",
                            "Apply to internships and graduate positions",
                            "Attend virtual events",
                        ],
                    },
                    {
                        title: "Alumni Database",
                        url: "https://alumni.christs.cam.ac.uk/ccc-list",
                        info: [
                            "Access a list of Christ's Alumni",
                            "Use these [account details](https://drive.google.com/file/d/1uGR_BrL7kvHU0iMnjfRpKJr0jBf09a9d/view?usp=sharing) to login (Christ's Undergrads only)",
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
                        url: "https://drive.google.com/file/d/10B4hgiyuOBksYWfDC988anwTu8_0r_fu/view?usp=drive_link",
                    },
                    {
                        title: "Tutor Timetable",
                        url: "https://intranet.christs.cam.ac.uk/system/files/2023-10/2023-24%20Undergraduate%20Open%20Tutorial%20Hours_0.pdf",
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
                            "You can also DM them on the [@ChristsWelfare](https://www.instagram.com/christswelfare/) instagram page, if you'd prefer.",
                        ],
                    },
                    {
                        title: "College Health & Wellbeing Appointments",
                        url: "https://christ-college.uk2.cliniko.com/bookings",
                        info: [
                            "Allows students to directly book four types of appointments",
                            "[**Freshers Introduction Appointment**](https://christ-college.uk2.cliniko.com/bookings) (Michaelmas term only): an opportunity to have a get to know a student that may have a physical, mental health or disability/accessibility need, to ensure that adequate support is in place",
                            "[**Wellbeing Drop-in**](https://christ-college.uk2.cliniko.com/bookings): a 30m chat about wellbeing and/or small issues that students may be facing (a preventative approach, to help stop small issues becoming bigger ones)",
                            "[**Physical Health Appointments**](https://christ-college.uk2.cliniko.com/bookings): 20m duration, for all non-urgent physical health issues and queries or review of ongoing conditions",
                            "[**Mental Health Appointments**](https://christ-college.uk2.cliniko.com/bookings):  45min duration, for students who are experiencing mental health issues that are impacting on their day-to-day life and academics",
                            "If you can't find a suitable appointment time, please email [Christ's Nurse](/resources?search=Nurse)",
                        ],
                    },
                    {
                        title: "Cambridge Student Advice Service",
                        url: "https://www.cambridgesu.co.uk/support/advice/",
                        info: [
                            "An appointment-based support service for all undergraduates, graduates and postgraduates, open Mon-Fri 9:00-17:00 (except for Bank Holidays and when the SU is closed)",
                            "Phone: [01223 746999](tel:01223746999)",
                            "Email: [advice@cambridgesu.co.uk](mailto:advice@cambridgesu.co.uk)",
                            "Request an Appointment: [link](https://www.cambridgesu.co.uk/support/advice/contact/)",
                        ],
                    },
                ],
            },
            {
                title: "Physical & Sexual Health",
                items: [
                    {
                        title: "NHS Cambridgeshire and Peterborough",
                        url: "https://www.cpft.nhs.uk/",
                    },
                    {
                        title: "Nurse",
                        url: "https://intranet.christs.cam.ac.uk/college-nurse-0",
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
                        url: "https://www.icash.nhs.uk/",
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
                        url: "https://togetherall.com/en-gb/",
                        info: [
                            "A safe, anonymous online space providing 24/7 access to an online global community to share your thoughts, complete self-guided courses, and help manage your wellbeing",
                            "You can sign up using your Cambridge email address",
                        ],
                    },
                    {
                        title: "Samaritans",
                        url: "https://www.samaritans.org/",
                        info: [
                            "A registered charity aimed at providing 24/7 emotional support to anyone",
                            "Phone: [116123](tel:116123)",
                            "Email: [jo@samaritans.org](mailto:jo@samaritans.org)",
                            "App: https://selfhelp.samaritans.org/",
                        ],
                    },
                    {
                        title: "Cambridge Nightline",
                        url: "https://cambridge.nightline.ac.uk/",
                        info: [
                            "A night-time listening support service, open from 19:00-7:00 during term time for students from Cambridge and Anglia Ruskin",
                            "Instant messaging: [link](https://im.cambridge.nightline.ac.uk/webim/)",
                            "Phone: [01223 744444](tel:01223744444)",
                            "Email: [email@cambridge.nightline.ac.uk](mailto:email@cambridge.nightline.ac.uk)",
                            "Skype: Cambridge.Nightline",
                        ],
                    },
                    {
                        title: "Shout",
                        url: "https://giveusashout.org/",
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
                        url: "https://www.christs.cam.ac.uk/assist",
                        info: [
                            "Contains details about the many services available to anyone wanting to use the Christ's library.",
                        ],
                    },
                    {
                        title: "Disability Resource Centre",
                        url: "https://www.disability.admin.cam.ac.uk/students/advice-support-for-students",
                        info: [
                            "A confidential and accessible service for disabled students and staff supporting them, providing guidance for current and prospective disabled students, developing support programmes and training for University and college staff",
                            "Tell the DRC about your support requirements: [link](https://www.disability.admin.cam.ac.uk/student-information-form)",
                            "To get advice on being assessed for a specific learning difficulty, email with the subject heading 'Diagnostic Assessment'",
                            "Email: [disability@admin.cam.ac.uk](mailto:disability@admin.cam.ac.uk)",
                            "Phone: [01223 332301](tel:01223332301)",
                        ],
                    },
                    {
                        title: "Cambridge SU Disabled Students' Campain",
                        url: "https://www.disabled.cusu.cam.ac.uk/",
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
                        url: "https://switchboard.lgbt/",
                        info: [
                            "A confidential helpline for those who identify as LGBT+",
                            "Instant Messaging: [link](https://switchboard.lgbt/contact)",
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
                        url: "https://intranet.christs.cam.ac.uk/college-grants-and-awards",
                    },
                    {
                        title: "Cambridge SU Finance Page",
                        url: "https://www.cambridgesu.co.uk/advice/information/finance/",
                    },
                    {
                        title: "Christ's Financial Support for Home Students",
                        url: "https://www.christs.cam.ac.uk/admissions/undergraduate-admissions/finances/financial-support-home-students",
                    },
                    {
                        title: "Christ's Financial Support for Overseas Students",
                        url: "https://www.christs.cam.ac.uk/international-students/financial-support",
                    },
                    {
                        title: "Christ's JCR Unified Funding Request Form 2024",
                        url: "https://docs.google.com/forms/d/e/1FAIpQLSf9hatciSfMqo-IH1Vmok2X1MtLizfOlMmk8RViTpVp-dDmzg/viewform?usp=sf_link",
                    },
                ],
            },
            {
                title: "General",
                items: [
                    {
                        title: "Flexible Grant 2023-24",
                        url: "https://forms.office.com/e/kYUFX14fRm",
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
                        url: "https://www.cambridgestudents.cam.ac.uk/cambridge-bursary",
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
                        url: "https://www.cambridgesu.co.uk/advice/information/finance/",
                        info: [
                            "Cambridge SU has a useful page dedicated to resources for financial hardship, linked [here](https://www.cambridgesu.co.uk/advice/information/finance/)",
                            "You can also contact the SU for advice through the [Student Advice Service](https://www.cambridgesu.co.uk/advice/student-advice-service/contact/)",
                        ],
                    },
                ],
            },
            {
                title: "Travel",
                items: [
                    {
                        title: "Long Vacation Travel Grants",
                        url: "https://intranet.christs.cam.ac.uk/college-grants-and-awards",
                        info: [
                            "There are many grants available for summer travel for all students",
                            "You can apply to any applicable grants using a single form, linked on the intranet (link above)",
                            "The deadline is typically around late April",
                        ],
                    },
                    {
                        title: "Easter Vacation Travel Grants",
                        url: "https://intranet.christs.cam.ac.uk/college-grants-and-awards",
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
                        url: "https://docs.google.com/forms/d/e/1FAIpQLSf9hatciSfMqo-IH1Vmok2X1MtLizfOlMmk8RViTpVp-dDmzg/viewform?usp=sf_link",
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
                        url: "https://intranet.christs.cam.ac.uk/college-grants-and-awards",
                        info: [
                            "Support is available for students staying in the Long Vacation for academic reasons",
                            "No specific funding for accomodation is available for the Easter or Christmas vacations (beyond the Flexible Grant)",
                        ],
                    },
                    {
                        title: "Other College Funding",
                        url: "https://intranet.christs.cam.ac.uk/college-grants-and-awards",
                        info: [
                            "There are various other funds for specific causes, like sporting excellence, or furthering humanities' studies",
                            "The Levy-Plumb Fund for Humanities can ve used for long vacation residence in college, language courses, research etc",
                            "Apply via the form on the intranet page linked above",
                        ],
                    },
                    {
                        title: "Other External Awards and Grants",
                        url: "https://intranet.christs.cam.ac.uk/information-other-awards-and-grants",
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
                        url: "https://drive.google.com/drive/folders/1T1LXnm76V5rMzHxrLuzkmb8RMcHhrDBE?usp=drive_link",
                    },
                    {
                        title: "Email Login Instructions",
                        url: "https://docs.google.com/document/d/1B5sLX0fic28d83C9RmUXbpxEsV8sRdGaL9S18sHTVIk/edit?usp=sharing",
                    },
                ],
            },
        ],
    },
};

export default resources;