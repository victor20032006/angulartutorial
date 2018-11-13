import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';
import { CreateEmployeeComponent } from './employees/create-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePickerComponent,BsDatepickerModule } from 'ngx-bootstrap/datepicker';

const appRoutes: Routes = [
	{ path: 'list', component: ListEmployeesComponent},
	{ path: 'create', component: CreateEmployeeComponent},
	{ path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
	declarations:
	[
		AppComponent,
		ListEmployeesComponent,
		CreateEmployeeComponent,
	],
	imports:
	[
		BrowserModule,
		AppRoutingModule,
		CommonModule,
		BsDatepickerModule.forRoot(),
		RouterModule.forRoot(appRoutes),
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
