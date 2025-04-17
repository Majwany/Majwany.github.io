document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});
// Updated on April 14, 2025
document.querySelectorAll('.project').forEach(project => {
  project.addEventListener('click', () => {
    alert('Project clicked: ' + project.querySelector('h3').textContent);
  });
});
// Show/hide the button when scrolling
window.onscroll = function () {
  const button = document.getElementById('back-to-top');
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
};

// Scroll to top when the button is clicked
document.getElementById('back-to-top').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});