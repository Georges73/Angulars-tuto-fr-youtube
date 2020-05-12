import { Injectable } from '@angular/core';
import { Persons } from './Model/persons';

@Injectable({
  providedIn: 'root'
})
export class HireService {

  private persons : Persons[];

  constructor() {

    this.persons = [];
   }

   getHiredPerson(): Persons[]{

    return this.persons;
   }

   hirePerson(person: Persons): void{
     const index = this.persons.indexOf(person);
     if (index < 0){
     this.persons.push(person);
    } else { alert(person.name +  'est deja selectionnee');
  }
   }

   unhirePerson(person: Persons): void{
    const index = this.persons.indexOf(person);
    if (index >= 0){
    this.persons.splice(index ); // , deleteCount:1);
   }
  }


}
