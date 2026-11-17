// ==============================================================================
// HEADER COMPONENT (js/header.js)
// ==============================================================================
(function (global) {
  'use strict';

  function Header() {
    var S = global.SITE || {};
    var B = S.business || {};
    var t = global.I18n.t;
    var escape = global.I18n.escapeHtml;
    var lang = global.I18n.getLang();
    var buildWa = global.I18n.buildWhatsAppUrl;

    var brandName = escape(t(B.name));
    var tagline = escape(t(B.tagline));
    var noticeText = escape(t(B.topBarNotice));
    var hoursText = escape(t(B.hours));
    var phoneDisplay = escape(B.phoneDisplay || '+91 99999 99999');
    var telUrl = 'tel:+' + (B.phone || '919999999999');
    var waUrl = buildWa(t(S.hero.whatsappDefaultMsg));

    var targetLangLabel = lang === 'ta' ? 'English' : 'தமிழ்';
    var ariaLabel = lang === 'ta' ? 'Switch website language to English' : 'தளத்தின் மொழியை தமிழுக்கு மாற்றவும்';

    var navItems = (S.nav || []).map(function (item) {
      return (
        '<a href="#' + escape(item.id) + '" class="nav-link" data-nav="' + escape(item.id) + '">' +
          escape(t(item.label)) +
        '</a>'
      );
    }).join('');

    return (
      '<header class="site-header-group" role="banner">' +
        // Top Notification Bar
        '<aside class="top-notification-bar" aria-label="Announcement">' +
          '<div class="top-bar-inner">' +
            '<div class="top-bar-left">' +
              '<span class="pulse-badge">' +
                '<span class="pulse-dot" aria-hidden="true"></span>' +
                noticeText +
              '</span>' +
            '</div>' +
            '<div class="top-bar-right">' +
              '<span class="top-bar-hours">' +
                '<i class="fa-regular fa-clock" aria-hidden="true"></i> ' + hoursText +
              '</span>' +
              '<a href="' + telUrl + '" class="top-bar-phone" aria-label="Call ' + phoneDisplay + '">' +
                '<i class="fa-solid fa-phone" aria-hidden="true"></i> ' + phoneDisplay +
              '</a>' +
            '</div>' +
          '</div>' +
        '</aside>' +

        // Main Sticky Navigation Bar
        '<div class="main-header-bar">' +
          '<div class="main-header-inner">' +
            // Brand Logo & Trust Tagline
            '<a href="#/" class="brand-link" aria-label="' + brandName + ' - Home">' +
              '<div class="brand-icon-box" aria-hidden="true">' +
                '<i class="fa-solid fa-screwdriver-wrench"></i>' +
              '</div>' +
              '<div class="brand-text-group">' +
                '<span class="brand-title">' + brandName + '</span>' +
                '<span class="brand-tagline">' +
                  '<i class="fa-solid fa-shield-halved" aria-hidden="true"></i> ' + tagline +
                '</span>' +
              '</div>' +
            '</a>' +

            // Desktop Nav
            '<nav class="site-nav" role="navigation" aria-label="Main Navigation">' +
              navItems +
            '</nav>' +

            // Actions: Language Toggle + Quick CTAs
            '<div class="header-actions">' +
              '<button type="button" class="lang-toggle-btn" data-action="toggle-lang" aria-label="' + escape(ariaLabel) + '">' +
                '<i class="fa-solid fa-globe" aria-hidden="true"></i> ' + targetLangLabel +
              '</button>' +
              '<a href="' + waUrl + '" class="header-btn header-btn-wa" target="_blank" rel="noopener" aria-label="WhatsApp Booking">' +
                '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i>' +
                '<span class="header-btn-text">' + escape(t(S.hero.whatsappBtn)) + '</span>' +
              '</a>' +
              '<a href="' + telUrl + '" class="header-btn header-btn-call" aria-label="Call ' + phoneDisplay + '">' +
                '<i class="fa-solid fa-phone" aria-hidden="true"></i>' +
                '<span class="header-btn-text">' + escape(t(S.hero.callBtn)) + '</span>' +
              '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</header>'
    );
  }

  global.Header = Header;
})(window);
