const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
toggle?.addEventListener("click", () => { const open = nav.classList.toggle("open"); toggle.setAttribute("aria-expanded", String(open)); });
document.querySelectorAll(".nav a").forEach(link => link.addEventListener("click", () => { nav.classList.remove("open"); toggle?.setAttribute("aria-expanded", "false"); }));
document.getElementById("year").textContent = new Date().getFullYear();
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll(".skill-card,.project-card,.mini-card,.timeline-item,.glass").forEach(el => { el.classList.add("reveal"); observer.observe(el); });
