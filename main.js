document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("scroll-in");
                } else {
                    // Remove the class when the element goes out of view
                    entry.target.classList.remove("scroll-in");
                }
            });
        },
        {
            threshold: 0.2, 
        }
    );

    elements.forEach((element) => observer.observe(element));
});

document.getElementById("menu-toggle").addEventListener("click", () => {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("show");
});
