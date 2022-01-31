<script lang="ts" context="module">
    interface ResourceItem {
        title: string;
        url: string;
        info?: string[];
    }

    interface ResourceCategory {
        category: string;
        items: ResourceItem[];
    }

    interface ResourcePage {
        title: string;
        categories: ResourceCategory[];
    }

    export const resources: {
        [x: string]: ResourcePage;
    } = {
        college: {
            title: "College Life",
            categories: [
                {
                    category: "General",
                    items: [
                        {
                            title: "Intranet",
                            url: "https://intranet.christs.cam.ac.uk",
                        },
                        {
                            title: "Camcard Balance",
                            url: "https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fmealbooking%2FEPOS.aspx",
                        },
                        {
                            title: "Tutor Timetable",
                            url: "https://intranet.christs.cam.ac.uk/system/files/2021-11/2021-22%20Undergraduate%20Open%20Tutorial%20Hours%20MT21%20FINAL%20%28from%20ST%29.pdf",
                        },
                    ],
                },
                {
                    category: "Meals",
                    items: [
                        {
                            title: "Upper Hall Menu",
                            url: "https://intranet.christs.cam.ac.uk/upper-hall-menus",
                        },
                        {
                            title: "Meal Times",
                            url: "https://intranet.christs.cam.ac.uk/meal-times",
                        },
                        {
                            title: "Meal Booking",
                            url: "https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fmealbooking%2F",
                        },
                    ],
                },
                {
                    category: "Facilities",
                    items: [
                        {
                            title: "Room Booking",
                            url: "https://christscollege.roombookingsystem.co.uk/overviewday",
                        },
                        {
                            title: "Fault Reporting",
                            url: "https://intranet.christs.cam.ac.uk/fault-reporting",
                        },
                    ],
                },
                {
                    category: "Contact",
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
        academicandcareers: {
            title: "Academic & Careers",
            categories: [
                {
                    category: "Study",
                    items: [
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
                    category: "Reports & Results",
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
                    category: "Careers",
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
                    ],
                },
            ],
        },
        welfare: {
            title: "Welfare",
            categories: [
                {
                    category: "General",
                    items: [
                        {
                            title: "Tutor Timetable",
                            url: "https://intranet.christs.cam.ac.uk/system/files/2021-11/2021-22%20Undergraduate%20Open%20Tutorial%20Hours%20MT21%20FINAL%20%28from%20ST%29.pdf",
                            info: [
                                "Shows walk-in / contact hours for tutors",
                                "It is best to visit your own tutor if possible, but you can always see any Tutor without an appointment",
                                "At all times other times (24/7), a Duty Tutor will be available via the porter's lodge",
                            ],
                        },
                        {
                            title: "JCR Welfare Officers",
                            url: "http://localhost:3000/about/roles#Welfare",
                            info: [
                                "Ossie: [welfare-m@thejcr.co.uk](mailto:welfare-m@thejcr.co.uk)",
                                "Christina: [welfare-f@thejcr.co.uk](mailto:welfare-f@thejcr.co.uk)",
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
                    category: "Physical & Sexual Health",
                    items: [
                        {
                            title: "NHS Cambridgeshire and Peterborough",
                            url: "https://www.cpft.nhs.uk/",
                        },
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
                    category: "Mental Health",
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
                    category: "Targeted Support",
                    items: [
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
</script>
