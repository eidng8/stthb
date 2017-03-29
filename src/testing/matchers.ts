/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */
import { DataService } from '../shared/data.service';

const regex: RegExp = new RegExp(`^${DataService.host}`, 'i');

export function toBeWikiUrl(): jasmine.CustomMatcher {
  return {
    compare: function (actual: string): jasmine.CustomMatcherResult {
      let message: string;
      const pass: boolean = regex.test(actual);
      if (pass) {
        message = `Expected ${actual} to be stt.wiki URL`;
      }
      else {
        message
          = `Expected URL to point to ${DataService.host}, but got ${actual}`;
      }
      return {pass, message};
    },
  };
}
