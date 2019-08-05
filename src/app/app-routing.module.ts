import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';
import { CourseContentPageComponent } from './course-content-page/course-content-page.component';
import { AddCoursesPageComponent } from './add-courses-page/add-courses-page.component';
import { LectureDetailsPageComponent } from './lecture-details-page/lecture-details-page.component';
import { NotesPageComponent } from './notes-page/notes-page.component';
import { CourseAssignmentPageComponent } from './course-assignment-page/course-assignment-page.component';

const routes: Routes = [
  { path: '', component:MainPageComponent },
  { path: 'Registration', component:RegistrationFormComponent },
  { path: 'SignIn', component: SignUpComponent },
  { path: 'Courses', component: CourseContentPageComponent },
  { path: 'AddNewCourse', component: AddCoursesPageComponent },
  { path: 'LectureDetails', component: LectureDetailsPageComponent },
  { path: 'Notes', component: NotesPageComponent },
  { path: 'Assignments', component: CourseAssignmentPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  MainPageComponent,
  RegistrationFormComponent,
  SignUpComponent,
  CourseContentPageComponent,
  AddCoursesPageComponent,
  LectureDetailsPageComponent,
  NotesPageComponent,
  CourseAssignmentPageComponent
]
