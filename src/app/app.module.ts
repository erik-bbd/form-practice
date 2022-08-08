import { NgModule } from '@angular/core';
import { FormGroup, FormsModule, ReactiveFormsModule, FormArray} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodFormComponent } from './components/food-form/food-form.component';
import { FoodDisplayComponent } from './components/food-display/food-display.component';
import { FoodContainerComponent } from './components/food-container/food-container.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { MatCommonModule } from '@angular/material/core';
import { MatRippleModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { DeleteComponent } from './components/delete/delete.component';
import { ZarPipe } from './pipes/zar/zar.pipe';
import { MatIconModule } from '@angular/material/icon';
import { HttpClient } from '@angular/common/http';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodFormComponent,
    FoodDisplayComponent,
    FoodContainerComponent,
    DeleteComponent,
    ZarPipe,
    LoginFormComponent,
    RegisterFormComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatRippleModule,
    MatIconModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
