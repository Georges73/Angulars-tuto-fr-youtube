import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Persons } from 'src/app/Model/persons';

@Component({
  selector: 'app-liste-cv',
  templateUrl: './liste-cv.component.html',
  styleUrls: ['./liste-cv.component.scss']
})
export class ListeCvComponent implements OnInit {

  @Input() persons: Persons[];
  @Output() selectedPerson = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  selectPerson(selectedPerson){

    this.selectedPerson.emit(selectedPerson);

  }

}
