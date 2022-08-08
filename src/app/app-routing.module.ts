import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { FoodContainerComponent } from './components/food-container/food-container.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path: '', component: FoodContainerComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
