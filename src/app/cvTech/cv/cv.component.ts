import { Component, OnInit } from '@angular/core';
import { Persons } from '../../Model/persons';
import { PremierService } from 'src/app/premier.service';
import { CvService } from 'src/app/cv.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  persons: Persons[];
  selectedPerson: Persons;
  constructor(private cvService: CvService) { }

  ngOnInit() {

    this.persons = this.cvService.getPersons();
   
  }

  selectPerson(person){
this.selectedPerson = person;

  }

}
