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
const menuIcon = document.querySelector('.option-mobile');
const containerMenu = document.querySelector('.navbar-mobile');
const closeTab = document.querySelector('#close-tab');
const logo = document.querySelector('.logo');
const menu = document.querySelector('.flex-container');
const loader = document.querySelector('#pre-loader');
const loaderPercentage = document.querySelector('.pre-loader-percentage');
const removeHeader = document.querySelector('header');
const removeBody = document.querySelector('main');

// Cursor 

let mouseCursor = document.querySelector('.cursor');
let cursorImage = document.querySelectorAll('.image-project');


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

// Navbar-mobile options
navBarMobile.addEventListener('mouseover', (bar) => {

    
    const showBar = bar.target.children[0];
    
    showBar.classList.add('active');

})

navBarMobile.addEventListener('mouseout', (bar) => {

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
    
})


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


menuIcon.addEventListener('click', (e) => {
    e.preventDefault();
    menuTab();
    logoDelay();
});

closeTab.addEventListener('click', () => {

    containerMenu.classList.remove('active');
    closeTab.classList.remove('active');
    menuIcon.classList.remove('active');
    document.body.style.overflow = 'auto';
    logo.style.color = 'black';
 
   
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
                if (window.sessionStorage.getItem('Header')) {
                
                    document.querySelector('#heading').classList.remove('letter');
                
                }
                
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

// Reveal each letter from the logo

function logoDelay(){


    if(containerMenu.classList.contains('active')){

       

        logo.children[0].innerHTML = logo.children[0].innerText.split('').map((letter, index) => {


            return `<span class='logo-letter' style='--delay: ${index * 100}ms'>${letter}</span>`

        }).join('');
    
    
    }
}

// Reveal numbers percentage with delay

function numberDelay(){

    loaderPercentage.children[0].innerHTML = loaderPercentage.children[0].innerText.split('').map((letter, index) => {

        
        return `<span class='number-delay' style='--delay: ${index * 2000}ms'>${letter}</span>`;


    }).join('');


}

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

// Mobile menu tab functionality
function menuTab(){
    // Put overflow hidden on body to prvent scrolling on x axis and y axis
    document.body.style.overflow = 'hidden';
    // Change the color of the logo
    logo.style.color = 'white';
   // Open menu tab in a slide up animation
    containerMenu.classList.add('active');
    menuIcon.classList.add('active');
   if(containerMenu.classList.contains('active')){

        closeTab.classList.add('active');
       


   }


    

}

// Parallax effect based on what option we hover on
Array.from(document.getElementsByClassName('option')).forEach((item, index) => {

    item.onmouseover = () => {
        console.log(menu);
        menu.style.setProperty('--active-index',index);

    }


})


// Problems:
// Stop the animation after one animate-iteration
// Stop showing menu mobile type when i put the page in desktop mode