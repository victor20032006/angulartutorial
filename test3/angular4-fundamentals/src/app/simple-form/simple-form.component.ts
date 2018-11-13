import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
  <div>
  <input #myInput type="text">
  <button (click)="onClick(myInput.value)">点击</button>
 </div>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  onClick(value) {
    console.log(value);
  }
  ngOnInit() {
  }

}
