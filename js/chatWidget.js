// ==============================================================================
// CHAT WIDGET COMPONENT (js/chatWidget.js)
// ==============================================================================
(function (global) {
  'use strict';

  var isOpen = false;
  var isBuilt = false;
  var typedDraft = '';

  function getChatContainer() {
    var el = document.getElementById('chat-root');
    if (!el && typeof document.createElement === 'function' && document.body && document.body.appendChild) {
      el = document.createElement('div');
      el.id = 'chat-root';
      document.body.appendChild(el);
    }
    return el;
  }

  function renderChatPanelHtml() {
    var S = global.SITE || {};
    var C = S.chat || {};
    var t = global.I18n.t;
    var escape = global.I18n.escapeHtml;

    var title = escape(t(C.title || { en: 'WhatsApp Support', ta: 'வாட்ஸ்அப் உதவி' }));
    var subtitle = escape(t(C.subtitle || { en: 'Online | Sellur, Madurai', ta: 'ஆன்லைன் | செல்லூர், மதுரை' }));
    var greeting = escape(t(C.greeting || { en: 'Hi! How can we help you?', ta: 'வணக்கம்! உங்களுக்கு எப்படி உதவலாம்?' }));
    var placeholder = escape(t(C.placeholder || { en: 'Type your message...', ta: 'உங்கள் செய்தியை உள்ளிடவும்...' }));
    var sendLabel = escape(t(C.send || { en: 'Send', ta: 'அனுப்பு' }));
    var closeLabel = escape(t(S.ui.closeModal || { en: 'Close', ta: 'மூடு' }));

    var presetsHtml = (C.presets || []).map(function (preset, idx) {
      return (
        '<button type="button" class="chat-preset-chip" data-preset-idx="' + idx + '">' +
          '<span>' + escape(t(preset)) + '</span>' +
          '<span class="preset-arrow" aria-hidden="true">→</span>' +
        '</button>'
      );
    }).join('');

    return (
      '<div class="chat-panel' + (isOpen ? ' is-open' : '') + '" id="chat-panel" role="region" aria-label="' + title + '">' +
        '<div class="chat-header">' +
          '<div class="chat-header-avatar" aria-hidden="true">👨‍🔧</div>' +
          '<div class="chat-header-info">' +
            '<div class="chat-header-title">' + title + '</div>' +
            '<div class="chat-header-status">' +
              '<span class="online-dot" aria-hidden="true"></span>' + subtitle +
            '</div>' +
          '</div>' +
          '<button type="button" class="chat-close-btn" data-action="toggle-chat" aria-label="' + closeLabel + '">' +
            '✕' +
          '</button>' +
        '</div>' +
        '<div class="chat-messages-body">' +
          '<div class="chat-bubble chat-bubble-in">' +
            '<p class="bubble-text">' + greeting + '</p>' +
            '<span class="bubble-time">' + formatTime() + '</span>' +
          '</div>' +
          '<div class="chat-presets-group">' +
            presetsHtml +
          '</div>' +
        '</div>' +
        '<form class="chat-input-bar" id="chat-form">' +
          '<input type="text" name="chatMessage" class="chat-text-input" placeholder="' + placeholder + '" autocomplete="off" aria-label="' + placeholder + '" value="' + escape(typedDraft) + '">' +
          '<button type="submit" class="chat-send-btn" aria-label="' + sendLabel + '">' +
            '<span class="send-icon" aria-hidden="true">➤</span>' +
          '</button>' +
        '</form>' +
      '</div>'
    );
  }

  function formatTime() {
    var now = new Date();
    var h = now.getHours();
    var m = now.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    h = h ? h : 12;
    m = m < 10 ? '0' + m : m;
    return h + ':' + m + ' ' + ampm;
  }

  function renderFloatingButton() {
    var S = global.SITE || {};
    var C = S.chat || {};
    var t = global.I18n.t;
    var escape = global.I18n.escapeHtml;
    var title = escape(t(C.title || { en: 'Chat with Us', ta: 'எங்களுடன் வாட்ஸ்அப்பில் பேச' }));

    return (
      '<button type="button" class="chat-fab-btn" id="chat-fab" data-action="toggle-chat" aria-label="' + title + '" aria-expanded="' + (isOpen ? 'true' : 'false') + '">' +
        '<span class="fab-icon-wa" aria-hidden="true">💬</span>' +
        '<span class="fab-badge-ping" aria-hidden="true"></span>' +
      '</button>'
    );
  }

  function mountChatWidget() {
    var container = getChatContainer();
    // Initially only the FAB is in the DOM (lazy build)
    if (!isBuilt) {
      container.innerHTML = renderFloatingButton();
    } else {
      container.innerHTML = renderFloatingButton() + renderChatPanelHtml();
      bindChatEvents();
    }
  }

  function bindChatEvents() {
    var container = getChatContainer();
    var inputEl = container.querySelector('.chat-text-input');
    if (inputEl) {
      // Sync draft on typing
      inputEl.addEventListener('input', function (e) {
        typedDraft = e.target.value;
      });
      if (isOpen) {
        setTimeout(function () {
          inputEl.focus();
        }, 100);
      }
    }

    var formEl = container.querySelector('#chat-form');
    if (formEl) {
      formEl.addEventListener('submit', function (e) {
        e.preventDefault();
        var msg = typedDraft ? typedDraft.trim() : '';
        if (msg) {
          var url = global.I18n.buildWhatsAppUrl(msg);
          window.open(url, '_blank', 'noopener');
          typedDraft = '';
          if (inputEl) inputEl.value = '';
        }
      });
    }

    var presets = container.querySelectorAll('[data-preset-idx]');
    for (var i = 0; i < presets.length; i++) {
      (function (btn) {
        btn.addEventListener('click', function () {
          var idx = parseInt(btn.dataset.presetIdx, 10);
          var S = global.SITE || {};
          var p = S.chat.presets[idx];
          if (p) {
            var text = global.I18n.t(p);
            var url = global.I18n.buildWhatsAppUrl(text);
            window.open(url, '_blank', 'noopener');
          }
        });
      })(presets[i]);
    }
  }

  function toggleChat() {
    if (!isBuilt) {
      isBuilt = true; // Lazy build on first open
    }
    isOpen = !isOpen;
    var container = getChatContainer();
    container.innerHTML = renderFloatingButton() + renderChatPanelHtml();
    bindChatEvents();
  }

  // Update strings when language changes without losing typed draft
  function handleLangUpdate() {
    var container = getChatContainer();
    if (!container) return;

    if (isBuilt) {
      var inputEl = container.querySelector('.chat-text-input');
      if (inputEl) {
        typedDraft = inputEl.value; // Store latest value before re-render
      }
      container.innerHTML = renderFloatingButton() + renderChatPanelHtml();
      bindChatEvents();
    } else {
      container.innerHTML = renderFloatingButton();
    }
  }

  // Global delegation for opening/closing chat FAB
  document.addEventListener('click', function (e) {
    var toggleBtn = e.target.closest('[data-action="toggle-chat"]');
    if (toggleBtn) {
      e.preventDefault();
      toggleChat();
    }
  });

  function showChat() {
    var container = getChatContainer();
    if (container) {
      container.style.display = '';
    }
  }

  function hideChat() {
    var container = getChatContainer();
    if (container) {
      container.style.display = 'none';
      if (isOpen) {
        isOpen = false;
        var panel = container.querySelector('.chat-window');
        if (panel) panel.classList.remove('is-open');
      }
    }
  }

  global.I18n.onLangChange(handleLangUpdate);

  global.ChatWidget = {
    mount: mountChatWidget,
    toggle: toggleChat,
    show: showChat,
    hide: hideChat
  };
})(window);
