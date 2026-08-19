/* =====================================================
   TOAST
===================================================== */

const toast = document.getElementById("toast");

let toastTimer;


function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");

    clearTimeout(toastTimer);

    toastTimer = setTimeout(() => {

        toast.classList.remove("show");

    }, 2200);
}



/* =====================================================
   DROPDOWN NAVBAR
===================================================== */

const dropdowns =
    document.querySelectorAll(".nav-dropdown");


dropdowns.forEach(dropdown => {

    const button =
        dropdown.querySelector("button");


    button.addEventListener("click", function(event) {

        event.stopPropagation();


        dropdowns.forEach(item => {

            if (item !== dropdown) {

                item.classList.remove("active");

            }

        });


        dropdown.classList.toggle("active");

    });

});



/* Tutup dropdown ketika klik di luar */

document.addEventListener("click", function() {

    dropdowns.forEach(dropdown => {

        dropdown.classList.remove("active");

    });

});



/* =====================================================
   CONTACT BUTTON
===================================================== */

document
    .getElementById("contactButton")
    .addEventListener("click", function() {

        showToast(
            "Terima kasih! Tim OFON siap membantu Anda."
        );

    });



/* =====================================================
   ASESMEN GRATIS
===================================================== */

document
    .getElementById("assessmentButton")
    .addEventListener("click", function() {

        showToast(
            "Form Asesmen Gratis dibuka."
        );

    });



/* =====================================================
   DEMO
===================================================== */

document
    .getElementById("demoButton")
    .addEventListener("click", function() {

        showToast(
            "Demo OFON sedang disiapkan."
        );

    });



/* =====================================================
   LANGUAGE
===================================================== */

document
    .querySelectorAll(".language")
    .forEach(button => {

        button.addEventListener("click", function() {

            const text =
                this.querySelector("span").textContent;

            showToast(
                `Bahasa ${text} dipilih.`
            );

        });

    });



/* =====================================================
   CHAT
===================================================== */

document
    .getElementById("chatButton")
    .addEventListener("click", function() {

        showToast(
            "Halo! Ada yang bisa kami bantu?"
        );

    });



/* =====================================================
   RESPONSIVE SCALE
===================================================== */

function resizePage() {

    const page = document.querySelector(".page");

    if (!page) return;

    // Lebar viewport sebenarnya, tidak termasuk scrollbar
    const viewportWidth = document.documentElement.clientWidth;

    // Ukuran desain asli
    const designWidth = 1536;
    const designHeight = 2048;

    // Scale mengikuti lebar layar
    const scale = Math.min(viewportWidth / designWidth, 1);

    // Scale dari kiri atas
    page.style.transform = `scale(${scale})`;
    page.style.transformOrigin = "top left";

    // Tinggi halaman setelah di-scale
    document.body.style.height = `${designHeight * scale}px`;
}


window.addEventListener("resize", resizePage);

resizePage();

/* =====================================================
   TELEPHONY JAVASCRIPT
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const telephonyButton =
        document.querySelector(".telephony-link");


    /* ================================================
       BUTTON - PELAJARI LEBIH LANJUT
    ================================================ */

    if (telephonyButton) {

        telephonyButton.addEventListener("click", (event) => {

            const targetId =
                telephonyButton.getAttribute("href");

            if (
                targetId &&
                targetId.startsWith("#")
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }
            }

        });

    }


    /* ================================================
       SIMPLE REVEAL ANIMATION
    ================================================ */

    const telephonySection =
        document.querySelector(".telephony-section");

    if (!telephonySection) return;


    const observer =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "telephony-visible"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    observer.observe(telephonySection);

});