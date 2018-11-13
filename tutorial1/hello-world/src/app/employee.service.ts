import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IEmployees } from './employee';
import {catchError } from 'rxjs/operators';
import { Observable, EMPTY, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

	private _url = './assets/data/employee.json';
	private _url2 ='https://jsonplaceholder.typicode.com/users';

	constructor(private _http: HttpClient) { }

	getEmployees()
	{
		return this._http.get<IEmployees[]>(this._url2).pipe(
				catchError(err => {
					return throwError(err.message || 'Server Error');
				}
			));



						//.catch(this.errorHandler);
		//   return  [
		// 	{'id': 1, 'name': 'AAA', 'age': 30},
		// 	{'id': 2, 'name': 'BBB', 'age': 130},
		// 	{'id': 3, 'name': 'CCC', 'age': 330},
		// 	{'id': 4, 'name': 'DDD', 'age': 3}
		// ];
	}

}
