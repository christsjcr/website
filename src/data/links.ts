const links = {
    // calendar subscription links
    calendar: {
        JCR_EVENTS: "https://calendar.google.com/calendar/ical/webmaster%40thejcr.co.uk/public/basic.ics",
        SOC_EVENTS: "https://calendar.google.com/calendar/ical/72ffd45359a103efdda8c306de56f775f3005d51aaed7e8111b8d1f175575157%40group.calendar.google.com/public/basic.ics",
        JCR_EXEC_MEETINGS: "https://calendar.google.com/calendar/ical/da5521c8c3b2c5e4461b8d84e3058d6874f5d6a13cd1f636b9693cfb40b76146%40group.calendar.google.com/public/basic.ics",
        JCR_COUNCIL_MEETINGS: "https://calendar.google.com/calendar/ical/e0ea2c5ec1fb4dba96b45c86b06e46ffb2be9abf8b43ba317c6e9a3bd22d5ce9%40group.calendar.google.com/public/basic.ics",
        JCR_OPEN_MEETINGS: "https://calendar.google.com/calendar/ical/6d53ff189078c025f719062586b21cbb6f84b256915d6f97d13069d25747b8b3%40group.calendar.google.com/public/basic.ics",
        FRESHERS: "https://calendar.google.com/calendar/ical/98f933efaa927a1b41a85f92bba67e064a0270676b3c1241ca901610f556ea84%40group.calendar.google.com/public/basic.ics",
        FRESHERS_OPTIONAL: "https://calendar.google.com/calendar/ical/f47cb082566f93a9a682f20026f24aace73dc0203899ace553a6e54aaf2ca555%40group.calendar.google.com/public/basic.ics",
        FRESHERS_INTERNATIONAL: "https://calendar.google.com/calendar/ical/12976251fe9451b67ab24ac082e838b261fd2521a0a24318890433515993c4c4%40group.calendar.google.com/public/basic.ics"
    },
    // general resources
    general: {
        INTRANET: "https://intranet.christs.cam.ac.uk",
        TUTOR_TIMETABLE: "https://intranet.christs.cam.ac.uksystem/files/2023-10/2023-24%20Undergraduate%20Open%20Tutorial%20Hours_0.pdf",
        CAMCARD_BALANCE: "https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fmealbooking%2FEPOS.aspx",
        PRINTING_BALANCE: "https://www.christs.cam.ac.uk/cp",
        JCR_INSTAGRAM: "https://www.instagram.com/christsjcr/",
        JCR_FACEBOOK: "https://www.facebook.com/ChristsJCR",
        GITHUB: "https://github.com/christsjcr/website",
        COLLEGE_MAP: "https://www.christs.cam.ac.uk/sites/default/files/inline-images/collegemap_1.jpg"
    },
    // upper hall or formal hall related
    meals: {
        UPPER_HALL_MENU: "https://intranet.christs.cam.ac.uk/upper-hall-menus",
        MEAL_BOOKING: "https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fmealbooking%2F",
        MEAL_TIMES: "https://intranet.christs.cam.ac.uk/meal-times"
    },
    facilities: {
        ROOM_BOOKING: "https://christscollege.roombookingsystem.co.uk/overviewday",
        FAULT_REPORTING: "https://intranet.christs.cam.ac.uk/fault-reporting",
        AIRBED: "https://christscollege.roombookingsystem.co.uk/user/overviewweek",
        ROOM_DATABASE: "https://intranet.christs.cam.ac.uk/app/rooms/undergraduate",
        POOL_RULES: "https://docs.google.com/document/d/1mUff1QpIWbGjHwP4iUH2HNjor-md7eKDX2UGbEPFHEk/edit?usp=sharinge"
    },
    // important contacts
    contacts: {
        PORTERS_PHONE: "tel:01223334900",
        PORTERS_EMAIL: "mailto:porters@christs.cam.ac.uk",
        PANTHER_TAXI_WEBSITE: "https://www.panthertaxis.co.uk",
        VEEZU_APP: "https://www.veezu.co.uk/cambridge",
        PANTHER_TAXI_PHONE: "tel:01223715715"
    },
    academic: {
        TIMETABLES: "https://timetable.cam.ac.uk",
        MOODLE: "https://www.vle.cam.ac.uk/login/index.php",
        CHRISTS_LIBRARY_ARCHIVES: "https://www.christs.cam.ac.uk/library-archives",
        CHRISTS_LIBRARY: "https://www.christs.cam.ac.uk/library",
        IDISCOVER: "https://idiscover.lib.cam.ac.uk/primo-explore/search?vid=44CAM_PROD",
        CAMSIS: "https://camsis.cam.ac.uk/psp/ravenprod/?cmd=login",
        CAMCORS: "https://www.camcors.cam.ac.uk/"
    },
    careers: {
        UNI_CAREER_SERVICE: "https://www.careers.cam.ac.uk/",
        HANDSHAKE: "https://www.joinhandshake.co.uk/",
        ALUMNI_DATABASE: "https://alumni.christs.cam.ac.uk/ccc-list"
    },
    welfare: {
        JCR_WELFARE_GUIDE: "https://drive.google.com/file/d/10B4hgiyuOBksYWfDC988anwTu8_0r_fu/view?usp=drive_link",
        JCR_WELFARE_INSTAGRAM: "https://www.instagram.com/christswelfare/",
        COLLEGE_NURSE_BOOKING: "https://christ-college.uk2.cliniko.com/bookings",
        CAM_STUDENT_ADVICE: "https://www.cambridgesu.co.uk/support/advice/",
        CAM_STUDENT_ADVICE_CONTACT: "https://www.cambridgesu.co.uk/support/advice/contact/",
        NHS_LOCAL: "https://www.cpft.nhs.uk/",
        COLLEGE_NURSE: "https://intranet.christs.cam.ac.uk/college-nurse-0",
        ICASH: "https://www.icash.nhs.uk/",
        TOGETHERALL: "https://togetherall.com/en-gb/",
        SAMARITANS: "https://www.samaritans.org/",
        CAM_NIGHTLINE: "https://cambridge.nightline.ac.uk/",
        CAM_NIGHTLINE_MESSAGING: "https://im.cambridge.nightline.ac.uk/webim/",
        SHOUT: "https://giveusashout.org/",
        LIBRARY_ASSISTIVE_RESOURCES: "https://www.christs.cam.ac.uk/assist",
        DISABILITY_RESOURCE_CENTRE: "https://www.disability.admin.cam.ac.uk/students/advice-support-for-students",
        DRC_SUPPORT_FORM: "https://www.disability.admin.cam.ac.uk/student-information-form",
        SU_DISABLED_STUDENTS: "https://www.disabled.cusu.cam.ac.uk/",
        LGBT_SWITCHBOARD: "https://switchboard.lgbt/",
        LGBT_SWITCHBOARD_MESSAGING: "https://switchboard.lgbt/contact",
        LIBRARY_WELLBEING: "https://www.christs.cam.ac.uk/libwellbeing"
    },
    finance: {
        COLLEGE_GRANTS: "https://intranet.christs.cam.ac.uk/college-grants-and-awards",
        SU_FINANCE: "https://www.cambridgesu.co.uk/advice/information/finance/",
        FINANCIAL_SUPPORT_HOME: "https://www.christs.cam.ac.uk/admissions/undergraduate-admissions/finances/financial-support-home-students",
        FINANCIAL_SUPPORT_OVERSEAS: "https://www.christs.cam.ac.uk/international-students/financial-support",
        JCR_FUNDING_REQUEST_FORM: "https://docs.google.com/forms/d/e/1FAIpQLSf9hatciSfMqo-IH1Vmok2X1MtLizfOlMmk8RViTpVp-dDmzg/viewform?usp=sf_link",
        FLEXIBLE_GRANT: "https://forms.office.com/e/kYUFX14fRm",
        CAM_BURSARY: "https://www.cambridgestudents.cam.ac.uk/cambridge-bursary",
        EXTERNAL_GRANTS: "https://intranet.christs.cam.ac.uk/information-other-awards-and-grants"
    },
    // for jcr use (open to college to view for transparency)
    internal: {
        GOOGLE_DRIVE: "https://drive.google.com/drive/folders/1T1LXnm76V5rMzHxrLuzkmb8RMcHhrDBE?usp=drive_link",
        EMAIL_LOGIN_INSTRUCTION: "https://docs.google.com/document/d/1B5sLX0fic28d83C9RmUXbpxEsV8sRdGaL9S18sHTVIk/edit?usp=sharing",
        MINUTES_FOLDER: "https://drive.google.com/drive/folders/1RTdysf_izP9xddA0btJDxFM0a27xDMcQ?usp=sharing",
        UPDATE_SOCIETY_FORM: "https://docs.google.com/forms/d/e/1FAIpQLSfTnmDLCwVwiblfuTXfJzC64iIhH3ooZFJCkNIYG2p-Bn0wWg/viewform?usp=sf_link",
        ALUMNI_WEBSITE_CREDS: "https://drive.google.com/file/d/1uGR_BrL7kvHU0iMnjfRpKJr0jBf09a9d/view?usp=sharing",
        MOTIONS_FORM: "https://docs.google.com/forms/d/e/1FAIpQLSe7RkPfgVW9bJP2ppb6tjeO1PfqJxUTxQ0zhuG_w-l5a0jrKQ/viewform?usp=sf_link",
        MOTIONS_GUIDE: "https://docs.google.com/document/d/1BTGKV1JbIeHLTbFeju-ODMUXd3GqvnZ4v5QOXOCite8/edit?usp=sharing"
    },
    freshers: {
        FRESHERS_GUIDE: "https://drive.google.com/file/d/1hkcOm_ZzY_eRssSob5M_r1E8JYPGnnPO/view?usp=drive_link",
        INTERNATIONAL_GUIDE: "https://drive.google.com/file/d/1NDgzQS0QgJTHbvA60w6Eh2OHJWTZ4Em0/view?usp=drive_link"
    }
}

export default links;