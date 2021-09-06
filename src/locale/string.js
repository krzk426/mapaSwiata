import {pl} from './pl.js';
import {eng} from './eng.js';
import {defaultLanguage} from '../tools/config.js';

export var language = null;

export const changeLanguage = lang => {
  language = lang;
};

export const getString = (area, elem)  => {
    if (!language) {
      language = defaultLanguage;
    }
    if (language === 'pl') {
      return pl[area][elem];
    }
    return eng[area][elem];
  }




