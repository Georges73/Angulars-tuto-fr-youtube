import { Injectable } from '@angular/core';
import { Persons } from './Model/persons';

@Injectable({
  providedIn: 'root'
})
export class CvService {
  private persons: Persons [];

  constructor() {

    this.persons = [
      new Persons (1,  'gabriella', 'Coupdecoeur', 28, 'gabriella2.jpg',  7777,  'patissiere' ),
      new Persons (2,  'Achille', 'vanhoutte', 47, 'achille2.jpg',  2222,  'chomeur' ),
      new Persons (3,  'test', 'test', 57, '',  1111,  'test' )
                 ];

   }

   getPersons(): Persons[]{

    return this.persons;

   }

   getPersonById(id: number): Persons{
 const p = this.persons.find(per => {
   // tslint:disable-next-line:triple-equals
   return per.id == id; });
 
 return p;
   }

}
