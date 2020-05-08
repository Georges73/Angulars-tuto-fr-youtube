import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.scss']
})
export class FilsComponent implements OnInit {

@Input() filsProperty;  // input est necessaire sinon filsProperty ne sera pas visible hors de ce componenet

  constructor() { }

  ngOnInit() {
    console.log('fils ici ' + this.filsProperty);
  }

}
