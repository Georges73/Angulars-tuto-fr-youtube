import { Injectable } from '@angular/core';
import { Persons } from './Model/persons';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private persons: Persons[];
  private personsURL = 'api/personsDB';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

  }

  getPersons(): Observable<Persons[]> {
    return this.http.get<Persons[]>(this.personsURL);
  }

  getFakepers() {
    return this.persons;
  }

  getPersonById(id: number): Observable<any> {

    const url = `${this.personsURL}/${id}`;
    return this.http.get<Persons>(url).pipe( );
  }

  addPerson(person: Persons): Observable<any> {
    return this.http.post(this.personsURL, person);
  }

   /** DELETE: delete the hero from the server */
   deletePersonne(id: number) {

    const url = `${this.personsURL}/${id}`;

    return this.http.delete(url).pipe();
  }

  updatePersonne(pers: Persons): Observable<any> {
    console.log('update was here');
    return this.http.put(this.personsURL, pers, this.httpOptions).pipe();
  }

  /* ---------------------------------------------------------------------------------------------*/

  findByName(term: string): Observable<Persons[]>{
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Persons[]>(`${this.personsURL}/?name=${term}`).pipe(
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)),
      catchError(this.handleError<Persons[]>('searchHeroes', []))
    );
  }


  
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add(`HeroService: ${message}`);
  }
}
