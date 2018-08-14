import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-details',
  templateUrl: './display-details.component.html',
  styleUrls: ['./display-details.component.css']
})
export class DisplayDetailsComponent implements OnInit {
  textIsHidden: boolean = true
  buttonClicks: number[] = []

  constructor() { }

  ngOnInit() {
  }

  displayDetailsClicked() {
    // const currentDate = new Date()
    this.textIsHidden = !this.textIsHidden
    this.buttonClicks
    .push(
      this.buttonClicks.length == 0 ? 0 : this.buttonClicks[this.buttonClicks.length - 1] + 1
    )
  }

  getColor() {
    return this.buttonClicks.length > 4 ? 'blue' : ''
  }
}
