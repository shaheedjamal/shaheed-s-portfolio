// Matrix Canvas Background Effect
const canvas = document.getElementById('matrixCanvas');
let ctx = canvas.getContext('2d');
let width, height;
let columns, drops = [];
const matrixChars = "01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
let fontSize = 16;

function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    columns = Math.floor(width / fontSize);
    drops = [];
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.floor(Math.random() * -height / fontSize);
    }
}

function drawMatrix() {
    if (!ctx) return;
    ctx.fillStyle = 'rgba(3, 6, 12, 0.05)';
    ctx.fillRect(0, 0, width, height);
    ctx.fillStyle = '#00E5FF';
    ctx.font = fontSize + 'px monospace';
    for (let i = 0; i < drops.length; i++) {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillStyle = '#00E5FF';
        ctx.fillText(char, x, y);
        if (y > height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
    requestAnimationFrame(drawMatrix);
}

window.addEventListener('resize', () => {
    resizeCanvas();
});

resizeCanvas();
drawMatrix();

// Profile Image Hover Effect
const profileImg = document.getElementById('profilePhoto');
if (profileImg) {
    profileImg.addEventListener('mouseenter', () => {
        profileImg.style.boxShadow = '0 0 35px #00ffffaa';
    });
    profileImg.addEventListener('mouseleave', () => {
        profileImg.style.boxShadow = '0 0 25px rgba(0,229,255,0.4)';
    });
}

// Ethical Hacking Demo Modal
const demoBtn = document.getElementById('ethicalDemoBtn');
if (demoBtn) {
    demoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        // Create modal overlay
        const modalOverlay = document.createElement('div');
        modalOverlay.className = 'modal-overlay';
        modalOverlay.innerHTML = `
            <div class="modal-content">
                <div class="modal-header">
                    <span><i class="fas fa-terminal"></i> shaheed@cyberlab:~$ ethical_demo</span>
                    <button class="close-modal">&times;</button>
                </div>
                <div class="modal-body">
                    <p style="color: #00E5FF; margin-bottom: 10px;">
                        <i class="fas fa-angle-right"></i> Initializing security awareness protocol...
                    </p>
                    <p style="margin-bottom: 12px; color: #67E8F9;">
                        <i class="fas fa-shield-haltered"></i> K SHAHEED JAMAL — Ethical Hacking Arsenal:
                    </p>
                    <ul>
                        <li><i class="fas fa-map"></i> Nmap - Network reconnaissance & stealth scanning</li>
                        <li><i class="fas fa-database"></i> SQLmap - Automated SQL injection detection</li>
                        <li><i class="fas fa-water"></i> Hydra - Online password cracking framework</li>
                        <li><i class="fas fa-key"></i> John the Ripper - Offline password auditing</li>
                        <li><i class="fas fa-wifi"></i> Aircrack-ng - Wireless network security assessment</li>
                        <li><i class="fas fa-usb"></i> USB Rubber Ducky - Keystroke injection attacks</li>
                    </ul>
                    <div class="modal-note">
                        <i class="fas fa-info-circle" style="color: #00E5FF;"></i>
                        “Risk Management reduces attack surface — Authorized testing only. Continuous assessment is the key to zero-trust architecture.”
                    </div>
                    <div style="text-align: right; font-size: 0.7rem; color: #00E5FF; margin-top: 10px;">
                        — Red Team Lead, Tirunelveli, India
                    </div>
                </div>
                <div class="modal-footer">
                    <button class="btn-cyber close-modal-btn" style="padding: 0.4rem 1.2rem; font-size: 0.8rem;">Close Console</button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modalOverlay);
        
        // Close modal functions
        const closeModal = () => modalOverlay.remove();
        
        const closeBtn = modalOverlay.querySelector('.close-modal');
        const closeActionBtn = modalOverlay.querySelector('.close-modal-btn');
        
        if (closeBtn) closeBtn.addEventListener('click', closeModal);
        if (closeActionBtn) closeActionBtn.addEventListener('click', closeModal);
        
        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    });
}

// Smooth Anchor Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === "#" || targetId === "") return;
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            e.preventDefault();
            targetElement.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});

// Console Greeting (Security Researcher Style)
console.log("%c🛡️ K SHAHEED JAMAL | Cyber Security Portfolio", "color: #00E5FF; font-size: 14px; font-weight: bold;");
console.log("%c📍 Based in Tirunelveli, India", "color: #67E8F9");
console.log("%c🔧 Tools: Nmap | SQLmap | Wireshark | Hydra | John | Aircrack-ng | USB Rubber Ducky", "color: #94A3B8");
console.log("%c💻 OS: Kali Linux | Parrot OS | BlackArch | DEFT Linux | Tails OS", "color: #94A3B8");
console.log("%c⚡ \"Hack the mind, secure the wire.\"", "color: #00E5FF; font-style: italic");

// Dynamic Year Update (if needed for footer)
const footerYear = document.querySelector('footer p:first-child');
if (footerYear) {
    const currentYear = new Date().getFullYear();
    footerYear.innerHTML = footerYear.innerHTML.replace('2025', currentYear);
}

// Add typing effect to hero section (optional enhancement)
const heroTitle = document.querySelector('.hero-content h1');
if (heroTitle && !heroTitle.hasAttribute('data-typed')) {
    // Just a subtle effect - store original text
    heroTitle.setAttribute('data-typed', 'true');
}

// Tooltip effect for badges
const badges = document.querySelectorAll('.os-tool-badge');
badges.forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.borderColor = '#00E5FF';
    });
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.borderColor = '#2d3a5e';
    });
});