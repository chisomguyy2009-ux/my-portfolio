// =========================
// GOOD DAY TYPING ANIMATION
// =========================

const goodDay = document.getElementById("typing3");

const text = "Good Day";
let index = 0;

function typeGoodDay() {

    if (index < text.length) {

        goodDay.textContent += text.charAt(index);
        index++;

        setTimeout(typeGoodDay, 100);

    } else {

        // Wait before deleting
        setTimeout(deleteGoodDay, 1500);
    }
}


function deleteGoodDay() {

    if (index > 0) {

        goodDay.textContent =
            text.substring(0, index - 1);

        index--;

        setTimeout(deleteGoodDay, 70);

    } else {

        // Remove cursor after Good Day disappears
        goodDay.classList.remove("typing-cursor");

        // Fade in the remaining text
        document.querySelectorAll(".fade-text").forEach(function(element, i) {

            setTimeout(function() {

                element.classList.add("show-text");

            }, i * 300);

        });

    }
}


typeGoodDay();


// =========================
// MOBILE MENU
// =========================

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("active");

});


// =========================
// CLOSE MENU AFTER CLICKING A LINK
// =========================

const links = document.querySelectorAll(".nav-links a");

links.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("active");

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {

        formMessage.textContent = "Please fill in all fields.";

        return;
    }

    formMessage.textContent = "Message sent successfully!";

    contactForm.reset();

});


// =========================
// SCROLL TO TOP
// =========================

const scrollTopButton = document.getElementById("scroll-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        scrollTopButton.style.display = "block";

    } else {

        scrollTopButton.style.display = "none";

    }

});


scrollTopButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


// =========================
// SCROLL REVEAL
// =========================

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(function (element) {

        const windowHeight = window.innerHeight;
        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}


window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


// =========================
// DARK / LIGHT MODE
// =========================

const themeToggle =
    document.getElementById("theme-toggle");


themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {

        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "light");

    } else {

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "dark");

    }

});


const savedTheme =
    localStorage.getItem("theme");


if (savedTheme === "light") {

    document.body.classList.add("light-mode");

    themeToggle.textContent = "☀️";

}
