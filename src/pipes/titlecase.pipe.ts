/**
 * Created by JC on 2016-09-24.
 *
 * From https://gist.github.com/apkostka/a42b2f23df033872ae406549ab1a1c2e
 */

import {Pipe, PipeTransform} from '@angular/core';

/*
 * Changes the case of the first letter of a given number of words in a string.
 */

@Pipe(
  {
    name: 'titleCase',
    // pure: false,
  })
export class TitleCasePipe implements PipeTransform
{
  public transform(input:string, length:number):string
  {
    return input.length < 1 ? ''
      : input.replace(
      /\w\S*/g, txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase());
  }
}
