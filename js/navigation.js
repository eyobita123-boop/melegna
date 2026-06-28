// ============================================================
// NAVIGATION.JS – SPA Routing, Page Switching
// ============================================================

export function initNavigation() {
    const pages = {
        home: document.getElementById('page-home'),
        recipes: document.getElementById('page-recipes'),
        shop: document.getElementById('page-shop'),
        videos: document.getElementById('page-videos'),
        about: document.getElementById('page-about'),
        founder: document.getElementById('page-founder'),
        contact: document.getElementById('page-contact'),
    };
    const navLinks = document.querySelectorAll('.nav-link');
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinksContainer = document.getElementById('navLinks');

    function navigateTo(page) {
        Object.values(pages).forEach(el => el.classList.remove('is-active'));
        const target = pages[page];
        if (target) {
            target.classList.add('is-active');
            target.querySelectorAll('.fade-enter').forEach(el => {
                el.style.animation = 'none';
                void el.offsetHeight;
                el.style.animation = 'fadeIn 0.7s cubic-bezier(0.16,1,0.3,1) forwards';
            });
        }
        navLinks.forEach(link => link.classList.toggle('active', link.dataset.page === page));
        if (navLinksContainer.classList.contains('is-open')) {
            navLinksContainer.classList.remove('is-open');
            mobileToggle.classList.remove('is-open');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.page);
        });
    });

    // Brand / home link
    document.querySelector('[data-page="home"]').addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo('home');
    });

    // Mobile toggle
    mobileToggle.addEventListener('click', () => {
        const isOpen = navLinksContainer.classList.toggle('is-open');
        mobileToggle.classList.toggle('is-open');
        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close mobile nav on link click
    navLinksContainer.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navLinksContainer.classList.remove('is-open');
            mobileToggle.classList.remove('is-open');
            document.body.style.overflow = '';
        });
    });

    return { navigateTo };
}
