// // Scroll to top when clicking logo
// const logo = document.querySelector('.site-logo');
// if(logo) {
//   logo.addEventListener('click', function(e) {
//     e.preventDefault();
//     window.scrollTo({top:0, behavior:'smooth'});
//   });
// }

// // Feedback for nav links (static demo only)
// const navLinks = document.querySelectorAll('.nav-links a');
// navLinks.forEach(link => {
//   link.addEventListener('click', function(e) {
//     e.preventDefault();
//     alert('This section will be available soon.');
//   });
// });


// document.getElementById('menu-toggle').addEventListener('click', function () {
//   document.getElementById('nav-links').classList.toggle('active');
// });


document.addEventListener("DOMContentLoaded", function () {
  // Scroll to top when clicking logo
  const logo = document.querySelector('.site-logo');
  if (logo) {
    logo.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Feedback for nav links (static demo only)
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      alert('This section will be available soon.');
      
      // Optionally close the mobile menu
      document.getElementById('nav-links').classList.remove('active');
    });
  });

  // Toggle mobile menu
  const menuToggle = document.getElementById('menu-toggle');
  const navLinksContainer = document.getElementById('nav-links');

 

  if (menuToggle && navLinksContainer) {
    menuToggle.addEventListener('click', function () {
      navLinksContainer.classList.toggle('active');
    });
  }
});

document.getElementById('close-menu').addEventListener('click', function () {
  document.getElementById('nav-links').classList.remove('active');
  document.getElementById('menu-icon').innerHTML = '&#9776;';
});





