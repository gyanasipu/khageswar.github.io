const hamburger = document.getElementsByClassName("hamburger")[0];
const close = document.getElementsByClassName("close")[0];

const navbar = document.getElementsByClassName("navbar")[0];
// const searchIcon = document.getElementsByClassName("searchIcon")[0];
let body = document.getElementsByTagName("body")[0];
let navbarOpen = false;
let searchOpen = false;
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

//close nav bar function
function closeNavBar() {
	// e.preventDefault;
	navbarOpen = false;
	const navlins = document.getElementsByClassName("navlins")[0];
	close.classList.remove("forclose");
	navlins.classList.remove("open");
	body.classList.remove("openNav");
}

// for dropdownlinks

// deep links open
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
