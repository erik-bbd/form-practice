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
    this.http.get<Food[]>('http://localhost:8080/foods').subscribe(result => {
      result.map(food => this.foods.push(food));
    })
  }

  getAll(): Observable<Food[]>{
    const foods = of(this.foods);
    return foods
  }

  setAll(foods: Food[]): void {
    this.foods = foods
  }

  add(food: Food): void {
    console.log(JSON.stringify(food))
    this.http.post<Food>('http://localhost:8080/foods', JSON.stringify(food), {headers: {'Content-Type': 'application/json'}})
    console.log("posting.....")
  }

  update(food: Food, updateFood: Food): void{
    this.foods[this.foods.indexOf(updateFood, 0)] = food
  }

  publish(food: Food): void {
    const publishItem = this.find(food)
    publishItem ?  this.update(food, publishItem): this.add(food);
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
