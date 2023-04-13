const defaultFilters = [
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
    function (details) { return { cancel: true } },
    { urls: defaultFilters },
    ["blocking"]
)


// extra features .................................................

// function stopVideo(id) {
    //     var src = $j('iframe.' + id).attr('src');
    //     $j('iframe.' + id).attr('src', '');
    //     $j('iframe.' + id).attr('src', src);
    // }
    
    
    
// var up = document.getElementsByClassName('text1');
// // var para = document.getElementById('text2');
// // var down = document.getElementById('text3');
// up.innerHTML = "Click on the below button to remove an element";

// function RemoveDOMelement() {
//    para.remove();
//    down.innerHTML = "The paragraph is deleted.";
// }