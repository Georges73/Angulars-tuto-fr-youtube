import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.scss']
})
export class FilsComponent implements OnInit {

@Input() filsProperty;  // input est necessaire sinon filsProperty ne sera pas visible hors de ce componenet

@Output() sendRequestToData = new EventEmitter();


  constructor() { }

  ngOnInit() {
    console.log('fils ici ' + this.filsProperty);
  }

  sendEvent(){

    this.sendRequestToData.emit(
       'Bonjour papa'
    );
  }

}
