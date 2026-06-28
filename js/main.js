// ============================================================
// MAIN.JS – Entry Point
// ============================================================

import { initCursor } from './cursor.js';
import {
    recipes,
    products,
    videos,
    testimonials,
    renderRecipes,
    renderProducts,
    renderVideos,
    renderTestimonials,
    initCart
} from './shop-cart.js';
import { initVideoPlayer } from './video-player.js';
import { initNavigation } from './navigation.js';

// ---- INIT ----
initCursor();

const { openVideo } = initVideoPlayer();
const { navigateTo } = initNavigation();
const { closeCartModal } = initCart();

// ---- RENDER CONTENT ----
renderRecipes('featuredRecipes', recipes.slice(0, 3));
renderRecipes('allRecipes', recipes);
renderProducts('homeShop', products.slice(0, 4));
renderProducts('shopGrid', products);
renderVideos('videoGrid', videos, openVideo);
renderTestimonials('testimonials', testimonials);

// ---- VIDEO TRIGGER (Hero) ----
const videoTrigger = document.querySelector('[data-video-trigger]');
if (videoTrigger) {
    videoTrigger.addEventListener('click', () => {
        openVideo('https://www.youtube.com/embed/dQw4w9WgXcQ');
    });
}

// ---- SEARCH ----
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim().toLowerCase();
            if (query.includes('shiro') || query.includes('recipe')) {
                navigateTo('recipes');
            } else if (query.includes('berbere') || query.includes('spice')) {
                navigateTo('shop');
            } else if (query.includes('video')) {
                navigateTo('videos');
            } else {
                alert('Search for: ' + query + ' (demo)');
            }
        }
    });
}
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        if (searchInput) searchInput.focus();
    }
});

// ---- CONTACT FORM ----
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button[type="submit"]');
        const orig = btn.textContent;
        btn.textContent = '✓ Sent!';
        btn.style.background = 'linear-gradient(135deg, #22c55e, #16a34a)';
        btn.style.color = 'white';
        setTimeout(() => {
            btn.textContent = orig;
            btn.style.background = '';
            btn.style.color = '';
            e.target.reset();
        }, 2500);
    });
}

// ---- NEWSLETTER FORM ----
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = e.target.querySelector('input[type="email"]');
        alert(`Thank you for subscribing, ${input.value}! (Demo)`);
        input.value = '';
    });
}

// ---- SCROLL REVEAL (Intersection Observer) ----
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});
revealElements.forEach(el => revealObserver.observe(el));

console.log('መለኛ · Melegna — Premium Ethiopian Culinary Art.');
console.log('✨ World-class experience. Enjoy!');
