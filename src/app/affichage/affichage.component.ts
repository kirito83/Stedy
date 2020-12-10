import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { NewsRss } from '../news-rss';
import * as xml2js from "xml2js";
import { FormulaireService } from "../services/formulaire.service";

@Component({
  selector: 'app-affichage',
  templateUrl: './affichage.component.html',
  styleUrls: ['./affichage.component.scss']
})
export class AffichageComponent {
  RssData: NewsRss;
  sites: [{name:string, value: string}];
  test_choice: boolean;
  test_del_success_alert: boolean;
  test_del_danger_alert: boolean;
  test_add_success_alert: boolean;

  constructor(private http: HttpClient,
              private formulaireService: FormulaireService) { 
    this.test_choice = false;
    this.test_del_success_alert = this.formulaireService.test_del_success_alert;
    this.test_del_danger_alert = this.formulaireService.test_del_danger_alert;
    this.test_add_success_alert = this.formulaireService.test_add_success_alert;
  	this.sites = this.formulaireService.sites;
  };

  GetRssFeedData(value: string) {
    const requestOptions: Object = {
      observe: "body",
      responseType: "text",
      mode: "cors"
    };

    this.http
      .get<any>(value, requestOptions)
      .subscribe(data => {
        let parseString = xml2js.parseString;
        parseString(data, (err, result: NewsRss) => {
          this.RssData = result;
        });
      });

    this.test_choice = true;
    this.test_del_danger_alert = false;
    this.test_del_success_alert = false;
    this.test_add_success_alert = false;
  };

  DelRssFeedData(form: NgForm) {
    const name = form.value['selector'];
    const test_buff = this.formulaireService.delRssFeed(name);
    
    if (test_buff) {
      this.test_del_success_alert = true;
    }
    else {
      this.test_del_danger_alert = true;
    }
    this.test_choice = false;
  }
}

export interface IRssData {}
