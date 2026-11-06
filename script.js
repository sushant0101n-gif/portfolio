
// Welcome message
console.log("Welcome to Sushant's Portfolio!");

// Show current year in footer
const footer = document.querySelector("footer p");
footer.textContent = `© ${new Date().getFullYear()} Sushant Neupane. All rights reserved.`;

// Highlight navigation link when clicked
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {
        navLinks.forEach(item => {
            item.style.color = "white";
        });

        this.style.color = "#38bdf8";
    });
});

// Back to top message
window.addEventListener("scroll", function() {
    if (window.scrollY > 300) {
        console.log("You are scrolling through the portfolio!");
    }
});
