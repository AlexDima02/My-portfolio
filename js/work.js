const navBar = document.querySelector('.navbar');
const navBarMobile = document.querySelector('.navbar-mobile');
const delayText = document.querySelectorAll('.delay-text');
const parentText = document.querySelectorAll('.parent');
const text = document.querySelectorAll('.slide-name');

// Project section - animation

const everyTitle = document.querySelectorAll('.project-name');
const textSpan = document.querySelector('.special-word');


// Event Listeners

// Reveal elements
window.addEventListener('scroll', reveal);



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



