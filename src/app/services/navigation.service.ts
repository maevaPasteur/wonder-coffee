import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NavigationService {

  constructor() { }

  public gotToStep(step) {
    console.log(step + 1);
    console.log(step);
  }

  public goPrevStep(step) {
    console.log(step);
    const newStep: number = step - 1;
    if (newStep >= 0) {
        console.log(newStep);
    }
  }

  public goNextStep(step) {
      console.log(step);
      console.log(step + 1);
  }
}
