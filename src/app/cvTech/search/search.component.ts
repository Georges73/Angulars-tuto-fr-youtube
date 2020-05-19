import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Persons } from 'src/app/Model/persons';
import { CvService } from 'src/app/cv.service';
import { Subject, Observable, fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchResult: Persons[];
    chaine = '';
     clicks = fromEvent(document, 'click');
     

  constructor(
    private cvService: CvService,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.searchResult = [];
  }

  search() {
    // const name = this.chaine;
    this.cvService.findByName(this.chaine).subscribe((pers) => {
      this.searchResult = pers;
    });
  }

  selectPerson(person: Persons) {
    const route = ['cv', person.id];
    this.router.navigate(route);
    this.searchResult = [];
    this.chaine = '';  }
}
