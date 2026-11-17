// ==============================================================================
// MAIN APPLICATION LOGIC & VIEW CONTROLLER (js/app.js)
// With Two-Way Synchronization between Sub-Services & Banner Slider
// ==============================================================================
(function (global) {
  'use strict';

  var S = global.SITE || {};
  var t = global.I18n.t;
  var escape = global.I18n.escapeHtml;

  // Track state for the service detail page
  var currentDetailState = {
    serviceId: null,
    selectedSubId: null,
    selectedSubIdx: 0,
    sliderInstance: null
  };

  // 1. Initialize CSS variables from theme
  function initTheme() {
    var theme = S.theme || {};
    var root = document.documentElement;
    for (var key in theme) {
      if (Object.prototype.hasOwnProperty.call(theme, key)) {
        root.style.setProperty('--' + key, theme[key]);
      }
    }
  }

  // 2. Update document title and meta description
  function updateMetadata(route) {
    var B = S.business || {};
    var H = S.hero || {};
    var metaDescEl = document.querySelector('meta[name="description"]');

    if (route.path === 'service' && route.service) {
      var sTitle = t(route.service.title);
      document.title = sTitle + ' Service in Sellur, Madurai | ' + t(B.name);
      if (metaDescEl) {
        metaDescEl.setAttribute('content', t(route.service.shortDesc) + ' - ' + t(B.name) + ', Sellur, Madurai.');
      }
    } else {
      document.title = t(B.name) + ' | ' + t(H.title);
      if (metaDescEl) {
        metaDescEl.setAttribute('content', t(H.sub) + ' ' + t(B.address));
      }
    }
  }

  // 3. Render Home Page View (Stitch UI Redesign)
  function renderHomeView() {
    var serviceCardsHtml = (S.services || []).map(function (srv) {
      return global.ServiceCard(srv);
    }).join('');

    var whyItems = (S.why || []).map(function (item) {
      var iconCls = item.iconClass || 'fa-solid fa-check';
      var bg = item.colorBg || '#eff6ff';
      var icColor = item.colorIcon || '#2563eb';
      return (
        '<div class="why-redesign-card">' +
          '<div class="why-icon-box" style="background-color: ' + bg + '; color: ' + icColor + ';" aria-hidden="true">' +
            '<i class="' + iconCls + '"></i>' +
          '</div>' +
          '<h3 class="why-card-title">' + escape(t(item.title)) + '</h3>' +
          '<p class="why-card-desc">' + escape(t(item.desc)) + '</p>' +
        '</div>'
      );
    }).join('');

    var HP = S.homeProcess || {};
    var hpStepsHtml = (HP.steps || []).map(function (st) {
      return (
        '<div class="home-process-card">' +
          '<div class="process-step-num" aria-hidden="true">' + escape(st.num) + '</div>' +
          '<h3 class="process-step-title">' + escape(t(st.title)) + '</h3>' +
          '<p class="process-step-desc">' + escape(t(st.desc)) + '</p>' +
        '</div>'
      );
    }).join('');

    var TM = S.testimonials || {};
    var testimonialsHtml = (TM.reviews || []).map(function (r) {
      return (
        '<div class="testimonial-card">' +
          '<div class="testimonial-stars" aria-label="5 stars rating">' +
            '<i class="fa-solid fa-star" aria-hidden="true"></i>' +
            '<i class="fa-solid fa-star" aria-hidden="true"></i>' +
            '<i class="fa-solid fa-star" aria-hidden="true"></i>' +
            '<i class="fa-solid fa-star" aria-hidden="true"></i>' +
            '<i class="fa-solid fa-star" aria-hidden="true"></i>' +
          '</div>' +
          '<p class="testimonial-text">' + escape(t(r.text)) + '</p>' +
          '<div class="testimonial-author">' +
            '<div class="author-avatar">' + escape(r.initial) + '</div>' +
            '<div>' +
              '<p class="author-name">' + escape(r.name) + '</p>' +
              '<p class="author-loc">' + escape(t(r.location)) + '</p>' +
            '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    var UC = S.urgentCta || {};
    var telUrl = 'tel:+' + (S.business.phone || '919999999999');
    var waUrl = global.I18n.buildWhatsAppUrl(t(S.hero.whatsappDefaultMsg));

    return (
      global.Header() +
      '<main id="main-content">' +
        global.Hero() +

        // Services Section
        '<section class="section-wrapper bg-slate-50" id="services" aria-labelledby="services-heading">' +
          '<div class="section-container">' +
            '<div class="section-title-header">' +
              '<span class="section-pill-tag">' + escape(t(S.ui.servicesTag || { en: 'Our Services', ta: 'எங்கள் சேவைகள்' })) + '</span>' +
              '<h2 id="services-heading" class="section-main-heading">' + escape(t(S.ui.servicesHeading)) + '</h2>' +
              '<p class="section-main-sub">' + escape(t(S.ui.servicesSub)) + '</p>' +
            '</div>' +
            '<div class="services-redesign-grid">' +
              serviceCardsHtml +
            '</div>' +
          '</div>' +
        '</section>' +

        // Why Choose Us Section
        '<section class="section-wrapper bg-white border-y" id="why-us" aria-labelledby="why-heading">' +
          '<div class="section-container">' +
            '<div class="section-title-header">' +
              '<h2 id="why-heading" class="section-main-heading">' + escape(t(S.ui.whyHeading)) + '</h2>' +
              '<p class="section-main-sub">' + escape(t(S.ui.whySub)) + '</p>' +
            '</div>' +
            '<div class="why-redesign-grid">' +
              whyItems +
            '</div>' +
          '</div>' +
        '</section>' +

        // How It Works 3-Step Process
        '<section class="section-wrapper bg-slate-100" id="process" aria-labelledby="process-heading">' +
          '<div class="section-container">' +
            '<div class="section-title-header">' +
              '<span class="section-pill-tag">' + escape(t(HP.tag || { en: 'Simple 3-Step Process', ta: 'எளிய 3 படிமுறை' })) + '</span>' +
              '<h2 id="process-heading" class="section-main-heading">' + escape(t(HP.title || { en: 'How It Works', ta: 'பணி செய்யும் முறை' })) + '</h2>' +
            '</div>' +
            '<div class="home-process-grid">' +
              hpStepsHtml +
            '</div>' +
          '</div>' +
        '</section>' +

        // Testimonials
        '<section class="section-wrapper bg-white" id="testimonials" aria-labelledby="testimonials-heading">' +
          '<div class="section-container">' +
            '<div class="section-title-header">' +
              '<span class="section-pill-tag gold">' + escape(t(TM.tag || { en: 'Customer Satisfaction', ta: 'வாடிக்கையாளர் நற்சான்றிதழ்' })) + '</span>' +
              '<h2 id="testimonials-heading" class="section-main-heading">' + escape(t(TM.title || { en: 'Trusted by 3,500+ Happy Customers in Madurai', ta: 'மதுரையில் 3,500+ திருப்திகரமான வாடிக்கையாளர்கள்' })) + '</h2>' +
              '<div class="testimonials-stars-row">' +
                '<span class="stars-gold">' +
                  '<i class="fa-solid fa-star" aria-hidden="true"></i>' +
                  '<i class="fa-solid fa-star" aria-hidden="true"></i>' +
                  '<i class="fa-solid fa-star" aria-hidden="true"></i>' +
                  '<i class="fa-solid fa-star" aria-hidden="true"></i>' +
                  '<i class="fa-solid fa-star" aria-hidden="true"></i>' +
                '</span>' +
                '<strong class="rating-number">' + escape(TM.ratingVal || '4.9 / 5') + '</strong> ' +
                '<span class="rating-sub">' + escape(t(TM.ratingLabel || { en: 'Average Rating', ta: 'சராசரி மதிப்பீடு' })) + '</span>' +
              '</div>' +
            '</div>' +
            '<div class="testimonials-grid">' +
              testimonialsHtml +
            '</div>' +
          '</div>' +
        '</section>' +

        // Urgent CTA Banner
        '<section class="urgent-cta-section" aria-label="Urgent Service Callout">' +
          '<div class="section-container">' +
            '<div class="urgent-cta-inner">' +
              '<div class="urgent-cta-text">' +
                '<h2 class="urgent-cta-title">' + escape(t(UC.title)) + '</h2>' +
                '<p class="urgent-cta-sub">' + escape(t(UC.sub)) + '</p>' +
              '</div>' +
              '<div class="urgent-cta-buttons">' +
                '<a href="' + telUrl + '" class="btn-urgent-call" aria-label="Call ' + (S.business.phoneDisplay || '') + '">' +
                  '<i class="fa-solid fa-phone" aria-hidden="true"></i> ' + (S.business.phoneDisplay || '+91 99999 99999') +
                '</a>' +
                '<a href="' + waUrl + '" class="btn-urgent-wa" target="_blank" rel="noopener" aria-label="WhatsApp Message">' +
                  '<i class="fa-brands fa-whatsapp text-lg" aria-hidden="true"></i> ' + escape(t(UC.waLabel)) +
                '</a>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</section>' +
      '</main>' +
      global.Footer()
    );
  }

  // 4. Build WhatsApp Booking Link for Service Detail Page
  function getServiceWhatsAppUrl(service, selectedSubIdx) {
    var serviceTitle = t(service.title);
    var sub = (service.subServices && service.subServices[selectedSubIdx]) ? service.subServices[selectedSubIdx] : (service.subServices ? service.subServices[0] : null);
    var subTitle = sub ? t(sub.label) : '';
    var priceStr = sub && sub.price ? ' (' + sub.price + ')' : '';

    var prefix = t(S.ui.whatsAppPrefix || { en: 'Hello Nuha Cool Fix, I would like to book: ', ta: 'வணக்கம் நுஹா கூல் ஃபிக்ஸ், நான் புக் செய்ய விரும்புவது: ' });
    var fullMsg = prefix + serviceTitle + ' - ' + subTitle + priceStr + ' for my home in Madurai.';
    return global.I18n.buildWhatsAppUrl(fullMsg);
  }

  // 5. Render Service Detail Page View (Stitch Service Redesign)
  function renderServiceDetailView(service) {
    if (!currentDetailState.serviceId || currentDetailState.serviceId !== service.id) {
      currentDetailState.serviceId = service.id;
      currentDetailState.selectedSubIdx = 0;
      currentDetailState.selectedSubId = (service.subServices && service.subServices[0]) ? service.subServices[0].id : null;
    }

    var serviceTitle = escape(t(service.title));
    var badgeText = service.badge ? escape(t(service.badge)) : 'Same Day Service Available';
    var backLabel = escape(t(S.ui.backToHome || { en: 'Back to Home', ta: 'முகப்புக்குத் திரும்பு' }));
    var bookBtnLabel = escape(t(S.ui.bookOnWhatsApp || { en: 'Book on WhatsApp', ta: 'வாட்ஸ்அப்பில் புக் செய்ய' }));
    var callLabel = escape(t(S.ui.callNow || { en: 'Call Now', ta: 'இப்போதே அழைக்க' }));
    var earliestSlot = escape(t(S.ui.earliestSlot || { en: 'Earliest Slot: Today, within 2h', ta: 'அடுத்த ஸ்லாட்: இன்றே, 2 மணி நேரத்தில்' }));
    var telUrl = 'tel:+' + (S.business.phone || '919999999999');

    // Rating block
    var ratingVal = (service.rating && service.rating.value) ? service.rating.value : '4.9';
    var ratingCount = (service.rating && service.rating.count) ? service.rating.count : '1,240+';

    // 4-Step Process Section Cards
    var processCardsHtml = (service.process || []).map(function (step, idx) {
      var stepNum = (idx < 9 ? '0' : '') + (idx + 1);
      return (
        '<div class="service-process-card">' +
          '<div class="service-process-num">' + stepNum + '</div>' +
          '<h3 class="service-process-title">' + escape(t(step.title)) + '</h3>' +
          '<p class="service-process-desc">' + escape(t(step.text)) + '</p>' +
        '</div>'
      );
    }).join('');

    // Transparency Cards (Included vs Excluded)
    var trans = service.transparency || {};
    var incHtml = (trans.included || []).map(function (item) {
      return (
        '<li class="trans-item">' +
          '<span class="trans-check">✔</span>' +
          '<span>' + escape(t(item)) + '</span>' +
        '</li>'
      );
    }).join('');

    var excHtml = (trans.excluded || []).map(function (item) {
      return (
        '<li class="trans-item">' +
          '<span class="trans-cross">✕</span>' +
          '<span>' + escape(t(item)) + '</span>' +
        '</li>'
      );
    }).join('');

    // Service-specific reviews
    var reviewsHtml = (service.reviews || []).map(function (rev) {
      return (
        '<article class="service-review-card">' +
          '<div class="review-stars-row">★★★★★</div>' +
          '<p class="review-quote">' + escape(t(rev.text)) + '</p>' +
          '<div class="review-author-meta">' +
            '<h4 class="review-author-name">' + escape(rev.name) + '</h4>' +
            '<p class="review-author-loc">' + escape(t(rev.loc)) + '</p>' +
          '</div>' +
        '</article>'
      );
    }).join('');

    var activeSub = (service.subServices && service.subServices[currentDetailState.selectedSubIdx]) ? service.subServices[currentDetailState.selectedSubIdx] : (service.subServices ? service.subServices[0] : null);
    var waUrl = getServiceWhatsAppUrl(service, currentDetailState.selectedSubIdx);

    var contentHtml = (
      '<div class="service-redesign-wrapper">' +
        // 1. Breadcrumb & Header Box
        '<section class="service-header-hero-box" aria-labelledby="service-h1-title">' +
          '<div class="service-hero-header-content">' +
            '<nav aria-label="Breadcrumb" class="service-breadcrumb">' +
              '<a href="#/" class="breadcrumb-back-link">' +
                '<i class="fa-solid fa-arrow-left" aria-hidden="true"></i> ' + backLabel +
              '</a>' +
              '<span class="breadcrumb-sep">/</span>' +
              '<span>' + escape(t(S.ui.servicesTag)) + '</span>' +
              '<span class="breadcrumb-sep">/</span>' +
              '<span class="breadcrumb-current">' + serviceTitle + '</span>' +
            '</nav>' +
            '<div class="service-title-row">' +
              '<div class="service-icon-pill" aria-hidden="true">' +
                '<i class="' + (service.iconClass || 'fa-solid fa-screwdriver-wrench') + '"></i>' +
              '</div>' +
              '<h1 id="service-h1-title" class="service-title-text">' + serviceTitle + '</h1>' +
              '<span class="service-status-pill">' +
                '<span class="status-dot"></span>' + badgeText +
              '</span>' +
            '</div>' +
            '<p class="service-hero-desc">' + escape(t(service.shortDesc)) + '</p>' +
          '</div>' +
          // Rating Badge Box
          '<div class="service-rating-box" aria-label="Rating: ' + ratingVal + ' out of 5">' +
            '<div class="rating-star-circle">★</div>' +
            '<div>' +
              '<div class="rating-header-lbl">Google Rating</div>' +
              '<div class="rating-score-txt">' + ratingVal + ' / 5 <span class="rating-count-sub">(' + ratingCount + ' homes)</span></div>' +
            '</div>' +
          '</div>' +
        '</section>' +

        // 2. Select a Service Package (Interactive 4-Card Selector)
        global.SubServicePicker(service, currentDetailState.selectedSubId) +

        // 3. Signature Spotlight Banner Slider (Synchronized)
        global.Slider(service.slides, service.icon, service.subServices) +

        // 4. How It Works: 4-Step Process Roadmap
        '<section class="service-process-section" id="how-it-works">' +
          '<div class="service-section-header-center">' +
            '<span class="section-pill-tag">' + escape(t(S.ui.processSectionTag)) + '</span>' +
            '<h2 class="service-section-title">' + escape(t(S.ui.processSectionTitle)) + '</h2>' +
            '<p class="service-section-sub">' + escape(t(service.shortDesc)) + '</p>' +
          '</div>' +
          '<div class="service-process-grid">' +
            processCardsHtml +
          '</div>' +
          '<div class="process-modal-cta-wrap">' +
            '<button type="button" class="btn-open-modal-process" data-action="open-process" aria-haspopup="dialog">' +
              '<i class="fa-solid fa-list-check" aria-hidden="true"></i> ' + escape(t(S.ui.howItWorksBtn)) +
            '</button>' +
          '</div>' +
        '</section>' +

        // 5. Transparency: What's Included vs Excluded
        (trans.included && trans.included.length ? (
          '<section class="service-transparency-section" id="whats-included">' +
            '<div class="service-section-header-left">' +
              '<span class="section-pill-tag">' + escape(t(S.ui.transparencyTag)) + '</span>' +
              '<h2 class="service-section-title">' + escape(t(S.ui.transparencyTitle)) + '</h2>' +
              '<p class="service-section-sub">' + escape(t(S.ui.transparencySub)) + '</p>' +
            '</div>' +
            '<div class="transparency-grid">' +
              '<div class="trans-col trans-col-inc">' +
                '<h3 class="trans-col-heading inc-heading">' +
                  '<i class="fa-solid fa-circle-check" aria-hidden="true"></i> ' + escape(t(S.ui.includedTitle)) +
                '</h3>' +
                '<ul class="trans-list">' + incHtml + '</ul>' +
              '</div>' +
              '<div class="trans-col trans-col-exc">' +
                '<h3 class="trans-col-heading exc-heading">' +
                  '<i class="fa-solid fa-circle-xmark" aria-hidden="true"></i> ' + escape(t(S.ui.excludedTitle)) +
                '</h3>' +
                '<ul class="trans-list">' + excHtml + '</ul>' +
              '</div>' +
            '</div>' +
          '</section>'
        ) : '') +

        // 6. Verified Customer Reviews for this Service
        (reviewsHtml ? (
          '<section class="service-reviews-section" id="reviews">' +
            '<div class="reviews-header-bar">' +
              '<div>' +
                '<span class="section-pill-tag gold">' + escape(t(S.ui.reviewsHeading)) + '</span>' +
                '<h2 class="service-section-title">' + escape(t(S.ui.reviewsHeading)) + '</h2>' +
              '</div>' +
              '<div class="reviews-average-badge">★★★★★ 4.9/5 Average</div>' +
            '</div>' +
            '<div class="service-reviews-grid">' +
              reviewsHtml +
            '</div>' +
          '</section>'
        ) : '') +

        // 7. Sticky Bottom Booking Bar
        '<aside class="service-sticky-dock" id="service-sticky-bar" data-purpose="sticky-booking-bar">' +
          '<div class="service-sticky-inner">' +
            '<div class="sticky-left-summary">' +
              '<div class="sticky-icon-badge" aria-hidden="true">' + escape(service.icon || '🛠️') + '</div>' +
              '<div class="sticky-info-txt">' +
                '<span class="sticky-label-tiny">' + escape(t(S.ui.selectedService)) + ':</span>' +
                '<div class="sticky-package-title" id="sticky-pkg-name">' +
                  escape(activeSub ? t(activeSub.label) : '') +
                  (activeSub && activeSub.price ? ' <span class="sticky-pkg-price" id="sticky-pkg-price">' + escape(activeSub.price) + '</span>' : '') +
                '</div>' +
              '</div>' +
              '<div class="sticky-slot-pill">' +
                '<span class="slot-dot"></span>' + earliestSlot +
              '</div>' +
            '</div>' +
            '<div class="sticky-right-actions">' +
              '<a href="' + telUrl + '" class="btn-dock-call" aria-label="Call ' + (S.business.phoneDisplay || '') + '">' +
                '<i class="fa-solid fa-phone" aria-hidden="true"></i> ' + callLabel +
              '</a>' +
              '<a href="' + waUrl + '" target="_blank" rel="noopener" class="btn-dock-wa" id="sticky-wa-link" aria-label="Book on WhatsApp">' +
                '<i class="fa-brands fa-whatsapp text-lg" aria-hidden="true"></i> ' + bookBtnLabel +
              '</a>' +
            '</div>' +
          '</div>' +
        '</aside>' +
      '</div>'
    );

    return (
      global.Header() +
      '<main id="main-content" class="service-detail-main">' +
        contentHtml +
      '</main>'
    );
  }

  // 6. Update Selection State (Two-Way Synchronization Helper)
  function syncSelectionState(index, service) {
    if (!service || !service.subServices || !service.subServices[index]) return;

    currentDetailState.selectedSubIdx = index;
    currentDetailState.selectedSubId = service.subServices[index].id;

    var selectedSub = service.subServices[index];

    // 1. Update Package Cards Above
    var allCards = document.querySelectorAll('.service-package-card');
    for (var i = 0; i < allCards.length; i++) {
      var isCurrent = (i === index);
      var badge = allCards[i].querySelector('.pkg-selected-badge');
      if (isCurrent) {
        allCards[i].classList.add('is-selected');
        allCards[i].setAttribute('aria-checked', 'true');
        if (badge) badge.style.display = 'flex';

        // Ensure card is visible in mobile scroll row
        try {
          allCards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        } catch (e) {}
      } else {
        allCards[i].classList.remove('is-selected');
        allCards[i].setAttribute('aria-checked', 'false');
        if (badge) badge.style.display = 'none';
      }
    }

    // 2. Update Sticky Bottom Booking Bar
    var nameEl = document.getElementById('sticky-pkg-name');
    var priceEl = document.getElementById('sticky-pkg-price');
    var waLink = document.getElementById('sticky-wa-link');

    if (nameEl && selectedSub) {
      nameEl.innerHTML = escape(t(selectedSub.label)) +
        (selectedSub.price ? ' <span class="sticky-pkg-price" id="sticky-pkg-price">' + escape(selectedSub.price) + '</span>' : '');
    }
    if (waLink) {
      waLink.href = getServiceWhatsAppUrl(service, index);
    }
  }

  // 7. Main Render Orchestration
  function renderView() {
    var route = global.Router.getRoute();
    var appContainer = document.getElementById('app');
    if (!appContainer) return;

    if (global.destroyActiveSlider) {
      global.destroyActiveSlider();
    }

    if (route.path === 'service' && route.service) {
      appContainer.innerHTML = renderServiceDetailView(route.service);

      // Hide floating chat icon on service pages (only required on home page)
      if (global.ChatWidget && typeof global.ChatWidget.hide === 'function') {
        global.ChatWidget.hide();
      }

      // Mount Banner Slider with Two-Way Sync Callback
      var sliderEl = document.getElementById('banner-slider');
      if (sliderEl && global.mountSlider) {
        currentDetailState.sliderInstance = global.mountSlider(sliderEl, route.service.slides, function (slideIndex, fromUserClick) {
          // If slider changes, update the selection above!
          syncSelectionState(slideIndex, route.service);
        });
      }
    } else {
      currentDetailState.serviceId = null;
      currentDetailState.selectedSubId = null;
      currentDetailState.selectedSubIdx = 0;
      currentDetailState.sliderInstance = null;
      appContainer.innerHTML = renderHomeView();
      bindHeroBookingForm();

      // Show floating chat icon on Home page
      if (global.ChatWidget && typeof global.ChatWidget.show === 'function') {
        global.ChatWidget.show();
      }
    }

    updateMetadata(route);
  }

  // 8. Bind Quick Booking Form on Home Page
  function bindHeroBookingForm() {
    var form = document.getElementById('hero-booking-form');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var applianceSelect = form.querySelector('[name="appliance"]');
      var phoneInput = form.querySelector('[name="phone"]');
      var locInput = form.querySelector('[name="location"]');
      var feedbackEl = document.getElementById('form-feedback');

      var phoneVal = phoneInput ? phoneInput.value.trim() : '';
      var locVal = locInput ? locInput.value.trim() : '';
      var selectedId = applianceSelect ? applianceSelect.value : '';

      var selectedTitle = '';
      if (S.services) {
        for (var i = 0; i < S.services.length; i++) {
          if (S.services[i].id === selectedId) {
            selectedTitle = t(S.services[i].title);
            break;
          }
        }
      }

      var bookingMsg = 'Hello Nuha Cool Fix, I would like to book a doorstep repair service.\n' +
        '• Appliance: ' + selectedTitle + '\n' +
        '• Phone: +91 ' + phoneVal + '\n' +
        '• Location: ' + locVal + ' (Madurai)';

      var waUrl = global.I18n.buildWhatsAppUrl(bookingMsg);
      window.open(waUrl, '_blank', 'noopener');

      if (feedbackEl) {
        var QB = S.hero.quickBooking || {};
        feedbackEl.textContent = t(QB.successMsg);
        feedbackEl.style.display = 'block';
        feedbackEl.className = 'form-feedback success';
      }

      form.reset();
    });
  }

  // 9. Interactive Event Delegations
  function setupDelegation() {
    document.addEventListener('click', function (e) {
      // 1. Language Toggle Button
      var langBtn = e.target.closest('[data-action="toggle-lang"]');
      if (langBtn) {
        e.preventDefault();
        var curLang = global.I18n.getLang();
        var nextLang = curLang === 'ta' ? 'en' : 'ta';
        global.I18n.setLang(nextLang);
        return;
      }

      // 2. Service Card Click (Home Page)
      var card = e.target.closest('.redesign-service-card');
      if (card && !e.target.closest('a')) {
        var href = card.dataset.href;
        if (href) {
          global.Router.navigate(href.replace(/^#/, ''));
          window.scrollTo({ top: 0, behavior: 'smooth' });
          return;
        }
      }

      // 3. Sub-Service Package Card Click (TWO-WAY SYNC: updates slider below!)
      var pkgCard = e.target.closest('.service-package-card');
      if (pkgCard) {
        e.preventDefault();
        var idx = parseInt(pkgCard.dataset.subIdx, 10);
        var route = global.Router.getRoute();
        if (route.path === 'service' && route.service && !isNaN(idx)) {
          // 1. Update selection state and sticky bar
          syncSelectionState(idx, route.service);
          // 2. Update slider below to jump to this slide!
          if (currentDetailState.sliderInstance && typeof currentDetailState.sliderInstance.goToSlide === 'function') {
            currentDetailState.sliderInstance.goToSlide(idx);
          }
        }
        return;
      }

      // 4. "How it works" Open Process Modal
      var processBtn = e.target.closest('[data-action="open-process"]');
      if (processBtn) {
        e.preventDefault();
        var currentRoute = global.Router.getRoute();
        if (currentRoute.path === 'service' && currentRoute.service && global.openProcessModal) {
          global.openProcessModal(currentRoute.service, processBtn);
        }
        return;
      }

      // 5. Header Nav Anchor Click handling
      var navLink = e.target.closest('[data-nav]');
      if (navLink) {
        var targetSectionId = navLink.dataset.nav;
        var currentRoute2 = global.Router.getRoute();
        if (currentRoute2.path !== 'home') {
          e.preventDefault();
          global.Router.navigate('/');
          setTimeout(function () {
            var targetEl = document.getElementById(targetSectionId);
            if (targetEl) {
              targetEl.scrollIntoView({ behavior: 'smooth' });
            }
          }, 60);
        } else {
          e.preventDefault();
          var targetEl2 = document.getElementById(targetSectionId);
          if (targetEl2) {
            targetEl2.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });

    // Keyboard support for package selector (accessibility)
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        var activeEl = document.activeElement;
        if (activeEl && activeEl.classList.contains('service-package-card')) {
          e.preventDefault();
          activeEl.click();
        }
      }
    });
  }

  // 10. Bootstrap Application
  function init() {
    initTheme();
    setupDelegation();

    global.I18n.onLangChange(function () {
      renderView();
    });

    global.Router.init(function () {
      renderView();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    if (global.ChatWidget && global.ChatWidget.mount) {
      global.ChatWidget.mount();
    }
  }

  global.App = {
    renderView: renderView,
    syncSelectionState: syncSelectionState,
    getServiceWhatsAppUrl: getServiceWhatsAppUrl
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})(window);
