// ==============================================================================
// TINY HASH ROUTER (js/router.js)
// ==============================================================================
(function (global) {
  'use strict';

  var S = global.SITE || {};
  var currentRoute = { path: 'home', id: null, service: null };
  var routeListeners = [];

  function parseHash() {
    var rawHash = window.location.hash || '#/';
    if (rawHash.startsWith('#')) {
      rawHash = rawHash.slice(1);
    }
    if (!rawHash || rawHash === '/') {
      return { path: 'home', id: null, service: null };
    }

    var parts = rawHash.split('/').filter(Boolean);
    // Format: /service/:id
    if (parts[0] === 'service' && parts[1]) {
      var serviceId = parts[1].toLowerCase();
      var foundService = null;
      if (S.services && S.services.length) {
        for (var i = 0; i < S.services.length; i++) {
          if (S.services[i].id.toLowerCase() === serviceId) {
            foundService = S.services[i];
            break;
          }
        }
      }

      if (foundService) {
        return { path: 'service', id: foundService.id, service: foundService };
      }
    }

    // Unknown route or unknown service ID -> Fallback to Home
    if (window.location.hash !== '#/' && window.location.hash !== '') {
      try {
        history.replaceState(null, '', '#/');
      } catch (e) {
        window.location.hash = '#/';
      }
    }
    return { path: 'home', id: null, service: null };
  }

  function handleHashChange() {
    currentRoute = parseHash();
    for (var i = 0; i < routeListeners.length; i++) {
      try {
        routeListeners[i](currentRoute);
      } catch (err) {
        console.error('Error in route listener:', err);
      }
    }
  }

  function initRouter(callback) {
    if (typeof callback === 'function') {
      routeListeners.push(callback);
    }
    window.addEventListener('hashchange', handleHashChange);
    // Trigger initial route
    currentRoute = parseHash();
    callback(currentRoute);
  }

  function navigate(hash) {
    if (!hash.startsWith('#')) {
      hash = '#' + hash;
    }
    window.location.hash = hash;
  }

  function getRoute() {
    return currentRoute;
  }

  global.Router = {
    init: initRouter,
    navigate: navigate,
    getRoute: getRoute
  };
})(window);
