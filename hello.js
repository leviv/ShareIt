var url = window.location.href;
var selection = getSelectionText();
var author = document.querySelector("meta[property='author']");

if (author != null)
  author = author.getAttribute("content");

var tweet = constructTweet(url, selection, author);

console.log(tweet);

// Function to construct the final tweet
function constructTweet(tweetUrl, tweetSelection, tweetAuthor){
  var finaltweet = '"';

  finaltweet += tweetSelection + '"';
  finaltweet += " from "
  finaltweet += tweetUrl;


  if (tweetAuthor.length != 0){
    finaltweet += ' by '
    finaltweet += tweetAuthor;
  }

  return finaltweet;
}

// Function to get hte selected text on the page
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
