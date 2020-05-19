import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Persons } from '../Model/persons';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const personsDB
     = [
      { id: 11, firstName: 'Achille', name: 'Dr Nice', age: 47, path: 'achille2.jpg', cin:  7777, job:  'patron'  },
      { id: 12, firstName: 'Gabriella', name: 'CoupdeF', age: 27, path: 'gabriella2.jpg', cin:  1111, job:  'patissiere'  },
      { id: 13, firstName: 'kalinka', name: 'Dr Nice', age: 50, path: '', cin:  8888, job:  'Commission'  },
      { id: 14, firstName: 'Bernadette', name: 'Mbelu', age: 52, path: '', cin:  2222, job:  'Admin'  },
      { id: 15, firstName: 'Anita', name: 'Younger', age: 46, path: '', cin:  3333, job:  'Admin Assist'  },
      { id: 16, firstName: 'Sophie', name: 'Kabedi', age: 47, path: '', cin:  4444, job:  'Banqiere'  },
      { id: 17, firstName: 'Marcel', name: 'van houtte', age: 93, path: '', cin:  9999, job:  'Engineer'  },
    ];
    return {personsDB};
  }



  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(persons: Persons[]): number {
    return persons.length > 0 ? Math.max(...persons.map(person => person.id)) + 1 : 11;
  }
}