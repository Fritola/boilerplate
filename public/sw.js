if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,n,r)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=r(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-8d6e370d"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"myWede2QqCjCjp-EM65Go"},{url:"/_next/server/middleware-build-manifest.js",revision:"b90e206a9e53d763a6869b264d27aa9d"},{url:"/_next/server/middleware-react-loadable-manifest.js",revision:"9745dbf48a8b1d3949962744abde5ca2"},{url:"/_next/static/chunks/5-e24245e0651efa29.js",revision:"df8d0938de65a7455500bcd8493751ee"},{url:"/_next/static/chunks/651.8aaebbbff3fb4a6d.js",revision:"0dca8b84dd742520a880464e0386c81a"},{url:"/_next/static/chunks/741.5c49c5ccb4a0a8f7.js",revision:"afa09c3e915a2f8efd31e602746f096d"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4af7a03f4bbda417f4968b58d996107d"},{url:"/_next/static/chunks/main-daa989f39807f07e.js",revision:"3afcf58ca9fbd5495c0231849007b654"},{url:"/_next/static/chunks/pages/_app-71c0524d9e571a01.js",revision:"e4c6dacce5b0f071bdb20ee0641ec3bd"},{url:"/_next/static/chunks/pages/_documents-b05ee506a758a638.js",revision:"32d92cda58a970d5c08508adfbddb000"},{url:"/_next/static/chunks/pages/_error-28b0dba9dbcfb4ed.js",revision:"efdd2c506bb6638cf2139bdbca28d818"},{url:"/_next/static/chunks/pages/index-b950894727b7073d.js",revision:"08444ca8c0cab73aefb4479c956c36f0"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-e5cacf3510d70103.js",revision:"e4a47a5e7dba547a06e59cefcce735e1"},{url:"/_next/static/myWede2QqCjCjp-EM65Go/_buildManifest.js",revision:"a7244d6a965f11b7450db61ffe00368a"},{url:"/_next/static/myWede2QqCjCjp-EM65Go/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/img/hero-illustration.svg",revision:"5fd5143cba1046a214d9a359fce22e89"},{url:"/img/icon-192.png",revision:"d27169d080684ebb57b8387d05c4b444"},{url:"/img/icon-512.png",revision:"f1d74b43a3832183202483a40d9e9d84"},{url:"/img/logo.svg",revision:"202525302ad30aca5b2b790d4b0b5796"},{url:"/manifest.json",revision:"2b19621eb00c338ee252b1c8dda19b2a"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"POST"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
