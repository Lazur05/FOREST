const burgerBtn = document.querySelector('.nav__burger');
const burgerBars = document.querySelectorAll('.nav__burger-bar');
const navMenu = document.querySelector('.nav__links--mobile');
const navLinks = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');



const navOpen = () => {
    navMenu.classList.toggle('nav__links--active');
    burgerBars.forEach(bar => {
        bar.classList.toggle('nav__burger-bar--active')
    })
}

const navClose = () => {
    navMenu.classList.remove('nav__links--active');
    burgerBars.forEach(bar => {
        bar.classList.remove('nav__burger-bar--active');
    })
}

const handleScrollSpy = () => {
    const sectionId = [];

    sections.forEach(section => {
        // console.log(window.scrollY);
        // console.log(section.offsetHeight);
        
        if (window.scrollY <= (section.offsetTop + section.offsetHeight) - 100) {
            sectionId.push(section)
            const activeSection = document.querySelector(`[href*="${sectionId[0].id}"]`)
            navLinks.forEach(link => {
                link.classList.remove('nav__link--active')
            })
            activeSection.classList.add('nav__link--active')
        } 
    })

}

const handleCurrentYear = () => {
    const year = new Date().getFullYear()
    footerYear.innerHTML = year
}

window.addEventListener('scroll', handleScrollSpy)

burgerBtn.addEventListener('click', navOpen)

navLinks.forEach(link => {
    link.addEventListener('click', navClose)
})

handleCurrentYear()