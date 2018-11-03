document.addEventListener("DOMContentLoaded", function(){
  chrome.tabs.executeScript({
    file: 'hello.js'
  });
});
