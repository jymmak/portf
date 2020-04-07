const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('#burger-menu');
const ipad = window.matchMedia('screen and (max-width:767px)')
ipad.addListener(validation)

function validation(event) {
  if (event.matches) {
    burgerButton.addEventListener('click', hideShow)
  } else {
    burgerButton.removeEventListener('click', hideShow)
  }
}


function hiddeShow() {
  if (menu.classList.contains('is-active')) {
    menu.classList.remove('is-active');
  } else {
    menu.classList.add('is-active');
  }

}
burgerButton.addEventListener('click', hiddeShow)
