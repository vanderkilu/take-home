
const leftCtrl = document.querySelector('.carousel__controls-left')
const rightCtrl =  document.querySelector('.carousel__controls-right')
const imageElements = Array.from(document.querySelectorAll('.carousel__img'))
const indicatorElements = Array.from(document.querySelectorAll('.indicator'))



leftCtrl.addEventListener('click', showSlide(-1))
rightCtrl.addEventListener('click', showSlide(1))
indicatorElements.forEach((indicator, i) =>  {
    indicator.addEventListener('click', currentSlide(i+1))
}) 

let start = 1

function showSlide(incrementor) {
    return () => slide(start += incrementor)
}

function currentSlide(index) {
    return ()=> slide(start = index)
}

function slide(incrementor) {

    if (incrementor > imageElements.length) start = 1
    if (incrementor < 1) start = imageElements.length
    imageElements.forEach((imageElement)=> {
        imageElement.classList.add('hide')
    })
    indicatorElements.forEach((indicator) =>  {
        indicator.classList.remove('active')
    })
    imageElements[start-1].classList.remove('hide')
    indicatorElements[start-1].classList.add('active')
}
showSlide(0)()
