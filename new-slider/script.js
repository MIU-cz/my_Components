const slider = document.querySelector(".slider");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

// Дублируем изображения в начале и в конце слайдера
const firstClone = slider.firstElementChild.cloneNode(true);
const lastClone = slider.lastElementChild.cloneNode(true);
slider.appendChild(firstClone);
slider.insertBefore(lastClone, slider.firstElementChild);

let currentIndex = 1; // Устанавливаем начальное значение равным 1

nextButton.addEventListener("click", () => {
	currentIndex++;
	slide();
});

prevButton.addEventListener("click", () => {
	currentIndex--;
	slide();
});

function slide() {
	const translateX = -currentIndex * 100;
	slider.style.transition = "transform 0.5s ease-in-out";
	slider.style.transform = `translateX(${translateX}%)`;

	// Проверяем, если слайдер перешел в начало или конец, возвращаем его на соответствующий слайд
	if (currentIndex === slider.children.length - 1) {
		setTimeout(() => {
			currentIndex = 1;
			slider.style.transition = "none";
			slider.style.transform = `translateX(-${currentIndex * 100}%)`;
		}, 500);
	} else if (currentIndex === 0) {
		setTimeout(() => {
			currentIndex = slider.children.length - 2;
			slider.style.transition = "none";
			slider.style.transform = `translateX(-${currentIndex * 100}%)`;
		}, 500);
	}
}

// Автоматическая прокрутка слайдера
let autoSlideInterval = setInterval(() => {
	currentIndex++;
	slide();
}, 3000);

// Остановка автоматической прокрутки при наведении курсора на слайдер
slider.addEventListener("mouseenter", () => {
	clearInterval(autoSlideInterval);
});

// Возобновление автоматической прокрутки при уходе курсора с слайдера
slider.addEventListener("mouseleave", () => {
	autoSlideInterval = setInterval(() => {
		currentIndex++;
		slide();
	}, 3000);
});
