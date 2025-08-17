// Small enhancements for portfolio UX

// Mobile nav toggle
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');
if (hamburger && nav) {
  hamburger.addEventListener('click', () => nav.classList.toggle('open'));
}

// Smooth scrolling for in-page links
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    if (!href || href === '#') return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      nav?.classList.remove('open');
    }
  });
});

// Dynamic year
const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());