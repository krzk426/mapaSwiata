import {pl} from './pl.js';
import {eng} from './eng.js';
import {defaultLanguage} from '../tools/config.js';


export const getString = (area, elem)  => {
    
    if (defaultLanguage === 'pl') {
      return pl[area][elem];
    }
    return eng[area][elem];
  }




