chrome.webNavigation["onCompleted"].addListener(function(data) {
  chrome.runtime.sendMessage({testWorkerMessage: "worker_message"}, function(response) {
    return true;
  });
});
