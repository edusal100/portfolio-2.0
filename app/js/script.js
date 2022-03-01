const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');

btnHamburger.addEventListener('click', function(){
    console.log('click hamburger');
    
    if(header.classList.contains('open')){ //close hamburger menu
        header.classList.remove('open');

    }
    else { // close hamburger menu
        header.classList.add('open');

    }
});