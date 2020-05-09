import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Persons } from 'src/app/Model/persons';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.scss']
})
export class ItemCvComponent implements OnInit {


  @Input() persons: Persons;
  @Output() selectedPerson = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  selectPerson(){
this.selectedPerson.emit(
  this.persons
);
  }

}
