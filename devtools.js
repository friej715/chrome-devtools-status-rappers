var xhr = new XMLHttpRequest();
xhr.open("GET", "/flatland.css", false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);
