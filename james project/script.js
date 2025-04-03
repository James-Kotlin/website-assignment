document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const slides = document.querySelector(".slides");
    let index = 0;

    // Light mode toggle
    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-mode");
    });

    // Image slider functionality
    function slideImages() {
        index++;
        if (index > 2) index = 0;
        slides.style.transform = `translateX(${-index * 100}%)`;
    }

    setInterval(slideImages, 3000);
});
