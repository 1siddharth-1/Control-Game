import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  lastNumber = 0;
  timerStatus: any;

  constructor(){
  }

  ngOnInit(){}

  startTimer(){
    this.timerStatus = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000);
  }

  stopTimer(){
    clearInterval(this.timerStatus);
  }
}
