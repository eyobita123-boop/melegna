// ============================================================
// VIDEO-PLAYER.JS – Video Lightbox Control
// ============================================================

export function initVideoPlayer() {
    const lightbox = document.getElementById('videoLightbox');
    const iframe = document.getElementById('videoIframe');
    const closeBtn = document.getElementById('videoLightboxClose');

    function openVideo(embed) {
        iframe.src = embed + '?autoplay=1';
        lightbox.classList.add('is-open');
        document.body.style.overflow = 'hidden';
    }

    function closeVideo() {
        lightbox.classList.remove('is-open');
        iframe.src = '';
        document.body.style.overflow = '';
    }

    closeBtn.addEventListener('click', closeVideo);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeVideo();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeVideo();
    });

    return { openVideo, closeVideo };
}
