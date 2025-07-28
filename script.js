const mainLogo = document.getElementById('icon-logo')
const header = document.getElementById('header')
const about = document.getElementById('about')
const aboutSec = document.getElementById('about-sec')
const skills = document.getElementById('skills')
const skillsSec = document.getElementById('skills-sec')
const education = document.getElementById('education')
const educationSec = document.getElementById('education-sec')
const projects = document.getElementById('projects')
const projectsSec = document.getElementById('projects-sec')
const contact = document.getElementById('contact')
const contactSec = document.getElementById('contact-sec')
const experience = document.getElementById('experience')
const experienceSec = document.getElementById('experience-sec')

mainLogo.addEventListener("click", () => {
    header.scrollIntoView({behavior: "smooth"})
})

about.addEventListener("click", () => {
    aboutSec.scrollIntoView({behavior: "smooth"})
})

skills.addEventListener("click", () => {
    skillsSec.scrollIntoView({behavior: "smooth"})
})

experience.addEventListener("click", () => {
    experienceSec.scrollIntoView({behavior: "smooth"})
})

education.addEventListener("click", () => {
    educationSec.scrollIntoView({behavior: "smooth"})
})

projects.addEventListener("click", () => {
    projectsSec.scrollIntoView({behavior: "smooth"})
})

contact.addEventListener("click", () => {
    contactSec.scrollIntoView({behavior: "smooth"})
})