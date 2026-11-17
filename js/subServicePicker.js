// ==============================================================================
// SUB-SERVICE PICKER COMPONENT (js/subServicePicker.js)
// ==============================================================================
(function (global) {
  'use strict';

  function SubServicePicker(service, selectedSubId) {
    if (!service || !service.subServices || !service.subServices.length) {
      return '';
    }

    var S = global.SITE || {};
    var t = global.I18n.t;
    var escape = global.I18n.escapeHtml;

    var headingText = escape(t(S.ui.selectServiceTitle || { en: 'Select an Option / Package', ta: 'சேவை பேக்கேஜைத் தேர்ந்தெடுக்கவும்' }));
    var headingSub = escape(t(S.ui.selectServiceSub || { en: 'Fixed upfront pricing with no hidden charges. Choose to view details.', ta: 'மறைமுக கட்டணங்கள் இல்லாத நிலையான விலை. விவரம் பார்க்க கிளிக் செய்க.' }));
    var subServices = service.subServices.slice(0, 4);

    var tilesHtml = subServices.map(function (sub, idx) {
      var isSelected = (sub.id === selectedSubId || (!selectedSubId && idx === 0));
      var labelText = escape(t(sub.label));
      var descText = sub.desc ? escape(t(sub.desc)) : '';
      var iconContent = sub.icon ? escape(sub.icon) : '🔧';
      var duration = sub.duration ? escape(t(sub.duration)) : '';
      var price = sub.price ? escape(sub.price) : '';
      var originalPrice = sub.originalPrice ? escape(sub.originalPrice) : '';

      return (
        '<div role="radio" class="service-package-card' + (isSelected ? ' is-selected' : '') + '" ' +
        'data-sub-id="' + escape(sub.id) + '" ' +
        'data-sub-idx="' + idx + '" ' +
        'aria-checked="' + (isSelected ? 'true' : 'false') + '" ' +
        'tabindex="0" ' +
        'aria-label="' + labelText + ' ' + price + '">' +
        // Selected Pill Badge
        '<div class="pkg-selected-badge" style="' + (isSelected ? '' : 'display: none;') + '">' +
        '<i class="fa-solid fa-check text-xs" aria-hidden="true"></i> ' +
        '<span>' + escape(t(S.ui.selectedService || { en: 'Selected', ta: 'தேர்ந்தெடுக்கப்பட்டது' })) + '</span>' +
        '</div>' +
        // Header inside card
        '<div class="pkg-card-top">' +
        '<div class="pkg-icon-wrap" aria-hidden="true">' + iconContent + '</div>' +
        (duration ? '<span class="pkg-duration-pill">' + duration + '</span>' : '') +
        '</div>' +
        '<h3 class="pkg-card-title">' + labelText + '</h3>' +
        (descText ? '<p class="pkg-card-desc">' + descText + '</p>' : '') +
        '<div class="pkg-price-row">' +
        (originalPrice ? '<span class="pkg-orig-price">' + originalPrice + '</span>' : '<span></span>') +
        (price ? '<div class="pkg-cur-price">' + price + '</div>' : '') +
        '</div>' +
        '</div>'
      );
    }).join('');

    return (
      '<section class="service-package-selector-section" aria-labelledby="sub-service-heading" id="services-list">' +
      '<div class="package-selector-header">' +
      '<div>' +
      '<h2 id="sub-service-heading" class="package-selector-heading">' +
      headingText + ' <span aria-hidden="true">👇</span>' +
      '</h2>' +
      '<p class="package-selector-sub">' + headingSub + '</p>' +
      '</div>' +
      '<span class="package-all-brands-tag">' +
      '✓ Daikin, Voltas, LG, Blue Star &amp; more' +
      '</span>' +
      '</div>' +
      '<div class="package-cards-grid" role="radiogroup" aria-labelledby="sub-service-heading">' +
      tilesHtml +
      '</div>' +
      '</section>'
    );
  }

  global.SubServicePicker = SubServicePicker;
})(window);
