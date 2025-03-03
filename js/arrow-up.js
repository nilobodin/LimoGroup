const arrow_up = document.querySelector('.scroll-up')
// при скролле вниз на 500px появляется стрелочка наверх
window.addEventListener('scroll', () => {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    if (scrollTop > 500) {
        arrow_up.classList.remove('hidden')
    } else {
        arrow_up.classList.add('hidden')
    }
})
// функционал стрелки, при нажатии она нас возвращает на координаты x0, y0
arrow_up.addEventListener('click', () => {
    window.scrollTo(0, 0)
})


