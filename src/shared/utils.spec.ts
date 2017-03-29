/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { DataService } from './data.service';
/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */
import { wikiImageSet, wikiUrl } from './utils';

describe('Utility Functions:', () => {

  describe('wikiUrl()', () => {

    it('should return full URL for absolute path', () => {
      expect(wikiUrl('/ab/f.png')).toBe(`${DataService.host}ab/f.png`);
    }); // end should return full URL

    it('should return full URL for relative path', () => {
      expect(wikiUrl('abcde/fghi')).toBe(`${DataService.host}abcde/fghi`);
      expect(wikiUrl('./abcde/fghi')).toBe(`${DataService.host}abcde/fghi`);
      expect(wikiUrl('../abcde/fghi')).toBe(`${DataService.host}abcde/fghi`);
      expect(wikiUrl('../../abcde/fghi')).toBe(`${DataService.host}abcde/fghi`);
    }); // end should return full URL

  }); // end wikiUrl()


  describe('wikiImageSet()', () => {

    it('should return no srcset for single image', () => {
      expect(wikiImageSet(['a/b/c.png']))
        .toEqual({src: `${DataService.host}a/b/c.png`, set: ''});
    });

    it('should return 1.5x srcset', () => {
      expect(wikiImageSet(['a/b/c.png', '1/5.png']))
        .toEqual({
          set: `${DataService.host}1/5.png 1.5x`,
          src: `${DataService.host}a/b/c.png`,
        });
    }); // end should return no srcset for single image

    it('should return 1.5x & 2x srcset', () => {
      expect(wikiImageSet(['a/b/c.png', '1/5.png', '2.png']))
        .toEqual({
          set: `${DataService.host}1/5.png 1.5x, ${DataService.host}2.png 2x`,
          src: `${DataService.host}a/b/c.png`,
        });
    }); // end should return no srcset for single image

  }); // end wikiImageSet()

}); // end Utility Functions
