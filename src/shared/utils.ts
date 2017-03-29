/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */
import { DataService } from './data.service';

const imgSrcSets: string[] = ['1.5x', '2x'];

export type TImageSet = { src: string, set: string };

/**
 * Return the URL to the given wiki resource URI
 */
export function wikiUrl(uri: string): string {
  uri = uri.trim();
  if (!uri) {
    return '';
  }
  return uri ? `${DataService.host}${uri.replace(/^[./\\]+/, '')}` : '';
}

/**
 * Build `srcset` with the given array of URI
 */
export function wikiImageSet(uris: string[]): TImageSet {
  if (uris.length < 1) {
    return {src: '', set: ''};
  }

  let urls: string[] = uris.map(uri => wikiUrl(uri));

  const src: string = urls.shift();
  if (urls.length > 0) {
    urls = urls.map((url, idx) => url ? `${url} ${imgSrcSets[idx]}` : '')
               .filter(url => !!url);
  }
  const set: string = urls.length > 0 ? urls.join(', ') : '';

  return {src, set};
}
