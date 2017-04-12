/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Moment, unix } from 'moment';
import { Observable } from 'rxjs/Observable';
import { IServerData } from '../interfaces/server-data.interface';
import { CrewProvider } from '../providers/crew.provider';
import { MissionsProvider } from '../providers/missions.provider';
import './rxops';

/**
 * Load raw data from local cache or remote server.
 *
 * Members are declared `protected` instead of `private` to ease mocking in
 * unit tests.
 */
@Injectable()
export class DataService {

  /**
   * Supported data version
   */
  static readonly version: number = 1;

  /**
   * Wiki host. DON'T omit the last slash `/`
   */
  static readonly host: string = 'https://stt.wiki/';

  /**
   * URL to local (pre-packaged) data file
   */
  protected readonly localUrl: string = 'data.json';

  // private readonly removeUrl: string = 'http://*****/data.json';

  protected loaded: boolean = false;

  // region Private fields

  /**
   * List of all characters
   */
  private _characters: string[];

  /**
   * List of all episodes
   */
  private _episodes: string[];

  /**
   * The timestamp when this data is generated
   */
  private _generatedAt: number;

  /**
   * List of all races
   */
  private _races: string[];

  /**
   * List of all skills
   */
  private _skills: string[];

  /**
   * List of all traits
   *
   * Please note that, this list contains only traits that are actually
   * possessed by crew members. e.g. no one possesses the 'Rich' traits, so you
   * won't find it in this list.
   */
  private _traits: string[];

  /**
   * Server data version
   */
  private _version: number;

  // endregion

  /**
   * @param http Angular HTTP service
   * @param _crew
   * @param _missions
   */
  constructor(private http: Http, private _crew: CrewProvider,
              private _missions: MissionsProvider) {
  }

  // region Read-only Properties

  /**
   * List of all characters
   */
  get characters(): string[] {
    return this._characters;
  }

  /**
   * Crew provider instance
   */
  get crew(): CrewProvider {
    return this._crew;
  }

  /**
   * List of all episodes
   */
  get episodes(): string[] {
    return this._episodes;
  }

  /**
   * The timestamp when this data is generated
   */
  get generatedAt(): number {
    return this._generatedAt;
  }

  /**
   * Missions provider instance
   */
  get missions(): MissionsProvider {
    return this._missions;
  }

  /**
   * List of all races
   */
  get races(): string[] {
    return this._races;
  }

  /**
   * List of all skills
   */
  get skills(): string[] {
    return this._skills;
  }

  /**
   * List of all traits
   *
   * Please note that, this list contains only traits that are actually
   * possessed by crew members. e.g. no one possesses the 'Rich' traits, so you
   * won't find it in this list.
   */
  get traits(): string[] {
    return this._traits;
  }

  /**
   * Server data version
   */
  get version(): number {
    return this._version;
  }

  /**
   * Whether the service instance is ready to use
   */
  get ready(): boolean {
    return this.loaded;
  }

  /**
   * The time when this data is generated
   */
  get time(): Moment {
    return unix(this._generatedAt);
  }

  // endregion

  /**
   * Fetch data from first available source
   */
  fetch(): Observable<DataService> {
    return this.getLocalData();
  }

  /**
   * Fetch server data from local (pre-packaged) source
   */
  protected getLocalData(): Observable<DataService> {
    return this.http.get(this.localUrl)
               .map<DataService>(res => this.loadData(res.json()));
  }

  // todo protected fetchRemoteData() {
  //   return this.http.get(this.localUrl);
  // }

  protected loadData(data: IServerData): this {
    if (data.version > DataService.version) {
      throw 'Unsupported data version';
    }

    // remember, we don't want to hold those server data in memory,
    // clone everything in it!
    this._characters = data.characters.slice();
    this._episodes = data.episodes.slice();
    this._generatedAt = Number(data.generatedAt);
    this._races = data.races.slice();
    this._skills = data.skills.slice();
    this._traits = data.traits.slice();
    this._version = Number(data.version);
    this.loaded = true;

    this._crew.load(data.crew, this);
    this._missions.load(data.missions, this);
    this._missions.loadCrew(this._crew.all);

    return this;
  }
}
