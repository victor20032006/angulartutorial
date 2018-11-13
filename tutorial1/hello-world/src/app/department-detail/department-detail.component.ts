import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
@Component({
	selector: 'app-department-detail',
	template: `
	<h3> You selected department with Id = {{departmentId}} - {{departmentName}}</h3>
	<p>
   		<button (click)="showOverview()">Overview</button>
		<button (click)="showContact()">Contact</button>
	</p>
   <router-outlet></router-outlet>

	<p>
		<button (click)="goPrev()">Previous</button>
		<button (click)="goNext()">Next</button>
		<br/>
	</p>
	<button (click)="goBack()">Back</button>
  `,
  styles: []
})
export class DepartmentDetailComponent implements OnInit {

	public departmentId;
	public departmentName;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
	//   let id = parseInt(this.route.snapshot.paramMap.get('id'));
	//   this.departmentId = id;
	  this.route.paramMap.subscribe((params: ParamMap) => {
		const id = parseInt(params.get('id'));
		const name = params.get('name');
		this.departmentId = id;
		this.departmentName = name;
	  });
  }

  goPrev() {
	const prevId = this.departmentId - 1;
	this.router.navigate(['/departments', prevId]);
  }

  goNext() {
	const nextId = this.departmentId + 1;
	this.router.navigate(['/departments', nextId]);
  }

  goBack() {
	const selectedId = this.departmentId ? this.departmentId : null;
	// this.router.navigate(['/departments',{id: selectedId}]);
	this.router.navigate(['../', {id: selectedId}], { relativeTo: this.route});

  }

	showOverview() {
		this.router.navigate(['overview'], { relativeTo: this.route});
  }
	showContact() {
		this.router.navigate(['contact'], { relativeTo: this.route});
	}

}
