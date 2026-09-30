/* =========================
   INTRO
========================= */

const intro = document.getElementById("intro");
const enterBtn = document.getElementById("enterBtn");

enterBtn.addEventListener("click", () => {

    intro.classList.add("hide");

    document.body.classList.remove("no-scroll");

    setTimeout(() => {
        intro.style.display = "none";
    }, 1000);

    // Musik mulai setelah user klik
    music.play().catch(() => {});
});


/* =========================
   CURSOR
========================= */

const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    setTimeout(() => {
        follower.style.left = e.clientX + "px";
        follower.style.top = e.clientY + "px";
    }, 60);

});


/* =========================
   CURSOR HOVER
========================= */

const clickable =
    document.querySelectorAll(
        "button, a, .photo"
    );

clickable.forEach(item => {

    item.addEventListener("mouseenter", () => {

        follower.style.width = "60px";
        follower.style.height = "60px";
        follower.style.background = "#7c394422";

    });

    item.addEventListener("mouseleave", () => {

        follower.style.width = "35px";
        follower.style.height = "35px";
        follower.style.background = "transparent";

    });

});


/* =========================
   SECRET MODAL
========================= */

const secretBtn =
    document.getElementById("secretBtn");

const secretModal =
    document.getElementById("secretModal");

const closeModal =
    document.getElementById("closeModal");

secretBtn.addEventListener("click", () => {

    secretModal.classList.add("active");

    createParticles();

});

closeModal.addEventListener("click", () => {

    secretModal.classList.remove("active");

});

secretModal.addEventListener("click", (e) => {

    if (e.target === secretModal) {
        secretModal.classList.remove("active");
    }

});


/* =========================
   ESC TO CLOSE
========================= */

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {
        secretModal.classList.remove("active");
    }

});


/* =========================
   MUSIC
========================= */

const music =
    document.getElementById("music");

const musicBtn =
    document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (playing) {

        music.pause();
        playing = false;

        musicBtn.innerHTML =
            '<span class="music-icon">♪</span><span>MUSIC</span>';

    } else {

        music.play();
        playing = true;

        musicBtn.innerHTML =
            '<span class="music-icon">♫</span><span>PLAYING</span>';

    }

});


/* =========================
   PARTICLES
========================= */

function createParticles() {

    for (let i = 0; i < 35; i++) {

        const particle =
            document.createElement("div");

        particle.innerHTML =
            Math.random() > 0.5 ? "♡" : "·";

        particle.style.position = "fixed";
        particle.style.left =
            Math.random() * 100 + "vw";

        particle.style.top =
            Math.random() * 100 + "vh";

        particle.style.color = "#a65b66";

        particle.style.fontSize =
            Math.random() * 15 + 8 + "px";

        particle.style.pointerEvents = "none";
        particle.style.zIndex = "5000";

        particle.style.transition =
            "all 2s ease";

        document.body.appendChild(particle);

        setTimeout(() => {

            particle.style.transform =
                `translate(
                    ${(Math.random() - .5) * 300}px,
                    ${(Math.random() - .5) * 500}px
                )`;

            particle.style.opacity = "0";

        }, 50);

        setTimeout(() => {

            particle.remove();

        }, 2200);

    }

}


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".message-text p, .photo, .stats div"
    );

const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";
                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: .15
        }
    );


revealElements.forEach(el => {

    el.style.opacity = "0";
    el.style.transform =
        "translateY(30px)";

    el.style.transition =
        "opacity 1s ease, transform 1s ease";

    observer.observe(el);

});