import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AClassComponent } from './MyComponents/aclass/aclass.component';
import { ClassesComponent } from './MyComponents/classes/classes.component';
import { CoursesComponent } from './MyComponents/courses/courses.component';
import { DefaultNotSelectedComponent } from './MyComponents/default-not-selected/default-not-selected.component';
import { FavouritesComponent } from './MyComponents/favourites/favourites.component';
import { FilterCoursesComponent } from './MyComponents/filter-courses/filter-courses.component';
import { HomeComponentComponent } from './MyComponents/home-component/home-component.component';
import { InsightsComponent } from './MyComponents/insights/insights.component';
import { InviStudentComponent } from './MyComponents/invi-student/invi-student.component';
import { InvitationsComponent } from './MyComponents/invitations/invitations.component';
import { LoginComponentComponent } from './MyComponents/login-component/login-component.component';
import { MainBodyComponent } from './MyComponents/main-body/main-body.component';
import { SettingsComponent } from './MyComponents/settings/settings.component';
import { SignupComponentComponent } from './MyComponents/signup-component/signup-component.component';
import { StudentComponentComponent } from './MyComponents/student-component/student-component.component';
import { StudentHomeComponent } from './MyComponents/student-home/student-home.component';
import { TutorClassesComponent } from './MyComponents/tutor-classes/tutor-classes.component';
import { TutorHomeComponent } from './MyComponents/tutor-home/tutor-home.component';
import { TutorStudentsComponent } from './MyComponents/tutor-students/tutor-students.component';

const routes: Routes = [
  {path: '' , component: LoginComponentComponent},
  {path: 'signup' , component: SignupComponentComponent},
  {path: 'h' , component: HomeComponentComponent , children: [
    {path: '',component: MainBodyComponent},
    {path: 's',component: StudentHomeComponent, children: [
      {path: '' , component: DefaultNotSelectedComponent},
      {path: 'classes' , component: TutorClassesComponent},
      {path: 'courses', component: CoursesComponent},
      {path: 'results' , component : FilterCoursesComponent},
      {path: 'insights' , component : InsightsComponent},
      {path: 'invi', component: InviStudentComponent},
      {path: 'favs', component: FavouritesComponent},
      {path: ':id',component : AClassComponent}
    ]},
    {path: 't',component: TutorHomeComponent , children: [
      {path: '' , component: DefaultNotSelectedComponent},
      {path: 'classes' , component: TutorClassesComponent},
      {path: 'stu', component: TutorStudentsComponent},
      {path: 'insights', component: InsightsComponent},
      {path: 'invi', component: InvitationsComponent},
      {path: ':id',component : AClassComponent}
    ]}
  ]},
  {path: 'settings',component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
