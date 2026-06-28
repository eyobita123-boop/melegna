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
    { id: 101, name: 'Berbere', price: 6.99, image: '🌶️', description: 'Signature spicy blend.', origin: 'Shewa, Ethiopia', harvest: 'Harvest 2025' },
    { id: 102, name: 'Shiro Duket', price: 5.49, image: '🫘', description: 'Roasted chickpea flour.', origin: 'Gondar, Ethiopia', harvest: 'Harvest 2024' },
    { id: 103, name: 'Meklesha Kimem', price: 7.99, image: '🌿', description: 'Aromatic spice mix.', origin: 'Harar, Ethiopia', harvest: 'Harvest 2025' },
    { id: 104, name: 'Beso', price: 4.99, image: '🟤', description: 'Whole grain teff flour.', origin: 'Tigray, Ethiopia', harvest: 'Harvest 2024' },
    { id: 105, name: 'Aja', price: 6.49, image: '🧂', description: 'Traditional salt blend.', origin: 'Afar, Ethiopia', harvest: 'Harvest 2025' },
];

export const videos = [
    { id: 201, title: 'How to Make Shiro', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 202, title: 'Berbere 101', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 203, title: 'Quick Breakfast Ideas', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 204, title: 'Clarifying Kibe', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 205, title: 'Fusion Lasagna', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
    { id: 206, title: 'Spice Tour', embed: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
];

export const testimonials = [
    { name: 'Amanuel T.', quote: 'Melegna brought the taste of my grandmother\'s kitchen to my home. The berbere is unmatched.', avatar: '👨🏿‍🍳' },
    { name: 'Helen M.', quote: 'I never knew cooking Ethiopian food could be so easy and authentic. Shiro recipe is now a weekly staple.', avatar: '👩🏿‍🍳' },
    { name: 'David K.', quote: 'The spice blends are incredible – you can taste the tradition in every dish. Highly recommend.', avatar: '👨🏿‍🍳' },
];

// ---- GALLERY DATA ----
export const galleryImages = [
    { id: 1, title: 'Traditional Coffee Ceremony', category: 'culture', emoji: '☕', description: 'The heart of Ethiopian hospitality.' },
    { id: 2, title: 'Berbere Spice Market', category: 'spices', emoji: '🌶️', description: 'Vibrant colors and aromatic blends.' },
    { id: 3, title: 'Injera Baking', category: 'food', emoji: '🫓', description: 'Perfecting the art of sourdough flatbread.' },
    { id: 4, title: 'Teff Harvest', category: 'culture', emoji: '🌾', description: 'The ancient grain of Ethiopia.' },
    { id: 5, title: 'Shiro Preparation', category: 'food', emoji: '🍲', description: 'A comforting chickpea stew tradition.' },
    { id: 6, title: 'Ethiopian Spice Blends', category: 'spices', emoji: '🟤', description: 'The secret behind every dish.' },
    { id: 7, title: 'Community Cooking', category: 'people', emoji: '👩🏿‍🍳', description: 'Food brings us together.' },
    { id: 8, title: 'Kibe (Clarified Butter)', category: 'food', emoji: '🧈', description: 'Infused with herbs and tradition.' },
    { id: 9, title: 'Spice Grinding Stone', category: 'culture', emoji: '🪨', description: 'Ancient tools, modern flavors.' },
    { id: 10, title: 'Ethiopian Feast (Doro Wat)', category: 'food', emoji: '🍗', description: 'A celebration of flavors.' },
    { id: 11, title: 'Market Colors', category: 'spices', emoji: '🎨', description: 'Ethiopia\'s vibrant spice palette.' },
    { id: 12, title: 'Family Recipe', category: 'people', emoji: '👨🏿‍🍳', description: 'Passing down culinary wisdom.' },
];

// ---- BLOG DATA ----
export const blogPosts = [
    {
        id: 1,
        title: 'The Art of Ethiopian Coffee Ceremony',
        excerpt: 'Discover the ancient ritual that brings communities together over a cup of coffee.',
        category: 'Culture',
        date: 'June 25, 2026',
        readTime: '5 min read',
        emoji: '☕',
        author: 'Selam Alemayehu'
    },
    {
        id: 2,
        title: 'Spice Guide: Berbere Beyond the Basics',
        excerpt: 'Explore the rich history and complex flavors of Ethiopia\'s most iconic spice blend.',
        category: 'Spices',
        date: 'June 22, 2026',
        readTime: '4 min read',
        emoji: '🌶️',
        author: 'Selam Alemayehu'
    },
    {
        id: 3,
        title: '10 Kitchen Hacks from Ethiopian Grandmothers',
        excerpt: 'Time-tested wisdom passed down through generations of Ethiopian cooks.',
        category: 'Kitchen Tips',
        date: 'June 18, 2026',
        readTime: '6 min read',
        emoji: '👵🏿',
        author: 'Selam Alemayehu'
    },
    {
        id: 4,
        title: 'Injera: The Soul of Ethiopian Cuisine',
        excerpt: 'Everything you need to know about Ethiopia\'s beloved sourdough flatbread.',
        category: 'Food',
        date: 'June 15, 2026',
        readTime: '5 min read',
        emoji: '🫓',
        author: 'Selam Alemayehu'
    },
    {
        id: 5,
        title: 'Modern Ethiopian: Fusion Recipes for Today',
        excerpt: 'How traditional Ethiopian flavors are inspiring contemporary cuisine worldwide.',
        category: 'Modern',
        date: 'June 10, 2026',
        readTime: '4 min read',
        emoji: '🍝',
        author: 'Selam Alemayehu'
    },
    {
        id: 6,
        title: 'The Spice Route: Ethiopian Cuisine in Context',
        excerpt: 'Understanding the cultural and historical influences on Ethiopian cooking.',
        category: 'History',
        date: 'June 5, 2026',
        readTime: '7 min read',
        emoji: '📖',
        author: 'Selam Alemayehu'
    },
];

// ---- CART ----
let cart = JSON.parse(localStorage.getItem('melegna_cart')) || [];

function saveCart() {
    localStorage.setItem('melegna_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    const countEl = document.getElementById('cart-count');
    if (countEl) countEl.textContent = count;
    renderCartModal();
}

export function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart();
    const btn = document.querySelector(`.add-to-cart[data-id="${productId}"]`);
    if (btn) {
        const orig = btn.textContent;
        btn.textContent = '✓ Added!';
        setTimeout(() => { btn.textContent = orig; }, 800);
    }
}

export function updateQuantity(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    const newQty = item.qty + delta;
    if (newQty <= 0) {
        cart = cart.filter(i => i.id !== productId);
    } else {
        item.qty = newQty;
    }
    saveCart();
}

function renderCartModal() {
    const container = document.getElementById('cartItems');
    if (!container) return;
    if (cart.length === 0) {
        container.innerHTML = '<p class="text-cream/40 text-sm">Your cart is empty.</p>';
        const totalEl = document.getElementById('cartTotal');
        if (totalEl) totalEl.textContent = 'Total: $0.00';
        return;
    }
    let html = '';
    let total = 0;
    cart.forEach(item => {
        total += item.price * item.qty;
        html += `
            <div class="cart-item" data-id="${item.id}">
                <div class="flex items-center gap-2">
                    <span>${item.image}</span>
                    <span>${item.name}</span>
                </div>
                <div class="flex items-center gap-2">
                    <button class="qty-btn" data-id="${item.id}" data-delta="-1">−</button>
                    <span class="qty-num">${item.qty}</span>
                    <button class="qty-btn" data-id="${item.id}" data-delta="1">+</button>
                    <span class="ml-2">$${(item.price * item.qty).toFixed(2)}</span>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
    const totalEl = document.getElementById('cartTotal');
    if (totalEl) totalEl.textContent = `Total: $${total.toFixed(2)}`;

    container.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const id = parseInt(btn.dataset.id);
            const delta = parseInt(btn.dataset.delta);
            if (!isNaN(id) && !isNaN(delta)) {
                updateQuantity(id, delta);
            }
        });
    });
}

// ---- RENDER FUNCTIONS ----
export function renderRecipes(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(r => `
        <div class="recipe-card">
            <div class="text-5xl mb-2">${r.image}</div>
            <h3 class="font-serif text-xl text-cream">${r.title}</h3>
            <p class="text-xs text-gold/60 uppercase tracking-wider mt-1">${r.category}</p>
            <p class="text-cream/40 text-sm mt-2">${r.description}</p>
        </div>
    `).join('');
}

export function renderProducts(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(p => `
        <div class="product-card text-center">
            <div class="text-4xl">${p.image}</div>
            <h3 class="font-serif text-lg text-cream mt-1">${p.name}</h3>
            <p class="text-cream/40 text-xs">${p.description}</p>
            <div class="origin">${p.origin}</div>
            <div class="harvest">${p.harvest}</div>
            <div class="text-gold font-bold mt-1">$${p.price.toFixed(2)}</div>
            <button class="add-to-cart mt-2" data-id="${p.id}">Add to Cart</button>
        </div>
    `).join('');
}

export function renderVideos(containerId, data, openVideoCallback) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(v => `
        <div class="video-card cursor-pointer" data-embed="${v.embed}">
            <div class="aspect-video bg-coffee/50 rounded-lg flex items-center justify-center text-6xl">▶</div>
            <h3 class="font-serif text-lg text-cream mt-2">${v.title}</h3>
        </div>
    `).join('');
    container.querySelectorAll('.video-card').forEach(card => {
        card.addEventListener('click', () => {
            const embed = card.dataset.embed;
            if (openVideoCallback) openVideoCallback(embed);
        });
    });
}

export function renderTestimonials(containerId, data) {
    const container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = data.map(t => `
        <div class="testimonial-card text-center">
            <div class="text-4xl mb-2">${t.avatar}</div>
            <p class="text-cream/80 text-sm italic">"${t.quote}"</p>
            <div class="text-gold/60 text-sm mt-3">— ${t.name}</div>
        </div>
    `).join('');
}

// ---- GALLERY RENDER ----
export function renderGallery(containerId, data, filter = 'all') {
    const container = document.getElementById(containerId);
    if (!container) return;
    const filtered = filter === 'all' ? data : data.filter(item => item.category === filter);
    container.innerHTML = filtered.map(item => `
        <div class="gallery-item cursor-pointer" data-id="${item.id}" data-category="${item.category}">
            <div class="aspect-square bg-coffee/30 rounded-xl flex items-center justify-center text-7xl hover:scale-110 transition-transform duration-300 relative overflow-hidden group">
                <span class="absolute inset-0 bg-gradient-to-t from-obsidian/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
                <span class="relative">${item.emoji}</span>
                <div class="absolute bottom-0 left-0 right-0 p-4 text-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <p class="text-cream text-xs font-medium">${item.title}</p>
                </div>
            </div>
        </div>
    `).join('');

    // Click to open lightbox
    container.querySelectorAll('.gallery-item').forEach(el => {
        el.addEventListener('click', () => {
            const id = parseInt(el.dataset.id);
            const image = data.find(i => i.id === id);
            if (image && window.openImageLightbox) {
                window.openImageLightbox(image.emoji, image.title);
            }
        });
    });
}

// ---- BLOG RENDER ----
export function renderBlog(containerId, data, searchTerm = '') {
    const container = document.getElementById(containerId);
    if (!container) return;
    const filtered = searchTerm ? data.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    ) : data;

    container.innerHTML = filtered.map(post => `
        <div class="blog-card" data-id="${post.id}">
            <div class="text-5xl mb-3">${post.emoji}</div>
            <div class="flex items-center gap-2 text-xs text-gold/60 mb-2">
                <span>${post.category}</span>
                <span>•</span>
                <span>${post.date}</span>
                <span>•</span>
                <span>${post.readTime}</span>
            </div>
            <h3 class="font-serif text-xl text-cream hover:text-gold transition-colors cursor-pointer">${post.title}</h3>
            <p class="text-cream/40 text-sm mt-2">${post.excerpt}</p>
            <div class="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                <span class="text-cream/30 text-xs">By ${post.author}</span>
                <button class="text-gold/60 hover:text-gold text-sm font-medium read-more" data-id="${post.id}">Read More →</button>
            </div>
        </div>
    `).join('');

    // Read More click
    container.querySelectorAll('.read-more').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = parseInt(btn.dataset.id);
            const post = data.find(p => p.id === id);
            if (post && window.openBlogPost) {
                window.openBlogPost(post);
            }
        });
    });
}

// ---- INIT CART UI ----
export function initCart() {
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

    if (cartButton) cartButton.addEventListener('click', openCartModal);
    if (cartClose) cartClose.addEventListener('click', closeCartModal);
    if (cartModal) {
        cartModal.addEventListener('click', (e) => {
            if (e.target === cartModal) closeCartModal();
        });
    }

    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            if (cart.length === 0) return alert('Your cart is empty.');
            alert('Thank you for your order! (Demo)');
            cart = [];
            saveCart();
            closeCartModal();
        });
    }

    updateCartUI();

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
