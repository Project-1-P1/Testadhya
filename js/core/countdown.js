/**

 * Adhya Eventech - Core Countdown Module

 * File: /js/core/countdown.js

 * Architecture Policy: Deterministic, read-only configuration, drift-resistant time execution.

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

        days: null,

        hours: null,

        minutes: null,

        seconds: null

    };

    const STATE = {

        targetTime: 0,

        intervalId: null,

        isExpired: false

    };

    let listenersBound = false;

    // 4. time calculation utilities

    function calculateRemainingTime() {

        // Drift-resistant absolute calculation based on system clock

        const now = Date.now();

        const difference = STATE.targetTime - now;

        if (difference <= 0) {

            return { total: 0, days: 0, hours: 0, minutes: 0, seconds: 0 };

        }

        return {

            total: difference,

            days: Math.floor(difference / (1000 * 60 * 60 * 24)),

            hours: Math.floor((difference / (1000 * 60 * 60)) % 24),

            minutes: Math.floor((difference / 1000 / 60) % 60),

            seconds: Math.floor((difference / 1000) % 60)

        };

                    }
  function formatTimePad(value) {

        return value < 10 ? `0${value}` : `${value}`;

    }

    // 5. tick update function

    function updateDOM() {

        if (STATE.isExpired || !DOM.container) return;

        const time = calculateRemainingTime();

        if (time.total <= 0) {

            handleExpiration();

            return;

        }

        // Format early to ensure accurate string comparison

        const fDays = formatTimePad(time.days);

        const fHours = formatTimePad(time.hours);

        const fMinutes = formatTimePad(time.minutes);

        const fSeconds = formatTimePad(time.seconds);

        // Minimal DOM writing: Only mutate text nodes if formatted strings actually changed

        if (DOM.days && DOM.days.textContent !== fDays) {

            DOM.days.textContent = fDays;

        }

        if (DOM.hours && DOM.hours.textContent !== fHours) {

            DOM.hours.textContent = fHours;

        }

        if (DOM.minutes && DOM.minutes.textContent !== fMinutes) {

            DOM.minutes.textContent = fMinutes;

        }

        if (DOM.seconds && DOM.seconds.textContent !== fSeconds) {

            DOM.seconds.textContent = fSeconds;

        }

    }

    // 6. expiration handler

    function handleExpiration() {

        STATE.isExpired = true;

        stopInterval();

        if (DOM.container) {

            DOM.container.classList.add('is-expired');

        }

        // Set final zeroes safely

        ['days', 'hours', 'minutes', 'seconds'].forEach(unit => {

            if (DOM[unit]) DOM[unit].textContent = '00';

        });

        // Announce expiration to the global system bus without tight module coupling

        document.dispatchEvent(new CustomEvent('adhya:countdown:expired'));

    }

    // 7. deterministic interval management

    function startInterval() {

        if (STATE.intervalId !== null) return; // Prevent duplicate interval accumulation

        

        // Initial execution to prevent flash of empty/old values
  updateDOM();

        // Standard 1000ms tick. Drift mitigation is inherently handled 

        // by the absolute time calculation inside updateDOM().

        STATE.intervalId = setInterval(() => {

            requestAnimationFrame(updateDOM);

        }, 1000);

    }

    function stopInterval() {

        if (STATE.intervalId !== null) {

            clearInterval(STATE.intervalId);

            STATE.intervalId = null;

        }

    }

    // 8. initialization routine

    function init(config) {

        // Defensive check: abort if the DOM is not fully parsed

        if (document.readyState === 'loading') {

            console.warn('[AdhyaCountdown] Initialization aborted: DOM not ready.');

            return;

        }

        if (!config || config._validated !== true) {

            console.warn('[AdhyaCountdown] Initialization aborted: Configuration invalid.');

            return;

        }

        // Target parsing with canonical fallback strategy

        const targetDateStr = config.eventDate || config.countdownTarget || null;

        if (!targetDateStr) {

            console.warn('[AdhyaCountdown] Initialization aborted: Target date missing in config.');

            return;

        }

        // Timezone-safe parsing relying on strict ISO 8601 validation standard

        const parsedTime = Date.parse(targetDateStr);

        if (isNaN(parsedTime)) {

            console.warn('[AdhyaCountdown] Initialization aborted: Target date format invalid.');

            return;

        }

        

        STATE.targetTime = parsedTime;

        // Ensure DOM queries execute exactly once

        if (!DOM.isCached) {

            DOM.container = document.querySelector('[data-adhya-countdown="container"]');

            

            // Graceful exit if countdown component is structurally omitted from this specific plan

            if (!DOM.container) return;

            DOM.days = DOM.container.querySelector('[data-adhya-countdown="days"]');

            DOM.hours = DOM.container.querySelector('[data-adhya-countdown="hours"]');

            DOM.minutes = DOM.container.querySelector('[data-adhya-countdown="minutes"]');

            DOM.seconds = DOM.container.querySelector('[data-adhya-countdown="seconds"]');

            

            DOM.isCached = true;

    }
      // System efficiency: Pause interval when tab is hidden to save CPU

        if (!listenersBound) {

            document.addEventListener('visibilitychange', () => {

                if (document.hidden) {

                    stopInterval();

                } else if (!STATE.isExpired) {

                    startInterval();

                }

            });

            listenersBound = true;

        }

        // Reset state in event of system re-initialization

        STATE.isExpired = false;

        stopInterval();

        // Boot the interval cycle

        startInterval();

    }

    // 9. immutable public API

    const AdhyaCountdown = Object.freeze({

        init

    });

    // 10. secure global export

    window.AdhyaCountdown = AdhyaCountdown;

})();
