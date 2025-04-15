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