/**

 * Adhya Eventech - Core Schedule Module

 * File: /js/core/schedule.js

 * Architecture Policy: Deterministic, read-only configuration, timezone-safe rendering.

 * Status: Strict implementation adhering to VIKMAH K0.1 architecture boundaries.

 */

// 2. IIFE module wrapper

(function () {

    // 3. 'use strict' declaration

    'use strict';

    // 4. Private DOM cache structure

    const DOM = {

        isCached: false,

        container: null,

        eventList: null

    };

    // 5. Private runtime state structure

    const STATE = {

        events: [],

        listenersBound: false

    };

    // 6. Event ordering utility

    function getTimestamp(eventData) {

        // Safe parsing with epoch fallback to prevent NaN from destroying array sort predictability

        const t = Date.parse(eventData.time || eventData.timestamp);

        return isNaN(t) ? 0 : t;

    }

    function sortEvents(events) {

        return events.slice().sort((a, b) => {

            return getTimestamp(a) - getTimestamp(b);

        });

    }

    // 7. Time formatting utility

    function formatTimeSafe(isoString) {

        if (!isoString) return '';

        const dateObj = new Date(isoString);

        

        if (isNaN(dateObj.getTime())) return '';

        

        // Timezone-safe formatting leveraging native browser locale definitions

        return dateObj.toLocaleTimeString([], { 

            hour: '2-digit', 

            minute: '2-digit'
          });

    }

    // 8. Rendering function for schedule timeline

    function renderSchedule() {

        if (!DOM.eventList || STATE.events.length === 0) return;

        const fragment = document.createDocumentFragment();

        STATE.events.forEach(eventData => {

            const item = document.createElement('div');

            item.setAttribute('data-adhya-schedule', 'item');

            item.className = 'adhya-schedule-item';

            const timeNode = document.createElement('time');

            timeNode.setAttribute('data-adhya-schedule', 'time');

            const isoTime = eventData.time || eventData.timestamp;

            timeNode.setAttribute('datetime', isoTime || '');

            timeNode.textContent = formatTimeSafe(isoTime);

            const contentNode = document.createElement('div');

            contentNode.setAttribute('data-adhya-schedule', 'content');

            contentNode.className = 'adhya-schedule-content';

            const titleNode = document.createElement('h3');

            titleNode.setAttribute('data-adhya-schedule', 'title');

            titleNode.textContent = eventData.title || 'Untitled Event';

            contentNode.appendChild(titleNode);

            if (eventData.description) {

                const descNode = document.createElement('p');

                descNode.setAttribute('data-adhya-schedule', 'description');

                descNode.textContent = eventData.description;

                contentNode.appendChild(descNode);

            }

            item.appendChild(timeNode);

            item.appendChild(contentNode);

            fragment.appendChild(item);

        });

        // Safe DOM clearing bypassing the HTML parser for maximum performance

        while (DOM.eventList.firstChild) {

            DOM.eventList.removeChild(DOM.eventList.firstChild);

        }

        

        // Attach deterministic render

        DOM.eventList.appendChild(fragment);

    }

    // 9. Responsive handler compatible with runtime event bus

    function handleResponsiveAdjustments() {

        if (DOM.container) {

            // Force browser repaint to resolve edge-case mobile reflow artifacts

            DOM.container.style.display = 'none';

            DOM.container.offsetHeight; // Trigger reflow

            DOM.container.style.display = '';

 }}

    // 10. Deterministic initialization routine

    function init(config) {

        if (document.readyState === 'loading') {

            console.warn('[AdhyaSchedule] Initialization aborted: DOM not ready.');

            return;

        }

        if (!config || config._validated !== true) {

            console.warn('[AdhyaSchedule] Initialization aborted: Configuration invalid.');

            return;

        }

        if (config.features && config.features.schedule === false) return;

        // CONFIG_EVENT_SOURCE extraction with canonical fallback strategy

        const rawEvents = config.scheduleEvents || config.events || null;

        if (!rawEvents || !Array.isArray(rawEvents) || rawEvents.length === 0) {

            return; // Graceful exit, no events provided in immutable config

        }

        if (!DOM.isCached) {

            DOM.container = document.querySelector('[data-adhya-schedule="container"]');

            

            // Graceful exit if schedule structure is omitted from this plan's template

            if (!DOM.container) return;

            DOM.eventList = DOM.container.querySelector('[data-adhya-schedule="list"]') ||

DOM.container;

            DOM.isCached = true;

        }

        STATE.events = sortEvents(rawEvents);

        renderSchedule();

        if (!STATE.listenersBound) {

            document.addEventListener('adhya:system:resize', handleResponsiveAdjustments);

            STATE.listenersBound = true;

        }

    }

    // 11. Immutable public API definition

    const AdhyaSchedule = Object.freeze({

        init

    });

    // 12. Secure export to window.AdhyaSchedule

    window.AdhyaSchedule = AdhyaSchedule;

})();
