import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss']
})
export class ColorComponent implements OnInit {

  myColor = 'red';
  show = false;


  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(
     params => {this.myColor = params.default;
    }
    );
  }

  processReq(message: any){

alert(message);
  }

  goToCV(){

    const link = ['cv'];
    this.router.navigate(link);

  }

}
