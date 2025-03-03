
const link1 = document.getElementById('link1')
const link2 = document.getElementById('link2')
const link3 = document.getElementById('link3')
const link4 = document.getElementById('link4')
const link5 = document.getElementById('link5')

link1.addEventListener('click', () => {
    if (confirm("Перейти на сторонний ресурс?") == true) {
        location.href = "https://www.chopard.com/ru-ru"
    }
    else {
        return
    }
})

link2.addEventListener('click', () => {
    if (confirm("Перейти на сторонний ресурс?") == true) {
        location.href = "https://www.geneve.com"
    }
    else {
        return
    }
})

link3.addEventListener('click', () => {
    if (confirm("Перейти на сторонний ресурс?") == true) {
        location.href = "https://www.emirates.com"
    }
    else {
        return
    }
})

link4.addEventListener('click', () => {
    if (confirm("Перейти на сторонний ресурс?") == true) {
        location.href = "https://www.iwc.com/ru/home.html"
    }
    else {
        return
    }
})

link5.addEventListener('click', () => {
    if (confirm("Перейти на сторонний ресурс?") == true) {
        location.href = "https://www.cartier.com"
    }
    else {
        return
    }
})

