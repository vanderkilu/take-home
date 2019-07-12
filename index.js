
const leftCtrl = document.querySelector('.carousel__controls-left')
const rightCtrl =  document.querySelector('.carousel__controls-right')
const images = document.querySelectorAll('.carousel__img')

showSlide(0)()

leftCtrl.addEventListener('click', showSlide(-1))
rightCtrl.addEventListener('click', showSlide(1))

function showSlide(incrementor) {
    return slide(incrementor)
}

function slide(incrementor) {
    let start = 1
    const imageElements = Array.from(images)

    return ()=> {
        start += incrementor
        if (start > imageElements.length) start = 1
        if (start < 1) start = imageElements.length
        imageElements.forEach((imageElement)=> {
            imageElement.classList.add('hide')
        })
        imageElements[start-1].classList.remove('hide')
        
    }
    
}
