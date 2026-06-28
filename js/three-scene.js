// ============================================================
// THREE-SCENE.JS – Hero Particles (Yellow/White Brand Colors)
// ============================================================

import * as THREE from 'three';

const heroContainer = document.getElementById('hero-canvas');
if (heroContainer) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xFFF9E6);

    const camera = new THREE.PerspectiveCamera(60, heroContainer.clientWidth / heroContainer.clientHeight, 0.1, 100);
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setSize(heroContainer.clientWidth, heroContainer.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputEncoding = THREE.sRGBEncoding;
    heroContainer.appendChild(renderer.domElement);

    const count = 1200;
    const positions = new Float32Array(count * 3);
    const speeds = new Float32Array(count);
    const drifts = new Float32Array(count * 2);
    const colors = [
        new THREE.Color(0xFDE047),
        new THREE.Color(0xEAB308),
        new THREE.Color(0xCA8A04),
        new THREE.Color(0xFFFFFF),
        new THREE.Color(0xFEF08A),
    ];
    const colorArray = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
        const radius = 6 + Math.random() * 6;
        const theta = Math.random() * Math.PI * 2;
        positions[i * 3] = Math.cos(theta) * radius * 0.8;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 12;
        positions[i * 3 + 2] = Math.sin(theta) * radius * 0.8 - 2;
        speeds[i] = 0.002 + Math.random() * 0.006;
        drifts[i * 2] = (Math.random() - 0.5) * 0.002;
        drifts[i * 2 + 1] = (Math.random() - 0.5) * 0.002;
        const col = colors[Math.floor(Math.random() * colors.length)];
        colorArray[i * 3] = col.r;
        colorArray[i * 3 + 1] = col.g;
        colorArray[i * 3 + 2] = col.b;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));

    const textureCanvas = document.createElement('canvas');
    textureCanvas.width = 64;
    textureCanvas.height = 64;
    const ctx = textureCanvas.getContext('2d');
    const gradient = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255,255,255,1)');
    gradient.addColorStop(0.3, 'rgba(255,255,255,0.8)');
    gradient.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 64, 64);
    const texture = new THREE.CanvasTexture(textureCanvas);

    const material = new THREE.PointsMaterial({
        size: 0.15,
        map: texture,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        transparent: true,
        opacity: 0.6,
        vertexColors: true,
        sizeAttenuation: true,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    let mouseX = 0,
        mouseY = 0;
    document.addEventListener('mousemove', (e) => {
        mouseX = (e.clientX / window.innerWidth) * 2 - 1;
        mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    });

    function resize() {
        const w = heroContainer.clientWidth;
        const h = heroContainer.clientHeight;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
    }
    window.addEventListener('resize', resize);

    const posAttr = geometry.attributes.position;
    const posArray = posAttr.array;

    function animate() {
        requestAnimationFrame(animate);
        for (let i = 0; i < count; i++) {
            posArray[i * 3 + 1] += speeds[i];
            posArray[i * 3] += drifts[i * 2] * 0.5 + mouseX * 0.0004;
            posArray[i * 3 + 2] += drifts[i * 2 + 1] * 0.5 + mouseY * 0.0004;
            if (posArray[i * 3 + 1] > 7) {
                posArray[i * 3 + 1] = -7;
                const radius = 5 + Math.random() * 7;
                const theta = Math.random() * Math.PI * 2;
                posArray[i * 3] = Math.cos(theta) * radius * 0.8;
                posArray[i * 3 + 2] = Math.sin(theta) * radius * 0.8 - 2;
            }
        }
        posAttr.needsUpdate = true;
        particles.rotation.y += 0.0003;
        particles.rotation.x += Math.sin(Date.now() * 0.00005) * 0.0001;
        renderer.render(scene, camera);
    }
    animate();
    resize();
}

// Disable 3D on mobile
if (window.innerWidth < 768) {
    const canvas = document.getElementById('hero-canvas');
    if (canvas) canvas.innerHTML = '';
}
