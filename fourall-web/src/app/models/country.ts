/**
 * Country class
 */
export class Country {
  countryId: number;
  countryName: string;
  capitalCity: string;
  officialLanguage: string;
  dialingCode: string;
  countryCode: string;
  countryFlag: string;
  currencyName: string;
  latitude: string;
  longitude: string;
  description: string;
  continentId: number;
/*
  constructor(countryId: number,
    countryName: string,
    capitalCity: string,
    officialLanguage: string,
    dialingCode: string,
    countryCode: string,
    countryFlag: string,
    currencyName: string,
    latitude: string,
    longitude: string,
    description: string,
    continentId: number){
      this.countryId = countryId;
      this.countryName = countryName;
      this.capitalCity = capitalCity;
      this.officialLanguage = officialLanguage;
      this.dialingCode = dialingCode;
      this.countryCode = countryCode;
      this.countryFlag = countryFlag;
      this.currencyName = currencyName;
      this.latitude = latitude;
      this.longitude = longitude;
      this.description = description;
      this.continentId = continentId;

  }*/

  public constructor(init?: Partial<Country>) {
    Object.assign(this, init);
  }
}

/**
 * Country interface
 */
export interface ICountry{
  countryId: number;
  countryName: string;
  capitalCity: string;
  officialLanguage: string;
  dialingCode: string;
  countryCode: string;
  countryFlag: string;
  currencyName: string;
  latitude: string;
  longitude: string;
  description: string;
  continentId: number;
}

