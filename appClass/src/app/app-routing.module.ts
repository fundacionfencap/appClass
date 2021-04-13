import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { IndexblogsComponent } from './blogs/indexblogs/indexblogs.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AllcoursesComponent } from './courses/allcourses/allcourses.component';
import { BeaninstructorComponent } from './courses/beaninstructor/beaninstructor.component';
import { InstructorsComponent } from './courses/instructors/instructors.component';
import { SinglecoursesComponent } from './courses/singlecourses/singlecourses.component';
import { SingleinstructorsComponent } from './courses/singleinstructors/singleinstructors.component';
import { AlleventsComponent } from './events/allevents/allevents.component';
import { SingleeventsComponent } from './events/singleevents/singleevents.component';
import { FaqComponent } from './faq/faq.component';

import { IndexComponent } from './home/index/index.component';
import { TermsandconditionsComponent } from './termsandconditions/termsandconditions.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'home', component: IndexComponent },
  { path: 'courses/all', component: AllcoursesComponent },
  { path: 'courses/single', component: SinglecoursesComponent },
  { path: 'courses/instructors', component: InstructorsComponent },
  { path: 'courses/singleinstructors', component: SingleinstructorsComponent },
  { path: 'courses/beaninstructor', component: BeaninstructorComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'blogs/index', component: IndexblogsComponent },
  { path: 'contactus', component: ContactusComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'termsandconditions', component: TermsandconditionsComponent },
  { path: 'events/all', component: AlleventsComponent },
  { path: 'events/single', component: SingleeventsComponent },
  { path: 'home', component: IndexComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
