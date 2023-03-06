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
console.log(cursorImageArr)

// Project section - animation
const everyTitle = document.querySelectorAll('.project-name');
const textSpan = document.querySelector('.special-word');

const thirdProject = document.querySelector('#project3');
const fourthProject = document.querySelector('#project4');
const nameProject = document.querySelector('.info-name');
const roleProject = document.querySelector('#role');
const yearProject = document.querySelector('#year');
const descProject = document.querySelector('.big-description');


// Objects for different slides
const container = {

    project3: {

        name: 'Finance WebApp',
        roleProject: 'Front End Developer',
        year: 2023,
        desc: 'This is a web app that helped me track my budget when I went with an Erasmus grant to study in another country. It was made with React JS, Dixies JS library as a database and Tailwind for the responsive styling.',
        link: 'https://money-keeper-track-your-money.netlify.app/'

    },

    project4: {

        name: 'News WebApp',
        roleProject: 'Front End Developer',
        year: 2023,
        desc: 'News web app that tracks the newest news published and is leverging its API from News API. You can see all the news or you can filter them by date or sort them from the newest to the oldest or vice versa.',
        link: 'https://my-news-portal-web-app.netlify.app/'

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



// Project 3
thirdProject.addEventListener('click', (e) => {
    
    e.preventDefault();
    showcaseContainer.classList.add('active');
    nameProject.innerHTML = container.project3.name;
    roleProject.children[1].innerHTML = container.project3.roleProject;
    yearProject.children[1].innerHTML = container.project3.year;
    descProject.children[0].innerHTML= container.project3.desc;
    projectLink.href = container.project3.link;
    projectLinkMobile.href = container.project3.link;
    
    let imageProject3 = projectImage.forEach((img, idx) => {

        img.src = `../images/image-project3/${idx+1}.png`
     
    })

});

// Project 4
fourthProject.addEventListener('click', (e) => {
    
    e.preventDefault();
    showcaseContainer.classList.add('active');
    nameProject.innerHTML = container.project4.name;
    roleProject.children[1].innerHTML = container.project4.roleProject;
    yearProject.children[1].innerHTML = container.project4.year;
    descProject.children[0].innerHTML= container.project4.desc;
    projectLink.href = container.project4.link;
    projectLinkMobile.href = container.project4.link;
    
    let imageProject4 = projectImage.forEach((img, idx) => {

        img.src = `../images/image-project4/${idx+1}.png`
     
    })

});

// Moving the cursor
function cursor(e){
    
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';


}


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
                nameProject.innerHTML = container.project3.name;
                roleProject.children[1].innerHTML = container.project3.roleProject;
                yearProject.children[1].innerHTML = container.project3.year;
                descProject.children[0].innerHTML= container.project3.desc;
                projectLink.href = container.project3.link;
                projectLinkMobile.href = container.project3.link;

                let imageProject3 = projectImage.forEach((img, idx) => {
            
                    img.src = `../images/image-project3/${idx+1}.png`
                 
                })
                
            break;

            case 1:
                
                showcaseContainer.classList.add('active');
                nameProject.innerHTML = container.project4.name;
                roleProject.children[1].innerHTML = container.project4.roleProject;
                yearProject.children[1].innerHTML = container.project4.year;
                descProject.children[0].innerHTML= container.project4.desc;
                projectLink.href = container.project4.link;
                projectLinkMobile.href = container.project4.link;

                let imageProject4 = projectImage.forEach((img, idx) => {
            
                    img.src = `../images/image-project4/${idx+1}.png`
                 
                })

            break;


        }


    })


})

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