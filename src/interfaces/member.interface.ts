/*
 *  @author  eidng8
 *  @license https://creativecommons.org/licenses/by-sa/4.0/
 *  @link    https://github.com/eidng8/stthb
 */

/**
 * Crew member data
 */
export interface IMember {
  /**
   * Index value to the {@see IServerData.character} list.
   */
  character: number;

  /**
   * The crew member name.
   */
  name: string;

  /**
   * The thumbnail URL
   */
  picture: string;

  /**
   * Index value to the {@see IServerData.races} list.
   */
  race: number;

  /**
   * List of all skills with values at maximum level and fully equipped.
   */
  skills: {[key: number]: number[]};

  /**
   * Number of stars (rarity)
   */
  stars: number;

  /**
   * List of all possessed traits.
   *
   * Index value to the {@see IServerData.traits} list.
   */
  traits: number[];
}
