import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.scss']
})
export class FoodDisplayComponent implements OnInit {

  @Input() food?: Food;
  @Output() selected: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(){
    this.selected.emit(this.food)
  }

}
