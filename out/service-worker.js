self.__precacheManifest = [
  {
    "url": "/_next/static/gXk_CYhPlD8BQD6w62gP8/pages/_error.js"
  },
  {
    "url": "/_next/static/runtime/webpack-f012b0c56e51d71ffc22.js"
  },
  {
    "url": "/_next/static/runtime/main-5207d0b5c98c58b7c7b9.js"
  },
  {
    "url": "/_next/static/gXk_CYhPlD8BQD6w62gP8/pages/info.js"
  },
  {
    "url": "/_next/static/gXk_CYhPlD8BQD6w62gP8/pages/index.js"
  },
  {
    "url": "/_next/static/gXk_CYhPlD8BQD6w62gP8/pages/about.js"
  },
  {
    "url": "/_next/static/gXk_CYhPlD8BQD6w62gP8/pages/_app.js"
  },
  {
    "url": "/_next/static/chunks/commons.ca909aa7d5caaccc7f1e.js"
  },
  {
    "url": "/_next/main.js"
  }
];

/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^https?.*/, workbox.strategies.staleWhileRevalidate(), 'GET');
