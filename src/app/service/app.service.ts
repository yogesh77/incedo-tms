import { Inject, Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";


@Injectable()

export class userService {
	constructor(private http: HttpClient){

	}

	API_End_Point = "http://localhost/LMS/index.php/api/Dummy_Controller/users";

	accessApi(){
		// const url = " ";
		// const header = new Headers(
		// {
		// 	'Content-Type' : 'application/json',
		// 	'authorization': ''
		// })
		return this.http.get(this.API_End_Point)
		
		
	}

	
}