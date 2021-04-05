import root from 'window-or-global';
import { DOMParser } from 'xmldom';

export function windowObjectTest(){
    var result = false;
    try {
      window.DOMParser = root.DOMParser;
      const doc = new window.DOMParser();
      result=  true;
    } catch (e) {
      result = false;
    }finally{
      return result;
    }
}
