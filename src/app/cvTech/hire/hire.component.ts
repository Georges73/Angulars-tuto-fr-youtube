import { Component, OnInit } from '@angular/core';
import { Persons } from 'src/app/Model/persons';
import { HireService } from 'src/app/hire.service';

@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss']
})
export class HireComponent implements OnInit {

   persons: Persons[];

  constructor(private hireService: HireService) { }

  ngOnInit() {

    this.persons = this.hireService.getHiredPerson();
  }

}
