/**
 * Created by JC on 2016-09-29.
 */

import {EDocumentTypes} from '../interfaces/db/document';


export const crew:Function = state =>
{
  return <any>state[EDocumentTypes.crew].list();
};

export const missions:Function = state =>
{
  return <any>state[EDocumentTypes.mission];
};
