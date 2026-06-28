// ============================================================
// SHOP-CART.JS – Data, Cart Logic, Render Functions
// ============================================================

// ---- DATA ----
export const recipes = [
    { id: 1, title: 'Shiro (Chickpea Stew)', category: 'Traditional', image: '🥣', description: 'Creamy, spiced chickpea flour stew – a daily staple.' },
    { id: 2, title: 'Dirkosh Firfir', category: 'Traditional', image: '🍞', description: 'Flaky bread torn and sautéed with berbere and onions.' },
    { id: 3, title: 'Clarified Spiced Butter (Kibe)', category: 'Essential', image: '🧈', description: 'Rich, fragrant butter infused with herbs and spices.' },
    { id: 4, title: 'Qinche (Cracked Wheat)', category: 'Breakfast', image: '🌾', description: 'Quick, nourishing breakfast with a hint of cardamom.' },
    { id: 5, title: 'Potato Breakfast', category: 'Breakfast', image: '🥔', description: 'Hearty potatoes with berbere and fresh herbs.' },
    { id: 6, title: 'Homemade Lasagna', category: 'Modern', image: '🍝', description: 'Ethiopian‑inspired lasagna with spiced meat sauce.' },
];

export const products = [
    { id: 101, name: 'Berbere', price: 6.99, image: '🌶️', description: 'Signature spicy blend.' },
    { id: 102, name: 'Shiro Duket', price: 5.49, image: '🫘', description: 'Roasted chickpea flour.' },
    { id: 103, name: 'Meklesha Kimem', price: 7.99, image: '🌿', description: 'Aromatic spice mix.' },
    { id: 104, name: 'Beso', price: 4.99, image: '🟤', description: 'Whole grain teff flour.' },
    { id: 105, name: 'Aja', price: 6.49, image: '🧂', description: 'Traditional salt blend.' },
];

export const videos = [
    { id: 201, title: 'How to Make Shiro', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 202, title: 'Berbere 101', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 203, title: 'Quick Breakfast Ideas', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 204, title: 'Clarifying Kibe', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 205, title: 'Fusion Lasagna', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 206, title: 'Spice Tour', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
];

// ---- CART ----
let cart = JSON.parse(localStorage.getItem('melegna_cart')) || [];

function saveCart() {
    localStorage.setItem('melegna_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById('cart-count').textContent = count;
    renderCartModal();
}

export function addToCart(productId) {
    console.log('Adding product ID:', productId);
    const product = products.find(p => p.id === productId);
    if (!product) {
        console.error('Product not found:', productId);
        return;
    }
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart();
    // Visual feedback
    const btn = document.querySelector(`.add-to-cart[data-id="${productId}"]`);
    if (btn) {
        const orig = btn.textContent;
        btn.textContent = '✓ Added!';
        setTimeout(() => { btn.textContent = orig; }, 800);
    }
}

function renderCartModal() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = '<p class="text-obsidian/40 text-sm">Your cart is empty.</p>';
        document.getElementById('cartTotal').textContent = 'Total: $0.00';
        return;
    }
    let html = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
        html += `
            <div class="cart-item">
                <span>${item.image} ${item.name} × ${item.qty}</span>
                <span>$${(item.price * item.qty).toFixed(2)}</span>
            </div>
        `;
    });
    container.innerHTML = html;
    document.getElementById('cartTotal').textContent = `Total: $${total.toFixed(2)}`;
}

// ---- RENDER FUNCTIONS ----
export function renderRecipes(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(r => `
        <div class="recipe-card">
            <div class="text-5xl mb-2">${r.image}</div>
            <h3 class="font-serif text-xl text-obsidian">${r.title}</h3>
            <p class="text-xs text-yellow-dark/60 uppercase tracking-wider mt-1">${r.category}</p>
            <p class="text-obsidian/40 text-sm mt-2">${r.description}</p>
        </div>
    `).join('');
}

export function renderProducts(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(p => `
        <div class="product-card text-center">
            <div class="text-4xl">${p.image}</div>
            <h3 class="font-serif text-lg text-obsidian mt-1">${p.name}</h3>
            <p class="text-obsidian/40 text-xs">${p.description}</p>
            <div class="text-yellow-dark font-bold mt-1">$${p.price.toFixed(2)}</div>
            <button class="add-to-cart mt-2" data-id="${p.id}">Add to Cart</button>
        </div>
    `).join('');
}

export function renderVideos(containerId, data, openVideoCallback) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(v => `
        <div class="video-card cursor-pointer" data-embed="${v.embed}">
            <div class="aspect-video bg-amber-50 rounded-lg flex items-center justify-center text-6xl">▶</div>
            <h3 class="font-serif text-lg text-obsidian mt-2">${v.title}</h3>
        </div>
    `).join('');
    container.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', () => {
            const embed = card.dataset.embed;
            if (openVideoCallback) openVideoCallback(embed);
        });
    });
}

// ---- INIT CART UI ----
export function initCart() {
    // Set up modal events
    const cartModal = document.getElementById('cartModal');
    const cartButton = document.getElementById('cart-button');
    const cartClose = document.getElementById('cartClose');
    const checkoutBtn = document.getElementById('checkoutBtn');

    function openCartModal() {
        cartModal.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeCartModal() {
        cartModal.classList.remove('is-open');
        document.body.style.overflow = '';
    }

    cartButton.addEventListener('click', openCartModal);
    cartClose.addEventListener('click', closeCartModal);
    cartModal.addEventListener('click', (e) => {
        if (e.target === cartModal) closeCartModal();
    });

    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) return alert('Your cart is empty.');
        alert('Thank you for your order! (Demo)');
        cart = [];
        saveCart();
        closeCartModal();
    });

    // Initial render
    updateCartUI();

    // Event delegation for Add to Cart buttons
    document.addEventListener('click', function(e) {
        const target = e.target.closest('.add-to-cart');
        if (target) {
            const id = parseInt(target.dataset.id);
            if (!isNaN(id)) {
                addToCart(id);
            }
        }
    });

    return { closeCartModal };
}
