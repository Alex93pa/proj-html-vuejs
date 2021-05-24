
new Vue({
    el: "#app",
    data: {
        navbarLinks: [{
            text: "Home",
            link: "#",
        },
        {
            text: "About Me",
            link: "#",
        },
        {
            text: "Testimonials",
            link: "#",
        },
        {
            text: "My Blog",
            link: "#",
        },
        {
            text: "Meetups",
            link: "#",
        },
        {
            text: "Shop",
            link: "#",
        },
        {
            text: "Contact Me",
            link: "#",
        },

        // {
        //     text: "dropdown",
        //     link: "#",
        //     icon: "fa-list",
        //     childs: [
        //         {
        //             text: "1",
        //             link:"#"
        //         },
        //         {
        //             text: "2",
        //             link:"#"
        //         },
        //     ]
        // },
    
    
        ],
        footerData: {
            twittData: [
                {
                    text: "contact",
                    link: "#",
                },
                {
                    text: "contact",
                    link: "#",
                },
            ],
            links: [
                {
                    text: "contact",
                    link: "#",
                },
                {
                    text: "contact",
                    link: "#",
                },
            ]
            
        },
        dropdownOpen: false
    },
    methods: {
        onDDClick(el) {
            if (!el.child) {
                return
            }

            this.dropdownOpen = !this.dropdownOpen
        }
    }

})