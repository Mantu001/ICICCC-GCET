// Scroll to top when clicking logo
const logo = document.querySelector('.site-logo');
if(logo) {
  logo.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({top:0, behavior:'smooth'});
  });
}

// Feedback for nav links (static demo only)
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    alert('This section will be available soon.');
  });
});


document.getElementById('menu-toggle').addEventListener('click', function () {
  document.getElementById('nav-links').classList.toggle('active');
});

