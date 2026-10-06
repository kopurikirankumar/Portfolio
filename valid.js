// ==========================================
// PORTFOLIO JAVASCRIPT
// ==========================================


// ==========================================
// 1. MOBILE MENU
// ==========================================

const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {

    menuBtn.addEventListener("click", () => {

        navMenu.classList.toggle("open");

        // Change menu icon
        if (navMenu.classList.contains("open")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });


    // Close menu after clicking a navigation link

    const navLinks =
        document.querySelectorAll("#navMenu a");

    navLinks.forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("open");

            menuBtn.textContent = "☰";

        });

    });

}



// ==========================================
// 2. TYPING ANIMATION
// ==========================================

const typingElement =
    document.getElementById("typing");

const words = [

    "Computer Science Student",

    "Software Developer",

    "Web Developer",

    "Tech Enthusiast"

];

let wordIndex = 0;
let characterIndex = 0;
let isDeleting = false;


function typingAnimation() {

    if (!typingElement) return;

    const currentWord =
        words[wordIndex];


    // Writing text

    if (!isDeleting) {

        characterIndex++;

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex
            );


        // When word is complete

        if (
            characterIndex ===
            currentWord.length
        ) {

            isDeleting = true;

            setTimeout(
                typingAnimation,
                1500
            );

            return;
        }

    }


    // Deleting text

    else {

        characterIndex--;

        typingElement.textContent =
            currentWord.substring(
                0,
                characterIndex
            );


        // When deletion is complete

        if (characterIndex === 0) {

            isDeleting = false;

            wordIndex++;

            if (
                wordIndex >= words.length
            ) {

                wordIndex = 0;

            }

        }

    }


    // Typing speed

    const speed =
        isDeleting ? 50 : 90;

    setTimeout(
        typingAnimation,
        speed
    );

}


// Start typing animation

typingAnimation();



// ==========================================
// 3. SCROLL REVEAL ANIMATION
// ==========================================

const revealElements =
    document.querySelectorAll(
        ".section, .project-card, .skill-card"
    );


const revealObserver =
    new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "show"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});



// ==========================================
// 4. ACTIVE NAVIGATION
// ==========================================

const sections =
    document.querySelectorAll(
        "section[id]"
    );

const navigationLinks =
    document.querySelectorAll(
        "nav a"
    );


window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            if (
                window.scrollY >= sectionTop &&
                window.scrollY <
                sectionTop + sectionHeight
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });


        navigationLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + currentSection
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);



// ==========================================
// 5. NAVBAR BACKGROUND ON SCROLL
// ==========================================

const navbar =
    document.querySelector(".navbar");


window.addEventListener(
    "scroll",
    () => {

        if (!navbar) return;


        if (window.scrollY > 50) {

            navbar.style.background =
                "rgba(7, 17, 31, 0.95)";

            navbar.style.boxShadow =
                "0 10px 30px rgba(0,0,0,0.2)";

        }

        else {

            navbar.style.background =
                "rgba(7, 17, 31, 0.75)";

            navbar.style.boxShadow =
                "none";

        }

    }
);



// ==========================================
// 6. PROJECT BUTTON MESSAGE
// ==========================================

const projectButtons =
    document.querySelectorAll(
        ".project-links a"
    );


projectButtons.forEach(button => {

    button.addEventListener(
        "click",
        function(event) {

            const link =
                this.getAttribute("href");


            // Prevent empty "#" links

            if (
                !link ||
                link === "#"
            ) {

                event.preventDefault();

                alert(
                    "GitHub or Live Demo link will be added here."
                );

            }

        }
    );

});



// ==========================================
// 7. RESUME DOWNLOAD CHECK
// ==========================================

const resumeButton =
    document.querySelector(
        'a[href="resume.pdf"]'
    );


if (resumeButton) {

    resumeButton.addEventListener(
        "click",
        () => {

            console.log(
                "Resume download started."
            );

        }
    );

}



// ==========================================
// 8. CONTACT EMAIL
// ==========================================

const emailLinks =
    document.querySelectorAll(
        'a[href^="mailto:"]'
    );


emailLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            console.log(
                "Opening email application..."
            );

        }
    );

});



// ==========================================
// 9. CURRENT YEAR
// ==========================================

const yearElement =
    document.getElementById("year");


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}



// ==========================================
// 10. PAGE LOADED
// ==========================================

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "loaded"
        );

        console.log(
            "Portfolio loaded successfully!"
        );

    }
);