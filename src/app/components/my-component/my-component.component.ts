import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.scss']
})
export class MyComponentComponent implements OnInit {
  counter = 10;
  constructor() { }

  ngOnInit(): void {
  }


  increment(){
    this.counter = this.counter + 1;
  }

  decrement(){
    if (this.counter > 0) {
      this.counter = this.counter -1;
    };
  }
}
