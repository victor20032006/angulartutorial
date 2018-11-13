import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker/public_api';
import { DEPARTMENTS } from './department.data';
import { Employee } from '../models/employee.model';


@Component({
	selector: 'app-create-employee',
	templateUrl: './create-employee.component.html',
	styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

	previewPhoto= false;
	datePickerConfig: Partial<BsDatepickerConfig>;
	employee: Employee = {
		id: null,
		name: null,
		gender: null,
		email: null,
		phoneNumber: null,
		contactPreference:null,
		dateOfBirth: null,
		department: null,
		isActive: null,
		photoPath: null
	};
	departments: Department[] = DEPARTMENTS;
	//gender = 'male';
	// isActive = 'true';
	constructor() { }

	ngOnInit() {
		this.datePickerConfig = Object.assign({},
		{
			containerClass: 'theme-dark-blue',
			dateInputFormat: 'DD-MMM-YYYY'
		});
	}

	saveEmployee(new_employee: Employee): void {
		console.log(new_employee);
		//new_employee.reset();

	}

	togglePhotoPreview(){
		this.previewPhoto=!this.previewPhoto;
	}
}
