import { Component, OnInit, Input } from '@angular/core';
import { Persons } from 'src/app/Model/persons';
import { HireService } from 'src/app/hire.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.scss']
})
export class DetailCvComponent implements OnInit {

  @Input() person: Persons;

  constructor(private hireService: HireService, private router: Router) { }

  ngOnInit(): void {
  }

  hireperson(){

    this.hireService.hirePerson(this.person);

  }

  moreInfo(){
    const link = ['cv', this.person.id];
    this.router.navigate(link);
  }
}
