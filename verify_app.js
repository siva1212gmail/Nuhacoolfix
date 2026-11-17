// Comprehensive Automated Integration & Unit Test Suite for Nuha Cool Fix
import fs from 'fs';
import vm from 'vm';

console.log('====================================================');
console.log(' NUHA COOL FIX - VERIFICATION & INTEGRATION TEST SUITE');
console.log('====================================================\n');

class MockElement {
  constructor(tagName, ownerDocument) {
    this.tagName = tagName ? tagName.toUpperCase() : 'DIV';
    this.ownerDocument = ownerDocument;
    this.attributes = {};
    this.classList = new Set();
    this.children = [];
    this.parentNode = null;
    this._innerHTML = '';
    this.style = {
      setProperty: (k, v) => { this.style[k] = v; },
      getPropertyValue: (k) => this.style[k]
    };
    this.listeners = {};
    this.value = '';
    this.offsetWidth = 100;
  }

  get innerHTML() {
    return this._innerHTML;
  }

  set innerHTML(val) {
    this._innerHTML = val;
    this.children = [];
    const tagMatches = val.matchAll(/<([a-zA-Z0-9-]+)([^>]*)>/g);
    for (const match of tagMatches) {
      const tag = match[1];
      const rawAttrs = match[2];
      const child = new MockElement(tag, this.ownerDocument);
      child.parentNode = this;

      const idMatch = rawAttrs.match(/id=["']([^"']+)["']/);
      if (idMatch) child.setAttribute('id', idMatch[1]);

      const classMatch = rawAttrs.match(/class=["']([^"']+)["']/);
      if (classMatch) child.setAttribute('class', classMatch[1]);

      const roleMatch = rawAttrs.match(/role=["']([^"']+)["']/);
      if (roleMatch) child.setAttribute('role', roleMatch[1]);

      const dataMatches = rawAttrs.matchAll(/(data-[a-zA-Z0-9-]+)=["']([^"']+)["']/g);
      for (const dm of dataMatches) {
        child.setAttribute(dm[1], dm[2]);
      }

      this.children.push(child);
    }
  }

  get innerText() {
    return this._innerHTML.replace(/<[^>]+>/g, '').trim();
  }

  set innerText(val) {
    this._innerHTML = val;
  }

  getAttribute(name) {
    return this.attributes[name] !== undefined ? this.attributes[name] : null;
  }

  setAttribute(name, val) {
    this.attributes[name] = String(val);
    if (name === 'class') {
      this.classList = new Set(String(val).split(/\s+/).filter(Boolean));
    }
  }

  removeAttribute(name) {
    delete this.attributes[name];
    if (name === 'class') this.classList.clear();
  }

  addEventListener(event, handler) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(handler);
  }

  removeEventListener(event, handler) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(h => h !== handler);
  }

  dispatchEvent(event) {
    const list = this.listeners[event.type] || [];
    list.forEach(h => h.call(this, event));
  }

  click() {
    this.dispatchEvent({ type: 'click', target: this, defaultPrevented: false, preventDefault() {} });
  }

  scrollIntoView() {}
  focus() {}
  appendChild(child) {
    child.parentNode = this;
    this.children.push(child);
  }

  querySelector(selector) {
    const all = this.querySelectorAll(selector);
    return all.length ? all[0] : null;
  }

  querySelectorAll(selector) {
    const results = [];
    function search(node) {
      if (!node) return;
      if (nodeMatches(node, selector)) results.push(node);
      if (node.children) {
        for (const child of node.children) {
          search(child);
        }
      }
    }

    function nodeMatches(node, sel) {
      if (!node || !node.attributes) return false;
      if (sel.startsWith('#')) return node.attributes.id === sel.slice(1);
      if (sel.startsWith('.')) return node.classList && node.classList.has(sel.slice(1));
      if (sel.startsWith('[')) {
        const m = sel.match(/\[([a-zA-Z0-9_-]+)(?:=["']?([^"']+)["']?)?\]/);
        if (m) {
          const attr = m[1];
          const val = m[2];
          if (val === undefined) return node.attributes[attr] !== undefined;
          return node.attributes[attr] === val;
        }
      }
      return node.tagName === sel.toUpperCase();
    }

    if (this.children) {
      for (const child of this.children) search(child);
    }
    return results;
  }
}

class MockDocument {
  constructor() {
    this.documentElement = new MockElement('html', this);
    this.body = new MockElement('body', this);
    this.documentElement.children.push(this.body);
    this.title = '';
    this.listeners = {};
  }

  createElement(tag) {
    return new MockElement(tag, this);
  }

  getElementById(id) {
    return this.querySelector(`#${id}`);
  }

  querySelector(selector) {
    const all = this.querySelectorAll(selector);
    return all.length ? all[0] : null;
  }

  querySelectorAll(selector) {
    return this.documentElement.querySelectorAll(selector);
  }

  addEventListener(event, handler) {
    if (!this.listeners[event]) this.listeners[event] = [];
    this.listeners[event].push(handler);
  }

  removeEventListener(event, handler) {
    if (!this.listeners[event]) return;
    this.listeners[event] = this.listeners[event].filter(h => h !== handler);
  }

  dispatchEvent(event) {
    const list = this.listeners[event.type] || [];
    list.forEach(h => h.call(this, event));
  }
}

const doc = new MockDocument();
const localStorageStore = {};

let _currentHash = '#/';
const locationObj = {
  get hash() { return _currentHash; },
  set hash(val) {
    _currentHash = val;
    const evt = { type: 'hashchange', newURL: 'file:///index.html' + val };
    const list = doc.listeners['hashchange'] || [];
    for (const h of list) {
      try { h(evt); } catch (e) { console.error(e); }
    }
  }
};

const mockWindow = {
  document: doc,
  localStorage: {
    getItem(k) { return localStorageStore[k] || null; },
    setItem(k, v) { localStorageStore[k] = String(v); },
    removeItem(k) { delete localStorageStore[k]; }
  },
  location: locationObj,
  history: {
    replaceState(state, title, url) {
      locationObj.hash = url;
    }
  },
  addEventListener(event, handler) {
    doc.addEventListener(event, handler);
  },
  removeEventListener(event, handler) {
    doc.removeEventListener(event, handler);
  },
  matchMedia() {
    return { matches: false, addEventListener() {}, removeEventListener() {} };
  },
  scrollTo() {},
  setTimeout(fn, ms) { return setTimeout(fn, ms); },
  clearTimeout(id) { clearTimeout(id); },
  setInterval(fn, ms) { return setInterval(fn, ms); },
  clearInterval(id) { clearInterval(id); }
};

mockWindow.window = mockWindow;
global.window = mockWindow;
global.document = doc;
global.localStorage = mockWindow.localStorage;

const context = vm.createContext(mockWindow);

function loadScript(filePath) {
  const code = fs.readFileSync(filePath, 'utf-8');
  vm.runInContext(code, context, { filename: filePath });
}

console.log('Step 1: Setting up DOM mount roots...');
const appRoot = doc.createElement('div');
appRoot.setAttribute('id', 'app');
doc.body.appendChild(appRoot);

const chatRoot = doc.createElement('div');
chatRoot.setAttribute('id', 'chat-root');
doc.body.appendChild(chatRoot);

const modalRoot = doc.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
doc.body.appendChild(modalRoot);

console.log('Step 2: Loading application scripts in order...');
loadScript('site.config.js');
loadScript('js/i18n.js');
loadScript('js/router.js');
loadScript('js/header.js');
loadScript('js/hero.js');
loadScript('js/serviceCard.js');
loadScript('js/subServicePicker.js');
loadScript('js/slider.js');
loadScript('js/processModal.js');
loadScript('js/chatWidget.js');
loadScript('js/footer.js');
loadScript('js/app.js');

let passCount = 0;
let failCount = 0;

function testAssert(condition, name) {
  if (condition) {
    console.log(`  [PASS] ${name}`);
    passCount++;
  } else {
    console.error(`  [FAIL] ${name}`);
    failCount++;
  }
}

// TEST SUITE 1: Config Data Integrity
console.log('\n--- 1. Testing Config & Data Architecture (site.config.js) ---');
testAssert(!!mockWindow.SITE, 'SITE global object is exported');
testAssert(mockWindow.SITE.business.name.en === 'Nuha Cool Fix', 'Business name EN matches "Nuha Cool Fix"');
testAssert(mockWindow.SITE.business.name.ta === 'நுஹா கூல் ஃபிக்ஸ்', 'Business name TA matches "நுஹா கூல் ஃபிக்ஸ்"');
testAssert(mockWindow.SITE.services.length === 5, 'Exactly 5 home appliance services configured');

const requiredServiceIds = ['ac', 'fridge', 'washing-machine', 'heater', 'tv'];
for (const sId of requiredServiceIds) {
  const s = mockWindow.SITE.services.find(x => x.id === sId);
  testAssert(!!s, `Service '${sId}' exists in config`);
  testAssert(s.subServices && s.subServices.length >= 3, `Service '${sId}' has >= 3 sub-service packages`);
  testAssert(s.slides && s.slides.length >= 3, `Service '${sId}' has >= 3 spotlight slides`);
  testAssert(s.process && s.process.length === 4, `Service '${sId}' has 4-step process roadmap`);
  testAssert(s.transparency && s.transparency.included.length > 0, `Service '${sId}' has transparency included list`);
  testAssert(s.transparency && s.transparency.excluded.length > 0, `Service '${sId}' has transparency excluded list`);
  testAssert(s.reviews && s.reviews.length >= 1, `Service '${sId}' has >= 1 customer reviews`);
}

// TEST SUITE 2: I18n Multi-Language System
console.log('\n--- 2. Testing I18n Multi-Language System ---');
testAssert(typeof mockWindow.I18n === 'object', 'I18n module exported');
testAssert(mockWindow.I18n.getLang() === 'ta', 'Default language on initial load is Tamil ("ta")');

const tamilText = mockWindow.I18n.t({ en: 'Hello', ta: 'வணக்கம்' });
testAssert(tamilText === 'வணக்கம்', 'I18n returns Tamil translation when lang is ta');

mockWindow.I18n.setLang('en');
testAssert(mockWindow.I18n.getLang() === 'en', 'I18n switches to English ("en")');
testAssert(mockWindow.I18n.t({ en: 'Hello', ta: 'வணக்கம்' }) === 'Hello', 'I18n returns English when lang is en');

mockWindow.I18n.setLang('ta');

// TEST SUITE 3: SubServicePicker Component Layout
console.log('\n--- 3. Testing SubServicePicker Component Layout ---');
const acService = mockWindow.SITE.services.find(s => s.id === 'ac');
const pickerHtml = mockWindow.SubServicePicker(acService, acService.subServices[0].id);
testAssert(pickerHtml.includes('service-package-selector-section'), 'Renders package selector section');
testAssert(pickerHtml.includes('service-package-card is-selected'), 'Initial sub-service has is-selected class');
testAssert(pickerHtml.includes('pkg-cur-price'), 'Displays package prices');
testAssert(pickerHtml.includes('pkg-orig-price'), 'Displays package original prices');
testAssert(pickerHtml.includes('pkg-selected-badge'), 'Displays selected ✓ badge container');

// TEST SUITE 4: Slider Component
console.log('\n--- 4. Testing Slider Component & Spotlight Overlay ---');
const sliderHtml = mockWindow.Slider(acService.slides, acService.icon, acService.subServices);
testAssert(sliderHtml.includes('service-spotlight-slider-section'), 'Renders spotlight slider section');
testAssert(sliderHtml.includes('spotlight-content-overlay'), 'Contains rich spotlight content overlay');
testAssert(sliderHtml.includes('slider-story-tabs-track'), 'Contains Instagram story-style progress tabs');
testAssert(sliderHtml.includes('slider-arrow-prev') && sliderHtml.includes('slider-arrow-next'), 'Contains previous and next navigation arrows');

// TEST SUITE 5: Full App Integration & Routing
console.log('\n--- 5. Testing Full App Integration & Routing ---');
testAssert(typeof mockWindow.App === 'object', 'App global exported');
testAssert(typeof mockWindow.Router === 'object', 'Router global exported');

mockWindow.location.hash = '#/';
const homeRoute = mockWindow.Router.getRoute();
testAssert(homeRoute.path === 'home', 'Route "#/" resolves to home');

console.log('Navigating to AC Service Page (#/service/ac)...');
mockWindow.location.hash = '#/service/ac';
const acRoute = mockWindow.Router.getRoute();
testAssert(acRoute.path === 'service' && acRoute.id === 'ac', 'Route "#/service/ac" resolves to AC service');

const renderedAppHtml = appRoot.innerHTML;
testAssert(renderedAppHtml.includes('service-redesign-wrapper'), 'Service detail wrapper rendered into #app');
testAssert(renderedAppHtml.includes('service-header-hero-box'), 'Service header hero box rendered');
testAssert(renderedAppHtml.includes('service-process-section'), 'Service process roadmap rendered');
testAssert(renderedAppHtml.includes('service-transparency-section'), 'Service transparency matrix rendered');
testAssert(renderedAppHtml.includes('service-reviews-section'), 'Service reviews section rendered');
testAssert(renderedAppHtml.includes('service-sticky-dock'), 'Service sticky bottom booking dock rendered');
testAssert(!renderedAppHtml.includes('site-footer'), 'Service page footer is hidden (as requested)');
testAssert(chatRoot.style.display === 'none', 'Floating chat widget is hidden on service page');

// Navigate back to Home and verify footer and chat widget restoration
console.log('Navigating back to Home (#/)...');
mockWindow.location.hash = '#/';
testAssert(chatRoot.style.display === '', 'Floating chat widget is shown on home page');
testAssert(appRoot.innerHTML.includes('site-redesign-footer'), 'Full footer is rendered on home page');

// Re-navigate to AC for remaining tests
mockWindow.location.hash = '#/service/ac';

const waSub0 = mockWindow.App.getServiceWhatsAppUrl(acService, 0);
const waSub1 = mockWindow.App.getServiceWhatsAppUrl(acService, 1);
testAssert(waSub0.includes('wa.me'), 'WhatsApp URL contains wa.me domain');
testAssert(waSub0 !== waSub1, 'WhatsApp pre-filled message dynamically reflects selected sub-service');

// TEST SUITE 6: Process Modal
console.log('\n--- 6. Testing Process Modal Lifecycle ---');
testAssert(typeof mockWindow.openProcessModal === 'function', 'openProcessModal function exported');
testAssert(typeof mockWindow.ProcessModalButton === 'function', 'ProcessModalButton component exported');

mockWindow.openProcessModal(acService);
const modalEl = doc.getElementById('process-modal-backdrop') || doc.querySelector('.modal-backdrop');
testAssert(!!modalEl, 'Process modal opened and mounted in modalRoot');

// TEST SUITE 7: Chat Widget
console.log('\n--- 7. Testing Floating WhatsApp Chat Widget ---');
testAssert(typeof mockWindow.ChatWidget === 'object', 'ChatWidget object exported');
testAssert(typeof mockWindow.ChatWidget.mount === 'function', 'ChatWidget mount() method available');
testAssert(typeof mockWindow.ChatWidget.toggle === 'function', 'ChatWidget toggle() method available');

mockWindow.ChatWidget.mount();
const chatFab = doc.querySelector('.chat-fab-btn');
testAssert(!!chatFab, 'Chat floating action button mounted in DOM');

console.log('\n====================================================');
console.log(` SUMMARY: ${passCount + failCount} Tests Executed`);
console.log(` PASSED: ${passCount}`);
console.log(` FAILED: ${failCount}`);
console.log('====================================================\n');

if (failCount > 0) {
  process.exit(1);
}
