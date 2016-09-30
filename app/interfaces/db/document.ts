/**
 * Created by JC on 2016-07-27.
 */

import {IDBCrew} from './Crew';
import {IMission} from './mission';


export enum EDocumentTypes
{
  crew = 1, mission
}

export interface IDocument
{
  _id:any;
  _rev?:string;
  type:number;
  [key:number]:IDBCrew|IMission;
}

export interface IRow
{
  id:any;
  key:any;
  value:any;
  doc?:IDocument;
}

export interface IView
{
  offset:number;
  total_rows:number;
  rows?:IRow[];
}
