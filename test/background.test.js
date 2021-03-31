const chrome =  require("sinon-chrome/extensions");
global.chrome = chrome;
const background = require('src/background.js')

function PageStateMatcher(datos) {
  this.pageUrl = datos.pageUrl.urlMatches;
}
function ShowPageAction(data) {
    this.data = data;
}
chrome.declarativeContent.PageStateMatcher = PageStateMatcher;
chrome.declarativeContent.ShowPageAction = ShowPageAction;
chrome.declarativeContent.onPageChanged.rules = [];
chrome.declarativeContent.onPageChanged.removeRules = (rule, callback) => {callback();};
chrome.declarativeContent.onPageChanged.addRules = (arrayrules) => {
      chrome.declarativeContent.onPageChanged.rules=arrayrules;
};


describe("background.js ", () => {
  beforeAll(() => {
    global.chrome = chrome;
  });

  beforeEach(() => {
    chrome.flush();
  });

  describe("it hooks the popup-content.html to chrome.declarativeContent when called onInstalled ", () => {
    it ('had been not been called runtime.oninstalled.addlistener without call the function' , (done)=>{
      expect (chrome.runtime.onInstalled.addListener.calledOnce).toBe(false);
      done();
    });
    it ('had been called runtime.oninstalled.addlistener when function called' , (done)=>{
      background.addthehookoninstalled();
      expect (chrome.runtime.onInstalled.addListener.calledOnce).toBe(true);
      done();
    });

    it ('adds a new rule with pageurl and actions as required when onInstalled dispatch', (done) =>{
      var pageUrlTarget = '.';
      var actionsTarget = new chrome.declarativeContent.ShowPageAction();

      background.addthehookoninstalled();

      expect(chrome.declarativeContent.onPageChanged.rules.length).toBe(0);

      chrome.runtime.onInstalled.dispatch();

      expect(chrome.declarativeContent.onPageChanged.rules.length).toBe(1);

      expect(chrome.declarativeContent.onPageChanged.rules[0].conditions[0].pageUrl).toEqual(pageUrlTarget);
      expect(chrome.declarativeContent.onPageChanged.rules[0].actions[0]).toEqual(actionsTarget);

      done();
    });
  });

  afterAll(() => {
    chrome.flush();
    delete global.chrome;
  });

});
