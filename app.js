/* app.js — L'Étoile de Mer Toliara */
(function () {
  'use strict';

  /* ===========================================
     THEME TOGGLE
     =========================================== */
  const root = document.documentElement;
  const toggle = document.querySelector('[data-theme-toggle]');
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  updateToggleIcon();

  if (toggle) {
    toggle.addEventListener('click', function () {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      toggle.setAttribute('aria-label', 'Basculer en mode ' + (theme === 'dark' ? 'clair' : 'sombre'));
      updateToggleIcon();
    });
  }

  function updateToggleIcon() {
    if (!toggle) return;
    if (theme === 'dark') {
      toggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>';
    } else {
      toggle.innerHTML = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
    }
  }

  /* ===========================================
     STICKY NAV — transparent → solid on scroll
     =========================================== */
  const nav = document.querySelector('.nav');
  let lastScroll = 0;

  function handleScroll() {
    var sy = window.scrollY || window.pageYOffset;
    if (sy > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = sy;
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  /* ===========================================
     HAMBURGER MENU
     =========================================== */
  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('a') : [];

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('active');
      hamburger.setAttribute('aria-expanded', isOpen);
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ===========================================
     SMOOTH SCROLL for anchor links
     =========================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ===========================================
     SCROLL REVEAL (JS fallback for browsers
     without CSS scroll-driven animations)
     =========================================== */
  var supportsScrollTimeline = CSS.supports && CSS.supports('animation-timeline', 'scroll()');

  if (!supportsScrollTimeline) {
    var revealEls = document.querySelectorAll('.reveal, .reveal-stagger > *');

    // Add JS fallback class
    revealEls.forEach(function (el) {
      el.classList.add('js-reveal');
      el.classList.remove('reveal');
    });

    // Also handle stagger parents
    document.querySelectorAll('.reveal-stagger').forEach(function (parent) {
      parent.querySelectorAll(':scope > *').forEach(function (child) {
        child.classList.add('js-reveal');
      });
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    document.querySelectorAll('.js-reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ===========================================
     ACTIVE NAV LINK HIGHLIGHT ON SCROLL
     =========================================== */
  var sections = document.querySelectorAll('section[id]');
  var navLinksDesktop = document.querySelectorAll('.nav-links a[href^="#"]');

  var sectionObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinksDesktop.forEach(function (link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + id) {
              link.classList.add('active');
            }
          });
        }
      });
    },
    {
      threshold: 0.3,
      rootMargin: '-80px 0px -50% 0px',
    }
  );

  sections.forEach(function (section) {
    sectionObserver.observe(section);
  });

  /* ===========================================
     HERO PARALLAX (B)
     =========================================== */
  var heroImg = document.querySelector('.hero-bg img');
  if (heroImg) {
    window.addEventListener('scroll', function() {
      var sy = window.scrollY;
      if (sy < window.innerHeight) {
        heroImg.style.transform = 'scale(1.08) translateY(' + (sy * 0.15) + 'px)';
      }
    }, { passive: true });
  }

  /* ===========================================
     YEAR COUNTER (H)
     =========================================== */
  var yearEl = document.querySelector('.story-year');
  if (yearEl) {
    var yearDone = false;
    var yearObs = new IntersectionObserver(function(entries) {
      if (entries[0].isIntersecting && !yearDone) {
        yearDone = true;
        var start = 1950;
        var end = 1987;
        var duration = 1200;
        var startTime = null;
        function step(timestamp) {
          if (!startTime) startTime = timestamp;
          var progress = Math.min((timestamp - startTime) / duration, 1);
          var eased = 1 - Math.pow(1 - progress, 3);
          yearEl.textContent = Math.round(start + (end - start) * eased);
          if (progress < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }
    }, { threshold: 0.3 });
    yearObs.observe(yearEl);
  }

  /* ===========================================
     SCROLL PROGRESS BAR (I)
     =========================================== */
  var progressBar = document.querySelector('.scroll-progress');
  if (progressBar) {
    window.addEventListener('scroll', function() {
      var h = document.documentElement.scrollHeight - window.innerHeight;
      var percent = h > 0 ? (window.scrollY / h) * 100 : 0;
      progressBar.style.width = percent + '%';
    }, { passive: true });
  }

})();
/* ===========================================
   MENU TABS + MODAL
   =========================================== */
(function () {
  'use strict';

  /* ---- Tab Switching ---- */
  var tabBtns = document.querySelectorAll('.menu-tab');
  var panels  = document.querySelectorAll('.menu-panel');

  var hintEl = document.getElementById('menu-hint'); // keep in case

  function activateTab(targetTab) {
    var tabId = targetTab.getAttribute('data-tab');
    // Hide hint if present
    if (hintEl) hintEl.classList.add('hidden');
    // Update buttons
    tabBtns.forEach(function(btn) {
      var isActive = btn.getAttribute('data-tab') === tabId;
      btn.classList.toggle('active', isActive);
      btn.setAttribute('aria-selected', isActive ? 'true' : 'false');
    });
    // Update panels
    panels.forEach(function(panel) {
      var panelId = panel.id.replace('tab-', '');
      if (panelId === tabId) {
        panel.classList.add('active');
        panel.removeAttribute('hidden');
        panel.scrollTop = 0; // Reset scroll position when switching tabs
        // Re-trigger item animations
        var items = panel.querySelectorAll('.menu-item');
        items.forEach(function(item) {
          item.style.animationName = 'none';
          void item.offsetHeight;
          item.style.animationName = '';
        });
      } else {
        panel.classList.remove('active');
        panel.setAttribute('hidden', '');
      }
    });
    targetTab.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
  }

  // Click handlers
  tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      activateTab(this);
    });
  });

  // Arrow key navigation for accessibility
  var tabList = document.getElementById('menu-tablist');
  if (tabList) {
    tabList.addEventListener('keydown', function(e) {
      var currentIdx = Array.from(tabBtns).findIndex(function(b) {
        return b.classList.contains('active');
      });
      var nextIdx = currentIdx;
      if (e.key === 'ArrowRight') {
        nextIdx = (currentIdx + 1) % tabBtns.length;
      } else if (e.key === 'ArrowLeft') {
        nextIdx = (currentIdx - 1 + tabBtns.length) % tabBtns.length;
      } else if (e.key === 'Home') {
        nextIdx = 0;
      } else if (e.key === 'End') {
        nextIdx = tabBtns.length - 1;
      } else {
        return;
      }
      e.preventDefault();
      tabBtns[nextIdx].focus();
      activateTab(tabBtns[nextIdx]);
    });
  }

  // Preview cards — clicking jumps to tab and scrolls to the menu
  var previewCards = document.querySelectorAll('.menu-preview-card[data-tab]');
  previewCards.forEach(function(card) {
    card.addEventListener('click', function() {
      var tabId = this.getAttribute('data-tab');
      var targetBtn = document.querySelector('.menu-tab[data-tab="' + tabId + '"]');
      if (targetBtn) {
        activateTab(targetBtn);
        // Scroll to menu interactive section
        var menuEl = document.getElementById('menu-interactive');
        if (menuEl) {
          menuEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

  // Tab bar sticky shadow
  var tabWrapper = document.querySelector('.menu-tab-wrapper');
  if (tabWrapper) {
    var tabObserver = new IntersectionObserver(
      function(entries) {
        entries.forEach(function(entry) {
          tabWrapper.classList.toggle('stuck', !entry.isIntersecting);
        });
      },
      { threshold: 1.0, rootMargin: '-60px 0px 0px 0px' }
    );
    tabObserver.observe(tabWrapper);
  }

  /* ---- Full Menu Modal ---- */
  var modal     = document.getElementById('menu-modal');
  var openBtn   = document.getElementById('menu-open-modal');
  var closeBtn  = document.getElementById('menu-modal-close');
  var backdrop  = document.getElementById('menu-modal-backdrop');
  var scrollTop = document.getElementById('menu-modal-scroll-top');
  var modalBody = document.getElementById('menu-modal-body');

  function openModal() {
    if (!modal) return;
    modal.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
    // Focus close button for accessibility
    setTimeout(function() {
      if (closeBtn) closeBtn.focus();
    }, 50);
  }

  function closeModal() {
    if (!modal) return;
    modal.setAttribute('hidden', '');
    document.body.style.overflow = '';
    if (openBtn) openBtn.focus();
  }

  if (openBtn) openBtn.addEventListener('click', openModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  // Escape key closes modal
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal && !modal.hasAttribute('hidden')) {
      closeModal();
    }
  });

  // Focus trap inside modal
  if (modal) {
    modal.addEventListener('keydown', function(e) {
      if (e.key !== 'Tab') return;
      var focusables = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      var first = focusables[0];
      var last  = focusables[focusables.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    });
  }

  // Scroll-to-top button in modal
  if (modalBody && scrollTop) {
    modalBody.addEventListener('scroll', function() {
      scrollTop.classList.toggle('visible', modalBody.scrollTop > 200);
    }, { passive: true });

    scrollTop.addEventListener('click', function() {
      modalBody.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

})();
