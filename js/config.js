/**

 * ADHYA EVENTECH — PHASE 1 PLATFORM CONTROL LAYER

 * Firmware-Grade Configuration & Policy Execution Engine v1.5.0

 * * * GOVERNANCE RULES:

 * 1. Policy Data is strictly separated from Execution Logic.

 * 2. Deep Schema Firewall (Nested rogue key rejection & Array Homogeneity).

 * 3. Engine ↔ Policy Version Handshake Contract.

 * 4. Safe Default Coercion (Avoids undefined pointer states).

 * 5. Iterative DAG Resolution (Cascading dependency stabilization).

 * 6. Immutable Deep-Freeze lockdown in production environments.

 */

// ⚙️ ENGINE METADATA (Decoupled from Policy Data)

const EngineMeta = {

  engineVersion: "1.6.0", // Represents the actual runtime execution engine version

  strictTypeEnforcement: false, // Set to false to allow graceful coercion to baseline defaults

  maxCoercionThreshold: 5 // Forces safe mode if structural entropy (coercions) exceeds this limit

};

// 🔒 POLICY DATA LAYER (Strictly Isolated from Execution)

const AdhyaPolicy = {

  policyVersion: "1.6.0",

  

  // Strict Definition of all allowed keys and explicit data types

  schemaDefinition: {

    core: { templateVersion: "string", requiredEngineVersion: "string", plan: "string", productType:

"string", locale: "string", direction: "string", buildMode: "string" },

    capabilities: { gallery: "boolean", video: "boolean", timeline: "boolean", memoryArchive: "boolean",

anniversary: "boolean", guestUpload: "boolean", blessingsWall: "boolean", privateGallery: "boolean",

sponsors: "boolean", customDomain: "boolean", personalizedGreeting: "boolean" },

    visual: { theme: "string", fontSet: "string", heroLayout: "string", galleryStyle: "string", spacingMode:

"string", decorativeLayers: "array" },

    motion: { animationLevel: "string", parallaxEnabled: "boolean", microInteractionLevel: "string" },

    layout: { contentWidth: "string", verticalRhythm: "string", spacingMode: "string" },

    addons: { musicPlayer: "boolean", extraGalleryLimit: "boolean", advancedStorytelling: "boolean",

customAnimationSequence: "boolean", extendedTimeline: "boolean", seoEnhancement: "boolean" },

    runtime: { enforcementMode: "string", lazyLoadMedia: "boolean", preloadHeroAssets: "boolean",

strictSectionValidation: "boolean", consoleErrorTracking: "boolean", enforceImageLimits: "boolean",

countdownValidation: "boolean", bootStatus: "string", bootLogs: "array" },

    localization: { multiLanguageEnabled: "boolean", availableLocales: "array", defaultLocale: "string"

}

  },

  // Explicit Enumerations for Core Identity

  coreEnums: {

    plan: ["basic", "premium", "royal"],

    productType: ["main", "lite"],

    buildMode: ["production", "staging", "debug"]

  },
  // Absolute Minimum Safe Mode & Coercion Baselines

  baselineDefaults: {

    core: { plan: "basic", productType: "main", locale: "en", direction: "ltr", buildMode: "production" },

    capabilities: { gallery: true, video: false, timeline: false, memoryArchive: false, anniversary: false,

guestUpload: false, blessingsWall: false, privateGallery: false, sponsors: false, customDomain:

false, personalizedGreeting: false },

    visual: { theme: "theme-midnight-navy", fontSet: "font-sansModern", heroLayout: "hero-centered",

galleryStyle: "gallery-grid", spacingMode: "spacing-compact", decorativeLayers: [] },

    motion: { animationLevel: "anim-minimal", parallaxEnabled: false, microInteractionLevel:

"standard" },

    layout: { contentWidth: "width-wide", verticalRhythm: "rhythm-airy", spacingMode: "spacing-

compact" },

    addons: { musicPlayer: false, extraGalleryLimit: false, advancedStorytelling: false,

customAnimationSequence: false, extendedTimeline: false, seoEnhancement: false },

    runtime: { enforcementMode: "soft", lazyLoadMedia: true, preloadHeroAssets: true,

strictSectionValidation: true, consoleErrorTracking: true, enforceImageLimits: true,

countdownValidation: true, bootStatus: "pending", bootLogs: [] },

    localization: { multiLanguageEnabled: false, availableLocales: ["en"], defaultLocale: "en" }

  },

  // Defines authorized tokens in the system (Namespaced Registries)

  visualTokenRegistry: {

    theme: ["theme-midnight-navy", "theme-rose-gold", "theme-emerald"],

    fontSet: ["font-sansModern", "font-serifRoyal", "font-monoTech"],

    heroLayout: ["hero-centered", "hero-split", "hero-fullbg"],

    galleryStyle: ["gallery-grid", "gallery-masonry", "gallery-carousel"],

    decorativeLayers: ["deco-mandalaSoft", "deco-borderFrame", "deco-goldFoil"]

  },

  motionTokenRegistry: {

    animationLevel: ["anim-minimal", "anim-smooth", "anim-rich"]

  },

  layoutTokenRegistry: {

    spacingMode: ["spacing-compact", "spacing-balanced", "spacing-luxury"]

  },

  // Defines absolute boundaries for each tier (Plan Matrix)

  planMatrix: {

    basic: {

      theme: ["theme-midnight-navy"],

      fontSet: ["font-sansModern"],

      heroLayout: ["hero-centered"],

      galleryStyle: ["gallery-grid"],

      animationLevel: ["anim-minimal"],

      spacingMode: ["spacing-compact"],

      decorativeLayers: [] // None allowed

    },

    premium: {

      theme: ["theme-midnight-navy", "theme-emerald"],

      fontSet: ["font-sansModern", "font-serifRoyal"],

      heroLayout: ["hero-centered", "hero-split"],

      galleryStyle: ["gallery-grid", "gallery-masonry"],

      animationLevel: ["anim-minimal", "anim-smooth"],

      spacingMode: ["spacing-compact", "spacing-balanced"],

      decorativeLayers: ["deco-mandalaSoft"]

    },

    royal: {

      theme: "*", // '*' denotes full registry access

      fontSet: "*",

      heroLayout: "*",
      galleryStyle: "*",

      animationLevel: "*",

      spacingMode: "*",

      decorativeLayers: "*"

    }

  },

  // Defines structural and capability dependencies (Dependency DAG)

  // Note: Currently assumes a flat namespace mapping Addon -> Capability. 

  // Future expansion must unify namespace resolution if Capability -> Capability dependencies are

introduced.

  dependencyMatrix: {

    extraGalleryLimit: ["gallery"],

    privateGallery: ["gallery"],

    advancedStorytelling: ["timeline"],

    extendedTimeline: ["timeline"],

    guestUpload: ["gallery", "blessingsWall"] // Multi-dependency

  }

};

// ⚙️ CONFIGURATION DECLARATION LAYER

window.AdhyaConfig = {

  core: {

    templateVersion: "1.5.0",

    requiredEngineVersion: ">=1.5.0", 

    plan: "basic",           // basic | premium | royal

    productType: "main",     // main | lite

    locale: "en",

    direction: "ltr",

    buildMode: "production"  // production | staging | debug

  },

  capabilities: {

    gallery: true,

    video: false,

    timeline: false,

    memoryArchive: false,

    anniversary: false,

    guestUpload: false,

    blessingsWall: false,

    privateGallery: false,

    sponsors: false,

    customDomain: false,

    personalizedGreeting: false

  },

  visual: {

    theme: "theme-midnight-navy",

    fontSet: "font-serifRoyal",      

    heroLayout: "hero-fullbg",       

    galleryStyle: "gallery-carousel",

    spacingMode: "spacing-luxury",   

    decorativeLayers: ["deco-mandalaSoft", 5, {}] // Intentionally injected invalid array types

  },

  motion: {

    animationLevel: "anim-rich",     

    parallaxEnabled: true,

    microInteractionLevel: "enhanced"
    },

  layout: {

    contentWidth: "width-wide",

    verticalRhythm: "rhythm-airy",

    spacingMode: "spacing-luxury"    

  },

  addons: {

    musicPlayer: false,

    extraGalleryLimit: true,         

    advancedStorytelling: false,

    customAnimationSequence: false,

    extendedTimeline: false,

    seoEnhancement: false

  },

  runtime: {

    enforcementMode: "soft",         // soft (auto-correct) | hard (safe-mode on violation)

    lazyLoadMedia: true,

    preloadHeroAssets: true,

    strictSectionValidation: true,

    consoleErrorTracking: true,

    enforceImageLimits: true,

    countdownValidation: true,

    bootStatus: "pending",           

    bootLogs: []                     

  },

  localization: {

    multiLanguageEnabled: false,

    availableLocales: ["en"],

    defaultLocale: "en"

  }

};

/**

 * ️ ADHYA GOVERNANCE ENGINE (Deterministic Execution Layer)

 */

(function executeGovernanceBootSequence(env, policy, engineMeta) {

  const isDebug = env.core.buildMode !== "production";

  

  // Severity State Tracking

  let fatalErrorTriggered = false;

  let violationTriggered = false;

  let validationLogs = [];

  let coercionCount = 0; // Tracks structural entropy

  const severityWeights = {

    warning: 0,

    violation: 1,

    fatal: 3

  };

  const enforce = (message, severity = "warning") => {

    validationLogs.push(`[${severity.toUpperCase()}] ${message}`);

    

    coercionCount += severityWeights[severity] || 0;
    if (severity === "fatal") fatalErrorTriggered = true;

    if (severity === "violation") violationTriggered = true;

    // Tripwire: If structural entropy score exceeds threshold, abort and trigger Safe Mode

    if (engineMeta.maxCoercionThreshold && coercionCount >=

engineMeta.maxCoercionThreshold) {

      if (!fatalErrorTriggered) { // Prevent logging loop if already fatal

        fatalErrorTriggered = true;

        validationLogs.push(`[FATAL] Coercion threshold (${engineMeta.maxCoercionThreshold})

exceeded. Structural entropy score: ${coercionCount}. System state is too corrupted.`);

      }

    }

  };

  const isEngineCompatible = (requiredVer, currentEngineVer) => {

    const req = requiredVer.replace('>=', '').split('.').map(Number);

    const engine = currentEngineVer.split('.').map(Number);

    for (let i = 0; i < 3; i++) {

      if (engine[i] > (req[i] || 0)) return true;

      if (engine[i] < (req[i] || 0)) return false;

    }

    return true;

  };

  try {

    // 1️⃣ DEEP SCHEMA INTEGRITY, ROGUE KEY LOCKDOWN & STRICT TYPE CHECKING

    const allowedTopKeys = Object.keys(policy.schemaDefinition);

    

    // Check Top-Level Keys

    allowedTopKeys.forEach(key => {

      if (!env[key] || typeof env[key] !== "object") {

        enforce(`Schema Fault: Missing or invalid top-level key: ${key}`, "fatal");

        env[key] = JSON.parse(JSON.stringify(policy.baselineDefaults[key])); // Deep clone emergency

scaffold

      }

    });

    // Strip Rogue Top-Level & Nested Keys AND enforce strict types

    Object.keys(env).forEach(topKey => {

      if (!allowedTopKeys.includes(topKey)) {

        enforce(`Schema Fault: Rogue top-level key injected: ${topKey}. Stripping.`, "violation");

        delete env[topKey];

      } else {

        const allowedNestedSchema = policy.schemaDefinition[topKey];

        const allowedNestedKeys = Object.keys(allowedNestedSchema);

        

        Object.keys(env[topKey]).forEach(nestedKey => {

          if (!allowedNestedKeys.includes(nestedKey)) {

            enforce(`Schema Fault: Rogue nested key injected: ${topKey}.${nestedKey}. Stripping.

(Forward-compatibility allowed)`, "violation");

            delete env[topKey][nestedKey];

          } else {

            // Type Validation

            const expectedType = allowedNestedSchema[nestedKey];

            const actualValue = env[topKey][nestedKey];

            const actualType = Array.isArray(actualValue) ? "array" : typeof actualValue;

            

            if (actualType !== expectedType && actualValue !== undefined) {

              if (engineMeta.strictTypeEnforcement) {
                enforce(`Type Fault: ${topKey}.${nestedKey} expects '${expectedType}' but received

'${actualType}'.`, "fatal");

              } else {

                enforce(`Type Warning: ${topKey}.${nestedKey} type mismatch. Coercing to baseline

default.`, "violation");

                env[topKey][nestedKey] = JSON.parse(JSON.stringify(policy.baselineDefaults[topKey]

[nestedKey])); // Safe Deep Clone Restoration

              }

            } else if (actualType === "array") {

              // Array Homogeneity Check (Ensures elements match the expected primitive, i.e., strings)

              const isHomogeneousString = actualValue.every(item => typeof item === "string");

              if (!isHomogeneousString) {

                if (engineMeta.strictTypeEnforcement) {

                  enforce(`Type Fault: Array ${topKey}.${nestedKey} contains non-string elements.`,

"fatal");

                } else {

                  enforce(`Type Warning: Array ${topKey}.${nestedKey} contains invalid elements.

Resetting array.`, "violation");

                  env[topKey][nestedKey] = JSON.parse(JSON.stringify(policy.baselineDefaults[topKey]

[nestedKey])); // Safe Deep Clone Array Reset

                }

              }

            }

          }

        });

      }

    });

    // 1.5️⃣ CORE ENUMERATION VALIDATION

    Object.keys(policy.coreEnums).forEach(enumKey => {

      if (env.core[enumKey] && !policy.coreEnums[enumKey].includes(env.core[enumKey])) {

        enforce(`Enum Fault: Invalid core value '${env.core[enumKey]}' for ${enumKey}.`, "fatal");

      }

    });

    // 2️⃣ VERSION NEGOTIATION & HANDSHAKE CONTRACT

    // 2A: Check if Engine satisfies Config requirement

    if (!isEngineCompatible(env.core.requiredEngineVersion, engineMeta.engineVersion)) {

      enforce(`Version Mismatch: Execution Engine v${engineMeta.engineVersion} does not satisfy

config requirement ${env.core.requiredEngineVersion}`, "fatal");

    }

    // 2B: Check Engine ↔ Policy Contract Handshake

    if (!isEngineCompatible(policy.policyVersion, engineMeta.engineVersion)) {

      enforce(`Contract Fault: Execution Engine v${engineMeta.engineVersion} is older than loaded

Policy Data v${policy.policyVersion}. Downgrade risk.`, "fatal");

    }

    // 3️⃣ LITE ENFORCEMENT

    if (env.core.productType === "lite") {

      env.core.plan = "basic";

      Object.keys(env.addons).forEach(key => env.addons[key] = false);

      env.visual.decorativeLayers = [];

      if (isDebug) console.warn("[Adhya Policy] Product is 'Lite'. Stripped add-ons and forced basic

plan.");

    }

    // 4️⃣ DEPENDENCY DAG CYCLE DETECTION

    const checkCycles = () => {

      const visited = new Set();
      const recursionStack = new Set();

      const dfs = (node) => {

        if (recursionStack.has(node)) return true; // Cycle detected

        if (visited.has(node)) return false;

        visited.add(node);

        recursionStack.add(node);

        const deps = policy.dependencyMatrix[node] || [];

        for (let dep of deps) {

          if (dfs(dep)) return true;

        }

        recursionStack.delete(node);

        return false;

      };

      for (let node of Object.keys(policy.dependencyMatrix)) {

        if (dfs(node)) enforce(`Dependency Fault: Circular dependency DAG detected involving

'${node}'.`, "fatal");

      }

    };

    checkCycles();

    // 5️⃣ ITERATIVE DEPENDENCY GRAPH RESOLUTION (Cascading Disables & Observability)

    if (!fatalErrorTriggered) {

      let isGraphStable = false;

      let iterations = 0;

      let lastMutatedNode = null;

      const MAX_ITERATIONS = 10; // Failsafe breaker

      while (!isGraphStable && iterations < MAX_ITERATIONS) {

        isGraphStable = true;

        iterations++;

        

        Object.keys(policy.dependencyMatrix).forEach(addon => {

          if (env.addons[addon]) {

            const requiredCaps = policy.dependencyMatrix[addon];

            const missing = requiredCaps.filter(cap => env.capabilities[cap] !== true);

            

            if (missing.length > 0) {

              env.addons[addon] = false; // Auto-disable

              isGraphStable = false; // Graph changed, requires another pass

              lastMutatedNode = addon;

              enforce(`Dependency Fault: Add-on '${addon}' disabled (Iteration ${iterations}). Missing:

[${missing.join(", ")}]`, "violation");

            }

          }

        });

      }

      

      if (!isGraphStable) {

        enforce(`Dependency Fault: Graph failed to stabilize after ${MAX_ITERATIONS} passes. Last

mutating node: '${lastMutatedNode}'`, "fatal");

      }

    }

    // 6️⃣ PLAN BOUNDING & TOKEN VALIDATION
  const planLimits = policy.planMatrix[env.core.plan];

    

    const validateToken = (registryName, category, currentVal, targetObj, key) => {

      const registry = policy[registryName][category];

      

      if (!registry) {

        enforce(`Execution Fault: Attempted to validate unknown category '${category}' in

'${registryName}'.`, "fatal");

        return;

      }

      const allowed = planLimits ? planLimits[category] : undefined;

      

      if (Array.isArray(currentVal)) {

        const validRegistryItems = currentVal.filter(item => registry.includes(item));

        if (validRegistryItems.length !== currentVal.length) enforce(`Registry Fault: Unknown array

tokens in ${category}.`, "violation");

        if (allowed !== "*") {

          const validPlanItems = validRegistryItems.filter(item => allowed.includes(item));

          if (validPlanItems.length !== validRegistryItems.length) enforce(`Plan Violation: Unauthorized

array items in ${category} for ${env.core.plan} plan.`, "violation");

          targetObj[key] = validPlanItems; 

        } else {

          targetObj[key] = validRegistryItems;

        }

      } else {

        let token = currentVal;

        if (!registry.includes(token)) {

          enforce(`Registry Fault: Unknown token '${token}' in ${category}.`, "violation");

          token = registry[0]; 

        }

        if (allowed !== "*" && !allowed.includes(token)) {

          enforce(`Plan Violation: '${token}' is unauthorized for ${env.core.plan} plan in ${category}.`,

"violation");

          token = allowed[0]; 

        }

        targetObj[key] = token;

      }

    };

    if (planLimits) {

      validateToken("visualTokenRegistry", "theme", env.visual.theme, env.visual, "theme");

      validateToken("visualTokenRegistry", "fontSet", env.visual.fontSet, env.visual, "fontSet");

      validateToken("visualTokenRegistry", "heroLayout", env.visual.heroLayout, env.visual,

"heroLayout");

      validateToken("visualTokenRegistry", "galleryStyle", env.visual.galleryStyle, env.visual,

"galleryStyle");

      validateToken("visualTokenRegistry", "decorativeLayers", env.visual.decorativeLayers,

env.visual, "decorativeLayers");

      

      validateToken("motionTokenRegistry", "animationLevel", env.motion.animationLevel,

env.motion, "animationLevel");

      

      validateToken("layoutTokenRegistry", "spacingMode", env.layout.spacingMode, env.layout,

"spacingMode");

    } else {

      enforce(`Plan Fault: Unknown plan type '${env.core.plan}'`, "fatal");
      }

    // 7️⃣ ENFORCEMENT SEVERITY & TELEMETRY INJECTION

    const shouldEnterSafeMode = fatalErrorTriggered || (violationTriggered &&

env.runtime.enforcementMode === "hard");

    if (shouldEnterSafeMode) {

      console.error("[Adhya Firmware] SAFE MODE ENGAGED. Booting into absolute baseline

configuration due to severe policy violations.");

      console.error(validationLogs.join('\n'));

      

      // Complete System Flush and Baseline Substitution (Deep Clone Memory Copy)

      Object.keys(policy.baselineDefaults).forEach(section => {

        if (env[section]) {

          env[section] = JSON.parse(JSON.stringify(policy.baselineDefaults[section]));

        }

      });

      

      // Explicitly set telemetry AFTER baseline substitution to prevent overwrite

      env.runtime.bootStatus = "safe-mode";

    } else if (validationLogs.length > 0) {

      env.runtime.bootStatus = "corrected";

      if (isDebug) console.warn("[Adhya Firmware] Soft Fail / Auto-Corrections Applied:\n" +

validationLogs.join('\n'));

    } else {

      env.runtime.bootStatus = "clean";

    }

    env.runtime.bootLogs = validationLogs; // Expose telemetry

    // 8️⃣ DEEP IMMUTABILITY GUARANTEE

    function deepFreeze(obj) {

      if (obj === null || typeof obj !== "object") return obj;

      Object.keys(obj).forEach(prop => {

        if (typeof obj[prop] === "object" && obj[prop] !== null && !Object.isFrozen(obj[prop])) {

          deepFreeze(obj[prop]);

        }

      });

      return Object.freeze(obj);

    }

    if (env.core.buildMode === "production") {

      deepFreeze(env);

      deepFreeze(policy);

      deepFreeze(engineMeta);

    }

  } catch (e) {

    console.error("[Adhya Firmware] Unrecoverable Governance Engine Crash.", e);

    env.runtime.bootStatus = "crashed";

  }

})(window.AdhyaConfig, AdhyaPolicy, EngineMeta);
