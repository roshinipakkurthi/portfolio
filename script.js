// Year Auto
document.getElementById("year").textContent = new Date().getFullYear();

// Sidebar Navigation Active Sync
const links = document.querySelectorAll(".nav-link");
const sections = [...links].map(l => document.querySelector(l.getAttribute("href")));

window.addEventListener("scroll", () => {
  let index = sections.findIndex(sec => sec.getBoundingClientRect().top <= 120);
  links.forEach(l => l.classList.remove("active"));
  if(index >= 0) links[index].classList.add("active");
});

// Smooth Scroll on Sidebar Click
links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href"))
      .scrollIntoView({behavior:"smooth"});
  });
});

// Back to Top Button
const toTop = document.getElementById("backToTop");
window.addEventListener("scroll", () => {
  toTop.style.display = window.scrollY > 300 ? "block" : "none";
});
toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Fade-In Reveal Animation on Scroll (C)
const revealElements = document.querySelectorAll('.card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealElements.forEach(el => observer.observe(el));
