import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../food';
import { FoodService } from '../food.service';
import { MatButton} from '@angular/material/button';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss']
})
export class FoodContainerComponent implements OnInit {

  foods?: Food[];
  selected?: any;
  editing: Boolean = false;

  constructor(private foodService: FoodService) { }

  ngOnInit(): void {
    this.foodService.get()
      .subscribe(foods => this.foods = foods)
  }

  onSelect(food: Food): void {
    this.selected = food;
    this.editing = true;
  }

  onSubmit(food: Food): void {
    this.foodService.update(food);
    this.editing = false;
    this.selected = null;
  }

  onDelete(food: Food): void {
    this.foodService.delete(food)
    this.editing = false;
    this.selected = null;;
  }

}
