/*==== MENU SHOW ====*/
const showMenu = (toggleId, navId) => {
  // get the div we're gonna use to toggle
  const toggle = document.getElementById(toggleId),
  // get the nav we want to show
  nav = document.getElementById(navId);

  // if they exist, if click
  if (toggle && nav){
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    })
  }
}

showMenu('nav-toggle', 'nav-menu');

/*==== ACTIVE AND REMOVE MENU ====*/
// gets all the nav link divs
const navLink = document.querySelectorAll(".nav__link");

// if you click a class it will remove the active
// then add active to the one you clicked
function linkAction(){
  // Active link
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');

  // remove the menu on mobile
  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');
}

// add event listener for the link action on each link
navLink.forEach(n => n.addEventListener('click', linkAction));

// Scrol Reveal Animation
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

// Scroll Home
sr.reveal('.home__title', {});
sr.reveal('.button', {delay: 200});
sr.reveal('.home__img', {delay: 400});
sr.reveal('.home__social-icon', {interval: 200});

// Scroll About
sr.reveal('.about__title', {});
sr.reveal('.about__subtitle', {delay: 200}); 
sr.reveal('.about__text', {delay: 400}); 

// Scroll Skills
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {delay: 200}); 
sr.reveal('.skills__data', {interval: 200}); 
sr.reveal('.skills__img', {delay: 200});

// Scroll Work
sr.reveal('.work__img', {interval: 200});

// Scroll Contact
sr.reveal('.contact__input',  {interval: 200});
