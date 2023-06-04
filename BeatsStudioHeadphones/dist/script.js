/* OPEN & CLOSE MOBILE MENU */
const navMenu = document.querySelector('#nav-menu'),
   navToggle = document.querySelector('#nav-toggle'),
   navClose = document.querySelector('#nav-close')

/* OPEN MOBILE MENU */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/* CLOSE MOBILE MENU */
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/* CLOSE MOBILE MENU FROM LINKS */
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
   const navMenu = document.querySelector('#nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach((link) => link.addEventListener('click', linkAction))

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
   const header = document.querySelector('#header')
   this.scrollY >= 50
      ? header.classList.add('scroll-header')
      : header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
/* !!!!!!!!!! FIX TRANSITION OUT !!!!!!!!!! */

/*SHOW SCROLLUP*/
function scrollUp() {
   const scrollUp = document.querySelector('#scroll-up')
   this.scrollY >= 200
      ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ACTIVE LINK WHEN SCROLLING SECTIONS */
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
   const scrollY = window.pageYOffset

   sections.forEach((current) => {
      const sectionHeight = current.offsetHeight
      const sectionTop = current.offsetTop - 50
      const sectionId = current.getAttribute('id')

      scrollY > sectionTop && scrollY <= sectionTop + sectionHeight
         ? document
              .querySelector('.nav_menu a[href*=' + sectionId + ']')
              .classList.add('active-link')
         : document
              .querySelector('.nav_menu a[href*=' + sectionId + ']')
              .classList.remove('active-link')
   })
}
window.addEventListener('scroll', scrollActive)
