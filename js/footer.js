// ==============================================================================
// FOOTER COMPONENT (js/footer.js)
// ==============================================================================
(function (global) {
  'use strict';

  function Footer() {
    var S = global.SITE || {};
    var B = S.business || {};
    var t = global.I18n.t;
    var escape = global.I18n.escapeHtml;

    var name = escape(t(B.name));
    var tagline = escape(t(B.tagline));
    var address = escape(t(B.address));
    var hours = escape(t(B.hours));
    var mapQuery = B.mapQuery || 'Sellur, Madurai';
    var mapUrl = 'https://maps.google.com/?q=' + encodeURIComponent(mapQuery);
    var currentYear = new Date().getFullYear();

    var contactTitle = escape(t(S.ui.contactHeading || { en: 'Contact & Timings', ta: 'தொடர்பு & வேலை நேரம்' }));
    var servicesOffered = escape(t(S.ui.servicesOfferedLabel || { en: 'Services Offered', ta: 'வழங்கப்படும் சேவைகள்' }));
    var mapLabel = escape(t(S.ui.openInMaps || { en: 'View on Google Maps', ta: 'கூகுள் மேப்பில் பார்க்க' }));
    var copyrightLabel = escape(t(S.ui.copyright || { en: 'All rights reserved.', ta: 'அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.' }));
    var telUrl = 'tel:+' + (B.phone || '919999999999');
    var phoneDisplay = escape(B.phoneDisplay || '+91 99999 99999');
    var waUrl = global.I18n.buildWhatsAppUrl(t(S.hero.whatsappDefaultMsg));

    // Services list for footer
    var servicesListHtml = (S.services || []).map(function (s) {
      return (
        '<li>' +
          '<a href="#/service/' + escape(s.id) + '" class="footer-service-link">' +
            escape(t(s.title)) +
          '</a>' +
        '</li>'
      );
    }).join('');

    return (
      '<footer class="site-redesign-footer" id="contact" role="contentinfo">' +
        '<div class="footer-container">' +
          '<div class="footer-main-grid">' +
            // Column 1: Company Profile
            '<div class="footer-col footer-col-brand">' +
              '<div class="footer-brand-header">' +
                '<div class="footer-brand-icon" aria-hidden="true">' +
                  '<i class="fa-solid fa-screwdriver-wrench"></i>' +
                '</div>' +
                '<div>' +
                  '<span class="footer-brand-name">' + name + '</span>' +
                  '<p class="footer-brand-tagline">' + tagline + '</p>' +
                '</div>' +
              '</div>' +
              '<p class="footer-desc">' +
                escape(t(S.ui.contactSub)) +
              '</p>' +
              '<div class="footer-trust-pill">' +
                '<i class="fa-solid fa-shield text-brand-400" aria-hidden="true"></i> ' +
                '<span>100% Satisfaction Guarantee &amp; Certified Technicians</span>' +
              '</div>' +
            '</div>' +

            // Column 2: Services Offered
            '<div class="footer-col footer-col-links">' +
              '<h4 class="footer-col-title">' + servicesOffered + '</h4>' +
              '<ul class="footer-links-list">' +
                servicesListHtml +
              '</ul>' +
            '</div>' +

            // Column 3: Contact & Timings
            '<div class="footer-col footer-col-contact">' +
              '<h4 class="footer-col-title">' + contactTitle + '</h4>' +
              '<div class="footer-contact-items">' +
                '<div class="footer-contact-row">' +
                  '<i class="fa-solid fa-location-dot text-brand-400" aria-hidden="true"></i>' +
                  '<span><strong>' + escape(t(S.ui.addressLabel)) + ':</strong> ' + address + '</span>' +
                '</div>' +
                '<div class="footer-contact-row">' +
                  '<i class="fa-regular fa-clock text-brand-400" aria-hidden="true"></i>' +
                  '<span><strong>' + escape(t(S.ui.hoursLabel)) + ':</strong> ' + hours + '</span>' +
                '</div>' +
                '<div class="footer-contact-row">' +
                  '<i class="fa-solid fa-phone text-accent" aria-hidden="true"></i>' +
                  '<span><strong>' + escape(t(S.ui.phoneLabel)) + ':</strong> <a href="' + telUrl + '" class="footer-phone-val">' + phoneDisplay + '</a></span>' +
                '</div>' +
              '</div>' +
              '<div class="footer-maps-wrap">' +
                '<a href="' + mapUrl + '" target="_blank" rel="noopener" class="btn-maps-action" aria-label="' + mapLabel + '">' +
                  '<i class="fa-regular fa-map" aria-hidden="true"></i> ' + mapLabel +
                '</a>' +
              '</div>' +
            '</div>' +
          '</div>' +

          // Bottom Copyright Bar
          '<div class="footer-bottom-bar">' +
            '<p class="footer-copyright-text">© ' + currentYear + ' ' + name + '. ' + copyrightLabel + '</p>' +
          '</div>' +
        '</div>' +

        // Mobile Floating Action Dock (Call & WhatsApp) - visible only on mobile screens
        '<div class="mobile-floating-dock" data-purpose="floating-contact-dock" role="navigation" aria-label="Quick Actions">' +
          '<a href="' + telUrl + '" class="dock-btn dock-btn-call" aria-label="Call ' + phoneDisplay + '">' +
            '<i class="fa-solid fa-phone" aria-hidden="true"></i> ' +
            '<span>' + escape(t(S.ui.callNow)) + '</span>' +
          '</a>' +
          '<a href="' + waUrl + '" class="dock-btn dock-btn-wa" target="_blank" rel="noopener" aria-label="WhatsApp Booking">' +
            '<i class="fa-brands fa-whatsapp" aria-hidden="true"></i> ' +
            '<span>' + escape(t(S.hero.whatsappBtn)) + '</span>' +
          '</a>' +
        '</div>' +
      '</footer>'
    );
  }

  global.Footer = Footer;
})(window);
