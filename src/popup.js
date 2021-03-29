function setI18Nmessage(){
  setTestMessage ("testMessage", "messageI18nFromJs");
}


document.addEventListener("DOMContentLoaded", setI18Nmessage());
listenMessages();




export function listenMessages(){
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      console.debug(request);
      console.debug(sender);
      if ((sender.tab === undefined ) && request.testWorkerMessage)
        {
          setTestMessage(request.testWorkerMessage,"testWorkerMessage");
          sendResponse({farewell: "close"});
        }
        else {
          sendResponse({farewell: "close"});
        }
  }
);
}

export function  setTestMessage (testMessage, placeholder){
  var local_mesagge= chrome.i18n.getMessage(testMessage);
    if (local_mesagge && document.getElementById(placeholder))
    {
      document.getElementById(placeholder).innerHTML= local_mesagge;
    }
}
