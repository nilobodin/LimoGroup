const input_subscribe = document.querySelector('.input_subscribe')
const button_subscribe = document.getElementById('subscribe')
let subscribe_text = document.querySelector('.subscribe_text')

button_subscribe.addEventListener('click', ()=> {
  let value = input_subscribe.value
  let value_word = value.split("")
    if (value_word.includes("@")){
      subscribe_text.innerHTML = `<div><p class="correct">Вы успешно подписались на рассылку!</p></div>`
    } else {
      subscribe_text.innerHTML = `<div><p class="incorrect">Неверно указан адрес!</p></div>`
    }
  setTimeout(()=> {
    subscribe_text.innerHTML = `<div><p class="incorrect"></p></div>`
  }, 5000)
  input_subscribe.value = ""
})

