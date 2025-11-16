document.addEventListener("DOMContentLoaded", () => {
    const body = document.body;
    const pres = document.querySelectorAll("pre");

    pres.forEach(pre => {
        pre.addEventListener("mouseenter", () => {
            body.classList.add("crt-effect");
        });

        pre.addEventListener("mouseleave", () => {
            body.classList.remove("crt-effect");
        });
    });
});