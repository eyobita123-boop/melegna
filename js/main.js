// ============================================================
// MAIN.JS – Entry Point
// ============================================================

import { initCursor } from './cursor.js';
import {
    recipes,
    products,
    videos,
    renderRecipes,
    renderProducts,
    renderVideos,
    initCart
} from './shop-cart.js';
import { initVideoPlayer } from './video-player.js';
import { initNavigation } from './navigation.js';

// ---- INIT ----
initCursor();

const { openVideo } = initVideoPlayer();
const { navigateTo } = initNavigation();
const { closeCartModal } = initCart(); // cart modal is now managed in shop-cart.js

// ---- RENDER CONTENT ----
renderRecipes('featuredRecipes', recipes.slice(0, 3));
renderRecipes('allRecipes', recipes);
renderProducts('homeShop', products.slice(0, 4));
renderProducts('shopGrid', products);
renderVideos('videoGrid', videos, openVideo);

// ---- SEARCH ----
const searchInput = document.querySelector('.search-input');
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
document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInput.focus();
    }
});

// ---- CONTACT FORM ----
document.getElementById('contactForm').addEventListener('submit', (e) => {
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

console.log('መለኛ · Melegna — Resourceful Cooking, Every Day.');
