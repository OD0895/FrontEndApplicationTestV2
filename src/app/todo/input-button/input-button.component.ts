import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.css']
})
export class InputButtonComponent implements OnInit {
  values = 'Hello World';
  @Output() submit: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }

  submitValue(newTitle: string) {
    this.submit.emit(newTitle);
  }

}
