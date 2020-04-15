# Bugfender

Bugfender is a game-changing platform that logs every detail your users experience and feeds the data straight to an easy-to-use web console. Bugfender SDK is multi-platform and available for mobile and web apps, so you can use the same tool for all your apps.

# Bugfender SDK JS Sample

This repository contains a sample application written in HTML and vanilla Javascript and using Bugfender SDK to collect user logs.

If you plan to use Bugfender SDK on an **Angular app**, visit https://github.com/bugfender/BugfenderSDK-Angular-Sample

## SDK Installation
Here are the main points to getting Bugfender working on your apps:

* Get an app key at [bugfender.com](https://bugfender.com/)
* Import Bugfender SDK js file and use init it using the following snippet:

```html
<script>!function (e) { var a; e.Bugfender = e.Bugfender || (a = { appKey: "<YOUR_APP_KEY_HERE>", q: [] }, ["log", "warn", "error", "trace", "info", "fatal", "removeDeviceKey", "sendLog", "sendIssueMarkdown", "sendIssue", "sendCrash", "sendUserFeedback", "setDeviceKey"].forEach(function (o) { a[o] = function () { for (var e = [], r = 0; r < arguments.length; r++)e[r] = arguments[r]; var n = function () { try { throw new Error } catch (e) { return e } }(); a.q.push([o, n, Array.prototype.slice.call(e, 0)]) } }), a) }(window);</script>
<script>
    Bugfender.options = {
        // overrideConsole: true,
        version: '0.0.1',
        build: '1',
    };
</script>
<script async src="https://js.bugfender.com/bugfender.js"></script>
```

Remember to change `<YOUR_APP_KEY_HERE>` with the app key of your app and also your version & build numbers.

## Using Bugfender

After you have initialized the SDK, you can start using it:

```javascript
Bugfender.log("This is a log");
```

## More information
### Docs
For more information on all methods available, please go to the [Bugfender JS SDK reference documentation](https://js.bugfender.com/).

### SDK status
The SDK is suitable for production. Please feel free to open an issue or contact us at [bugfender.com](https://bugfender.com) .