import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PremierService {

  logger(data) {
    console.log(data);
  }

  constructor() { }



}
