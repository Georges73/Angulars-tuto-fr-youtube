import { Component, OnInit } from '@angular/core';
import { CvService } from 'src/app/cv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Persons } from 'src/app/Model/persons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  personne: Persons;

  constructor(private cvservice: CvService, private router: Router, private activatedRout: ActivatedRoute) { }

  ngOnInit() {
this.activatedRout.params.subscribe((params) => 
{ this.personne = this.cvservice.getPersonById(params.id); });

  }

  deletePersonne(){
    
  }

}
