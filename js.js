// ------------------------ Menu Mobile ------------------------
function menuToggle() {
  const menuIcon = document.querySelector('.menu-icon')
  const header = document.querySelector('header')
  const liHeader = header.querySelectorAll('a')


  liHeader.forEach((item) => {
    item.addEventListener('click', () => {
      document.body.classList.toggle('over-hidden')
      header.classList.toggle('nav-ativo')
      menuIcon.classList.toggle('menu-open')
      icomMnu()
    })
  })


  menuIcon.addEventListener('click', () => {

    header.classList.toggle('nav-ativo')
    document.body.classList.toggle('over-hidden')
    menuIcon.classList.toggle('menu-open')
    icomMnu()

  })

  function icomMnu() {
    if (menuIcon.classList.contains('menu-open')) {
      menuIcon.setAttribute('src', "./img/icons/close.png")
    } else {
      menuIcon.setAttribute('src', "./img/icons/menu-closed.png")
    }
  }
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 360) {
      header.classList.add('header-dark')
    } else {
      header.classList.remove('header-dark')
    }
  })

}
menuToggle()
// ------------------------ Menu dropdown ------------------------
function menuDropdown() {
  const liTrabalho = document.querySelector('.trabalhos')
  const liTrabSubmenu = document.querySelector('.trabalhos .submenu')

  liTrabalho.addEventListener('mouseenter', () => {
    liTrabalho.classList.add('trab-ativo')
  })

  liTrabSubmenu.addEventListener('mouseleave', () => {
    liTrabalho.classList.remove('trab-ativo')
  })

}
menuDropdown()






// ------------------------ Progress Bar ------------------------

const progressBar = document.querySelector('.progress')
const alturaJanela = document.body.scrollHeight - window.innerHeight
window.addEventListener('scroll', () => {
  const alturaJanAtual = window.pageYOffset
  let progressBase = (alturaJanAtual * 100) / alturaJanela;
  progressBar.setAttribute('style', `width:${progressBase}%;`)
})

// ------------------------ scroll Suave ------------------------
function scrollSuave() {
  const jsScroll = document.querySelectorAll('.js-scroll')
  const metadeTela = window.innerHeight * 0.8

  function scrollDetect() {

    jsScroll.forEach((item) => {
      const contentTop = item.getBoundingClientRect().top
      const isVisible = (contentTop - metadeTela) < 0
      if (isVisible) {
        item.classList.add("ativo")
      }
    })


  }
  window.addEventListener('scroll', scrollDetect)
}


scrollSuave()


// ------------------------ Slider ------------------------
const page = document.querySelectorAll('.page')
const pageType = document.querySelector('.container-typeSites')
let index = 0
interval = setInterval(() => {
  index++
  if (index == page.length) {
    index = 0
  }
  pageType.scrollTo({
    left: page[index].offsetLeft,
    behavior: 'smooth',
  })


}, 5000);