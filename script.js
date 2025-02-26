document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Contact Form Validation
    document.querySelector("form").addEventListener("submit", function (e) {
        e.preventDefault();

        let name = document.querySelector("[name='name']").value.trim();
        let email = document.querySelector("[name='email']").value.trim();
        let message = document.querySelector("[name='message']").value.trim();
        let errorMessage = "";

        if (!name) {
            errorMessage += "Please enter your name.\n";
        }
        if (!email) {
            errorMessage += "Please enter your email.\n";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errorMessage += "Please enter a valid email address.\n";
        }
        if (!message) {
            errorMessage += "Please enter your message.\n";
        }

        if (errorMessage) {
            alert(errorMessage);
        } else {
            alert("Form submitted successfully!");
            this.reset(); // Clears the form fields after successful submission
        }
    });

    // Mobile Menu Toggle (if applicable)
    const menuToggle = document.querySelector("#menu-toggle");
    const mobileMenu = document.querySelector("#mobile-menu");

    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
        });
    }
});
