const navBar = document.querySelector('.navbar');
const navBarMobile = document.querySelector('.navbar-mobile');
const delayText = document.querySelectorAll('.delay-text');
const parentText = document.querySelectorAll('.parent');

// Project section - animation

const everyTitle = document.querySelectorAll('.project-name');
const textSpan = document.querySelector('.special-word');


// Event Listeners

// Reveal elements
window.addEventListener('scroll', reveal);
window.addEventListener('load', textLoad);


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
            
            
        }


    }

    // Reveal every letter animation
    // Parent text being the default refference that activates the animation of each text
    for(let i = 0; i < parentText.length; i++){

        // give us the height of the viewport
            const windowHeight = window.innerHeight;
        // give us the distance from the top of the viewport
            const elementTop = parentText[i].getBoundingClientRect().top;
         // variable that shows the element at our desired distance
            const controlHeight = 0;
    
            if(windowHeight < elementTop - controlHeight){
    
                parentText[i].classList.remove('active');
                
                
            }else{
        
                parentText[i].classList.add('active');
                textLoad(parentText[i]);
                
            }
    
            
            
    
    }

    
}

    // Reveal each big title
function textLoad(parent){

        if(parent.classList.contains('active')){


            delayText.forEach((word) => {

                word.innerHTML = word.innerText.split('').map((letter, index) => {
        
                return `<span class='big-text-letter' style='--delay: ${index * 50}ms'>${letter}</span>`;
            
            }).join('');
        
            
        
            });

            
            
        }


}

