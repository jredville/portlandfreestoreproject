/* ============================================================
   Portland Free Store — Main JS
   Carousel · Mobile nav · FAQ accordion · Thermometer · Donate UI
   ============================================================ */

/* ─── Mobile Navigation ──────────────────────────────────── */
function initMobileNav() {
  const hamburger = document.querySelector('.nav-hamburger');
  const links     = document.querySelector('.nav-links');
  if (!hamburger || !links) return;

  hamburger.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', open);
  });

  // Close menu when a link is clicked
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

/* ─── Active Nav Link ────────────────────────────────────── */
function setActiveNav() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === page || (page === '' && href === 'index.html')) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
}

/* ─── Hero Carousel ──────────────────────────────────────── */
function initCarousel() {
  const carousel = document.querySelector('.carousel');
  if (!carousel) return;

  const track  = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const dots   = carousel.querySelectorAll('.carousel-dot');
  const prev   = carousel.querySelector('.carousel-btn.prev');
  const next   = carousel.querySelector('.carousel-btn.next');

  let current  = 0;
  let timer    = null;

  function goTo(index) {
    slides[current].setAttribute('aria-hidden', 'true');
    current = (index + slides.length) % slides.length;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
    slides[current].removeAttribute('aria-hidden');
  }

  function startAuto() {
    timer = setInterval(() => goTo(current + 1), 5000);
  }
  function stopAuto() {
    clearInterval(timer);
  }

  prev && prev.addEventListener('click', () => { stopAuto(); goTo(current - 1); startAuto(); });
  next && next.addEventListener('click', () => { stopAuto(); goTo(current + 1); startAuto(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); }));

  carousel.addEventListener('mouseenter', stopAuto);
  carousel.addEventListener('mouseleave', startAuto);

  // Keyboard navigation
  carousel.addEventListener('keydown', e => {
    if (e.key === 'ArrowLeft')  { stopAuto(); goTo(current - 1); startAuto(); }
    if (e.key === 'ArrowRight') { stopAuto(); goTo(current + 1); startAuto(); }
  });
  carousel.setAttribute('tabindex', '0');

  goTo(0);
  startAuto();
}

/* ─── FAQ Accordion ──────────────────────────────────────── */
function initAccordion() {
  document.querySelectorAll('.accordion-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // Close all
      document.querySelectorAll('.accordion-trigger').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('open');
      });
      // Open clicked (if it was closed)
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        btn.nextElementSibling.classList.add('open');
      }
    });
  });
}

/* ─── Fundraiser Thermometer ─────────────────────────────── */
function initThermometer() {
  const fill    = document.querySelector('.thermo-fill');
  const display = document.querySelector('.thermo-current');
  if (!fill) return;

  // TO UPDATE: change these two values in donate.html, not here
  const goal    = Number(fill.closest('.thermometer-widget')?.dataset.goal    ?? 1000);
  const current = Number(fill.closest('.thermometer-widget')?.dataset.current ?? 400);
  const pct     = Math.min(100, Math.round((current / goal) * 100));

  if (display) display.textContent = '$' + current.toLocaleString();

  // Animate on scroll into view
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        fill.style.width = pct + '%';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  observer.observe(fill.closest('.thermo-track') ?? fill);
}

/* ─── Donation Amount Picker ─────────────────────────────── */
function initDonationPicker() {
  const amounts = document.querySelectorAll('.amount-btn[data-amount]');
  const freqs   = document.querySelectorAll('.freq-btn');

  amounts.forEach(btn => {
    btn.addEventListener('click', () => {
      amounts.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
    });
  });

  freqs.forEach(btn => {
    btn.addEventListener('click', () => {
      freqs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

/* ─── Contact Form Validation ────────────────────────────── */
function initContactForm() {
  const form = document.querySelector('.contact-form form');
  if (!form) return;

  form.addEventListener('submit', e => {
    let valid = true;
    form.querySelectorAll('[required]').forEach(field => {
      if (!field.value.trim()) {
        field.style.borderColor = '#c0392b';
        valid = false;
      } else {
        field.style.borderColor = '';
      }
    });
    const email = form.querySelector('input[type="email"]');
    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
      email.style.borderColor = '#c0392b';
      valid = false;
    }
    if (!valid) e.preventDefault();
  });
}

/* ─── Boot ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  setActiveNav();
  initCarousel();
  initAccordion();
  initThermometer();
  initDonationPicker();
  initContactForm();
});
