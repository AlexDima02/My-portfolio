// Wrap every letter in a span
const textWrapper = document.querySelector('.contact-title .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");


window.addEventListener('load', () => {

    anime.timeline({loop: 2})
    .add({
        targets: '.contact-title .letter',
        translateY: ["1.1em", 0],
        translateZ: 0,
        duration: 750,
        delay: (el, i) => 50 * i
    }).add({
        targets: '.contact-title',
        opacity: 1,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });


})

