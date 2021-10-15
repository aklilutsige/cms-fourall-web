import { Injectable } from '@angular/core';
import { Country, ICountry } from '../models/country';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrlApi: string = 'http://localhost:8080/cms-et/';

  constructor(private httpClient: HttpClient) {}
  /**
   *
   * @returns Get all countries lists
   */
  getAllCountries(): Observable<Country[]> {
    return this.httpClient
      .get<ICountry[]>(this.baseUrlApi + 'countries')
      .pipe(map((response) => response));
  }

  /**
   *
   * @param countryId
   * @returns country Object
   */
  getOneCountrie(countryId: number): Observable<ICountry> {
    return this.httpClient
      .get<ICountry>(this.baseUrlApi + 'countries/' + countryId)
      .pipe(map((response) => response));
  }
  /**
   *
   * @param newCountry Object
   */
  addNewCountry(newCountry: ICountry) {
    this.httpClient
      .post(this.baseUrlApi + 'country', newCountry)
      .subscribe((response) => {
        console.log('Post :' + response);
      });
  }

  /**
   *
   * @param updateCountry
   */
  updateExistedCountryById(updateCountry: ICountry) {
    this.httpClient
      .put(this.baseUrlApi + 'countries/' + updateCountry.continentId, updateCountry)
      .subscribe((response) => {
        console.log('Put ' + response);
      });
  }

 /**
  *
  * @param countryId
  */
  deleteExistedCountryById(countryId: number) {
    this.httpClient
      .delete(this.baseUrlApi + 'countries/' + countryId)
      .subscribe((response => {
        console.log(response);
      }));
  }
}
