const inner = document.querySelector('.slider-wrapper_our-autopark')

const car = [
    {
        name: 'Mercedes Benz V Class',
        passager: '6',
        transmission: 'automatic',
        price: '190$',
        img: 'css/img/slide_one.png'
    },
    {
        name: 'Mercedes Benz S Class',
        passager: '3',
        transmission: 'automatic',
        price: '140$',
        img: 'css/img/slide_two.png'
    },
    {
        name: 'BMW F5 F90 Competition',
        passager: '2',
        transmission: 'manual',
        price: '125$',
        img: 'css/img/slide_three.png'
    }
]

const pagination = document.querySelectorAll('.swipe-block_card')
pagination.forEach((el, index) => el.addEventListener('click', () => {
    pagination.forEach(e => e.classList.remove('visible'))
    el.classList.add('visible')
    inner.innerHTML =
    `
    <div class="slider-wrapper_our-autopark-text">
    <div class="slider-wrapper_our-autopark-name_price">
        <div class="slider-wrapper_our-autopark-name">
            <h2> ${car[index].name}</h2>
        </div>
        <div class="slider-wrapper_our-autopark-price">
            <h2> ${car[index].price} / <span>в час</span></h2>
        </div>
    </div>
    <div class="slider-wrapper_our-autopark-more_image-car">
        <div class="slider-wrapper_our-autopark-more">
            <div class="slider-wrapper_our-autopark_passenger_transmission">
                <div class="slider-wrapper_our-autopark_more-passenger">
                    <h2>Пассажиров: ${car[index].passager}</h2>
                </div>
                <div class="slider-wrapper_our-autopark_more-transmission">
                    <h2>Трансмиссия: ${car[index].transmission}</h2>
                </div>
            </div>
            <a href="booking-contact.html"><button class="slider-wrapper_our-autopark_more-select-button">Выбрать</button></a>
        </div>
        <div class="slider-wrapper_our-autopark_image-car">
            <img src="${car[index].img}" alt="undefined">
        </div>
    </div>
    </div>
    `
}))

const back = document.querySelector('.swipe-block_left-arrow')
const next = document.querySelector('.swipe-block_right-arrow')

back.addEventListener('click', () => {
    
})

next.addEventListener('click', () => {
    console.log(2)
})