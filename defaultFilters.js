const defaultFilter = [
    "*://*.adbrite.com/*",
    "*://*.zedo.com/*",
    "*://creative.ak.fbcdn.net/*",
    "*://partner.googleadservices.com/*",
    "*://*.exponential.com/*",
    "*://*.quantserve.com/*",
    "*://*.google-analytics.com/*",
    "*://*.doubleclick.net/*",
    "*://*.scorecardresearch.com/*",
    "*://*.googlesyndication.com/*",
    "*://apathylahuli.website/*",
    "*://presidentialprism.com/*"
    // ,
    // "https://www.instagram.com/*"
]

chrome.webRequest.onBeforeRequest.addListener(
    function() {
        return {cancel: true}
    },
    {urls: defaultFilter},
    ["blocking"]
)