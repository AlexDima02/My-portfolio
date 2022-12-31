// Global variables

const descText = document.querySelector('.description-title');
const textSpan = document.querySelector('.special-word');
const imageHover = document.querySelector('.hover-image');
const navBar = document.querySelector('.navbar');
const navBarMobile = document.querySelector('.navbar-mobile');
const everyBtn = document.querySelectorAll('.btn');
const everyTitle = document.querySelectorAll('.project-name');
const delayText = document.querySelectorAll('.delay-text');
const text = document.querySelectorAll('.slide-name');
const gamingText = document.querySelectorAll('#hobby');

const loader = document.querySelector('#pre-loader');
const loaderPercentage = document.querySelector('.pre-loader-percentage');
const removeHeader = document.querySelector('header');
const removeBody = document.querySelector('main');




// Event Listeners

// Header space
// Hover over the options from the header menu
navBar.addEventListener('mouseover', (bar) => {

    const showBar = bar.target.children[0];
   
    showBar.classList.add('active');

})

navBar.addEventListener('mouseout', (bar) => {

    const showBar = bar.target.children[0];

    
    showBar.classList.remove('active');

    

})



// Body space
// Hover over the text

descText.addEventListener('mouseover', () => {

    textSpan.classList.add('active');
    imageHover.classList.add('active');

});

descText.addEventListener('mouseout', () => {
    
    textSpan.classList.remove('active');
    imageHover.classList.remove('active');

});




// Hover over show more btns

everyBtn.forEach((btn) => {

    btn.addEventListener('mouseover', (e) => {

        const showBar = e.target.children[0];
        console.log(showBar);
        showBar.classList.add('active');


    })

    btn.addEventListener('mouseout', (e) => {

        const showBar = e.target.children[0];

        showBar.classList.remove('active');


    })

})

// Reveal elements
window.addEventListener('scroll', reveal);


// Before the page is loaded, force the page to go back to the initial position
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};


// After the load action start, a callback function has a delay of 2000ms until the loading screen disapears
// In this interval we need to follow the progress of the percentage value until it reaches 2000ms
window.addEventListener('load', () => {
    // During the percentage change
    // We have 5 numbers: 70, 50, 30, 10, 0
    // Variable will return each number from the array while the percentage is changing
    // And that variable will assign the changing values to the position of the container  
    let count = -25;
    let arr = [70, 50, 30, 10, 0];
    let counter = 0;
    
   
// Changing position of the percentage value inside the loading screen    
    let changePosition = (number) => {
 
        if(counter === number.length){
            
            return undefined;
            
        }else{

            return number[counter++];

        }
        
        

    }


// Loading screen that lasts 700ms
    let loading = setInterval(() => {
       
        if(count !== 100){
           // As long as it adds numbers to the variable
           // Take the entire container and change the position of the percentage container, then change the percentage value
            // Functionalities inside the loading screen
            count = count + 25;
            loaderPercentage.style.top = changePosition(arr) + '%';
            loaderPercentage.children[0].textContent = count + '%';
            numberDelay();
                

        }else{

            document.body.style.overflow = 'visible';
            removeBody.style.display = 'block';
            loader.style.display = 'none';
            removeHeader.style.position = 'fixed';
            clearInterval();
            
           
        }
        

    }, 700);
                    

});




// Functionalities

// Creating a function that animate elements on scroll

function reveal(){

    const reveals = document.querySelectorAll('.text-reveal');
    const numberReveal = document.querySelectorAll('.number-reveal');
    

    // Reveal text animation
    for(let i = 0; i < reveals.length; i++){
    // give us the height of the viewport
        const windowHeight = window.innerHeight;
        
    // give us the distance from the top of the viewport
        const elementTop = reveals[i].getBoundingClientRect().top;
    // variable that shows the element at our desired distance
        const controlHeight = 0;

    // Shows elements at our specific height

    if(windowHeight < elementTop - controlHeight){

        reveals[i].classList.add('active');
        
    }else{

        reveals[i].classList.remove('active');

    }



    }

    // Reveal number animation
    for(let i = 0; i < numberReveal.length; i++){

    // give us the height of the viewport
        const windowHeight = window.innerHeight;
    // give us the distance from the top of the viewport
        const elementTop = numberReveal[i].getBoundingClientRect().top;
     // variable that shows the element at our desired distance
        const controlHeight = -100;

        if(windowHeight < elementTop - controlHeight){

            numberReveal[i].classList.remove('active');
    
        }else{
    
            numberReveal[i].classList.add('active');
            // Reveal every letter animation
            
        }


    }

    // Reveal every letter animation
    for(let i = 0; i < text.length; i++){

        // give us the height of the viewport
            const windowHeight = window.innerHeight;
        // give us the distance from the top of the viewport
            const elementTop = text[i].getBoundingClientRect().top;
         // variable that shows the element at our desired distance
            const controlHeight = 0;
    
            if(windowHeight < elementTop - controlHeight){
    
                text[i].classList.add('active');
                onDelay(text[i]);

            }else{
        
                text[i].classList.remove('active');
                
                
            }
    
            
            
    
    }

    // Scale every text as we scroll animation
    for(let i = 0; i < gamingText.length; i++){

        // give us the height of the viewport
        const windowHeight = window.innerHeight;
        // give us the distance from the top of the viewport
        const elementTop = gamingText[i].getBoundingClientRect().top;
        
         // variable that shows the element at our desired distance
        const controlHeight = 0;
            if(windowHeight > elementTop - controlHeight){


                gamingText[i].classList.add('active');


            }

    }

    
    
}


// Reveal every letter animation    
// Takes every span and put a class on it in order to animate each letter
function onDelay(parent){

    if(parent.classList.contains('active')){


        delayText.forEach((word) => {

            word.innerHTML = word.innerText.split('').map((letter, index) => {
    
            return `<span class='letter' style='--delay: ${index * 100}ms'>${letter}</span>`;
        
        }).join('');
    
        
        });

        
    }


}



// Reveal numbers percentage with delay

function numberDelay(){

    loaderPercentage.children[0].innerHTML = loaderPercentage.children[0].innerText.split('').map((letter, index) => {

        
        return `<span class='number-delay' style='--delay: ${index * 2000}ms'>${letter}</span>`;


    }).join('');


}








// Problems:
// Stop showing menu mobile type when i put the page in desktop mode
// Create a thank you custom redirect page
// Build an interactive contact page with some 3d models
// Replace images with me
