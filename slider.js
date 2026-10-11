
const slides = document.getElementById("slides");
const images = slides.querySelectorAll("img");
const dotsContainer = document.getElementById("dots");

let index = 0;
const total = images.length;

// Create navigation dots
images.forEach((image, i) => {
    const dot = document.createElement("button");

    dot.setAttribute("aria-label", "Go to slide " + (i + 1));

    dot.onclick = function () {
        index = i;
        showSlide();
    };

    dotsContainer.appendChild(dot);
});

// Display the selected image
function showSlide() {
    slides.style.transform = `translateX(-${index * 100}%)`;

    document.querySelectorAll(".dots button").forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

// Next image with infinite looping
function nextSlide() {
    index = (index + 1) % total;
    showSlide();
}

// Previous image with infinite looping
function prevSlide() {
    index = (index - 1 + total) % total;
    showSlide();
}

showSlide();
