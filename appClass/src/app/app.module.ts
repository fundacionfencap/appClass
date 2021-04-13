import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { FooterComponent } from './common/footer/footer.component';
import { BannerComponent } from './common/banner/banner.component';
import { CategoriesComponent } from './home/categories/categories.component';
import { TopcoursesComponent } from './home/topcourses/topcourses.component';
import { PeoplesaysComponent } from './home/peoplesays/peoplesays.component';
import { LatesteventsComponent } from './home/latestevents/latestevents.component';
import { PartnersComponent } from './home/partners/partners.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './home/index/index.component';
import { AllcoursesComponent } from './courses/allcourses/allcourses.component';
import { SinglecoursesComponent } from './courses/singlecourses/singlecourses.component';
import { InstructorsComponent } from './courses/instructors/instructors.component';
import { SingleinstructorsComponent } from './courses/singleinstructors/singleinstructors.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';
import { FaqComponent } from './faq/faq.component';
import { BeaninstructorComponent } from './courses/beaninstructor/beaninstructor.component';
import { AlleventsComponent } from './events/allevents/allevents.component';
import { SingleeventsComponent } from './events/singleevents/singleevents.component';
import { IndexblogsComponent } from './blogs/indexblogs/indexblogs.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    BannerComponent,
    CategoriesComponent,
    TopcoursesComponent,
    PeoplesaysComponent,
    LatesteventsComponent,
    PartnersComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    AllcoursesComponent,
    SinglecoursesComponent,
    InstructorsComponent,
    SingleinstructorsComponent,
    ContactusComponent,
    AboutusComponent,
    TermsandconditionsComponent,
    FaqComponent,
    BeaninstructorComponent,
    AlleventsComponent,
    SingleeventsComponent,
    IndexblogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
