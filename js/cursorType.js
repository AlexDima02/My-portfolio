const showcaseContainer = document.querySelector('.project-showcase-container');
const closeContainer = document.querySelector('.close-tab');
const photoSwiper = document.querySelector('.project-photos');
const serviceBtn = document.querySelectorAll('.open-tab');
const serviceBtnArr = [...serviceBtn];
let projectImage = [...document.querySelectorAll('#photo-image')];
let projectLink = document.getElementById('project-link');
let projectLinkMobile = document.getElementById('project-link-mobile');

// Cursor 
let mouseCursor = document.querySelector('.cursor');
let cursorImage = document.querySelectorAll('.image-project');
let cursorImageArr = [...cursorImage];

// Project section - animation
const everyTitle = document.querySelectorAll('.project-name');
const textSpan = document.querySelector('.special-word');

// Components for the project1
const firstProject = document.querySelector('#project1');
const secondProject = document.querySelector('#project2');
const nameProject = document.querySelector('.info-name');
const roleProject = document.querySelector('#role');
const yearProject = document.querySelector('#year');
const descProject = document.querySelector('.big-description');

// Objects for different slides
const itemsForProjects = {

    project1: {
        
        name: 'BEATMAKER',
        roleProject: 'Product Engineering',
        year: 2021,
        desc: 'Small project that taught me the core concepts of the Javascript, i learned more about storing data in to the local storage in order to save the pads and create a playlist with them and many more about DOM manipulations.',
        link: 'https://beatmaker-create-music.netlify.app/'

    },

    project2: {

        name: 'Weather WebApp',
        roleProject: 'Product Engineering',
        year: 2021,
        desc: 'One of my favourite projects, I learned more about APIs, core concepts, differences between XML and JSON and how we can build apps in an efficient workflow.',
        link: 'https://the-weather-web-app.netlify.app/'

    }

};


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



// Click on project headlines
// Depending on the project change the images
// Project 1
firstProject.addEventListener('click', (e) => {
   
    e.preventDefault();
    showcaseContainer.classList.add('active');
    nameProject.innerHTML = itemsForProjects.project1.name;
    roleProject.children[1].innerHTML = itemsForProjects.project1.roleProject;
    yearProject.children[1].innerHTML = itemsForProjects.project1.year;
    descProject.children[0].innerHTML= itemsForProjects.project1.desc;
    projectLink.href = itemsForProjects.project1.link;
    projectLinkMobile.href = itemsForProjects.project1.link;
    
    let imageProject1 = projectImage.forEach((img, idx) => {
   
        img.src = `../images/image-project1/${idx+1}.png`
        console.log(img);
    })
});

// Project 2
secondProject.addEventListener('click', (e) => {
    
    e.preventDefault();
    showcaseContainer.classList.add('active');
    nameProject.innerHTML = itemsForProjects.project2.name;
    roleProject.children[1].innerHTML = itemsForProjects.project2.roleProject;
    yearProject.children[1].innerHTML = itemsForProjects.project2.year;
    descProject.children[0].innerHTML= itemsForProjects.project2.desc;
    projectLink.href = itemsForProjects.project2.link;
    projectLinkMobile.href = itemsForProjects.project2.link;
    
    let imageProject2 = projectImage.forEach((img, idx) => {

        img.src = `../images/image-project2/${idx+1}.png`
     
    })

});



// Close project showcase
closeContainer.addEventListener('click', (e) => {

    showcaseContainer.classList.remove('active');
    document.body.style.overflow = 'auto';

})


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

// Type on images and display different stuff accroding to the project displayed
cursorImageArr.forEach((img, idx) => {

    img.addEventListener('click', () => {

        switch(idx){
            case 0:
               
                showcaseContainer.classList.add('active');
                nameProject.innerHTML = itemsForProjects.project1.name;
                roleProject.children[1].innerHTML = itemsForProjects.project1.roleProject;
                yearProject.children[1].innerHTML = itemsForProjects.project1.year;
                descProject.children[0].innerHTML= itemsForProjects.project1.desc;
                projectLink.href = itemsForProjects.project1.link;
                projectLinkMobile.href = itemsForProjects.project1.link;

                let imageProject1 = projectImage.forEach((img, idx) => {

                    img.src = `../images/image-project1/${idx+1}.png`
                    console.log(img);
                })
            break;

            case 1:
                
                showcaseContainer.classList.add('active');
                nameProject.innerHTML = itemsForProjects.project2.name;
                roleProject.children[1].innerHTML = itemsForProjects.project2.roleProject;
                yearProject.children[1].innerHTML = itemsForProjects.project2.year;
                descProject.children[0].innerHTML= itemsForProjects.project2.desc;
                projectLink.href = itemsForProjects.project2.link;
                projectLinkMobile.href = itemsForProjects.project2.link;

                let imageProject2 = projectImage.forEach((img, idx) => {
            
                    img.src = `../images/image-project2/${idx+1}.png`
                 
                })
            break;


        }


    })


})


// Moving the cursor
function cursor(e){
    
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';


}


// Service section slide-down tab
serviceBtnArr.forEach((btn, idx) => {

    btn.addEventListener('click', () => {

        switch(idx){
            case 0:
                const windowTab1 = document.querySelector('.bottom-window1');
                windowTab1.classList.toggle('active');
                btn.children[0].classList.toggle('active');
            break;

            case 1:
                const windowTab2 = document.querySelector('.bottom-window2');
                windowTab2.classList.toggle('active');
                btn.children[0].classList.toggle('active');
            break;


        }


    })

})