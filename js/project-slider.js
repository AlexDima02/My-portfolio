let images = [...document.querySelectorAll('.photo')];
const showcaseContainer = document.querySelector('.project-showcase-container');
const photoSwiper = document.querySelector('.project-photos');
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = .05;

// Scroll horizontally on the showcase tab
// Based on the scroll diretion, move my photo container
// If deltaY < 0,scroll up and move the container to the left with transform
// If deltaX > 0, scroll down and move the container to the right with transform

// Determining the start and end of the animation
function lerp(start, end, t){

    return start * (1-t) + end * t;
    
}

// Moving the slider according to our scroll position
function setTransform(el, transform){

    el.style.transform = transform


}

// Make the scroll 
function init(){

    sliderWidth = showcaseContainer.getBoundingClientRect().width;
    imageWidth = sliderWidth / images.length;
    document.body.style.height = `${sliderWidth - (window.innerWidth - window.innerHeight)}px`;
}

// Animating the movement of the slider
function animate(){

    current = parseFloat(lerp(current, target, ease).toFixed(2));
    // Amount of pixels that we scroll by
    target = window.scrollY;
    setTransform(photoSwiper, `translateX(${current}px)`);
    requestAnimationFrame(animate);
}

init();
animate();