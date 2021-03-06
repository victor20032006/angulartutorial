import { Employee } from "../models/employee.model";

export const EMPLOYEES: Employee[] = [
    {
      "id": 1,
      "name": "Mary",
      "gender": "Female",
      "contactPreference": "Phone",
      "phoneNumber": 2345978640,
      "dateOfBirth": "1979/11/20",
      "department": "2",
      "isActive": true,
      "photoPath": "assets/images/mary.png"
    },
    {
      "id": 2,
      "name": "John",
      "gender": "Male",
      "contactPreference": "Phone",
      "phoneNumber": 5432978640,
      "dateOfBirth": "1976/3/25",
      "department": "3",
      "isActive": false,
      "photoPath": "assets/images/john.png"
    },
    {
      "id": 3,
      "name": "Mark",
      "gender": "Male",
      "contactPreference": "Phone",
      "phoneNumber": 34345,
      "email": "",
      "dateOfBirth": "2018-07-01T08:20:34.000Z",
      "department": "3",
      "isActive": true,
      "photoPath": "assets/images/mark.png"
    }
	// }
  ];