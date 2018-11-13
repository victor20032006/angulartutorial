import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee.model';
import { EMPLOYEES } from './employee.data';


@Component({
	selector: 'app-list-employees',
	templateUrl: './list-employees.component.html',
	styleUrls: ['./list-employees.component.css']
})
export class ListEmployeesComponent implements OnInit {

	employees: Employee[] = EMPLOYEES;

	constructor() { }

	ngOnInit() {
		// this.employees = EMPLOYEES;
	}

}
