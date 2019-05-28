import { Component, } from '@angular/core';
import { userService } from './service/app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

	cars: any;

    cols: any[];

	constructor(userservice : userService){
		userservice.accessApi()
		.subscribe(  (res) => {
			this.cars = res;

		});

		// this.carService.getCarsSmall().then(cars => this.cars = cars);

        this.cols = [
            { field: 'id', header: 'Employee Id' },
            { field: 'employee_name', header: 'Employee Name' },
            { field: 'age', header: 'Employee Age' },
            { field: 'address', header: 'Address' },
            { field: 'project', header: 'Project' },
            { field: 'company', header: 'Company' }
        ];
    }
	}	


	
  

