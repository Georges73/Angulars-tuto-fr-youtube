import { Component, OnInit } from '@angular/core';
import { Persons } from 'src/app/Model/persons';
import { NgForm } from '@angular/forms';
import { CvService } from 'src/app/cv.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.scss'],
})
export class AddCVComponent implements OnInit {
  // formulare: Persons;
  errormessage = '';
  constructor(private cvService: CvService, private router: Router) {}

  ngOnInit(): void {}

  add(form: NgForm) {
    this.cvService.addPerson(form.value).subscribe((res) => { const link = ['cv']; this.router.navigate(link); },
    (error) => {
      this.errormessage = 'probleme de connection please contact your admin';
    }

    );
    console.log( form.value);

  }

  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false
  }
}
