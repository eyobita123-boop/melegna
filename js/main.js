// ============================================================
// MAIN.JS – Entry Point
// ============================================================

import { initCursor } from './cursor.js';
import {
    recipes,
    products,
    videos,
    testimonials,
    galleryImages,
    blogPosts,
    renderRecipes,
    renderProducts,
    renderVideos,
    renderTestimonials,
    renderGallery,
    renderBlog,
    initCart
} from './shop-cart.js';
import { initVideoPlayer } from './video-player.js';
import { initNavigation } from './navigation.js';

// ---- INIT ----
initCursor();

const { openVideo } = initVideoPlayer();
const { navigateTo } = initNavigation();
const { closeCartModal } = initCart();

// ---- IMAGE LIGHTBOX ----
const imageLightbox = document.getElementById('imageLightbox');
const lightboxImage = document.getElementById('lightboxImage');
const imageLightboxClose = document.getElementById('imageLightboxClose');

function openImageLightbox(emoji, title) {
    lightboxImage.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><text y="160" font-size="120" text-anchor="middle" fill="%23F5F0E8">${emoji}</text></svg>`;
    imageLightbox.classList.add('is-open');
    document.body.style.overflow = 'hidden';
}

function closeImageLightbox() {
    imageLightbox.classList.remove('is-open');
    document.body.style.overflow = '';
}

if (imageLightboxClose) {
    imageLightboxClose.addEventListener('click', closeImageLightbox);
}
if (imageLightbox) {
    imageLightbox.addEventListener('click', (e) => {
        if (e.target === imageLightbox) closeImageLightbox();
    });
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeImageLightbox();
    }
});

// Expose for gallery click
window.openImageLightbox = openImageLightbox;

// ---- BLOG POST POPUP ----
function openBlogPost(post) {
    alert(`📖 ${post.title}\n\n${post.excerpt}\n\nCategory: ${post.category}\nDate: ${post.date}\nAuthor: ${post.author}\n\n(Full post coming soon!)`);
}

window.openBlogPost = openBlogPost;

// ---- RENDER CONTENT ----
renderRecipes('featuredRecipes', recipes.slice(0, 3));
renderRecipes('allRecipes', recipes);
renderProducts('homeShop', products.slice(0, 4));
renderProducts('shopGrid', products);
renderVideos('videoGrid', videos, openVideo);
renderTestimonials('testimonials', testimonials);
renderGallery('galleryGrid', galleryImages);
renderBlog('blogGrid', blogPosts);

// ---- GALLERY FILTER ----
document.querySelectorAll('.gallery-filter').forEach(filterBtn => {
    filterBtn.addEventListener('click', () => {
        document.querySelectorAll('.gallery-filter').forEach(btn => btn.classList.remove('active'));
        filterBtn.classList.add('active');
        const filter = filterBtn.dataset.filter;
        renderGallery('galleryGrid', galleryImages, filter);
    });
});

// ---- BLOG SEARCH ----
const blogSearch = document.getElementById('blogSearch');
if (blogSearch) {
    blogSearch.addEventListener('input', (e) => {
        renderBlog('blogGrid', blogPosts, e.target.value);
    });
}

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
            } else if (query.includes('gallery') || query.includes('photo')) {
                navigateTo('gallery');
            } else if (query.includes('blog') || query.includes('story')) {
                navigateTo('blog');
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

// ---- SCROLL REVEAL ----
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
console.log('✨ Gallery & Blog pages added! Enjoy.');
