import { Component } from '@angular/core';
import { log } from 'console';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gameControl';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedNumber: number){
    if(firedNumber%2 != 0){
      this.oddNumbers.push(firedNumber);
    }
    else{
      this.evenNumbers.push(firedNumber);
    }
  }
}
