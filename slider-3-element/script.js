const btnForward = document.getElementById("btn-forward");
const btnBack = document.getElementById("btn-back");

// images in html
const images = document.querySelectorAll(".image");

const imagesSrc = [
	'./img/img-001.jpg',
	'./img/img-002.jpg',
	'./img/img-003.jpg',
	'./img/img-004.jpg',
	'./img/img-005.jpg'
];

let i = 1;

// move slider right
btnForward.addEventListener('click', function (event) {

	if (i < imagesSrc.length - 2) {
		images[0].src = imagesSrc[i];
		images[1].src = imagesSrc[i + 1];
		images[2].src = imagesSrc[i + 2];
		i++;
	}

	// for infinite scroll
	else if (i < imagesSrc.length - 1) {
		images[0].src = imagesSrc[i];
		images[1].src = imagesSrc[i + 1];
		images[2].src = imagesSrc[i - (imagesSrc.length - 2)];
		i++;
	}

	else {
		images[0].src = imagesSrc[i];
		images[1].src = imagesSrc[i - (imagesSrc.length - 1)];
		images[2].src = imagesSrc[i - (imagesSrc.length - 2)];
		i = 0;
	}
})

// move slider left
btnBack.addEventListener('click', function (event) {

	if (i > 1) {
		images[0].src = imagesSrc[i - 2];
		images[1].src = imagesSrc[i - 1];
		images[2].src = imagesSrc[i];
		i--;
	}

	// for infinite scroll
	else if (i > 0) {
		images[0].src = imagesSrc[imagesSrc.length - i];
		images[1].src = imagesSrc[i - 1];
		images[2].src = imagesSrc[i];
		i--;
	}

	else {
		images[0].src = imagesSrc[i + (imagesSrc.length - 2)];
		images[1].src = imagesSrc[i + (imagesSrc.length - 1)];
		images[2].src = imagesSrc[i];
		i = imagesSrc.length - 1;
	}
})

