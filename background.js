chrome.browserAction.onClicked.addListener(function(tab) {
  //chrome.browserAction.setBadgeBackgroundColor({color: [255, 0, 0, 255]});
  chrome.tabs.executeScript(null, {file: "content-script.js"});
});
