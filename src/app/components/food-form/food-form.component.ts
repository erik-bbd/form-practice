import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray, ReactiveFormsModule } from '@angular/forms';
import { Food } from '../../food';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {

  foodForm: FormGroup<any>;
  @Input() food?: Food;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.foodForm = new FormGroup({
      id: new FormControl(-1),
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      price: new FormControl('', [Validators.required, Validators.minLength(1)]),
      ingredients: new FormArray<any>([])
    })
  }

  ngOnInit(): void {
    if(this.food){
      this.foodForm.patchValue(this.food)
      this.food.ingredients.map(
        (ingredient: string) => {
          this.addIngredient(ingredient)
        }
      )}
  }

  get ingredients() {
    return this.foodForm.controls['ingredients'] as FormArray
  }

  submit(): void {
    this.onSubmit.emit(this.foodForm.value);
    this.foodForm.reset();
  }

  addIngredient(ingredient: string): void {
    const ingredientForm = new FormControl(ingredient, Validators.required);
    this.ingredients.push(ingredientForm);
  }

}
