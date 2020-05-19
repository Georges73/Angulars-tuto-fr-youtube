import { Component, OnInit, Input } from '@angular/core';
import { CvService } from 'src/app/cv.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Persons } from 'src/app/Model/persons';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  @Input() personne: Persons;

  constructor(
    private cvservice: CvService,
    private router: Router,
    private activatedRout: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit() {
    console.log('detail compo');
    this.activatedRout.params.subscribe((params) => {
      this.cvservice.getPersonById(params.id).subscribe((personne) => {
        this.personne = personne;
      });
    });
  }


  goBack(): void {
    this.location.back();
  }

  deletePersonne() {

    this.cvservice.deletePersonne(this.personne.id).subscribe((personne) => this.goBack());
  }

 // updatePersonne(id: number){this.cvservice.updatePersonne(id).subscribe();  }

  save(): void {
    this.cvservice.updatePersonne(this.personne)
      .subscribe(() => this.goBack());
  }
}
