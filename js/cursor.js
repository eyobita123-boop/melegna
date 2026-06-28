// ============================================================
// CURSOR.JS – Custom Cursor
// ============================================================

export function initCursor() {
    const cursor = document.getElementById('custom-cursor');
    if (!cursor) return;

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    document.querySelectorAll('a, button, input, .recipe-card, .product-card, .video-card').forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('is-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('is-hover'));
    });

    if ('ontouchstart' in window) cursor.style.display = 'none';
}
