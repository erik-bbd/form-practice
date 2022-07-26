import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Food } from '../food';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.scss']
})
export class FoodFormComponent implements OnInit {

  foodForm: FormGroup<any>;
  @Input() food?: Food;
  @Output() onSubmit: EventEmitter<any> = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  constructor() {
    this.foodForm = new FormGroup({
      id: new FormControl(-1),
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      price: new FormControl('', [Validators.required, Validators.minLength(1)])
    })
  }

  ngOnInit(): void {
    if(this.food){
      this.foodForm.setValue(this.food)
    }
  }

  submit(): void {
    this.onSubmit.emit(this.foodForm.value);
    this.foodForm.reset();
  }

  delete(): void {
    this.onDelete.emit(this.foodForm.value);
    this.foodForm.reset();
  }

}
