/**

 * Adhya Eventech - Core Gallery Module

 * File: /js/core/gallery.js

 * Architecture Policy: Deterministic, read-only configuration, lazy-loaded rendering, no external

dependencies.

 * Status: Strict implementation adhering to VIKMAH K0.1 architecture boundaries.

 */

// 1. Module wrapper using IIFE

(function () {

    // 2. strict mode

    'use strict';

    // 3. private DOM cache & State

    const DOM = {

        isCached: false,

        container: null,

        images: [],

        lightbox: null,

        lightboxImg: null,

        lightboxClose: null

    };

    const STATE = {

        isObserverSupported: 'IntersectionObserver' in window,

        listenersBound: false,

        observerInitialized: false

    };

    // 4. lazy-loading observer logic

    function initializeLazyLoading() {

        if (STATE.observerInitialized) return;

        if (!STATE.isObserverSupported) {

            // Safe fallback for legacy browsers: load all immediately

            DOM.images.forEach(loadImage);

            STATE.observerInitialized = true;

            return;

        }

        const observerOptions = {

            root: null,

            rootMargin: '50px 0px',

            threshold: 0.01

        };

        const imageObserver = new IntersectionObserver((entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                  loadImage(entry.target);

                    observer.unobserve(entry.target);

                }

            });

        }, observerOptions);

        DOM.images.forEach(img => {

            // Only observe if it hasn't been loaded yet

            if (!img.classList.contains('is-loaded')) {

                imageObserver.observe(img);

            }

        });

        STATE.observerInitialized = true;

    }

    // 5. image load handler

    function loadImage(imgElement) {

        const src = imgElement.getAttribute('data-src');

        if (!src) return;

        // Create a detached image to preload securely without DOM thrashing

        const preloader = new Image();

        preloader.onload = () => {

            if (imgElement.tagName.toLowerCase() === 'img') {

                imgElement.src = src;

            } else {

                imgElement.style.backgroundImage = `url(${src})`;

            }

            imgElement.classList.add('is-loaded');

            imgElement.removeAttribute('data-src');

        };

        

        preloader.onerror = () => {

            imgElement.classList.add('is-error');

            console.warn(`[AdhyaGallery] Failed to load image: ${src}`);

        };

        preloader.src = src;

    }

    // 6. lightbox controller

    function openLightbox(event) {

        // Ensure click target is a designated gallery image

        const target = event.target.closest('[data-adhya-gallery="image"]');

        if (!target || !DOM.lightbox || !DOM.lightboxImg) return;

        // Retrieve the highest quality source available safely (supports img and background

elements)

        const highResSrc = target.getAttribute('data-highres') || 

                           target.getAttribute('data-src') || 

                           target.src || 

                           null;

                           

        if (!highResSrc) return;

        DOM.lightboxImg.src = highResSrc;

        DOM.lightbox.classList.add('is-active');

        document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

    function closeLightbox() {

        if (!DOM.lightbox || !DOM.lightbox.classList.contains('is-active')) return;

        DOM.lightbox.classList.remove('is-active');

        document.body.style.overflow = ''; // Restore background scrolling

        

        // Clear image source after CSS transition to prevent ghosting on next open

        setTimeout(() => {

            DOM.lightboxImg.src = '';

        }, 300);

    }

    function handleLightboxKeyboard(event) {

        if (event.key === 'Escape') {

            closeLightbox();

        }

    }

    // 7. responsive adjustment handler

    function handleResponsiveAdjustments() {

        // Repositioning or grid recalculations handled natively via CSS architecture.

        // If JS-specific layout recalculations are required per template, they execute safely here.

        if (DOM.lightbox && DOM.lightbox.classList.contains('is-active')) {

            // Force browser repaint to resolve edge-case mobile orientation shift artifacts

            DOM.lightbox.style.display = 'none';

            DOM.lightbox.offsetHeight; // Trigger reflow

            DOM.lightbox.style.display = '';

        }

    }

    // 8. initialization routine

    function init(config) {

        // Defensive check: abort if DOM is not ready

        if (document.readyState === 'loading') {

            console.warn('[AdhyaGallery] Initialization aborted: DOM not ready.');

            return;

        }

        if (!config || config._validated !== true) {

            console.warn('[AdhyaGallery] Initialization aborted: Configuration invalid.');

            return;

        }

        // Feature toggle validation (graceful exit if disabled by config)

        if (config.features && config.features.gallery === false) return;

        // Execute DOM query and caching exactly once

        if (!DOM.isCached) {

            DOM.container = document.querySelector('[data-adhya-gallery="container"]');

            

            // Graceful exit if module is enabled but markup is structurally missing

            if (!DOM.container) return;

            DOM.images = Array.from(DOM.container.querySelectorAll('[data-adhya-gallery="image"]'));

            DOM.lightbox = document.querySelector('[data-adhya-gallery="lightbox"]');

            

            if (DOM.lightbox) {
              DOM.lightboxImg = DOM.lightbox.querySelector('[data-adhya-gallery="lightbox-image"]');

                DOM.lightboxClose = DOM.lightbox.querySelector('[data-adhya-gallery="lightbox-close"]');

            }

            DOM.isCached = true;

        }

        // Initialize intersection observer for asset loading

        if (DOM.images.length > 0) {

            initializeLazyLoading();

        }

        // Bind global and localized events securely to prevent duplication

        if (!STATE.listenersBound) {

            // Delegate image clicks to the main container for efficiency

            DOM.container.addEventListener('click', openLightbox);

            // Lightbox closing mechanisms

            if (DOM.lightbox) {

                DOM.lightbox.addEventListener('click', (e) => {

                    // Close if clicking the background overlay or the close button

                    if (e.target === DOM.lightbox || (DOM.lightboxClose &&

DOM.lightboxClose.contains(e.target))) {

                        closeLightbox();

                    }

                });

                document.addEventListener('keydown', handleLightboxKeyboard);

            }

            // Hook into the central orchestrator's debounced resize event

            document.addEventListener('adhya:system:resize', handleResponsiveAdjustments);

            

            STATE.listenersBound = true;

        }

    }

    // 9. immutable public API

    const AdhyaGallery = Object.freeze({

        init

    });

    // 10. secure global export

    window.AdhyaGallery = AdhyaGallery;

})();
