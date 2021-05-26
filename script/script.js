
new Vue({
    el: "#app",
    data: {
        navbarLinks: [
        {
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

    ],
        footerLinks: [
        {
            text: "Latest Book",
            link: "#",
        },
        {
            text: "Upcoming Event",
            link: "#",
        },
        {
            text: "Recent Articles",
            link: "#",
        },
        {
            text: "Business Enquiries",
            link: "#",
        },
        {
            text: "Visit My Foundation",
            link: "#",
        },
    ]      
    },
    methods: {
        submitBut: (email) => {
            if(!email) {
                alert ("inserisci la tua email per restare aggiornato")
            }else
                alert('Grazie per esserti registrato, riceverai una email appena ci saranno novità!')
        },
    }
})