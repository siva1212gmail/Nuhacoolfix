// ==============================================================================
// SERVICE CARD COMPONENT (js/serviceCard.js)
// ==============================================================================
(function (global) {
  'use strict';

  function ServiceCard(service) {
    if (!service) return '';

    var S = global.SITE || {};
    var t = global.I18n.t;
    var escape = global.I18n.escapeHtml;

    var title = escape(t(service.title));
    var desc = escape(t(service.shortDesc));
    var badge = service.badge ? escape(t(service.badge)) : '';
    var priceTag = service.priceTag ? escape(t(service.priceTag)) : '';
    var linkText = escape(t(S.ui.viewDetails || { en: 'Details & Book Now', ta: 'விவரங்கள் & புக் செய்ய' }));
    var serviceHref = '#/service/' + encodeURIComponent(service.id);

    // Color accents
    var accentBg = service.accentBg || '#eff6ff';
    var accentColor = service.accentColor || '#2563eb';
    var iconClass = service.iconClass || 'fa-solid fa-screwdriver-wrench';

    // Features list
    var featuresHtml = (service.features || []).map(function (f) {
      return (
        '<li class="card-feature-item">' +
          '<i class="fa-solid fa-circle-check feature-check" aria-hidden="true"></i> ' +
          '<span>' + escape(t(f)) + '</span>' +
        '</li>'
      );
    }).join('');

    return (
      '<article class="redesign-service-card" data-href="' + serviceHref + '" data-purpose="service-card">' +
        '<div class="card-top-bar">' +
          (badge ? '<span class="card-badge-pill">' + badge + '</span>' : '<span></span>') +
          (priceTag ? '<span class="card-price-pill">' + priceTag + '</span>' : '') +
        '</div>' +
        '<div class="card-header-group">' +
          '<div class="card-icon-container" style="background-color: ' + accentBg + '; color: ' + accentColor + ';" aria-hidden="true">' +
            '<i class="' + iconClass + '"></i>' +
          '</div>' +
          '<h3 class="card-title">' +
            '<a href="' + serviceHref + '" class="card-title-link">' + title + '</a>' +
          '</h3>' +
        '</div>' +
        '<p class="card-desc">' + desc + '</p>' +
        (featuresHtml ? '<ul class="card-features-list">' + featuresHtml + '</ul>' : '') +
        '<div class="card-footer-action">' +
          '<a href="' + serviceHref + '" class="card-action-link" aria-label="' + title + ' - ' + linkText + '">' +
            '<span>' + linkText + '</span>' +
            '<i class="fa-solid fa-arrow-right card-arrow" aria-hidden="true"></i>' +
          '</a>' +
        '</div>' +
      '</article>'
    );
  }

  global.ServiceCard = ServiceCard;
})(window);
