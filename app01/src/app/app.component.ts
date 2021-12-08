import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app01';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalEmi(lastNum: number) {
    if (lastNum % 2 === 0) {
      this.evenNumbers.push(lastNum);
    } else {
      this.oddNumbers.push(lastNum);
    }
  }
}
