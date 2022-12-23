const preLoaderContainer = document.querySelector('.pre-loader-secondary');
let loading;

// Before the page is loaded, force the page to go back to the initial position
window.onbeforeunload = function() {
    window.scrollTo(0, 0);
};

window.addEventListener('load', () => {
 

    if(!loading){

// Loading screen that lasts 700ms
    loading = setInterval(() => {

        preLoaderContainer.classList.add('active');
        clearInterval(loading);
        loading = null;       
                
    }, 900);


    }



});
