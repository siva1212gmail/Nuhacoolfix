// ==============================================================================
// HERO COMPONENT (js/hero.js)
// ==============================================================================
(function (global) {
  'use strict';

  function Hero() {
    var S = global.SITE || {};
    var B = S.business || {};
    var H = S.hero || {};
    var t = global.I18n.t;
    var escape = global.I18n.escapeHtml;
    var buildWa = global.I18n.buildWhatsAppUrl;

    var badgeText = escape(t(H.badge));
    var rawTitle = t(H.title);
    var subText = escape(t(H.sub));
    var callLabel = escape(t(H.callBtn || S.ui.callNow));
    var waLabel = escape(t(H.whatsappBtn || S.ui.bookOnWhatsApp));
    var defaultMsg = t(H.whatsappDefaultMsg);
    var waUrl = buildWa(defaultMsg);
    var telUrl = 'tel:+' + (B.phone || '919999999999');

    // Title formatting with golden highlight on key services
    var formattedTitle = escape(rawTitle)
      .replace(/Water Heater &amp; TV Repair|Water Heater & TV Repair|ஹீட்டர் &amp; டிவி சர்வீஸ்|ஹீட்டர் & டிவி சர்வீஸ்/i, function (match) {
        return '<span class="text-gold">' + match + '</span>';
      });

    // Metrics Bar
    var metricsHtml = (H.metrics || []).map(function (m, idx) {
      var val = escape(t(m.val));
      var lbl = escape(t(m.label));
      var borderClass = idx > 0 ? ' metric-border' : '';
      return (
        '<div class="metric-item' + borderClass + '">' +
          '<span class="metric-val">' + val + '</span>' +
          '<span class="metric-lbl">' + lbl + '</span>' +
        '</div>'
      );
    }).join('');

    // Quick Booking Form
    var QB = H.quickBooking || {};
    var qbTag = escape(t(QB.tag || { en: 'Instant Help', ta: 'உடனடி உதவி' }));
    var qbTitle = escape(t(QB.title || { en: 'Quick Service Booking', ta: 'உடனடி சர்வீஸ் முன்பதிவு' }));
    var qbSub = escape(t(QB.sub || { en: 'Fill out details below, technician will call within 10 minutes.', ta: 'விவரங்களை உள்ளிடவும், 10 நிமிடங்களில் டெக்னீசியன் அழைப்பார்.' }));
    var qbAppliance = escape(t(QB.applianceLabel || { en: 'Select Appliance *', ta: 'உபகரணத்தைத் தேர்ந்தெடுக்கவும் *' }));
    var qbPhone = escape(t(QB.phoneLabel || { en: 'Phone Number *', ta: 'தொலைபேசி எண் *' }));
    var qbLoc = escape(t(QB.locationLabel || { en: 'Madurai Area / Location *', ta: 'பகுதி / இருப்பிடம் *' }));
    var qbPlaceholder = escape(t(QB.locationPlaceholder || { en: 'e.g., Sellur, Anna Nagar, KK Nagar', ta: 'எ.கா., செல்லூர், அண்ணா நகர்' }));
    var qbSubmit = escape(t(QB.submitBtn || { en: 'Book Technician Now', ta: 'டெக்னீசியனை உடனே புக் செய்க' }));

    var perksHtml = (QB.perks || []).map(function (p) {
      return (
        '<span class="qb-perk">' +
          '<i class="fa-solid fa-check text-emerald" aria-hidden="true"></i> ' + escape(t(p)) +
        '</span>'
      );
    }).join('');

    // Options for appliances
    var applianceOptions = (S.services || []).map(function (s) {
      return '<option value="' + escape(s.id) + '">' + escape(t(s.title)) + '</option>';
    }).join('');

    return (
      '<section class="hero-redesign-section" id="hero" aria-labelledby="hero-title">' +
        '<div class="hero-bg-overlay" aria-hidden="true"></div>' +
        '<div class="hero-inner-container">' +
          '<div class="hero-grid">' +
            // Left Content
            '<div class="hero-left-content">' +
              (badgeText ? (
                '<div class="hero-trust-badge">' +
                  '<i class="fa-solid fa-certificate text-gold" aria-hidden="true"></i> ' +
                  '<span>' + badgeText + '</span>' +
                '</div>'
              ) : '') +
              '<h1 id="hero-title" class="hero-main-title">' + formattedTitle + '</h1>' +
              '<p class="hero-sub-description">' + subText + '</p>' +
              '<div class="hero-cta-buttons">' +
                '<a href="' + telUrl + '" class="btn-hero-call" aria-label="' + callLabel + ' ' + (B.phoneDisplay || '') + '">' +
                  '<i class="fa-solid fa-phone-volume" aria-hidden="true"></i> ' + callLabel +
                '</a>' +
                '<a href="' + waUrl + '" class="btn-hero-wa" target="_blank" rel="noopener" aria-label="' + waLabel + ' on WhatsApp">' +
                  '<i class="fa-brands fa-whatsapp text-lg" aria-hidden="true"></i> ' + waLabel +
                '</a>' +
              '</div>' +
              '<div class="hero-metrics-bar">' +
                metricsHtml +
              '</div>' +
            '</div>' +

            // Right Quick Booking Card
            '<div class="hero-right-card-wrap">' +
              '<div class="hero-booking-card">' +
                '<div class="booking-card-header">' +
                  '<span class="booking-tag">' + qbTag + '</span>' +
                  '<h2 class="booking-card-title">' + qbTitle + '</h2>' +
                  '<p class="booking-card-sub">' + qbSub + '</p>' +
                '</div>' +
                '<form class="hero-quick-form" id="hero-booking-form">' +
                  '<div class="form-group">' +
                    '<label class="form-label" for="hero_appliance">' + qbAppliance + '</label>' +
                    '<div class="select-wrapper">' +
                      '<select id="hero_appliance" name="appliance" class="form-control" required>' +
                        applianceOptions +
                      '</select>' +
                      '<i class="fa-solid fa-chevron-down select-arrow" aria-hidden="true"></i>' +
                    '</div>' +
                  '</div>' +
                  '<div class="form-group">' +
                    '<label class="form-label" for="hero_phone">' + qbPhone + '</label>' +
                    '<div class="phone-input-wrap">' +
                      '<span class="phone-prefix">+91</span>' +
                      '<input type="tel" id="hero_phone" name="phone" class="form-control phone-input" placeholder="98765 43210" pattern="[0-9]{10}" maxlength="10" required autocomplete="tel">' +
                    '</div>' +
                  '</div>' +
                  '<div class="form-group">' +
                    '<label class="form-label" for="hero_location">' + qbLoc + '</label>' +
                    '<input type="text" id="hero_location" name="location" class="form-control" placeholder="' + qbPlaceholder + '" required autocomplete="street-address">' +
                  '</div>' +
                  '<button type="submit" class="btn-submit-booking">' +
                    '<span>' + qbSubmit + '</span> ' +
                    '<i class="fa-solid fa-arrow-right text-xs" aria-hidden="true"></i>' +
                  '</button>' +
                  '<div class="form-feedback" id="form-feedback" style="display:none;" role="status"></div>' +
                '</form>' +
                '<div class="booking-card-footer">' +
                  perksHtml +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>'
    );
  }

  global.Hero = Hero;
})(window);
