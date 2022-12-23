const showcaseContainer = document.querySelector('.project-showcase-container');
const closeContainer = document.querySelector('.close-tab');
const photoSwiper = document.querySelector('.project-photos');
const serviceBtn = document.querySelectorAll('.open-tab');
const serviceBtnArr = [...serviceBtn];
let projectImage = [...document.querySelectorAll('#photo-image')];

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
        name: 'Beat Maker',
        roleProject: 'Product Engineering',
        year: 2021,
        desc: 'Are you sure that every iPad has a screen size less than 780px? And every IEMobile device? And that every device that includes any one of those words in the Navigator string is actually one of those devices?'
    },

    project2: {

        name: 'Alex',
        roleProject: 'Product Engineering',
        year: 2019,
        desc: 'Are you sure that every iPad has a screen size less than 780px? And every IEMobile device? And that every device that includes any one of those words in the Navigator string is actually one of those devices?'

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
    let imageProject1 = projectImage.forEach((img, idx) => {

        img.src = `../images/image-project1/${idx+1}.jpg`
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
    let imageProject2 = projectImage.forEach((img, idx) => {

        img.src = `../images/image-project2/${idx+1}.jpg`
     
    })

});



// Close project showcase
closeContainer.addEventListener('click', () => {

    showcaseContainer.classList.remove('active');
    

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
                let imageProject1 = projectImage.forEach((img, idx) => {

                    img.src = `../images/image-project1/${idx+1}.jpg`
                    console.log(img);
                })
            break;

            case 1:
                
                showcaseContainer.classList.add('active');
                nameProject.innerHTML = itemsForProjects.project2.name;
                roleProject.children[1].innerHTML = itemsForProjects.project2.roleProject;
                yearProject.children[1].innerHTML = itemsForProjects.project2.year;
                descProject.children[0].innerHTML= itemsForProjects.project2.desc;
                let imageProject2 = projectImage.forEach((img, idx) => {
            
                    img.src = `../images/image-project2/${idx+1}.jpg`
                 
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