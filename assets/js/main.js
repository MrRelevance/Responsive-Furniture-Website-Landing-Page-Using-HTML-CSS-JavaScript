/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById("nav-menu");
navToggle = document.getElementById("nav-toggle");
navClose = document.getElementById("nav-close");

/*===== SHOW MENU =====*/
navToggle.addEventListener("click", () => {
	navMenu.classList.add("show-menu");
});

/*===== HIDE MENU =====*/
navClose.addEventListener("click", () => {
	navMenu.classList.remove("show-menu");
});

/*==================== REMOVE MENU ON MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
	const navMenu = document.getElementById("nav-menu");

	navMenu.classList.remove("show-menu");
}
navLink.forEach((link) => link.addEventListener("click", linkAction));

/*==================== CHANGE BACKGROUND HEADER ====================*/
function changeHeaderColor() {
	const nav = document.getElementById("header");

	if (this.scrollY >= 100) nav.classList.add("scroll-header");
	else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", changeHeaderColor);

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id");

function scrollActive() {
	const scrollY = window.pageYOffset;

	sections.forEach((section) => {
		const sectionHeight = section.offsetHeight;
		const sectionTop = section.offsetTop - 50;
		sectionId = section.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.add("active-link");
		} else {
			document
				.querySelector(".nav__menu a[href*=" + sectionId + "]")
				.classList.remove("active-link");
		}
	});
}
window.addEventListener("scroll", scrollActive);

// ============= SWIPER JS FOR PRODUCT SECTION ====================
const swiper = new Swiper(".swiper", {
	// Optional parameters
	loop: true,
	spaceBetween: 32,
	centeredSlides: true,
	grabCursor: true,
	slidesPerView: "auto",

	// Navigation arrows
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
});

// ================ WHY US SECTION ===============
const accordionItems = document.querySelectorAll(".why__accordion-item");

accordionItems.forEach((item) => {
	const accordionHeader = item.querySelector(".why__accordion-header");

	accordionHeader.addEventListener("click", () => {
		const openItem = document.querySelector(".accordion-open");

		toggleItem(item);

		if (openItem && openItem !== item) {
			toggleItem(openItem);
		}
	});
});

const toggleItem = (item) => {
	const accordionContent = item.querySelector(".why__accordion-content");

	if (item.classList.contains("accordion-open")) {
		accordionContent.removeAttribute("style");
		item.classList.remove("accordion-open");
	} else {
		accordionContent.style.height = accordionContent.scrollHeight + "px";
		item.classList.add("accordion-open");
	}
};

/*==================== VIDEO ====================*/
const videoFile = document.getElementById("video-file");
videoButton = document.getElementById("video-button");
videoIcon = document.getElementById("video-icon");

function playPause() {
	if (videoFile.paused) {
		videoFile.play();

		videoIcon.classList.add("ri-pause-line");
		videoIcon.classList.remove("ri-play-line");
	} else {
		videoFile.pause();

		videoIcon.classList.remove("ri-pause-line");
		videoIcon.classList.add("ri-play-line");
	}
}
videoButton.addEventListener("click", playPause);

function finalVideo() {
	videoIcon.classList.remove("ri-pause-line");
	videoIcon.classList.add("ri-play-line");
}
videoFile.addEventListener("ended", finalVideo);

// ============= SCROLLUP ============
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");

	if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

// DARK LIGHT THEME ==================================
const toggleSwitch = document.querySelector(
	'.theme-switch input[type="checkbox"]'
);

const switchTheme = (e) => {
	if (e.target.checked) {
		document.documentElement.setAttribute("data-theme", "dark");
		localStorage.setItem("theme", "dark");
	} else {
		document.documentElement.setAttribute("data-theme", "light");
		localStorage.setItem("theme", "light");
	}
};

const currentTheme = localStorage.getItem("theme")
	? localStorage.getItem("theme")
	: null;

if (currentTheme) {
	document.documentElement.setAttribute("data-theme", currentTheme);

	if (currentTheme === "dark") {
		toggleSwitch.checked = true;
	}
}

toggleSwitch.addEventListener("change", switchTheme);

// ============= SCROLLREVEAL JS ==========
const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 2500,
	delay: 400,
	// reset: true,
});

sr.reveal(
	`.home__title, .product__container, .video__container, .subscribe__container, .footer__container`
);
sr.reveal(`.home__description`, { delay: 500 });
sr.reveal(`.home__btn`, { delay: 600 });
sr.reveal(`.home__data`, { delay: 700 });
sr.reveal(`.brands__img`, { interval: 100 });
sr.reveal(`.why__img, .contact__content`, { origin: "left" });
sr.reveal(`.why__content, .contact__img`, { origin: "right" });
