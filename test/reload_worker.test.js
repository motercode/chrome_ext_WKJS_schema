const chrome =  require("sinon-chrome/extensions");
global.chrome = chrome;

const worker = require('src/reload_worker.js');





describe("reload_worker.js ", () => {
  beforeAll(() => {
    global.chrome = chrome;
  });

  beforeEach(() => {
    chrome.flush();
  });


  describe("can use DOMparser ", () => {
    it ('it has a window  object ', ()=>{
  //    expect (new window.DOMParser()).toBe(true);
      window.DOMparser = ()=>{this.dummy ="";};
  //    expect (new window.DOMParser().dummy).toBe(false);
      expect(worker.windowObjectTest()).toBe(true);
    });
  });


    afterAll(() => {
      chrome.flush();
      delete global.chrome;
    });

    });
