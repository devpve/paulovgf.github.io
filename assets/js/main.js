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