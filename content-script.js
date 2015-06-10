var injected = document.createElement('script');
injected.setAttribute('type', 'text/javascript');
injected.setAttribute('src', chrome.extension.getURL('injected.js'));
document.body.appendChild(injected);

