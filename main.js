const hamburger = document.getElementsByClassName("hamburger")[0],
	close = document.getElementsByClassName("close")[0],
	mybutton = document.getElementById("myBtn"),
	navsection = document.getElementsByClassName("navsection")[0],
	navbar = document.getElementsByClassName("navbar")[0],
	overlay = document.getElementsByClassName("overlay")[0];
let body = document.getElementsByTagName("body")[0],
	navbarOpen = !1,
	searchOpen = !1;
function closeNavBar() {
	navbarOpen = !1;
	document.getElementsByClassName("navlins")[0];
	close.classList.remove("forclose"),
		navbar.classList.remove("open"),
		body.classList.remove("openNav"),
		(mybutton.style.display = "flex");
}
hamburger.addEventListener("click", () => {
	(navbarOpen = !0),
		close.classList.add("forclose"),
		navbar.classList.add("open"),
		(mybutton.style.display = "none");
}),
	close.addEventListener("click", (e) => {
		e.preventDefault, closeNavBar();
	}),
	overlay.addEventListener("click", (e) => {
		e.preventDefault, closeNavBar();
	});
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
	navbarOpen || scrollFunction();
};
let latScrollTop = 0;
function scrollFunction() {
	let e =
		window.pageYOffset ||
		document.documentElement.scrollTop ||
		document.body.scrollTop;
	e > 40
		? ((mybutton.style.display = "flex"),
		  (navsection.style.transform = "translateY(-100%)"))
		: (mybutton.style.display = "none"),
		e <= latScrollTop && (navsection.style.transform = "translateY(0%)"),
		(latScrollTop = e <= 0 ? 0 : e),
		requestAnimationFrame;
}
function topFunction() {
	(document.body.scrollTop = 0), (document.documentElement.scrollTop = 0);
}
