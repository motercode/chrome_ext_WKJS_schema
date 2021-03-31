const chrome =  require("sinon-chrome/extensions");
global.chrome = chrome;
const popup = require('src/popup.js')
import manifest from '/static/manifest.json';

describe("popup.js ", () => {
  beforeAll(() => {
    global.chrome = chrome;
  });

  beforeEach(() => {
    chrome.flush();
  });


  describe("its internationalized ", () => {
    it ('it has a "default_locale" : "??" on the manifest file ', ()=>{
      expect(manifest.default_locale).toBeDefined();
    });
    it ('it has a folder _locale on dist folder' , ()=>{
       expect(false).toBe(true);
       pending();
    });
    it ('it has a at least default_locale subfolder matching languages convention on folder _locale ' , (done)=>{
       var default_locale = manifest.default_locale;
       import('/static/_locales/'+default_locale+'/messages.json').then((messages)=> {
          expect(messages).toBeDefined();
          done();
        });
    });
    it ('it has at least on key json on the messages.json file with the extructure tagname:{"message":""} ' , ()=>{
      var default_locale = manifest.default_locale;
      import('/static/_locales/'+default_locale+'/messages.json').then((messages)=> {
         var firstkey = messages[0];
         expect(firstkey.message).toBeDefined();
         done();
       });
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
