let navbar = document.querySelector('.navbar')
let hero = document.querySelector('.hero-cont')
let about = document.querySelector('.about-cont')
let whDo = document.querySelector('.wh-do-cont')
let projects = document.querySelector('.projects-cont')
let mentions = document.querySelector('.mentions-cont')

// set observer options
let fOptions = {
    rootMargin: '0px'
}
let sOptions = {
    rootMargin: '-100px'
}

const animateEntries = entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            console.log('Intersecting', entry)
            entry.target.classList.remove('-translate-y-16')
            entry.target.className += ' transition duration-2000 delay-50 ease-in-out opacity-100 translate-y-0'
        }
    })
}

const firstObserver = new IntersectionObserver((entries, observer) => {
    animateEntries(entries)
}, fOptions)

const secondObserver = new IntersectionObserver((entries, observer) => {
    animateEntries(entries)
}, sOptions)

firstObserver.observe(hero)
firstObserver.observe(about)

secondObserver.observe(whDo)
secondObserver.observe(projects)
secondObserver.observe(mentions)
