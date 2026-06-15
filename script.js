```javascript id="m1h0l5"
/* ==========================================
   VINAYAKA PROJECT PAGE
   script.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       NAVBAR SHADOW ON SCROLL
    ========================================== */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 20) {

            navbar.style.boxShadow =
                "0 2px 20px rgba(0,0,0,0.08)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });




    /* ==========================================
       SMOOTH SCROLL WITH OFFSET
    ========================================== */

    const navLinks =
        document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {

        link.addEventListener("click", function (e) {

            e.preventDefault();

            const targetID =
                this.getAttribute("href");

            const targetElement =
                document.querySelector(targetID);

            if (!targetElement) return;

            const navbarHeight =
                navbar.offsetHeight;

            const targetPosition =
                targetElement.offsetTop -
                navbarHeight -
                20;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth"
            });

        });

    });




    /* ==========================================
       ACTIVE NAVIGATION HIGHLIGHT
    ========================================== */

    const sections =
        document.querySelectorAll("section[id]");

    function highlightNavigation() {

        const scrollY = window.pageYOffset;

        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;

            const sectionHeight =
                section.offsetHeight;

            const sectionId =
                section.getAttribute("id");

            const navLink =
                document.querySelector(
                    `.nav-links a[href="#${sectionId}"]`
                );

            if (!navLink) return;

            if (
                scrollY >= sectionTop &&
                scrollY < sectionTop + sectionHeight
            ) {

                navLink.classList.add("active-nav");

            } else {

                navLink.classList.remove("active-nav");

            }

        });

    }

    window.addEventListener(
        "scroll",
        highlightNavigation
    );

    highlightNavigation();




    /* ==========================================
       COPY BIBTEX SUPPORT
       (works if button exists later)
    ========================================== */

    const copyButton =
        document.getElementById("copyBibtex");

    if (copyButton) {

        copyButton.addEventListener(
            "click",
            () => {

                const bibtex =
                    document.querySelector(
                        ".bibtex"
                    );

                if (!bibtex) return;

                navigator.clipboard
                    .writeText(bibtex.innerText)
                    .then(() => {

                        copyButton.innerText =
                            "Copied!";

                        setTimeout(() => {

                            copyButton.innerText =
                                "Copy BibTeX";

                        }, 2000);

                    });

            }
        );
    }




    /* ==========================================
       IMAGE FADE-IN EFFECT
    ========================================== */

    const images =
        document.querySelectorAll(
            ".teaser-image, .method-image"
        );

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible-image"
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }
        );

    images.forEach(image => {

        observer.observe(image);

    });

});



/* ==========================================
   FUTURE SUPPORT
========================================== */

/*
When you add these later:

1. Code button
2. Dataset button
3. Video button
4. BibTeX copy button

No further changes are needed.
The handlers above will automatically work.
*/
```
