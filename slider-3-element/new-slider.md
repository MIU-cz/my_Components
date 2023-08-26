# код на чистом js html scss для слайдера из 6 изображений

```html
<div class="slider">
  <div class="slider-track">
    <div class="slide"><img src="image1.jpg" alt="Image 1"></div>
    <div class="slide"><img src="image2.jpg" alt="Image 2"></div>
    <div class="slide"><img src="image3.jpg" alt="Image 3"></div>
    <div class="slide"><img src="image4.jpg" alt="Image 4"></div>
    <div class="slide"><img src="image5.jpg" alt="Image 5"></div>
    <div class="slide"><img src="image6.jpg" alt="Image 6"></div>
  </div>
  <button class="prev">❮</button>
  <button class="next">❯</button>
</div>
```

```scss
.slider {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.slider-track {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
  height: auto;
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

@media (min-width: 768px) {
  
.slide {
    width: calc(100% / 3);
}
  
}
```

```js
const slider = document.querySelector(".slider");
const track = document.querySelector(".slider-track");
const slides = document.querySelectorAll(".slide");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let index = 0; // current slide index
let slideWidth = slides[index].clientWidth; // width of one slide

// update the slide width on window resize
window.addEventListener("resize", function() {
    slideWidth = slides[index].clientWidth;
});

// move the track to the left or right by the slide width
function moveTrack(direction) {
    track.style.transform = `translateX(${direction * index * slideWidth}px)`;
}

// go to the previous slide
function goToPrevSlide() {
    index--;
    if (index < 0) {
        index = slides.length -1; // loop back to the last slide
    }
    moveTrack(1); // move the track to the right
}

// go to the next slide
function goToNextSlide() {
    index++;
    if (index > slides.length -1) {
        index = 0; // loop back to the first slide
    }
    moveTrack(-1); // move the track to the left
}

// add event listeners to the buttons
prev.addEventListener("click", goToPrevSlide);
next.addEventListener("click", goToNextSlide);
```
