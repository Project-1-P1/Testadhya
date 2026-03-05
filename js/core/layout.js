/**

 * Adhya Eventech - Core Layout Module

 * File: /js/core/layout.js

 * Architecture Policy: Deterministic, read-only configuration, layout isolation.

 */

// 1. MODULE WRAPPER

// Encapsulates all layout logic to prevent global namespace pollution.

(function () {

    'use strict';

    // 2. PRIVATE DOM CACHE & STATE

    // Maintains a minimal footprint. Elements are queried once and cached.

    const DOM = {

        isCached: false,

        hero: null,

        navigation: null,

        sections: []

    };

    

    // Tracks event bindings to ensure idempotent initialization

    let listenersBound = false;

    // 3. PRIVATE LAYOUT UTILITIES

    // Provides safe layout calculations independent of external libraries.

    function setMobileViewportHeight() {

        // Prevents layout thrashing on mobile browsers caused by dynamic URL bars.

        const vh = window.innerHeight * 0.01;

        document.documentElement.style.setProperty('--adhya-vh', `${vh}px`);

    }

    // 4. HERO LAYOUT HANDLER

    // Safely manages structural boundaries of the hero area if it exists.

    function applyHeroLayout() {

        if (!DOM.hero) return;

        DOM.hero.style.minHeight = 'calc(var(--adhya-vh, 1vh) * 100)';

    }

    // 5. NAVIGATION LAYOUT HANDLER

    // Deterministic scroll-state toggling without continuous layout recalculations.

    function applyNavigationLayout() {

        if (!DOM.navigation) return;

        

        // Micro-optimization: pageYOffset offers better cross-browser compatibility

        const scrollY = window.pageYOffset || document.documentElement.scrollTop;

        

        if (scrollY > 50) {

            DOM.navigation.classList.add('is-scrolled');

        } else {
          DOM.navigation.classList.remove('is-scrolled');

        }

    }

    // 6. SECTION ALIGNMENT HELPER

    // Protects downstream section content from being obscured by fixed navigations.

    function applySectionAlignment() {

        if (!DOM.navigation || DOM.sections.length === 0) return;

        

        // Safer height calculation during partial render states

        const navHeight = DOM.navigation.getBoundingClientRect().height || 0;

        document.documentElement.style.setProperty('--adhya-nav-height', `${navHeight}px`);

    }

    // 7. RESPONSIVE LAYOUT HELPER

    // Centralized dispatcher for layout mutations to prevent fragmented DOM writes.

    function handleResponsiveAdjustments() {

        setMobileViewportHeight();

        applyHeroLayout();

        applySectionAlignment();

        applyNavigationLayout();

    }

    // 8. SAFE INITIALIZATION ROUTINE

    // Orchestrates internal boot sequence only after config is proven immutable and valid.

    function init(config) {

        // Defensive check: abort if the DOM is not fully ready

        if (document.readyState === 'loading') {

            console.warn('[AdhyaLayout] Initialization aborted: DOM not ready.');

            return;

        }

        if (!config || config._validated !== true) {

            console.warn('[AdhyaLayout] Initialization aborted: Configuration invalid.');

            return;

        }

        // Populate the cache safely to ensure minimal DOM querying.

        if (!DOM.isCached) {

            DOM.hero = document.querySelector('[data-adhya-layout="hero"]');

            DOM.navigation = document.querySelector('[data-adhya-layout="navigation"]');

            DOM.sections = document.querySelectorAll('[data-adhya-layout="section"]');

            DOM.isCached = true;

        }

        // Execute initial layout pass.

        handleResponsiveAdjustments();

        // Bind to the orchestrator's global event bus safely, preventing duplicate registrations.

        if (!listenersBound) {

            document.addEventListener('adhya:system:resize', handleResponsiveAdjustments);

            // Passive listener applied for minor performance boost and composite thread safety

            document.addEventListener('adhya:system:scroll', applyNavigationLayout, { passive: true });

            listenersBound = true;

        }

    }

    // 9. PUBLIC MODULE INTERFACE

    // Deeply locks the API surface to prevent runtime mutation of the module.
 const AdhyaLayout = Object.freeze({

        init

    });

    // 10. GLOBAL EXPORT

    // Exposes the immutable API securely to the runtime orchestrator.

    window.AdhyaLayout = AdhyaLayout;

})();
