// =======================
// # menu - scroll top
const Header = document.querySelector(".header"); //header section for heights calculate
const NavBar = document.querySelector("#headerNavbar"); //bar section ror scroll

document.addEventListener('scroll', function (event) {
	if (Header.offsetHeight < window.scrollY) {
		NavBar.classList.add('scroll-top');
	}

	else {
		NavBar.classList.remove('scroll-top');
	}
});

// =======================
// # menu - show drop-don menu
const MenuItem = document.querySelectorAll(".navBar__menu_item"); //menu btn on click
const DropDounItems = document.querySelectorAll(".menu_item_dropdown"); //hidden items 

function hideMenu() {
	DropDounItems.forEach(function (item) {
		item.classList.add('hidden_item');
	})
}

function mouseMenu(item) {
	hideMenu();
	item.classList.remove('hidden_item');

	item.addEventListener('mouseleave', function (e) {
		item.classList.add('hidden_item');
	})
};

function accordionMenu(item) {
	item.classList.toggle('hidden_item');
};

MenuItem.forEach(menuClicked => {
	menuClicked.addEventListener('click', function (event) {
		let clickedItem = event.currentTarget;
		let dropMenuItem = clickedItem.querySelector(".menu_item_dropdown");
		let screenWidth = window.innerWidth;

		if (screenWidth < 992) { accordionMenu(dropMenuItem); }
		else { mouseMenu(dropMenuItem); }

	})
});


// =======================
// # menu - burger menu
const BarMenu = document.querySelector("#navbarMenu"); //menu to display/hidden
const BurgerBtn = document.querySelector("#btnBurger"); //burger button
const BodyTag = document.getElementsByTagName("body")[0];

BurgerBtn.addEventListener('click', function () {
	BurgerBtn.classList.toggle("btn_burger-active");
	BodyTag.classList.toggle("scroll_view-lock");
	BarMenu.classList.toggle("container__navBar-active");
})