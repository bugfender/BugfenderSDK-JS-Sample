# Bugfender

Bugfender is a game-changing platform that logs every detail your users experience and feeds the data straight to an easy-to-use web console. Bugfender SDK is multi-platform and available for mobile and web apps, so you can use the same tool for all your apps.

## Bugfender SDK JS Sample

This repository contains a sample application written in HTML and vanilla JavaScript and using Bugfender SDK to collect user logs.

If you plan to use Bugfender SDK with a JavaScript framework, check the following documentation:

- [Angular](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-angular/): Bugfender SDK for Angular
- [React](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-react/): Bugfender SDK for React
- [Vue](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-vue/): Bugfender SDK for Vue
- [Svelte](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-svelte/): Bugfender SDK for Svelte

## Links

- [Official JavaScript SDK Docs](https://docs.bugfender.com/docs/platforms/web-apps/bugfender-for-javascript-on-browsers/)
- [Bugfender JS SDK reference documentation](https://js.bugfender.com/)

## Quick Start Guide

Here are the main points to getting Bugfender working on your apps:

* Get an app key at [bugfender.com](https://bugfender.com/)
* Import Bugfender SDK JavaScript file.

```html
<script defer src="https://js.bugfender.com/bugfender.js"></script>
```

* Initialize on your script

```javascript
// Later on your JavaScript code
// Initialize. `appKey` is the only required option.
Bugfender.init({
    appKey: '<YOUR_APP_KEY_HERE>',
    // apiURL: 'https://api.bugfender.com',
    // baseURL: 'https://dashboard.bugfender.com',
    // overrideConsoleMethods: true,
    // printToConsole: true,
    // registerErrorHandler: true,
    // logBrowserEvents: true,
    // logUIEvents: true,
    // version: '',
    // build: '',
});

// Bugfender now can be used
Bugfender.log('Hello world!');
```

Remember to change `<YOUR_APP_KEY_HERE>` with the app key of your app and also your version & build numbers.
