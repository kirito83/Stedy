import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { throwError } from 'rxjs';
import { Router } from "@angular/router";

@Injectable({
	providedIn: 'root'
})

export class FormulaireService {
	sites: [{name:string, value: string}];
	test_choice: boolean;
	test_del_success_alert: boolean;
  	test_del_danger_alert: boolean;
	test_add_success_alert: boolean;
  	test_add_danger_alert: boolean;

	constructor(private http: HttpClient,
				private router: Router) {
		this.test_choice = false;
		this.test_del_success_alert = false;
		this.test_del_danger_alert = false;
		this.test_add_success_alert = false;
		this.test_add_danger_alert = false;
	  	this.sites = [
	  		{name: "Le Monde", value: "https://www.lemonde.fr/rss/une.xml"}
	  	];
	}

	addRssFeed (name: string, url: string): boolean {
		const feedObject = {
			name: '',
			value: ''
		};
		const requestOptions: Object = {
			observe: "body",
			responseType: "text",
			mode: "cors"
		};
		var result = false;

		this.http
			.get<any>(url, requestOptions)
			.pipe(catchError(error => {
				return throwError(error);
			}))
			.subscribe(data => {
				this.test_add_success_alert = true;
				feedObject.name = name;
				feedObject.value = url;
				this.sites.push(feedObject);
				this.router.navigate(['/affichage']);
				result = true
			});

		return result;
	};

	delRssFeed (value: string): boolean {
		if (value != 'https://www.lemonde.fr/rss/une.xml' && value != '') {
			for (let site of this.sites) {
				if (site.value == value) {
					const index = this.sites.indexOf(site, 0);
					
					if (index > -1) {
						this.sites.splice(index, 1);
					}
					break;
				}
			}
			return true;
		}
		else {
			return false;
		}
	}
}