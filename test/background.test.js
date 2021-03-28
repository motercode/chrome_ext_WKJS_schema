const chrome =  require("sinon-chrome/extensions");
global.chrome = chrome;
const background = require('src/background.js')


describe("background.js ", () => {
  beforeAll(() => {
    global.chrome = chrome;
  });

  beforeEach(() => {
    chrome.flush();
  });


  describe("schema test for api chrome calls ", () => {
    it ('had been not been called runtime.oninstalled.addlistener without call the function' , (done)=>{
      expect (chrome.runtime.onInstalled.addListener.calledOnce).toBe(false);
      done();
    });
    it ('had been called runtime.oninstalled.addlistener when function called' , (done)=>{
      background.addthehookoninstalled();
      expect (chrome.runtime.onInstalled.addListener.calledOnce).toBe(true);
      done();
    });


  });
  afterAll(() => {
    chrome.flush();
    delete global.chrome;
  });

});
