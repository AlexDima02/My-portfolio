const navBar = document.querySelector('.navbar');
const navBarMobile = document.querySelector('.navbar-mobile');
const delayText = document.querySelectorAll('.delay-text');
const parentText = document.querySelectorAll('.parent');
const slideWrapper = document.querySelector('.interest-carousel');
const slides = document.querySelectorAll('.item');
const element0 = document.getElementById('0');
const element1 = document.getElementById('1');
const element2 = document.getElementById('2');

// Declaring the slides
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');

// Default color of the carousel 
element0.style.color = 'red';

// Project section - animation

const everyTitle = document.querySelectorAll('.project-name');
const textSpan = document.querySelector('.special-word');


// Cursor 
let mouseCursor = document.querySelector('.cursor');
let cursorImage = document.querySelectorAll('.image-project');


// Hover over project headlines
everyTitle.forEach((title) => {

    title.addEventListener('mouseover', (e) => {

        const showBar = e.target.children[0];
        
        showBar.classList.add('active');

    })

    title.addEventListener('mouseout', (e) => {

        const showBar = e.target.children[0];
       
        showBar.classList.remove('active');

    })

    title.addEventListener('mousemove', (e) => {

        cursor(e);
        mouseCursor.classList.add('active');

    })

    title.addEventListener('mouseout', (e) => {

       
        mouseCursor.classList.remove('active');

    })
    
});

const displaySlide = (e) => {
    
    switch(e.target){
        case e.target = element0:
            console.log('slide1');
           slide1.style.display = 'flex';
           slide2.style.display = 'none';
           slide3.style.display = 'none';
        break;
        
        case e.target = element1:
            console.log('slide2');
            // Display the slide
            slide1.style.display = 'none';
            slide2.style.display = 'flex';
            slide3.style.display = 'none';
 
            // Display the description
            
            


        break;
        
        case e.target = element2:
            console.log('slide3');
            slide1.style.display = 'none';
            slide2.style.display = 'none';
            slide3.style.display = 'flex';
        break;
        

    }

}

const moveLeft = (element, mov) => {
    if(element.classList.contains('item')){

        
        slideWrapper.style.transition = '0.5s';
        slideWrapper.style.transform = `translateX(${mov}px)`;
        console.log('ddd');

       // Change color of the slide slected
       

    
        // After trans

        slideWrapper.ontransitionend = () => {
            
            slideWrapper.ontransitionend = null;
            slideWrapper.style.transition = '0s';
            slideWrapper.style.transform = 'translateX(0)';
            
           
        }
    

        
        


    }
    
}


// Reveal elements
window.addEventListener('scroll', reveal);
window.addEventListener('load', textLoad);
window.addEventListener('click', (e) => {
   

    console.log(e.target);
    carousel(e);

});

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

// // Navbar-mobile options
// navBarMobile.addEventListener('mouseover', (bar) => {

    
//     const showBar = bar.target.children[0];
    
//     showBar.classList.add('active');

// })

// navBarMobile.addEventListener('mouseout', (bar) => {

//     const showBar = bar.target.children[0];

    
//     showBar.classList.remove('active');

    

// })

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

// Carousel functionality
// If a specific slide with a specific index is touched, start the movement of the slide to the left
// make a translateX 
// put the first element at the end of the carousel and reset transalteX to 0




function carousel(e){
    // Default element that verify what we click on
    
    // We have to iterate through each element with the class item
    // Depending on which id has, i want to move the wrapper parent with a specific value to the left
   
    switch(e.target){
        case e.target = element0:
            moveLeft(element0, -500);
            slideWrapper.appendChild(element1);  // move the first slide to the end
            slideWrapper.appendChild(element2);
            element0.style.color = 'red';
             element1.style.color = 'gray';
             element2.style.color = 'gray';
             displaySlide(e);
        break;
        
        case e.target = element1:
            moveLeft(element1, -500);
             // Append the items which are not seen at the end of the parent container
             slideWrapper.appendChild(element2);  // move the first slide to the end
             slideWrapper.appendChild(element0);
             element0.style.color = 'gray';
             element1.style.color = 'red';
             element2.style.color = 'gray';
             displaySlide(e);
        break;
        
        case e.target = element2:
            moveLeft(element2, -500);
            slideWrapper.appendChild(element0);  // move the first slide to the end
            slideWrapper.appendChild(element1);
            element0.style.color = 'gray';
            element1.style.color = 'gray';
            element2.style.color = 'red';
            displaySlide(e);
        break;
        

    }

}


// Carousel pseudocod

// [slide0, slide1, slide2] initial position

// Select slide, move parent left
// After transition put the first element the last and reset the parent position


// slide1 -> [slide1, slide2, slide0]
// slide2 -> [slide2, slide0, slide1]
// slide0 -> [slide0, slide1, slide2]

// e-target selects the slides

// Variable that catch the result
// If the variable has the value of an element like element
// Display block the slides according to the option slected

// Cursor animation
cursorImage.forEach((image) => {
    
    image.addEventListener('mousemove', (e) => {
        
        cursor(e);
        mouseCursor.classList.add('active');
        

    });

    image.addEventListener('mouseout', () => {

        mouseCursor.classList.remove('active');
       
    });

});


// Moving the cursor
function cursor(e){
    
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';


}

