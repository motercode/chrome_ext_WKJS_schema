const chrome =  require("sinon-chrome/extensions");
global.chrome = chrome;
const popup = require('src/popup.js')

describe("popup.js ", () => {
  beforeAll(() => {
    global.chrome = chrome;
  });

  beforeEach(() => {
    chrome.flush();
  });


  describe("its internationalized ", () => {
    it ('it has a folder _locale on dist folder' , ()=>{
       expect(false).toBe(true);
       pending();
    });
    it ('it has a at least one subfolder matching languages convention on folder _locale ' , ()=>{
       expect(false).toBe(true);
       pending();
    });
    it ('it has a messages.json file on the language folder' , ()=>{
       expect(false).toBe(true);
       pending();
    });
    it ('it has at least on key json on the messages.json file with the extructure tagname:{"message":""} ' , ()=>{
       expect(false).toBe(true);
       pending();
    });
    it ('it has a "default_locale" : "??" on the manifest file ', ()=>{
       expect(false).toBe(true);
       pending();
    });
    it ('it returns the expected value on a chrome.i18n.getMessage ', ()=>{
       expect(false).toBe(true);
       pending();
    });
  });
  describe("its listen messages from worker ", () => {
    it ('it adds a listener to onMessage' , ()=>{
       expect (chrome.runtime.onMessage.addListener.calledOnce).toBe(false);
       popup.listenMessages();
       expect (chrome.runtime.onMessage.addListener.calledOnce).toBe(true);
    });

  });



  afterAll(() => {
    chrome.flush();
    delete global.chrome;
  });

});
