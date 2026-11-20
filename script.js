"use strict";

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (toggle && nav) {
    toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("open");
        toggle.setAttribute("aria-expanded", String(isOpen));
        toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Toggle navigation");
        toggle.textContent = isOpen ? "×" : "☰";
    });

    nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Toggle navigation");
            toggle.textContent = "☰";
        });
    });

    // Close the mobile menu when the user taps outside it or returns to desktop width.
    document.addEventListener("click", (event) => {
        if (!nav.contains(event.target) && !toggle.contains(event.target)) {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Toggle navigation");
            toggle.textContent = "☰";
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 680) {
            nav.classList.remove("open");
            toggle.setAttribute("aria-expanded", "false");
            toggle.setAttribute("aria-label", "Toggle navigation");
            toggle.textContent = "☰";
        }
    });
}

const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();

// Reveal animation with a fallback for browsers without IntersectionObserver.
const revealItems = document.querySelectorAll(
    ".skill-card, .project-card, .mini-card, .timeline-item, .glass"
);

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries, currentObserver) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealItems.forEach((element) => {
        element.classList.add("reveal");
        observer.observe(element);
    });
} else {
    revealItems.forEach((element) => element.classList.add("visible"));
}
