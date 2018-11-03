document.addEventListener("DOMContentLoaded", function(){
  chrome.tabs.executeScript({
    file: 'hello.js'
  });
});

// Listen to messages from the payload.js script and write to popout.html
chrome.runtime.onMessage.addListener(function (message) {
	document.getElementById('textbox').value = message;
});

document.getElementById("make-changes").onclick = function() {myFunction()};

function myFunction() {
    var twitterUrl = 'https://twitter.com/intent/tweet?text=' + document.getElementById('textbox').value;
    var win = window.open(twitterUrl, '_blank');
    win.focus();
}
