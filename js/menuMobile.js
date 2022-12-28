const logo = document.querySelector('.logo');
const menuIcon = document.querySelector('.option-mobile');
const containerMenu = document.querySelector('.navbar-mobile');
const navBar = document.querySelector('.navbar');
const navBarMobile = document.querySelector('.navbar-mobile');
const closeTab = document.querySelector('#close-tab');
const menu = document.querySelector('.flex-container');

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

// // Reveal each letter from the logo
function logoDelay(){


    if(containerMenu.classList.contains('active')){

       

        logo.children[0].innerHTML = logo.children[0].innerText.split('').map((letter, index) => {


            return `<span class='logo-letter' style='--delay: ${index * 100}ms'>${letter}</span>`

        }).join('');
    
    
    }
}



// // Mobile menu tab functionality
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