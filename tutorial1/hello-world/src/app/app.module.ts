import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CoursesComponent } from './courses.compoent';
//import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeService } from './employee.service';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { RouterModule } from '@angular/router';
//import { DepartmentListComponent } from './department-list/department-list.component';

@NgModule({
  declarations: [
	AppComponent,
	//CourseComponent,
	ContactFormComponent,
	EmployeeListComponent,
	EmployeeDetailComponent,
	routingComponents,
	PageNotFoundComponent,
	DepartmentDetailComponent,
	DepartmentOverviewComponent,
	DepartmentContactComponent,
	

	
  ],
  imports: [			// components
	BrowserModule,
	AppRoutingModule,
	FormsModule,                          // <========== Add this line!
	ReactiveFormsModule,
	//CourseComponent,
	HttpClientModule,
	

  ],
  providers: [	// services
	CoursesService,
	EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
