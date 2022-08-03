import { Component, Input, OnInit } from '@angular/core';
import { Food } from '../../food';
import { FoodService } from '../../food.service';
import { MatButton } from '@angular/material/button';
import { MatRipple } from '@angular/material/core';

@Component({
  selector: 'app-food-container',
  templateUrl: './food-container.component.html',
  styleUrls: ['./food-container.component.scss']
})
export class FoodContainerComponent implements OnInit {

  foods?: Food[]
  selected?: any
  editing: Boolean = false

  constructor(private foodService: FoodService) {
   this.loadFoods();
  }

  loadFoods(){
    this.foodService.getFoods().subscribe((foods:Food[]) => this.foods = foods);
  }
  
  ngOnInit(): void {

  }

  onSelectHandler(food: Food): void {
    this.selected = food
    this.editing = true
  }

  onSubmitHandler(food: Food): void {
    this.foodService.newFood(food)
      .subscribe(() => {
        this.loadFoods()
        this.editing = false
        this.selected = null
      })

  }

  onDeleteHandler(food: Food): void {
    this.foodService.deleteFood(food)
    .subscribe(()=>{
      this.loadFoods();
      this.editing = false
      this.selected = null
    })
    
  }

}
