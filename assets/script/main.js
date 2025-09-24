const wrappers = document.querySelectorAll(".img-wrapper");
let current = 0;

setInterval(() => {
    wrappers[current].classList.remove("active");
    current = (current + 1) % wrappers.length;
    wrappers[current].classList.add("active");
}, 3000);
//-----------------------------------------------------------
const wrapper = document.querySelector(".products-wrapper");
const btnLeft = document.querySelector(".slide-btn.left");
const btnRight = document.querySelector(".slide-btn.right");
const scrollStep = 220;
const delay = 500;


const cards = Array.from(document.querySelectorAll(".product-card"));
cards.forEach((card) => {
    const clone = card.cloneNode(true);
    wrapper.appendChild(clone);
});

let autoScroll = setInterval(() => {
    wrapper.scrollBy({ left: scrollStep, behavior: "smooth" });


    if (
        wrapper.scrollLeft + wrapper.clientWidth >=
        wrapper.scrollWidth - scrollStep
    ) {
        setTimeout(() => {
            wrapper.scrollTo({ left: 0, behavior: "auto" });
        }, 500);
    }
}, delay);


const sidebar = document.getElementById("sidebar");
const menuBtn = document.querySelector(".fa-bars");
const closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    sidebar.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("active");
});