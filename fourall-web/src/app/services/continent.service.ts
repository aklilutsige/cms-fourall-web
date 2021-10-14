import { map } from 'rxjs/operators';
import { Continent, IContinent } from '../models/continent';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContinentService {
  private baseUrl = 'http://localhost:8080/cms-et/';

  constructor(private httpClient: HttpClient) {}
  /**
   *
   * @returns All Continents List
   */
  getAllContinents(): Observable<Continent[]> {
    return this.httpClient
      .get<IContinent[]>(this.baseUrl + 'continents')
      .pipe(map((response) => response));
  }

  /**
   *
   * @param continentId
   * @returns continent Object(name, image, description)
   */
  getOneContinentById(continentId: number): Observable<Continent> {
    return this.httpClient
      .get<IContinent>(this.baseUrl + 'continents/' + continentId)
      .pipe(map((response) => response));
  }

  /**
   *
   * @param newContinent Inserted new continent
   */
  addNewContinent(newContinent: Continent) {
    this.httpClient.post(this.baseUrl +'continent/',newContinent)
    .subscribe((response) => {
      console.log(response);
    });
  }

  /**
   *
   * @param updateContinent update by continent by Id
   */
  updateExistedContinentById(updateContinent:Continent){
    this.httpClient.put(this.baseUrl+'/continents/'+updateContinent.continentId, updateContinent)
    .subscribe((response) => {
      console.log(response);
    });
  }

  /**
   *
   * @param continentId Deleted by continent Id
   */
  deleteExistedContinentById(continentId:number){
    this.httpClient.delete(this.baseUrl + 'continents/'+ continentId)
    .subscribe((response=> {
      console.log(response);
    }));
  }

}
