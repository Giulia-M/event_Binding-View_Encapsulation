import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  interval: any;
  @Output() intervalEmi = new EventEmitter<number>();
  lastNumber = 0;
  constructor() {}

  ngOnInit(): void {}

  listenStart(): void {
    this.interval = setInterval(() => {
      this.intervalEmi.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  listenStop() {
    clearInterval(this.interval);
  }
}
