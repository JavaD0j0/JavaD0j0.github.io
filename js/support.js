document.addEventListener("DOMContentLoaded", () => {
    const uci = document.getElementById("uci");
    const cs = document.getElementById("cs");
    const year = document.getElementById("year");
    const navigationLinks = document.querySelectorAll("#navigation a");

    uci.addEventListener("mouseenter", () => {
        uci.style.backgroundColor = "#00386c";
        uci.style.color = "#f6aa0d";
    });

    uci.addEventListener("mouseleave", () => {
        uci.style.backgroundColor = "#343a40";
        uci.style.color = "whitesmoke";
    });

    cs.addEventListener("mouseenter", () => {
        cs.style.backgroundColor = "#333";
        cs.style.color = "#00cc00";
    });

    cs.addEventListener("mouseleave", () => {
        cs.style.backgroundColor = "#343a40";
        cs.style.color = "whitesmoke";
    });

    year.textContent = new Date().getFullYear();

    navigationLinks.forEach(link => {
        link.addEventListener("click", event => {
            if (link.hash !== "") {
                event.preventDefault();
                const hash = link.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: "smooth"
                });
                history.pushState(null, null, hash);
            }
        });
    });

    document.body.addEventListener("click", event => {
        if (!event.target.closest(".card-body")) {
            document.querySelectorAll(".collapse").forEach(collapse => {
                collapse.classList.remove("show");
            });
        }
    });
});