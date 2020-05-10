import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-style',
  templateUrl: './style.component.html',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {

 @Input() color = 'white';
 @Input() bgColor = 'red';
fSize = '25px';
 

  constructor() { }

  ngOnInit(): void {
  }

  changeSize(fSize){
    this.fSize = fSize + 'px';

  }

}
