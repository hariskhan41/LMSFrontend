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
import { UploadAssignmentComponent } from './upload-assignment/upload-assignment.component';
import { AllClassesPageComponent } from './all-classes-page/all-classes-page.component';
import { AddClassComponent } from './add-class/add-class.component';
import { AllCoursePageComponent } from './all-course-page/all-course-page.component';
import { UploadNotesComponent } from './upload-notes/upload-notes.component';
import { CourseDashboardComponent } from './course-dashboard/course-dashboard.component';
import { StudentsDetailsComponent } from './students-details/students-details.component';
import { AddTeacherPageComponent } from './add-teacher-page/add-teacher-page.component';
import { LectureCommandsComponent } from './lecture-commands/lecture-commands.component';
import { EditClassPageComponent } from './edit-class-page/edit-class-page.component';

const routes: Routes = [
  { path: '', component:MainPageComponent },
  { path: 'Registration', component:RegistrationFormComponent },
  { path: 'SignIn', component: SignUpComponent },
  { path: 'CourseContent', component: CourseContentPageComponent },
  { path: 'AddNewCourse', component: AddCoursesPageComponent },
  { path: 'LectureDetails', component: LectureDetailsPageComponent },
  { path: 'Notes', component: NotesPageComponent },
  { path: 'Assignments', component: CourseAssignmentPageComponent },
  { path: 'AddAssignment', component: UploadAssignmentComponent },
  { path: 'Classes', component: AllClassesPageComponent },
  { path: 'AddClass', component: AddClassComponent },
  { path: 'AllCourses', component: AllCoursePageComponent },
  { path: 'AddNotes', component: UploadNotesComponent },
  { path: 'CourseDetails', component: CourseDashboardComponent },
  { path: 'StudentsDetails', component: StudentsDetailsComponent },
  { path: 'AddTeacher', component: AddTeacherPageComponent },
  { path: 'LectureCommands', component: LectureCommandsComponent },
  { path: 'Classes/Edit', component: EditClassPageComponent }
  
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
  CourseAssignmentPageComponent,
  UploadAssignmentComponent,
  AllClassesPageComponent,
  AddClassComponent,
  AllCoursePageComponent,
  UploadNotesComponent,
  CourseDashboardComponent,
  StudentsDetailsComponent,
  AddTeacherPageComponent,
  LectureCommandsComponent,
  EditClassPageComponent
]
