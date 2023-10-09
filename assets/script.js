const slides = [
	{
		"image": "slide1.jpg",
		"tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image": "slide2.jpg",
		"tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image": "slide3.jpg",
		"tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image": "slide4.png",
		"tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

const banner = document.getElementById("banner");
const bannerImg = banner.querySelector(".banner-img");
const tagLine = banner.querySelector("p");
const leftArrow = banner.querySelector(".arrow_left");
const rightArrow = banner.querySelector(".arrow_right");
const dots = banner.querySelectorAll(".dot");

let currentSlide = 0;

function showSlide(slideIndex) {
	const slide = slides[slideIndex];
	bannerImg.src = `./assets/images/slideshow/${slide.image}`;
	tagLine.innerHTML = slide.tagLine;

	dots.forEach((dot, index) => {
		if (index === slideIndex) {
			dot.classList.add("active");
		} else {
			dot.classList.remove("active");
		}
	});
}
showSlide(0);
function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	showSlide(currentSlide);
}

function prevSlide() {
	currentSlide = (currentSlide - 1 + slides.length) % slides.length;
	showSlide(currentSlide);
}

leftArrow.addEventListener("click", prevSlide);
rightArrow.addEventListener("click", nextSlide);






