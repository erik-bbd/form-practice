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
    this.getFoods()
  }

  foodsObserver(): Observable<Food[]>{
    const foods = of(this.foods);
    return foods
  }
  
  newFood(food: Food): Observable<any> {
    return this.http.post<Food>('http://localhost:8080/foods', food)
  }

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>('http://localhost:8080/foods');
  }

  updateFood(food: Food): Observable<any> {
    return this.http.patch<Food>('http://localhost:8080/foods', food)
  }


  deleteFood(food: Food): Observable<any> {
    return this.http.delete<Food>(`http://localhost:8080/foods/${food.id}`)
  }

  update(food: Food, updateFood: Food): void{
    this.foods[this.foods.indexOf(updateFood, 0)] = food
  }

  publish(food: Food): void {
    console.log(food)
    const publishItem = this.find(food)
    publishItem ?  this.update(food, publishItem) : this.newFood(food);
    this.getFoods();
  }

  delete(food: Food): void {
    this.deleteFood(food)
  }

  find(food: Food){
    let findItem = this.foods.find((obj) => {
      return obj.id === food.id
    });
    return findItem
  }
}


