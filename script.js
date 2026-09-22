// Custom Cursor
const cursor = document.getElementById('cursor');
if (cursor && window.matchMedia('(hover: hover)').matches) {
    window.addEventListener('mousemove', (e) => {
        cursor.style.top = e.clientY + 'px';
        cursor.style.left = e.clientX + 'px';
    });

    document.querySelectorAll('a, .card, .btn, .pill-link, .more-btn, summary, .burger, .award-card, .rec-card').forEach((el) => {
        el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
    });
}

// Mobile Navigation
const burger = document.getElementById('burger');
const navlinks = document.getElementById('navlinks');
const navClose = document.getElementById('navClose');

if (burger && navlinks) {
    burger.addEventListener('click', () => navlinks.classList.toggle('open'));
    navlinks.querySelectorAll('a').forEach((a) => {
        a.addEventListener('click', () => navlinks.classList.remove('open'));
    });
}

if (navClose && navlinks) {
    navClose.addEventListener('click', () => navlinks.classList.remove('open'));
}

// Updates "More" Toggle
const moreBtn = document.getElementById('moreUpdates');
if (moreBtn) {
    moreBtn.addEventListener('click', () => {
        const extras = document.querySelectorAll('.updates-list li.extra');
        if (extras.length > 0) {
            const open = extras[0].classList.contains('show');
            extras.forEach((li) => li.classList.toggle('show', !open));
            moreBtn.textContent = open ? 'More ↓' : 'Less ↑';
        }
    });
}

// Scroll Reveal Observer
const io = new IntersectionObserver(
    (entries) => {
        entries.forEach((en) => {
            if (en.isIntersecting) {
                en.target.classList.add('show');
                io.unobserve(en.target);
            }
        });
    },
    { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));