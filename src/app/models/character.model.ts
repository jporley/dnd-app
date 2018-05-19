/**
 * Representation of a person and the character the person plays.
 */
export class Character {

  private _name: string;
  private _realName: string;
  private _shortBio: string;
  private _fullBio: string;

  /**
   * Getter name
   * @return {string}
   */
	public get name(): string {
		return this._name;
	}

  /**
   * Getter realName
   * @return {string}
   */
	public get realName(): string {
		return this._realName;
	}

  /**
   * Getter shortBio
   * @return {string}
   */
	public get shortBio(): string {
		return this._shortBio;
	}

  /**
   * Getter fullBio
   * @return {string}
   */
	public get fullBio(): string {
		return this._fullBio;
	}

  /**
   * Setter name
   * @param {string} value
   */
	public set name(value: string) {
		this._name = value;
	}

  /**
   * Setter realName
   * @param {string} value
   */
	public set realName(value: string) {
		this._realName = value;
	}

  /**
   * Setter shortBio
   * @param {string} value
   */
	public set shortBio(value: string) {
		this._shortBio = value;
	}

  /**
   * Setter fullBio
   * @param {string} value
   */
	public set fullBio(value: string) {
		this._fullBio = value;
	}

  constructor(name?: string, realName?: string, shortBio?: string, fullBio?: string) {
    if (name) {
      this.name = name;
      this.realName = realName;
      this.shortBio = shortBio;
      this.fullBio = fullBio;
    }
  }
}
