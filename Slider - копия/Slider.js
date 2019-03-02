var currentImgIndex = 0;
// create img array
var imagesSrc = ['IMG/1.jpg', 'IMG/2.jpg', 'IMG/3.jpg', 'IMG/4.jpg', 'IMG/5.jpg', 'IMG/6.jpg'];
// find elements
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');
var image = document.getElementById('slide-img');

function initialEvent () {
// addEventListener
nextButton.addEventListener('click', onNextButtonClick);
prevButton.addEventListener('click', onPrevButtonClick);
// image index
image.src = imagesSrc[currentImgIndex];
prevButton.disabled = true;
}

// functions

function onNextButtonClick(event) {
	if (currentImgIndex < imagesSrc.length - 1) {
		currentImgIndex++;
		image.src = imagesSrc[currentImgIndex];
		prevButton.disabled = false;
	}
	else {
		nextButton.disabled = true;
	}
}

function onPrevButtonClick(event) {
	if (currentImgIndex > 0) {
	currentImgIndex--;
	image.src = imagesSrc[currentImgIndex];
	nextButton.disabled = false;
	}
	else {
		prevButton.disabled = true;
	}
}






/* function makeOperation(operationCode) {
	if (operationCode === 'Next') {
		for (var i = 0; i < imagesSrc.length; i++) {
			var current = imagesSrc[i]. ;
			return current;
		}

	}
	else if (operationCode === 'Previous') {
		for (var i = 0; i < images.length-1; i--) {
			iimages[i].style.display = 'inline-block' ;
		}

	}

	else {
		result = "&";
	}


} */










