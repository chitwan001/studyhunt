import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './MyComponents/header/header.component';
import { LoginComponentComponent } from './MyComponents/login-component/login-component.component';
import { SignupComponentComponent } from './MyComponents/signup-component/signup-component.component';
import { HomeComponentComponent } from './MyComponents/home-component/home-component.component';
import { MainBodyComponent } from './MyComponents/main-body/main-body.component';
import { ClassesComponent } from './MyComponents/classes/classes.component';
import { StudentHeaderComponent } from './MyComponents/student-header/student-header.component';
import { StudentHomeComponent } from './MyComponents/student-home/student-home.component';
import { StudentComponentComponent } from './MyComponents/student-component/student-component.component';
import { SettingsComponent } from './MyComponents/settings/settings.component';
import { TutorHomeComponent } from './MyComponents/tutor-home/tutor-home.component';
import { TutorClassesComponent } from './MyComponents/tutor-classes/tutor-classes.component';
import { TutorStudentsComponent } from './MyComponents/tutor-students/tutor-students.component';
import { DefaultNotSelectedComponent } from './MyComponents/default-not-selected/default-not-selected.component';
import { CoursesComponent } from './MyComponents/courses/courses.component';
import { InvitationsComponent } from './MyComponents/invitations/invitations.component';
import { FavouritesComponent } from './MyComponents/favourites/favourites.component';
import { AClassComponent } from './MyComponents/aclass/aclass.component';
import { InviStudentComponent } from './MyComponents/invi-student/invi-student.component';
import { FilterCoursesComponent } from './MyComponents/filter-courses/filter-courses.component';
import { InsightsComponent } from './MyComponents/insights/insights.component';
import { WeatherapiComponent } from './MyComponents/weatherapi/weatherapi.component';
import { SpinnerComponent } from './MyComponents/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressBarModule} from '@angular/material/progress-bar'
import { InterceptorService } from './interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    HomeComponentComponent,
    MainBodyComponent,
    ClassesComponent,
    StudentHeaderComponent,
    StudentHomeComponent,
    StudentComponentComponent,
    SettingsComponent,
    TutorHomeComponent,
    TutorClassesComponent,
    TutorStudentsComponent,
    DefaultNotSelectedComponent,
    CoursesComponent,
    InvitationsComponent,
    FavouritesComponent,
    AClassComponent,
    InviStudentComponent,
    FilterCoursesComponent,
    InsightsComponent,
    WeatherapiComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatProgressBarModule
  ],
  providers: [
    {provide : HTTP_INTERCEPTORS , useClass : InterceptorService , multi : true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
