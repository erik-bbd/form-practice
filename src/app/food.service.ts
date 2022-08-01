import { Injectable } from '@angular/core';
import { Food } from './food';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FoodService {


  foods: Food[] = [];

  constructor(private http: HttpClient) { 
    this.readFoods()
  }

  foodsObserver(): Observable<Food[]>{
    const foods = of(this.foods);
    return foods
  }
  
  createFood(food: Food): void {
    this.http.post<Food>('http://localhost:8080/foods', food).subscribe(result => {
      console.log(result)
    })
  }

  readFoods(): void {
    this.http.get<Food[]>('http://localhost:8080/foods').subscribe(result => {
      result.map(food => this.foods.push(food));
    })
  }

  updateFoods(): void {

  }


  deleteFood(food: Food): void {

  }

  setAll(foods: Food[]): void {
    this.foods = foods
  }

  add(food: Food): void {

    food.id = Math.max(...this.foods.map(food => food.id)) + 1;
    this.foods.push(food)
    this.createFood(food)
    // console.log(JSON.stringify(food))
    // this.http.post<Food>('http://localhost:8080/foods', JSON.stringify(food), {headers: {'Content-Type': 'application/json'}})
    // console.log("posting.....")
  }

  update(food: Food, updateFood: Food): void{
    this.foods[this.foods.indexOf(updateFood, 0)] = food
  }

  publish(food: Food): void {
    console.log(food)
    const publishItem = this.find(food)
    publishItem ?  this.update(food, publishItem) : this.add(food);
  }

  delete(food: Food): void {
    const deleteItem = this.find(food)
    if (deleteItem) {
      this.foods.splice(this.foods.indexOf(deleteItem, 0), 1)
    }
  }

  find(food: Food){
    let findItem = this.foods.find((obj) => {
      return obj.id === food.id
    });
    return findItem
  }
}


