const hamburger = () => {
  const menu = document.querySelectorAll('.header__menu'),
    hamburger = document.querySelectorAll('.hamburger')

  hamburger.forEach((item, i) => {
    item.addEventListener('click', () => {
      hamburger[i].classList.toggle('hamburger_active')
      menu[i].classList.toggle('menu_active')
    })
  })
}

export default hamburger