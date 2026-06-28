// ============================================================
// NAVIGATION.JS – SPA Routing & Page Switching
// ============================================================

export function initNavigation() {
    const pages = {
        home: document.getElementById('page-home'),
        recipes: document.getElementById('page-recipes'),
        shop: document.getElementById('page-shop'),
        gallery: document.getElementById('page-gallery'),
        blog: document.getElementById('page-blog'),
        videos: document.getElementById('page-videos'),
        about: document.getElementById('page-about'),
        founder: document.getElementById('page-founder'),
        contact: document.getElementById('page-contact'),
    };

    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    const mobileToggle = document.getElementById('mobileToggle');
    const navLinksContainer = document.getElementById('navLinks');

    function navigateTo(page) {
        Object.values(pages).forEach(el => {
            if (el) el.classList.remove('is-active');
        });
        const target = pages[page];
        if (target) {
            target.classList.add('is-active');
            target.querySelectorAll('.fade-enter').forEach(el => {
                el.style.animation = 'none';
                void el.offsetHeight;
                el.style.animation = 'fadeIn 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards';
            });
            // Re-trigger reveal animations
            target.querySelectorAll('.reveal').forEach(el => {
                el.classList.remove('visible');
            });
            setTimeout(() => {
                target.querySelectorAll('.reveal').forEach(el => {
                    const rect = el.getBoundingClientRect();
                    if (rect.top < window.innerHeight - 50) {
                        el.classList.add('visible');
                    }
                });
            }, 100);
        }
        navLinks.forEach(link => link.classList.toggle('active', link.dataset.page === page));
        if (navLinksContainer && navLinksContainer.classList.contains('is-open')) {
            navLinksContainer.classList.remove('is-open');
            if (mobileToggle) mobileToggle.classList.remove('is-open');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = link.dataset.page;
            if (page && pages[page]) {
                navigateTo(page);
            }
        });
    });

    const homeLink = document.querySelector('[data-page="home"]');
    if (homeLink) {
        homeLink.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo('home');
        });
    }

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            const isOpen = navLinksContainer.classList.toggle('is-open');
            mobileToggle.classList.toggle('is-open');
            document.body.style.overflow = isOpen ? 'hidden' : '';
        });
    }

    if (navLinksContainer) {
        navLinksContainer.querySelectorAll('.nav-link[data-page]').forEach(link => {
            link.addEventListener('click', () => {
                navLinksContainer.classList.remove('is-open');
                if (mobileToggle) mobileToggle.classList.remove('is-open');
                document.body.style.overflow = '';
            });
        });
    }

    return { navigateTo };
}
