const toggler = document.querySelector('.nav-toggle');
const nav = document.querySelector('nav ul');

toggler.addEventListener('click', ()=>{
    nav.classList.toggle('show');
})

// Scroll to Top
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if(window.scrollY > 100){
    mybutton.style.opacity = 1;
  } else {
    mybutton.style.opacity = 0;
  }
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

