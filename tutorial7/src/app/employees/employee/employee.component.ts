import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private _employeeService: EmployeeService, private _toastr: ToastrService) { }

  ngOnInit() {
	  
	  this.resetForm();
  }

	onSubmit(employeeForm: NgForm){
		this._employeeService.insertEmployee(employeeForm.value);
		this.resetForm(employeeForm);
		this._toastr.success('Submitted Successfully', 'Employee Register');
	}

	resetForm(employeeForm?: NgForm){
		if (employeeForm != null)
		{
			employeeForm.reset();
			this._employeeService.selectedEmployee = {
				$key: null,
				name: '',
				position: '',
				office: '',
				salary: 0,
			};
		}
	}
}
