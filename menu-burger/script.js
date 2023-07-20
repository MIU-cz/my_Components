// =======================
// # menu - scroll top
const Header = document.querySelector("#header"); //header section for heights calculate
const NavBar = document.querySelector("#navBar"); //bar section ror scroll

document.addEventListener('scroll', function (event) {
	if (Header.offsetHeight < window.scrollY) {
		NavBar.classList.add('scroll-top');
	}

	else {
		NavBar.classList.remove('scroll-top');
	}
});

// =======================
// # menu - show drop-down menu
const MenuItem = document.querySelectorAll(".menu__item_container"); //menu btn on click
const DropDounItems = document.querySelectorAll(".menu_item_dropdown"); //hidden items 

function hideMenu() {
	DropDounItems.forEach(function (item) {
		item.classList.add('hidden_item');
	})
}

function dropMenu(item) {
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
		else { dropMenu(dropMenuItem); }

	})
});


// =======================
// # menu - burger menu
const BarMenu = document.querySelector("#navBarMenu"); //menu to display/hidden
const BurgerBtn = document.querySelector("#btnBurger"); //burger button
const BodyTag = document.getElementsByTagName("body")[0];

BurgerBtn.addEventListener('click', function () {
	BurgerBtn.classList.toggle("btn_burger-active");
	BodyTag.classList.toggle("scroll_view-lock");
	BarMenu.classList.toggle("navBar__menu_container-active");
})