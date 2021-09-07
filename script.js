// selectors
const body = document.body
const slides = document.querySelectorAll('.slide')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right') 

let activeSlide = 0 

// event listeners
rightBtn.addEventListener('click', () => {
    activeSlide++

    if ( activeSlide > slides.length - 1) {
        activeSlide = 0
    }

    setBgToBody()
    setActiveSlide()
})

leftBtn.addEventListener('click', () => {
    activeSlide--

    if ( activeSlide < 0) {
        activeSlide = slides.length-1
    }

    setBgToBody()
    setActiveSlide()
})

// setBgToBody()

// functions
setBgToBody()

function setBgToBody() {
    body.style.backgroundImage = slides[activeSlide].style.backgroundImage
    //here we are setting image of active slide to background 
}

function setActiveSlide() {
    slides.forEach((slide) => slide.classList.remove('active'))

    slides[activeSlide].classList.add('active')
}