import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Food } from './food';
import { MatButtonModule } from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider';
import { MatCommonModule } from '@angular/material/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'form-practice';
}
