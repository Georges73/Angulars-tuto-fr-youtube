import { Component, OnInit } from '@angular/core';
import { Persons } from '../../Model/persons';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  persons: Persons[];
  selectedPerson: Persons;
  constructor() { }

  ngOnInit() {

    this.persons = [
      new Persons (1,  'gabriella', 'Coupdecoeur', 28, 'gabriella2.jpg',  7777,  'patissiere' ),
      new Persons (2,  'Achille', 'vanhoutte', 47, 'achille2.jpg',  2222,  'chomeur' ),
      new Persons (3,  'test', 'test', 57, '',  1111,  'test' )
                 ];
  }

  selectPerson(person){
this.selectedPerson = person;

  }

}
