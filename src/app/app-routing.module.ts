import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CourseContentPageComponent } from './course-content-page/course-content-page.component';


const routes: Routes = [
  { path: '', component:MainPageComponent },
  { path: 'Registration', component:RegistrationFormComponent },
  { path: 'SignIn', component: SignUpComponent },
  { path: 'Courses', component: CourseContentPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [MainPageComponent, RegistrationFormComponent, SignUpComponent, CourseContentPageComponent]
