import { Component, OnInit } from '@angular/core';
import { Persons } from 'src/app/Model/persons';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-cv',
  templateUrl: './add-cv.component.html',
  styleUrls: ['./add-cv.component.scss'],
})
export class AddCVComponent implements OnInit {
  // formulare: Persons;
  constructor() {}

  ngOnInit(): void {}

  add(form: NgForm) {
    console.log( form.value);
    // console.log( form.value);
  }

  onSubmit(f: NgForm) {
    console.log(f.value); // { first: '', last: '' }
    console.log(f.valid); // false
  }
}
