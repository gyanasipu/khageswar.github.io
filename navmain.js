const hamburger = document.getElementsByClassName("hamburger")[0];
const close = document.getElementsByClassName("close")[0];
const contentFooter = document.getElementById("content-footer");
const navbar = document.getElementsByClassName("navbar")[0];
const searchIcon = document.getElementsByClassName("searchIcon")[0];
let body = document.getElementsByTagName("body")[0];
console.log(body);
const searchClose = document.getElementById("search-close");
const rightIcons = document.getElementsByClassName("right-icons")[0];
let navbarOpen = false;
let searchOpen = false;
// for search icon
searchIcon.addEventListener("click", (e) => {
	if (navbarOpen) return; //notgood see check
	e.preventDefault;
	searchOpen = true;
	navbar.classList.add("searchActive");
});
searchClose.addEventListener("click", (e) => {
	e.preventDefault;
	searchOpen = false;
	navbar.classList.remove("searchActive");
});

//for nav bar open
hamburger.addEventListener("click", () => {
	// console.log("click");
	navbarOpen = true;
	close.classList.add("forclose");
	const navlins = document.getElementsByClassName("navlins")[0];
	navlins.classList.add("open");
	//for body dark
	body.classList.add("openNav");

	// dont work search
});
// close navbar by close buttom
close.addEventListener("click", (e) => {
	e.preventDefault;
	closeNavBar();
	// work search
});
// close nav bar by presing content and footer
contentFooter.addEventListener("click", (e) => {
	if (searchClose) {
		e.preventDefault;
		searchOpen = false;
		navbar.classList.remove("searchActive");
	}
	if (navbarOpen) {
		closeNavBar();
		// work search
	}
});
// close nav bar by restof nav bar
document.onclick = function (e) {
	if (navbarOpen) {
		if (
			e.target.classList[0] == "navbar" ||
			e.target.classList[0] == "right-icons"
		) {
			//close navbar
			closeNavBar();
		}
	}
};
//close nav bar function
function closeNavBar(e) {
	// e.preventDefault;
	navbarOpen = false;
	const navlins = document.getElementsByClassName("navlins")[0];
	close.classList.remove("forclose");
	navlins.classList.remove("open");
	body.classList.remove("openNav");
}

// for dropdownlinks
const navicon = document.getElementsByClassName("navicon");
const deepul = document.getElementsByClassName("deepul");
const dropIcon = document.getElementsByClassName("dropIcon");
for (let i = 0; i < navicon.length && i < deepul.length; i++) {
	navicon[i].addEventListener("click", () => {
		dropIcon[i].classList.toggle("rotate");
		dropIcon[i].style.transition = "transform 0.2s ease-in-out";
		deepul[i].classList.toggle("opendeepul");
	});
}
