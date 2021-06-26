const hamburger = document.getElementsByClassName("hamburger")[0],
	close = document.getElementsByClassName("close")[0],
	mybutton = document.getElementById("myBtn"),
	navbar = document.getElementsByClassName("navbar")[0],
	overlay = document.getElementsByClassName("overlay")[0];
let hero = document.getElementById("hero-section");
let footer = document.getElementsByClassName("footer")[0].clientHeight;
let productNav = document.getElementsByClassName("product-nav")[0];
let heroHeight;
// let bodyDiv = document.getElementById("body-div");

let navbarOpen = !1,
	searchOpen = !1;

hamburger.addEventListener("click", () => {
	navbarOpen = !0;
	navbar.classList.add("navOpen");
}),
	close.addEventListener("click", (e) => {
		e.preventDefault, closeNavBar();
	}),
	overlay.addEventListener("click", (e) => {
		e.preventDefault, closeNavBar();
	});
function closeNavBar() {
	navbarOpen = !1;
	navbar.classList.remove("navOpen");
}
const navicon = document.getElementsByClassName("navicon"),
	deepul = document.getElementsByClassName("deepul"),
	dropIcon = document.getElementsByClassName("dropIcon");
for (let e = 0; e < navicon.length && e < deepul.length; e++)
	navicon[e].addEventListener("click", () => {
		dropIcon[e].classList.toggle("rotate"),
			(dropIcon[e].style.transition = "transform 0.2s ease-in-out"),
			deepul[e].classList.toggle("opendeepul");
	});

window.onscroll = function () {
	heroHeight = hero.clientHeight;
	let footerOffsetY =
		document.documentElement.offsetHeight -
		document.documentElement.clientHeight -
		footer;

	scrollFunction(footerOffsetY);
};

function scrollFunction(test) {
	if (
		document.body.scrollTop >= heroHeight ||
		document.documentElement.scrollTop >= heroHeight
	) {
		productNav.classList.add("start");
	} else {
		productNav.classList.remove("start");
	}
	if (
		document.body.scrollTop >= test ||
		document.documentElement.scrollTop >= test
	) {
		mybutton.style.position = "static";
		productNav.classList.remove("start");

		return;
	}
	if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
		mybutton.style.display = "block";
		mybutton.style.position = "fixed";
		navbar.classList.add("scroll");
		return;
	} else {
		mybutton.style.display = "none";
		navbar.classList.remove("scroll");
	}
}

function topFunction() {
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
