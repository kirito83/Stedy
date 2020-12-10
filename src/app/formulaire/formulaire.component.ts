import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormulaireService } from "../services/formulaire.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})

export class FormulaireComponent {
	test_add_danger_alert: boolean;

	constructor (private formulaireService: FormulaireService,
				 private router: Router) {
		this.test_add_danger_alert = this.formulaireService.test_add_danger_alert;
	}

	OnSubmit(form: NgForm) {
		const name = form.value['name'];
		const url = form.value['url'];
		const test_buff = this.formulaireService.addRssFeed(name, url);
		
		if (test_buff == true) { }
		else {
			this.test_add_danger_alert = true;
		}
	} 

}