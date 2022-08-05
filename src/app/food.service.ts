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
  
  newFood(food: Food): Observable<any> {
    return this.http.post<Food>('http://localhost:8080/food', food)
  }

  getFoods(): Observable<Food[]> {
    return this.http.get<Food[]>('http://localhost:8080/food')
  }

  updateFood(food: Food): Observable<any> {
    return this.http.patch<Food>('http://localhost:8080/food', food)
  }


  deleteFood(food: Food): Observable<any> {
    return this.http.delete<Food>(`http://localhost:8080/food/${food.id}`)
  }

  publish(food: Food): Observable<any> {
    console.log(food)
    const publishItem = this.find(food)
    if (publishItem) {
      return this.updateFood(food)
    } else {
      return this.newFood(food)
    }
  }

  find(food: Food){
    let findItem = this.foods.find((obj) => {
      return obj.id === food.id
    });
    return findItem
  }
}


