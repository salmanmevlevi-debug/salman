
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
});

const elements = document.querySelectorAll(".reveal");

elements.forEach((element) => {
    observer.observe(element);
});