export function addthehookoninstalled(){
  chrome.runtime.onInstalled.addListener(function() {
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
      chrome.declarativeContent.onPageChanged.addRules([{
        id:"uniqueidforthisrule",
         conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {urlMatches: '.'},
          }),
        ],
         actions: [new chrome.declarativeContent.ShowPageAction()]
      }]);
    });
  });
}

addthehookoninstalled();
