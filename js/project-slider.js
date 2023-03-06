let images = [...document.querySelectorAll('.photo')];
// Parent container
const showcaseContainer = document.querySelector('.project-showcase-container');
// Actual slider that needs to move horizontally
const photoSwiper = document.querySelector('.project-photos');
let sliderWidth;
let imageWidth;
let current = 0;
let target = 0;
let ease = .003;

// showcaseContainer is the parent element
// photoSwiper is the child element inside of showcaseContainer

// showcaseContainer.addEventListener("scroll", function(e) {
//     document.body.overflow = 'hidden';
//     // Height of the parent 
//     showcaseContainer.style.height = photoSwiper.clientWidth + 'px';
    
//     // Current distance from the top
//     let scrollDistance = showcaseContainer.scrollTop;
//     console.log(scrollDistance)

//     let progressWidth = (scrollDistance / showcaseContainer.clientHeight) * 100;

   

//     photoSwiper.style.transform = `translateX(${Math.floor(progressWidth + 90)}px)`
//     // // Total showcaseContainer innerHeight
//     // let total = showcaseContainer.clientHeight;
//     // console.log(total)

//     // // Equal the width of the slider with images immerHeight of the parent container
//     // const sizePhoto = photoSwiper.getBoundingClientRect().width;
//     // showcaseContainer.style.height = `${sizePhoto}px`;
    

//     // // Get the distance from the top
//     // let photoSlider = photoSwiper.getBoundingClientRect().top;
//     // console.log(photoSlider)
    
//     // // Get the average per scroll
//     // let per = (current / total);
//     // console.log(per)
//     // photoSwiper.style.transform = `translateX(${(photoSlider * per) + photoSlider}px)`;

// });

// // // Determining the start and end of the animation
function lerp(start, end, t){
    
    return start * (1-t) + end * t;
    
}

// // Moving the slider according to our scroll position
function setTransform(el, transform){

    el.style.transform = transform;


}

// // // Make the scroll 
// // // Establish the height of the parent to scroll on based on the photo-slider width
function init(){
    
    sliderWidth = photoSwiper.getBoundingClientRect().width;
    console.log(sliderWidth)
    imageWidth = sliderWidth / images.length;
    showcaseContainer.style.height = `${sliderWidth}px`;

}

// // // // Animating the movement of the slider
function animate(){

    current = parseFloat(lerp(current, target, ease).toFixed(2));
    // Amount of pixels that we scroll by
    target = showcaseContainer.scrollTop;
    setTransform(photoSwiper, `translateX(${current}%)`);
    requestAnimationFrame(animate);
}

init();
animate();

