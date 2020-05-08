import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  myColor = '';
  show = false;


  constructor() { }

  ngOnInit(): void {
  }

  changeColor(input){

console.log(input.value);
this.myColor = input.value;
input.value = '';
  }

}
