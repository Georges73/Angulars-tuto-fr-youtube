import { Component, OnInit, Input } from '@angular/core';
import { Persons } from 'src/app/Model/persons';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.scss']
})
export class DetailCvComponent implements OnInit {

  @Input() person: Persons;

  constructor() { }

  ngOnInit(): void {
  }

}
