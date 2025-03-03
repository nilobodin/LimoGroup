let time = document.querySelector('.time')
function timer() {
    for (let i = 5; i >= 0; i--) {
      setTimeout(function() {
        time.innerHTML = `${i}`
      }, (5 - i) * 1000);
    }
  }
  
  timer();

  