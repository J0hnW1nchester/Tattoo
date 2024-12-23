const nav = document.querySelector('.nav');
window.addEventListener('scroll', fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 280) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}

const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav a');

window.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      navLinks.forEach((link) => {
        link.classList.remove('current');
        if (link.getAttribute('href') === `#${section.id}`) {
          link.classList.add('current');
        }
      });
    }
  });
});
