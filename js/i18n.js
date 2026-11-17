// ==============================================================================
// I18N & CORE UTILITIES (js/i18n.js)
// ==============================================================================
(function (global) {
  'use strict';

  var S = global.SITE || {};
  var lang = S.defaultLang || 'ta';

  // Restore saved language choice with try/catch
  try {
    var savedLang = localStorage.getItem('nuhaa_lang');
    if (savedLang === 'ta' || savedLang === 'en') {
      lang = savedLang;
    }
  } catch (e) {
    console.warn('localStorage access failed; using default language.', e);
  }

  var listeners = [];

  function getLang() {
    return lang;
  }

  function setLang(newLang) {
    if (newLang !== 'ta' && newLang !== 'en') return;
    lang = newLang;
    try {
      localStorage.setItem('nuhaa_lang', lang);
    } catch (e) {
      console.warn('Unable to persist language choice to localStorage.', e);
    }
    document.documentElement.lang = lang;
    for (var i = 0; i < listeners.length; i++) {
      try {
        listeners[i](lang);
      } catch (err) {
        console.error('Error in lang listener:', err);
      }
    }
  }

  // Safe translation extractor: handles { en: '...', ta: '...' }
  function t(obj) {
    if (!obj) return '';
    if (typeof obj === 'string') return obj;
    return obj[lang] || obj.ta || obj.en || '';
  }

  // Escape HTML to prevent XSS
  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Build WhatsApp direct chat URL
  function buildWhatsAppUrl(messageText) {
    var phone = (S.business && S.business.phone) ? S.business.phone : '919999999999';
    var cleanMsg = messageText ? messageText.trim() : '';
    return 'https://wa.me/' + phone + '?text=' + encodeURIComponent(cleanMsg);
  }

  function onLangChange(fn) {
    if (typeof fn === 'function') {
      listeners.push(fn);
    }
  }

  global.I18n = {
    getLang: getLang,
    setLang: setLang,
    t: t,
    escapeHtml: escapeHtml,
    buildWhatsAppUrl: buildWhatsAppUrl,
    onLangChange: onLangChange
  };

  // Set initial html lang
  document.documentElement.lang = lang;
})(window);
