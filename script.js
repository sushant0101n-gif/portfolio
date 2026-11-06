// Welcome message
console.log("Welcome to Sushant's Portfolio!");

// Update footer year automatically
const footer = document.querySelector("footer p");

footer.textContent = `© ${new Date().getFullYear()} Sushant Neupane. All rights reserved.`;

// Highlight navigation links when clicked
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

// Add effect when scrolling
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        document.body.classList.add("scrolled");
    } else {
        document.body.classList.remove("scrolled");
    }
});

// Project link interaction
const projectLinks = document.querySelectorAll(".project a");

projectLinks.forEach(link => {
    link.addEventListener("click", function() {
        console.log("Opening project: " + this.textContent);
    });
});