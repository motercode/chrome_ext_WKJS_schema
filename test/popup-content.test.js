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


  describe("its internalizated ", () => {
    it ('returns spanish message when locale is es' , ()=>{
       expect(false).toBe(true);
       pending();
    });
  })

  afterAll(() => {
    chrome.flush();
    delete global.chrome;
  });

});
