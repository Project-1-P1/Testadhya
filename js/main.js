/**

 * Adhya Eventech - Runtime Orchestrator

 * File: /js/main.js

 * Architecture Policy: Configuration-driven, deterministic module initialization.

 * Warning: This file contains NO business logic or configuration data.

 */

(function AdhyaRuntimeOrchestrator() {

    'use strict';

    const BOOT_FLAG = '__ADHYA_BOOTED__';

    // 1. SYSTEM BOOT GUARD

    // Resolves race conditions and prevents namespace collisions.

    if (window[BOOT_FLAG]) return;

    function bootRuntime() {

        if (window[BOOT_FLAG]) return;

        window[BOOT_FLAG] = true;

        const config = window.AdhyaConfig;

        // 2. CONFIGURATION VALIDATION CHECK

        // Safer boolean check against governance engine.

        if (!config || config._validated !== true) {

            handleSafeFailure('Governance Engine Exception: Configuration missing or unvalidated.');

            return;

        }

        // ENFORCE GOVERNANCE IMMUTABILITY

        // Recursively locks the entire configuration with cycle protection to prevent downstream

mutation.

        deepFreeze(config);

        try {

            // 3. DOM CACHE INITIALIZATION

            // Direct reference for micro-optimization.

            const body = document.body;

            const loader = document.getElementById('adhya-global-loader');

            const optionalSections = document.querySelectorAll('[data-adhya-feature]');

            // 4. CORE MODULE INITIALIZATION

            // Safe, deterministic array iteration over global module namespace.

            [

                window.AdhyaLayout,

                window.AdhyaCountdown,

                window.AdhyaGallery,

                window.AdhyaSchedule,

                window.AdhyaMap].forEach(module => {

                if (module && typeof module.init === 'function') {

                    module.init(config);

                }

            });

            // 5. PLAN CONTROLLER ACTIVATION

            // Activates the specific tier controller based on the immutable configuration.

            const planType = (config.planType || 'basic').toLowerCase();

            switch (planType) {

                case 'lite':

                case 'basic':

                    if (window.BasicController && typeof window.BasicController.init === 'function') {

                        window.BasicController.init(config);

                    }

                    break;

                case 'premium':

                case 'utsav':

                    if (window.PremiumController && typeof window.PremiumController.init === 'function') {

                        window.PremiumController.init(config);

                    }

                    break;

                case 'royal':

                case 'rajasi':

                    if (window.RoyalController && typeof window.RoyalController.init === 'function') {

                        window.RoyalController.init(config);

                    }

                    break;

                default:

                    console.warn(`[Orchestrator] Unrecognized plan controller: ${planType}`);

            }

            // 6. ADD-ON MODULE ACTIVATION

            // Defensive type-checking to prevent crashes.

            const addons = (config.addons && typeof config.addons === 'object' &&

!Array.isArray(config.addons)) 

                ? config.addons 

                : {};

            if (addons.music && window.AdhyaMusic?.init) window.AdhyaMusic.init(config);

            if (addons.rsvp && window.AdhyaRSVP?.init) window.AdhyaRSVP.init(config);

            if (addons.video && window.AdhyaVideo?.init) window.AdhyaVideo.init(config);

            if (addons.guestupload && window.AdhyaGuestUpload?.init)

window.AdhyaGuestUpload.init(config);

            // 7. OPTIONAL SECTION VISIBILITY CONTROL

            // Safe prototype checking to prevent prototype pollution vulnerabilities.

            optionalSections.forEach(section => {

                const requiredFeature = section.getAttribute('data-adhya-feature');

                if (

                    requiredFeature && 

                    config.features && 

                    Object.prototype.hasOwnProperty.call(config.features, requiredFeature) &&

                    config.features[requiredFeature] === false

                ) {

                    section.style.display = 'none';

                    section.setAttribute('aria-hidden', 'true');

                }

            });
          // 8. GLOBAL EVENT REGISTRATION

            // Timestamp Throttle (scroll) and Timer Debounce (resize) to protect the main thread.

            window.addEventListener('resize', debounce(() => {

                document.dispatchEvent(new CustomEvent('adhya:system:resize'));

            }, 250));

            

            window.addEventListener('scroll', throttle(() => {

                document.dispatchEvent(new CustomEvent('adhya:system:scroll'));

            }, 100), { passive: true });

            // 9. RUNTIME STATE FINALIZATION

            // Executes visual handoff from the preloader to the active template.

            if (loader) {

                loader.classList.add('is-hidden');

            }

            body.classList.add('adhya-runtime-active');

            body.setAttribute('data-plan-active', planType);

        } catch (error) {

            // 10. SAFE FAILURE HANDLING

            handleSafeFailure(`Runtime Orchestration Exception: ${error.message}`);

        }

    }

    // Trigger boot sequence safely regardless of script load timing.

    if (document.readyState === 'loading') {

        document.addEventListener('DOMContentLoaded', bootRuntime);

    } else {

        bootRuntime();

    }

    /**

     * Internal Utility: Deep Freeze

     * Guarantees absolute immutability across all nested objects and arrays.

     * Utilizes WeakSet for strict cycle protection to prevent infinite recursion.

     */

    function deepFreeze(obj, seen = new WeakSet()) {

        if (seen.has(obj)) return obj;

        seen.add(obj);

        Object.getOwnPropertyNames(obj).forEach(name => {

            const value = obj[name];

            if (value && typeof value === 'object') {

                deepFreeze(value, seen);

            }

        });

        return Object.freeze(obj);

    }

    /**

     * Internal Utility: Debounce (For Resize)

     * Defers execution until the action has stopped for 'wait' milliseconds.

     */

    function debounce(func, wait) {

        let timeout;

        return function executedFunction(...args) {

            const later = () => { clearTimeout(timeout); func.apply(this, args); };

            clearTimeout(timeout);
          timeout = setTimeout(later, wait);

        };

    }

    /**

     * Internal Utility: Throttle (For Scroll)

     * Zero-allocation timestamp approach to ensure steady execution without timer accumulation.

     */

    function throttle(func, limit) {

        let lastRun = 0;

        return function(...args) {

            const now = Date.now();

            if (now - lastRun >= limit) {

                lastRun = now;

                func.apply(this, args);

            }

        };

    }

    /**

     * Internal Utility: Safe Failure Handling

     */

    function handleSafeFailure(reason) {

        console.error(`[Adhya Orchestrator] FATAL HALT - ${reason}`);

        if (document.body) {

            document.body.classList.add('adhya-runtime-error');

        }

    }

})();
