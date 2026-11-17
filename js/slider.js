// ==============================================================================
// BANNER SLIDER COMPONENT (js/slider.js)
// With Two-Way Synchronization with Sub-Service Selection
// ==============================================================================
(function (global) {
  'use strict';

  var activeSliderInstance = null;

  function destroyActiveSlider() {
    if (activeSliderInstance && typeof activeSliderInstance.destroy === 'function') {
      activeSliderInstance.destroy();
      activeSliderInstance = null;
    }
  }

  function Slider(slides, serviceIcon, subServices) {
    if (!slides || !slides.length) return '';

    var S = global.SITE || {};
    var t = global.I18n.t;
    var escape = global.I18n.escapeHtml;
    var icon = serviceIcon || '❄️';
    var prevLabel = escape(t(S.ui.prevSlide || { en: 'Previous slide', ta: 'முந்தைய படம்' }));
    var nextLabel = escape(t(S.ui.nextSlide || { en: 'Next slide', ta: 'அடுத்த படம்' }));

    var slidesHtml = slides.map(function (slide, idx) {
      var headline = escape(t(slide.headline));
      var priceLine = slide.priceLine ? escape(t(slide.priceLine)) : '';
      var tag = slide.spotlightTag ? escape(t(slide.spotlightTag)) : 'Nuha Cool Fix Signature Care';

      // Perks grid
      var perksHtml = (slide.perks || []).map(function (p) {
        return (
          '<div class="spotlight-perk-item">' +
            '<span class="spotlight-perk-check">✓ ' + escape(t(p)) + '</span>' +
          '</div>'
        );
      }).join('');

      return (
        '<div class="slider-slide' + (idx === 0 ? ' is-active' : '') + '" data-slide="' + idx + '" role="group" aria-roledescription="slide" aria-label="' + (idx + 1) + ' of ' + slides.length + '">' +
          '<div class="slide-media-wrap">' +
            '<img class="slide-img" src="' + escape(slide.image) + '" alt="' + headline + '" width="800" height="450" loading="lazy" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
            '<div class="slide-img-fallback" style="display:none;" aria-hidden="true">' +
              '<span class="fallback-icon">' + escape(icon) + '</span>' +
            '</div>' +
            '<div class="slide-gradient-scrim"></div>' +
          '</div>' +

          // Rich Overlay Content
          '<div class="spotlight-content-overlay">' +
            '<div class="spotlight-left-details">' +
              '<div class="spotlight-tag-pill">' +
                '<span class="spotlight-tag-dot" aria-hidden="true"></span>' +
                '<span>' + tag + '</span>' +
              '</div>' +
              '<h3 class="spotlight-slide-title">' + headline + '</h3>' +
              (perksHtml ? '<div class="spotlight-perks-grid">' + perksHtml + '</div>' : '') +
              (priceLine ? '<div class="spotlight-price-highlight"><span class="highlight-pill">' + priceLine + '</span></div>' : '') +
            '</div>' +

            // Right Visual Graphic
            '<div class="spotlight-right-visual" aria-hidden="true">' +
              '<div class="spotlight-circle-badge">' +
                '<div class="spotlight-circle-inner pulse-badge">' +
                  '<span class="spotlight-main-icon">' + escape(icon) + '</span>' +
                  '<span class="spotlight-badge-txt">Power Chill</span>' +
                  '<span class="spotlight-badge-sub">100% Mess-Free</span>' +
                '</div>' +
                '<div class="orbit-badge orbit-top">Foam Jet 2.0</div>' +
                '<div class="orbit-badge orbit-bottom">Save 25% Electricity</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    // Instagram story style progress bars / Tabs
    var progressTabsHtml = slides.map(function (slide, idx) {
      var tabLabel = (subServices && subServices[idx]) ? escape(t(subServices[idx].label)) : (idx + 1) + '. ' + escape(t(slide.headline));
      return (
        '<button type="button" class="story-tab-btn' + (idx === 0 ? ' is-active' : '') + '" data-goto="' + idx + '" aria-label="Go to slide ' + (idx + 1) + '">' +
          '<div class="story-tab-title">' + tabLabel + '</div>' +
          '<div class="story-tab-bar-bg">' +
            '<div class="story-tab-bar-fill' + (idx === 0 ? ' is-animating' : '') + '"></div>' +
          '</div>' +
        '</button>'
      );
    }).join('');

    return (
      '<section class="service-spotlight-slider-section" id="banner-slider" aria-roledescription="carousel" aria-label="Service Spotlight">' +
        '<div class="slider-viewport">' +
          slidesHtml +
          '<button type="button" class="slider-arrow slider-arrow-prev" data-dir="prev" aria-label="' + prevLabel + '">' +
            '<i class="fa-solid fa-chevron-left" aria-hidden="true"></i>' +
          '</button>' +
          '<button type="button" class="slider-arrow slider-arrow-next" data-dir="next" aria-label="' + nextLabel + '">' +
            '<i class="fa-solid fa-chevron-right" aria-hidden="true"></i>' +
          '</button>' +
        '</div>' +
        '<div class="slider-story-tabs-track" role="tablist" aria-label="Slide Selection">' +
          progressTabsHtml +
        '</div>' +
      '</section>'
    );
  }

  function mountSlider(containerEl, slides, onSlideChangeCallback) {
    destroyActiveSlider();
    if (!containerEl || !slides || slides.length === 0) return null;

    var currentIndex = 0;
    var totalSlides = slides.length;
    var duration = 5000; // 5 seconds per slide
    var timerId = null;
    var isPaused = false;
    var prefersReducedMotion = false;

    try {
      prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (e) {}

    var slideEls = containerEl.querySelectorAll('.slider-slide');
    var tabBtns = containerEl.querySelectorAll('.story-tab-btn');
    var fillEls = containerEl.querySelectorAll('.story-tab-bar-fill');
    var viewportEl = containerEl.querySelector('.slider-viewport');

    function updateProgressBars(index) {
      for (var i = 0; i < fillEls.length; i++) {
        var fill = fillEls[i];
        var tab = tabBtns[i];
        fill.classList.remove('is-animating');
        fill.style.animation = 'none';
        void fill.offsetWidth;

        if (tab) {
          if (i === index) tab.classList.add('is-active');
          else tab.classList.remove('is-active');
        }

        if (i < index) {
          fill.style.width = '100%';
        } else if (i === index) {
          fill.style.width = '0%';
          if (!prefersReducedMotion && !isPaused) {
            fill.style.animation = 'storyFill ' + duration + 'ms linear forwards';
            fill.classList.add('is-animating');
          } else {
            fill.style.width = '100%';
          }
        } else {
          fill.style.width = '0%';
        }
      }
    }

    function showSlide(index, fromUserClick) {
      if (index < 0) index = totalSlides - 1;
      if (index >= totalSlides) index = 0;
      currentIndex = index;

      for (var i = 0; i < slideEls.length; i++) {
        if (i === currentIndex) {
          slideEls[i].classList.add('is-active');
        } else {
          slideEls[i].classList.remove('is-active');
        }
      }

      updateProgressBars(currentIndex);

      // Trigger two-way synchronization callback
      if (typeof onSlideChangeCallback === 'function') {
        try {
          onSlideChangeCallback(currentIndex, fromUserClick);
        } catch (err) {
          console.error('Error in onSlideChange callback:', err);
        }
      }

      resetAutoPlay();
    }

    function nextSlide() {
      showSlide(currentIndex + 1, false);
    }

    function prevSlide() {
      showSlide(currentIndex - 1, false);
    }

    function resetAutoPlay() {
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      if (prefersReducedMotion || isPaused || totalSlides <= 1) return;

      timerId = setTimeout(function () {
        nextSlide();
      }, duration);
    }

    function pause() {
      isPaused = true;
      if (timerId) {
        clearTimeout(timerId);
        timerId = null;
      }
      containerEl.classList.add('is-paused');
      var activeFill = containerEl.querySelector('.story-tab-bar-fill.is-animating');
      if (activeFill) {
        activeFill.style.animationPlayState = 'paused';
      }
    }

    function resume() {
      isPaused = false;
      containerEl.classList.remove('is-paused');
      var activeFill = containerEl.querySelector('.story-tab-bar-fill.is-animating');
      if (activeFill) {
        activeFill.style.animationPlayState = 'running';
      }
      resetAutoPlay();
    }

    // Click handler for arrows and tab buttons
    var onClick = function (e) {
      var arrow = e.target.closest('.slider-arrow');
      if (arrow) {
        var dir = arrow.dataset.dir;
        if (dir === 'prev') prevSlide();
        else nextSlide();
        return;
      }

      var tab = e.target.closest('[data-goto]');
      if (tab) {
        var targetIdx = parseInt(tab.dataset.goto, 10);
        if (!isNaN(targetIdx)) {
          showSlide(targetIdx, true);
        }
      }
    };
    containerEl.addEventListener('click', onClick);

    // Hover listeners
    var onMouseEnter = function () { pause(); };
    var onMouseLeave = function () { resume(); };
    containerEl.addEventListener('mouseenter', onMouseEnter);
    containerEl.addEventListener('mouseleave', onMouseLeave);

    // Touch swipe detection
    var touchStartX = 0;
    var touchStartY = 0;
    var touchEndX = 0;
    var touchEndY = 0;

    var onTouchStart = function (e) {
      pause();
      if (e.touches && e.touches.length) {
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    var onTouchMove = function (e) {
      if (e.touches && e.touches.length) {
        touchEndX = e.touches[0].clientX;
        touchEndY = e.touches[0].clientY;
      }
    };

    var onTouchEnd = function () {
      var diffX = touchEndX - touchStartX;
      var diffY = touchEndY - touchStartY;
      if (Math.abs(diffX) > 40 && Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX < 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      resume();
      touchStartX = 0;
      touchStartY = 0;
      touchEndX = 0;
      touchEndY = 0;
    };

    if (viewportEl) {
      viewportEl.addEventListener('touchstart', onTouchStart, { passive: true });
      viewportEl.addEventListener('touchmove', onTouchMove, { passive: true });
      viewportEl.addEventListener('touchend', onTouchEnd, { passive: true });
    }

    // Initial setup
    showSlide(0, false);

    activeSliderInstance = {
      goToSlide: function (index) {
        showSlide(index, true);
      },
      destroy: function () {
        if (timerId) clearTimeout(timerId);
        containerEl.removeEventListener('click', onClick);
        containerEl.removeEventListener('mouseenter', onMouseEnter);
        containerEl.removeEventListener('mouseleave', onMouseLeave);
        if (viewportEl) {
          viewportEl.removeEventListener('touchstart', onTouchStart);
          viewportEl.removeEventListener('touchmove', onTouchMove);
          viewportEl.removeEventListener('touchend', onTouchEnd);
        }
      }
    };

    return activeSliderInstance;
  }

  global.Slider = Slider;
  global.mountSlider = mountSlider;
  global.destroyActiveSlider = destroyActiveSlider;
})(window);
