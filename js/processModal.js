// ==============================================================================
// PROCESS MODAL COMPONENT (js/processModal.js)
// ==============================================================================
(function (global) {
  'use strict';

  var activeModalTrigger = null;

  function ProcessModalButton() {
    var S = global.SITE || {};
    var t = global.I18n.t;
    var escape = global.I18n.escapeHtml;

    var btnLabel = escape(t(S.ui.howItWorksBtn || { en: 'How It Works (Our Process)', ta: 'எங்கள் பணி முறை (செயல்முறை)' }));

    return (
      '<div class="how-it-works-bar">' +
        '<button type="button" class="btn-how-it-works" data-action="open-process" aria-haspopup="dialog" aria-expanded="false">' +
          '<span class="btn-icon" aria-hidden="true">📋</span> ' + btnLabel +
        '</button>' +
      '</div>'
    );
  }

  function openProcessModal(service, triggerElement) {
    if (!service || !service.process || !service.process.length) return;

    activeModalTrigger = triggerElement;
    var S = global.SITE || {};
    var t = global.I18n.t;
    var escape = global.I18n.escapeHtml;

    var modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
      modalRoot = document.createElement('div');
      modalRoot.id = 'modal-root';
      document.body.appendChild(modalRoot);
    }

    var title = escape(t(S.ui.processModalTitle || { en: 'Our Service Process', ta: 'எங்கள் சர்வீஸ் செயல்முறை' }));
    var sub = escape(t(S.ui.processModalSub || { en: 'Standard 4-step procedure for every doorstep visit.', ta: 'ஒவ்வொரு விசிட்டிலும் நாங்கள் பின்பற்றும் 4 எளிய வழிமுறைகள்.' }));
    var closeLabel = escape(t(S.ui.closeModal || { en: 'Close', ta: 'மூடு' }));
    var stepPrefix = escape(t(S.ui.stepLabel || { en: 'Step', ta: 'படி' }));

    var stepsHtml = service.process.map(function (step, idx) {
      var stepNum = idx + 1;
      var stepTitle = escape(t(step.title));
      var stepText = escape(t(step.text));
      var icon = escape(service.icon || '🛠️');

      var imgHtml = step.image
        ? '<div class="step-media">' +
            '<img class="step-img" src="' + escape(step.image) + '" alt="" width="400" height="300" loading="lazy" onerror="this.style.display=\'none\'; this.nextElementSibling.style.display=\'flex\';">' +
            '<div class="step-fallback" style="display:none;" aria-hidden="true">' +
              '<span class="step-fallback-icon">' + icon + '</span>' +
            '</div>' +
          '</div>'
        : '';

      return (
        '<li class="process-timeline-item">' +
          '<div class="step-index-badge" aria-hidden="true">' + stepNum + '</div>' +
          '<div class="step-detail-card">' +
            imgHtml +
            '<div class="step-text-body">' +
              '<div class="step-badge-tag">' + stepPrefix + ' ' + stepNum + '</div>' +
              '<h3 class="step-title">' + stepTitle + '</h3>' +
              '<p class="step-desc">' + stepText + '</p>' +
            '</div>' +
          '</div>' +
        '</li>'
      );
    }).join('');

    var modalHtml = (
      '<div class="modal-backdrop" id="process-modal-backdrop" role="presentation">' +
        '<div class="modal-dialog" role="dialog" aria-modal="true" aria-labelledby="modal-title-id">' +
          '<div class="modal-header">' +
            '<div class="modal-header-text">' +
              '<h2 id="modal-title-id" class="modal-title">' + title + '</h2>' +
              '<p class="modal-subtitle">' + sub + '</p>' +
            '</div>' +
            '<button type="button" class="modal-close-btn" data-action="close-modal" aria-label="' + closeLabel + '">' +
              '✕' +
            '</button>' +
          '</div>' +
          '<div class="modal-body-scroll">' +
            '<ol class="process-timeline-list">' +
              stepsHtml +
            '</ol>' +
          '</div>' +
          '<div class="modal-footer">' +
            '<button type="button" class="btn btn-close-modal" data-action="close-modal">' +
              closeLabel +
            '</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );

    // Build modal content lazily on demand
    modalRoot.innerHTML = modalHtml;
    document.body.classList.add('modal-open');

    var backdrop = document.getElementById('process-modal-backdrop') || modalRoot.querySelector('.modal-backdrop');
    if (!backdrop) return;
    var dialog = backdrop.querySelector('.modal-dialog') || backdrop;
    var closeButtons = backdrop.querySelectorAll('[data-action="close-modal"]');

    function closeModal() {
      document.body.classList.remove('modal-open');
      document.removeEventListener('keydown', onKeyDown);
      modalRoot.innerHTML = '';
      if (activeModalTrigger && typeof activeModalTrigger.focus === 'function') {
        activeModalTrigger.focus();
      }
      activeModalTrigger = null;
    }

    // Backdrop click
    backdrop.addEventListener('click', function (e) {
      if (e.target === backdrop) {
        closeModal();
      }
    });

    for (var b = 0; b < closeButtons.length; b++) {
      closeButtons[b].addEventListener('click', closeModal);
    }

    // Keyboard handling: Escape key and Focus Trap
    function onKeyDown(e) {
      if (e.key === 'Escape' || e.key === 'Esc') {
        e.preventDefault();
        closeModal();
        return;
      }

      if (e.key === 'Tab' && dialog && dialog.querySelectorAll) {
        var focusables = dialog.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
        if (!focusables || !focusables.length) return;

        var first = focusables[0];
        var last = focusables[focusables.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }

    document.addEventListener('keydown', onKeyDown);

    // Set initial focus to close button
    if (dialog && dialog.querySelector) {
      var initialFocusBtn = dialog.querySelector('.modal-close-btn');
      if (initialFocusBtn && typeof initialFocusBtn.focus === 'function') {
        initialFocusBtn.focus();
      }
    }
  }

  global.ProcessModalButton = ProcessModalButton;
  global.openProcessModal = openProcessModal;
})(window);
