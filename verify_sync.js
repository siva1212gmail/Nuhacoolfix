// Dedicated Bidirectional Synchronization Test Suite
import fs from 'fs';
import vm from 'vm';

console.log('====================================================');
console.log(' TESTING TWO-WAY SYNCHRONIZATION (SELECTION <-> SLIDER)');
console.log('====================================================\n');

class SimpleElement {
  constructor(tagName) {
    this.tagName = tagName ? tagName.toUpperCase() : 'DIV';
    this.attributes = {};
    const self = this;
    this._classSet = new Set();
    this.classList = {
      add: (c) => self._classSet.add(c),
      remove: (c) => self._classSet.delete(c),
      contains: (c) => self._classSet.has(c),
      has: (c) => self._classSet.has(c),
      clear: () => self._classSet.clear()
    };
    this.children = [];
    this.parentNode = null;
    this._innerHTML = '';
    this.style = {
      display: '',
      setProperty: (k, v) => { this.style[k] = v; },
      getPropertyValue: (k) => this.style[k]
    };
    this.listeners = {};
  }

  get innerHTML() { return this._innerHTML; }
  set innerHTML(val) {
    this._innerHTML = val;
    this.children = [];
    const tagMatches = val.matchAll(/<([a-zA-Z0-9-]+)([^>]*)>/g);
    for (const match of tagMatches) {
      const tag = match[1];
      const rawAttrs = match[2];
      const child = new SimpleElement(tag);
      child.parentNode = this;

      const idMatch = rawAttrs.match(/id=["']([^"']+)["']/);
      if (idMatch) child.setAttribute('id', idMatch[1]);

      const classMatch = rawAttrs.match(/class=["']([^"']+)["']/);
      if (classMatch) child.setAttribute('class', classMatch[1]);

      const dataMatches = rawAttrs.matchAll(/(data-[a-zA-Z0-9-]+)=["']([^"']+)["']/g);
      for (const dm of dataMatches) {
        child.setAttribute(dm[1], dm[2]);
      }

      this.children.push(child);
    }
  }

  get innerText() { return this._innerHTML.replace(/<[^>]+>/g, '').trim(); }
  set innerText(val) { this._innerHTML = val; }

  getAttribute(name) {
    if (this[name] !== undefined && typeof this[name] !== 'function') return String(this[name]);
    return this.attributes[name] !== undefined ? this.attributes[name] : null;
  }
  setAttribute(name, val) {
    this.attributes[name] = String(val);
    if (name === 'class') {
      this._classSet.clear();
      String(val).split(/\s+/).filter(Boolean).forEach(c => this._classSet.add(c));
    }
  }
  removeAttribute(name) {
    delete this.attributes[name];
    if (name === 'class') this._classSet.clear();
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
        for (const child of node.children) search(child);
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

class SimpleDocument {
  constructor() {
    this.documentElement = new SimpleElement('html');
    this.body = new SimpleElement('body');
    this.documentElement.children.push(this.body);
    this.listeners = {};
  }

  createElement(tag) { return new SimpleElement(tag); }
  getElementById(id) { return this.querySelector(`#${id}`); }
  querySelector(selector) {
    const all = this.querySelectorAll(selector);
    return all.length ? all[0] : null;
  }
  querySelectorAll(selector) { return this.documentElement.querySelectorAll(selector); }
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

const doc = new SimpleDocument();
let _hash = '#/';
const mockWindow = {
  document: doc,
  localStorage: { getItem() { return null; }, setItem() {}, removeItem() {} },
  location: {
    get hash() { return _hash; },
    set hash(val) {
      _hash = val;
      const evt = { type: 'hashchange' };
      const list = doc.listeners['hashchange'] || [];
      for (const h of list) h(evt);
    }
  },
  history: { replaceState(s, t, url) { mockWindow.location.hash = url; } },
  addEventListener(e, h) { doc.addEventListener(e, h); },
  removeEventListener() {},
  matchMedia() { return { matches: false, addEventListener() {}, removeEventListener() {} }; },
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

function load(file) {
  vm.runInContext(fs.readFileSync(file, 'utf-8'), context, { filename: file });
}

// Setup roots
const appRoot = doc.createElement('div');
appRoot.setAttribute('id', 'app');
doc.body.appendChild(appRoot);

const chatRoot = doc.createElement('div');
chatRoot.setAttribute('id', 'chat-root');
doc.body.appendChild(chatRoot);

const modalRoot = doc.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
doc.body.appendChild(modalRoot);

load('site.config.js');
load('js/i18n.js');
load('js/router.js');
load('js/header.js');
load('js/hero.js');
load('js/serviceCard.js');
load('js/subServicePicker.js');
load('js/slider.js');
load('js/processModal.js');
load('js/chatWidget.js');
load('js/footer.js');
load('js/app.js');

let passes = 0;
let fails = 0;
function assert(cond, desc) {
  if (cond) {
    console.log(`  [PASS] ${desc}`);
    passes++;
  } else {
    console.error(`  [FAIL] ${desc}`);
    fails++;
  }
}

// Navigate to AC service page
mockWindow.location.hash = '#/service/ac';

console.log('--- 1. Testing Initial Service Page State ---');
const service = mockWindow.SITE.services.find(s => s.id === 'ac');
assert(!!service, 'AC Service config loaded');

// Test syncSelectionState with package card 1
console.log('\n--- 2. Testing syncSelectionState(1, service) ---');
mockWindow.App.syncSelectionState(1, service);

const activePkgCard = doc.querySelectorAll('.service-package-card')[1];
assert(activePkgCard.classList.has('is-selected'), 'Package card 1 has .is-selected class');
assert(activePkgCard.getAttribute('aria-checked') === 'true', 'Package card 1 has aria-checked="true"');

const otherPkgCard0 = doc.querySelectorAll('.service-package-card')[0];
assert(!otherPkgCard0.classList.has('is-selected'), 'Package card 0 is not selected');
assert(otherPkgCard0.getAttribute('aria-checked') === 'false', 'Package card 0 has aria-checked="false"');

// Test sticky bar dynamic content after selection
const stickyPkgTitle = doc.getElementById('sticky-pkg-name');
assert(stickyPkgTitle && stickyPkgTitle.innerText.includes('Split AC Gas Refill') || stickyPkgTitle.innerText.includes('கேஸ்'), 'Sticky dock updated to show selected package name');

const stickyWaLink = doc.getElementById('sticky-wa-link');
assert(stickyWaLink && stickyWaLink.getAttribute('href').includes('wa.me'), 'Sticky dock WhatsApp link exists');

// Test syncSelectionState with package card 3
console.log('\n--- 3. Testing syncSelectionState(3, service) ---');
mockWindow.App.syncSelectionState(3, service);

const activePkgCard3 = doc.querySelectorAll('.service-package-card')[3];
assert(activePkgCard3.classList.has('is-selected'), 'Package card 3 has .is-selected class');
assert(activePkgCard3.getAttribute('aria-checked') === 'true', 'Package card 3 has aria-checked="true"');

// Test Slider Mount and callback hook
console.log('\n--- 4. Testing Slider Two-Way Hook ---');
let sliderCallbackCalledWith = null;
const sliderContainer = doc.createElement('div');
sliderContainer.innerHTML = mockWindow.Slider(service.slides, service.icon, service.subServices);
doc.body.appendChild(sliderContainer);

const sliderInstance = mockWindow.mountSlider(sliderContainer, service.slides, function (idx) {
  sliderCallbackCalledWith = idx;
  mockWindow.App.syncSelectionState(idx, service);
});

assert(!!sliderInstance, 'Slider mounted successfully with callback');
assert(typeof sliderInstance.goToSlide === 'function', 'Slider has goToSlide method');

// Advance slider to slide 2
sliderInstance.goToSlide(2);
assert(sliderCallbackCalledWith === 2, 'Slider onSlideChange callback fired with index 2');

const card2 = doc.querySelectorAll('.service-package-card')[2];
assert(card2.classList.has('is-selected'), 'Package card 2 is automatically selected above when slider moved to slide 2!');

// Advance slider to slide 0
sliderInstance.goToSlide(0);
assert(sliderCallbackCalledWith === 0, 'Slider onSlideChange callback fired with index 0');

const card0 = doc.querySelectorAll('.service-package-card')[0];
assert(card0.classList.has('is-selected'), 'Package card 0 is automatically selected above when slider moved to slide 0!');

sliderInstance.destroy();

console.log('\n====================================================');
console.log(` TWO-WAY SYNC RESULTS: ${passes} Passed, ${fails} Failed`);
console.log('====================================================\n');

if (fails > 0) process.exit(1);
