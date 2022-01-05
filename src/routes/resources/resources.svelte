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
                            title: "CamCard Balance",
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
                            url: "[https://intranet.christs.cam.ac.uk/mealbooking](https://intranet.christs.cam.ac.uk/Shibboleth.sso/Login?target=%2Fshibboleth%2Flogin%3Fshiblogin%3D1%26destination%3D%2Fmealbooking%2F)",
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
                                "Phone: [01223334900](tel:01223334900)",
                                "Email: [porters@christs.cam.ac.uk](mailto:porters@christs.cam.ac.uk)",
                            ],
                        },
                        {
                            title: "Panther Taxis",
                            url: "https://www.panthertaxis.co.uk",
                            info: [
                                "Phone: [01223715715](tel:01223715715)",
                                "App: [download](https://www.panthertaxis.app/)",
                            ],
                        },
                    ],
                },
            ],
        },
        academic: { title: "Academic", categories: [] },
        careers: { title: "Careers", categories: [] },
        welfare: { title: "Welfare", categories: [] },
    };
</script>
