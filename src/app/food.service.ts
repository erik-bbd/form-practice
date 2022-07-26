import { Injectable } from '@angular/core';
import { Food } from './food';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  foods: Food[] = [
    {id: 0, name: "Lasagne", price:50},
    {id: 1, name:"Burger", price:46}
  ]

  constructor() { }

  get(): Observable<Food[]>{
    const foods = of(this.foods);
    return foods
  }

  set(foods: Food[]): void {
    this.foods = foods
  }

  add(food: Food): void {
    food.id = Math.max(...this.foods.map(o => o.id)) + 1
    this.foods.push(food)
  }

  update(food: Food): void {
    let updateItem = this.foods.find((obj) => {
      return obj.id === food.id
    });
    if(updateItem){
      this.foods[this.foods.indexOf(updateItem, 0)] = food;
    } else {
      this.add(food);
    }
  }

  delete(food: Food): void {
    let deleteItem = this.foods.find((obj) => {
      return obj.id === food.id
    });
    if (deleteItem) {
      this.foods.splice(this.foods.indexOf(deleteItem, 0), 1)
    }
  }
}
