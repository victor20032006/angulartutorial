export interface IEmployees
{
	id: number;
	name: string;
	age: number;
	username: string;
	email: string;
	[address: number]:
		{
			street: number;
			suite: string;
			city: any;
			zipcode: string;
			[geo: number]:
			{
				lat: any;
				lng: any
			};
		};

}
