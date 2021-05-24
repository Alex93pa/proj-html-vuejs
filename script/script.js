
new Vue({
    el: "#app",
    data: {
        navbarLinks: [{
            text: "home",
            link: "#",
        },
        {
            text: "contact",
            link: "#",
        },
        {
            text: "contact",
            link: "#",
        },
        {
            text: "dropdown",
            link: "#",
            icon: "fa-list",
            childs: [
                {
                    text: "1",
                    link:"#"
                },
                {
                    text: "2",
                    link:"#"
                },
            ]
        },
    
    
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