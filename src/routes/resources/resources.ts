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
                        url: "https://intranet.christs.cam.ac.uk/system/files/2023-01/2022-23%20Undergraduate%20Open%20Tutorial%20Hours%20%20LT23_0.pdf",
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
                ],
            },
            {
                title: "Contact",
                items: [
                    {
                        title: "Nurse",
                        url: "https://intranet.christs.cam.ac.uk/college-nurse-0",
                        info: [
                            "Email in advance: [nurse@christs.cam.ac.uk](mailto:nurse@christs.cam.ac.uk)",
                            "Mon, Wed: 10:00-12:30 and 14:00-15:30",
                            "Tue, Thu, Fri: 10:30-12:30",
                        ],
                    },
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
                            "Use these [account details](https://drive.google.com/file/d/1JvrxnPYMEckx_guP1zNc3uO9I_qlGOUx/view?usp=sharing) to login (Christ's Undergrads only)",
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
                        title: "Tutor Timetable",
                        url: "https://intranet.christs.cam.ac.uk/system/files/2023-01/2022-23%20Undergraduate%20Open%20Tutorial%20Hours%20%20LT23_0.pdf",
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
                            "You can contact Julen + Olivia by their emails, which can be found on the [committee page](/about/committee).",
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
                            "For enquiries and urgent appointments: [nurse@christs.cam.ac.uk](mailto:nurse@christs.cam.ac.uk)",
                            "Mon, Wed: 10:00-12:30 and 14:00-15:30",
                            "Tue, Thu, Fri: 10:30-12:30",
                            "For regular appointments, see [College Health & Wellbeing Appointments](/resources?search=College%20Health%20%26%20Wellbeing%20Appointments)",
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
};

export default resources;