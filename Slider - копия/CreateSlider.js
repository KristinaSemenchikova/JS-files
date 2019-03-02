function Slider() {
    this.imagesSrc = ['IMG/1.jpg', 'IMG/2.jpg', 'IMG/3.jpg', 'IMG/4.jpg', 'IMG/5.jpg', 'IMG/6.jpg'];
    this.nextButton = null;
    this.prevButton = null;
    this.image =  null;
    this.currentImgIndex =  0;
    this.initialEvent = function (elId) {
        var that = this;
        var elSelector = '#'+ elId ; 
        var el = document.querySelector(elSelector);

        this.nextButton = el.querySelector('.next');
        this.prevButton = el.querySelector('.prev');
        this.image = el.querySelector('.slide-img');
        // addEventListener
        this.nextButton.addEventListener('click', function (event) {
            that.onNextButtonClick(event);
        }) ; 
        this.prevButton.addEventListener('click', function (event) {
            that.onPrevButtonClick(event);
        }) ; 
        // image index
        this.image.src = this.imagesSrc[this.currentImgIndex];
        this.prevButton.disabled = true;
    };

    this.onNextButtonClick = function (event) {
        if (this.currentImgIndex < this.imagesSrc.length - 1) {
            this.currentImgIndex++;
            this.image.src = this.imagesSrc[this.currentImgIndex];
            this.prevButton.disabled = false;
        }
        else {
            this.nextButton.disabled = true;
        }
    };

    this.onPrevButtonClick = function (event) {
        if (this.currentImgIndex > 0) {
            this.currentImgIndex--;
            this.image.src = this.imagesSrc[this.currentImgIndex];
            this.nextButton.disabled = false;
        }
        else {
            this.prevButton.disabled = true;
        };
};

}




