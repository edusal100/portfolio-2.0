const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
    
    if(header.classList.contains('open')){ //close hamburger menu
        header.classList.remove('open');
        overlay.classList.remove('view');

    }
    else { // open hamburger menu
        header.classList.add('open');
        overlay.classList.add('view');

    }
});