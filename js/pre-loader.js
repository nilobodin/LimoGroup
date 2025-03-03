document.body.onload = function() {
    setTimeout( function(){
        const preloader = document.querySelector('.pre-loader')
        if (!preloader.classList.contains('hide')){
            preloader.classList.add('hide')
        }
    }, 100)
}