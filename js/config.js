/**

ADHYA EVENTECH - PHASE 1 PLATFORM CONTROL LAYER

Firmware-Grade Configuration & Policy Execution Engine v1.5.0

GOVERNANCE RULES:


1. Policy Data is strictly separated from Execution Logic.



2. Deep Schema Firewall (Nested rogue key rejection & Array Homogeneity).



3. Engine Policy Version Handshake Contract.



4. Safe Default Coercion (Avoids undefined pointer states).



5. Iterative DAG Resolution (Cascading dependency stabilization).



6. Immutable Deep-Freeze lockdown in production environments.
*/




// ENGINE METADATA (Decoupled from Policy Data)
const EngineMeta = {
engineVersion: "1.6.0",
strictTypeEnforcement: false,
maxCoercionThreshold: 5
};

// POLICY DATA LAYER (Strictly Isolated from Execution)
const AdhyaPolicy = {
policyVersion: "1.6.0",
schemaDefinition: {
core: { templateVersion: "string", requiredEngineVersion: "string", plan: "string", productType: "string", locale: "string", direction: "string", buildMode: "string" },
capabilities: { gallery: "boolean", video: "boolean", timeline: "boolean", memoryArchive: "boolean", anniversary: "boolean", guestUpload: "boolean", blessingsWall: "boolean", privateGallery: "boolean", sponsors: "boolean", customDomain: "boolean", personalizedGreeting: "boolean" },
visual: { theme: "string", fontSet: "string", heroLayout: "string", galleryStyle: "string", spacingMode: "string", decorativeLayers: "array" },
motion: { animationLevel: "string", parallaxEnabled: "boolean", microInteractionLevel: "string" },
layout: { contentWidth: "string", verticalRhythm: "string", spacingMode: "string" },
addons: { musicPlayer: "boolean", extraGalleryLimit: "boolean", advancedStorytelling: "boolean", customAnimationSequence: "boolean", extendedTimeline: "boolean", seoEnhancement: "boolean" },
runtime: { enforcementMode: "string", lazyLoadMedia: "boolean", preloadHeroAssets: "boolean", strictSectionValidation: "boolean", consoleErrorTracking: "boolean", enforceImageLimits: "boolean", countdownValidation: "boolean", bootStatus: "string", bootLogs: "array" },
localization: { multiLanguageEnabled: "boolean", availableLocales: "array", defaultLocale: "string" }
},
coreEnums: {
plan: ["basic", "premium", "royal"],
productType: ["main", "lite"],
buildMode: ["production", "staging", "debug"]
},
baselineDefaults: {
core: { plan: "basic", productType: "main", locale: "en", direction: "ltr", buildMode: "production" },
capabilities: { gallery: true, video: false, timeline: false, memoryArchive: false, anniversary: false, guestUpload: false, blessingsWall: false, privateGallery: false, sponsors: false, customDomain: false, personalizedGreeting: false },
visual: { theme: "theme-midnight-navy", fontSet: "font-sansModern", heroLayout: "hero-centered", galleryStyle: "gallery-grid", spacingMode: "spacing-compact", decorativeLayers: [] },
motion: { animationLevel: "anim-minimal", parallaxEnabled: false, microinteractionLevel: "standard" },
layout: { contentWidth: "width-wide", verticalRhythm: "rhythm-airy", spacingMode: "spacing-compact" },
addons: { musicPlayer: false, extraGalleryLimit: false, advancedStorytelling: false, customAnimationSequence: false, extendedTimeline: false, seoEnhancement: false },
runtime: { enforcementMode: "soft", lazyLoadMedia: true, preloadHeroAssets: true, strictSectionValidation: true, consoleErrorTracking: true, enforceImageLimits: true, countdownValidation: true, bootStatus: "pending", bootLogs: [] },
localization: { multiLanguageEnabled: false, availableLocales: ["en"], defaultLocale: "en" }
},
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
planMatrix: {
basic: {
theme: ["theme-midnight-navy"],
fontSet: ["font-sansModern"],
heroLayout: ["hero-centered"],
galleryStyle: ["gallery-grid"],
animationLevel: ["anim-minimal"],
spacingMode: ["spacing-compact"],
decorativeLayers: []
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
theme: "",
fontSet: "",
heroLayout: "",
galleryStyle: "",
animationLevel: "",
spacingMode: "",
decorativeLayers: "*"
}
},
dependencyMatrix: {
extraGalleryLimit: ["gallery"],
privateGallery: ["gallery"],
advancedStorytelling: ["timeline"],
extendedTimeline: ["timeline"],
guestUpload: ["gallery", "blessingsWall"]
}
};

// CONFIGURATION DECLARATION LAYER
window.AdhyaConfig = {
core: {
templateVersion: "1.5.0",
requiredEngineVersion: ">=1.5.0",
plan: "basic",
productType: "main",
locale: "en",
direction: "ltr",
buildMode: "production"
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
fontSet: "font-sansModern",
heroLayout: "hero-centered",
galleryStyle: "gallery-grid",
spacingMode: "spacing-compact",
decorativeLayers: []
},
motion: {
animationLevel: "anim-minimal",
parallaxEnabled: false,
microInteractionLevel: "standard"
},
layout: {
contentWidth: "width-wide",
verticalRhythm: "rhythm-airy",
spacingMode: "spacing-compact"
},
addons: {
musicPlayer: false,
extraGalleryLimit: false,
advancedStorytelling: false,
customAnimationSequence: false,
extendedTimeline: false,
seoEnhancement: false
},
runtime: {
enforcementMode: "soft",
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

ADHYA GOVERNANCE ENGINE (Deterministic Execution Layer)
*/
(function executeGovernanceBootSequence(env, policy, engineMeta) {
const isDebug = env.core.buildMode !== "production";

// Severity State Tracking
let fatalErrorTriggered = false;
let violationTriggered = false;
let validationLogs = [];
let coercionCount = 0;

const severityWeights = {
warning: 0,
violation: 1,
fatal: 3
};

const enforce = (message, severity = "warning") => {
validationLogs.push([${severity.toUpperCase()}] ${message});
coercionCount += severityWeights[severity] || 0;

if (severity === "fatal") fatalErrorTriggered = true;  
 if (severity === "violation") violationTriggered = true;  

 if (engineMeta.maxCoercionThreshold && coercionCount >= engineMeta.maxCoercionThreshold) {  
     if (!fatalErrorTriggered) {   
         fatalErrorTriggered = true;  
         validationLogs.push(`[FATAL] Coercion threshold (${engineMeta.maxCoercionThreshold}) exceeded. Structural entropy score: ${coercionCount}. System state is too corrupted.`);  
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
// 1 DEEP SCHEMA INTEGRITY, ROGUE KEY LOCKDOWN & STRICT TYPE CHECKING
const allowedTopKeys = Object.keys(policy.schemaDefinition);

allowedTopKeys.forEach(key => {  
     if (!env[key] || typeof env[key] !== "object") {  
         enforce(`Schema Fault: Missing or invalid top-level key: ${key}`, "fatal");  
         env[key] = JSON.parse(JSON.stringify(policy.baselineDefaults[key]));   
     }  
 });  

 Object.keys(env).forEach(topKey => {  
     if (!allowedTopKeys.includes(topKey)) {  
         enforce(`Schema Fault: Rogue top-level key injected: ${topKey}. Stripping.`, "violation");  
         delete env[topKey];  
     } else {  
         const allowedNestedSchema = policy.schemaDefinition[topKey];  
         const allowedNestedKeys = Object.keys(allowedNestedSchema);  
         Object.keys(env[topKey]).forEach(nestedKey => {  
             if (!allowedNestedKeys.includes(nestedKey)) {  
                 enforce(`Schema Fault: Rogue nested key injected: ${topKey}.${nestedKey}. Stripping.`, "violation");  
                 delete env[topKey][nestedKey];  
             } else {  
                 const expectedType = allowedNestedSchema[nestedKey];  
                 const actualValue = env[topKey][nestedKey];  
                 const actualType = Array.isArray(actualValue) ? "array" : typeof actualValue;  
                 if (actualType !== expectedType && actualValue !== undefined) {  
                     if (engineMeta.strictTypeEnforcement) {  
                         enforce(`Type Fault: ${topKey}.${nestedKey} expects '${expectedType}' but received '${actualType}'.`, "fatal");  
                     } else {  
                         enforce(`Type Warning: ${topKey}.${nestedKey} type mismatch. Coercing to baseline default.`, "violation");  
                         env[topKey][nestedKey] = JSON.parse(JSON.stringify(policy.baselineDefaults[topKey][nestedKey]));   
                     }  
                 } else if (actualType === "array") {  
                     const isHomogeneousString = actualValue.every(item => typeof item === "string");  
                     if (!isHomogeneousString) {  
                         if (engineMeta.strictTypeEnforcement) {  
                             enforce(`Type Fault: Array ${topKey}.${nestedKey} contains non-string elements.`, "fatal");  
                         } else {  
                             enforce(`Type Warning: Array ${topKey}.${nestedKey} contains invalid elements. Resetting array.`, "violation");  
                             env[topKey][nestedKey] = JSON.parse(JSON.stringify(policy.baselineDefaults[topKey][nestedKey]));   
                         }  
                     }  
                 }  
             }  
         });  
     }  
 });  

 // 1.5 CORE ENUMERATION VALIDATION  
 Object.keys(policy.coreEnums).forEach(enumKey => {  
     if (env.core[enumKey] && !policy.coreEnums[enumKey].includes(env.core[enumKey])) {  
         enforce(`Enum Fault: Invalid core value '${env.core[enumKey]}' for ${enumKey}.`, "fatal");  
     }  
 });  

 // 2 VERSION NEGOTIATION & HANDSHAKE CONTRACT  
 if (!isEngineCompatible(env.core.requiredEngineVersion, engineMeta.engineVersion)) {  
     enforce(`Version Mismatch: Execution Engine v${engineMeta.engineVersion} does not satisfy config requirement ${env.core.requiredEngineVersion}`, "fatal");  
 }  

 if (!isEngineCompatible(policy.policyVersion, engineMeta.engineVersion)) {  
     enforce(`Contract Fault: Execution Engine v${engineMeta.engineVersion} is older than loaded Policy Data v${policy.policyVersion}. Downgrade risk.`, "fatal");  
 }  

 // 3 LITE ENFORCEMENT  
 if (env.core.productType === "lite") {  
     env.core.plan = "basic";  
     Object.keys(env.addons).forEach(key => env.addons[key] = false);  
     env.visual.decorativeLayers = [];  
     if (isDebug) console.warn("[Adhya Policy] Product is 'Lite'. Stripped add-ons and forced basic plan.");  
 }  

 // 4 DEPENDENCY DAG CYCLE DETECTION  
 const checkCycles = () => {  
     const visited = new Set();  
     const recursionStack = new Set();  

     const dfs = (node) => {  
         if (recursionStack.has(node)) return true;   
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
         if (dfs(node)) enforce(`Dependency Fault: Circular dependency DAG detected involving '${node}'.`, "fatal");  
     }  
 };  
 checkCycles();  

 // 5 ITERATIVE DEPENDENCY GRAPH RESOLUTION   
 if (!fatalErrorTriggered) {  
     let isGraphStable = false;  
     let iterations = 0;  
     let lastMutatedNode = null;  
     const MAX_ITERATIONS = 10;   

     while (!isGraphStable && iterations < MAX_ITERATIONS) {  
         isGraphStable = true;  
         iterations++;  
         Object.keys(policy.dependencyMatrix).forEach(addon => {  
             if (env.addons[addon]) {  
                 const requiredCaps = policy.dependencyMatrix[addon];  
                 const missing = requiredCaps.filter(cap => env.capabilities[cap] !== true);  
                 if (missing.length > 0) {  
                     env.addons[addon] = false;   
                     isGraphStable = false;   
                     lastMutatedNode = addon;  
                     enforce(`Dependency Fault: Add-on '${addon}' disabled (Iteration ${iterations}). Missing: [${missing.join(", ")}]`, "violation");  
                 }  
             }  
         });  
     }  
     if (!isGraphStable) {  
         enforce(`Dependency Fault: Graph failed to stabilize after ${MAX_ITERATIONS} passes. Last mutating node: '${lastMutatedNode}'`, "fatal");  
     }  
 }  

 // 6 PLAN BOUNDING & TOKEN VALIDATION  
 const planLimits = policy.planMatrix[env.core.plan];  

 const validateToken = (registryName, category, currentVal, targetObj, key) => {  
     const registry = policy[registryName][category];  
     if (!registry) {  
         enforce(`Execution Fault: Attempted to validate unknown category '${category}' in '${registryName}'.`, "fatal");  
         return;  
     }  

     const allowed = planLimits ? planLimits[category] : undefined;  

     if (Array.isArray(currentVal)) {  
         const validRegistryItems = currentVal.filter(item => registry.includes(item));  
         if (validRegistryItems.length !== currentVal.length) enforce(`Registry Fault: Unknown array tokens in ${category}.`, "violation");  

         if (allowed !== "*") {  
             const validPlanItems = validRegistryItems.filter(item => allowed.includes(item));  
             if (validPlanItems.length !== validRegistryItems.length) enforce(`Plan Violation: Unauthorized array items in ${category} for ${env.core.plan} plan.`, "violation");  
             targetObj[key] = validPlanItems || [];  
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
             enforce(`Plan Violation: '${token}' is unauthorized for ${env.core.plan} plan in ${category}.`, "violation");  
             token = allowed[0];  
         }  
         targetObj[key] = token;  
     }  
 };  

 if (planLimits) {  
     validateToken("visualTokenRegistry", "theme", env.visual.theme, env.visual, "theme");  
     validateToken("visualTokenRegistry", "fontSet", env.visual.fontSet, env.visual, "fontSet");  
     validateToken("visualTokenRegistry", "heroLayout", env.visual.heroLayout, env.visual, "heroLayout");  
     validateToken("visualTokenRegistry", "galleryStyle", env.visual.galleryStyle, env.visual, "galleryStyle");  
     validateToken("visualTokenRegistry", "decorativeLayers", env.visual.decorativeLayers, env.visual, "decorativeLayers");  
     validateToken("motionTokenRegistry", "animationLevel", env.motion.animationLevel, env.motion, "animationLevel");  
     validateToken("layoutTokenRegistry", "spacingMode", env.layout.spacingMode, env.layout, "spacingMode");  
 } else {  
     enforce(`Plan Fault: Unknown plan type '${env.core.plan}'`, "fatal");  
 }  

 // 7 ENFORCEMENT SEVERITY & TELEMETRY INJECTION  
 const shouldEnterSafeMode = fatalErrorTriggered || (violationTriggered && env.runtime.enforcementMode === "hard");  

 if (shouldEnterSafeMode) {  
     console.error("[Adhya Firmware] SAFE MODE ENGAGED. Booting into absolute baseline configuration due to severe policy violations.");  
     console.error(validationLogs.join('\n'));  

     Object.keys(policy.baselineDefaults).forEach(section => {  
         if (env[section]) {  
             env[section] = JSON.parse(JSON.stringify(policy.baselineDefaults[section]));  
         }  
     });  
     env.runtime.bootStatus = "safe-mode";  
 } else if (validationLogs.length > 0) {  
     env.runtime.bootStatus = "corrected";  
     if (isDebug) console.warn("[Adhya Firmware] Soft Fail / Auto-Corrections Applied:\n" + validationLogs.join('\n'));  
 } else {  
     env.runtime.bootStatus = "clean";  
 }  
 env.runtime.bootLogs = validationLogs;   

 // =========================================================  
 // 7.5 RUNTIME COMPATIBILITY BRIDGE (Adapter for main.js)  
 // Injected post-validation to avoid Schema Firewall stripping  
 //  =========================================================  
 env.planType = env.core.plan;  
 env.features = env.capabilities;  

 // Map add-ons and fill missing boolean flags

env.addons.music = env.addons.musicPlayer || false;
env.addons.rsvp = false; // Forced false
env.addons.video = env.capabilities.video || false;
env.addons.guestupload = env.capabilities.guestUpload || false;

// Signal to orchestrator that the payload is safe
env._validated = true;
// =========================================================

// 8 DEEP IMMUTABILITY GUARANTEE
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
