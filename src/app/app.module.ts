import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormulaireComponent } from './formulaire/formulaire.component';
import { AffichageComponent } from './affichage/affichage.component';
import { AppComponent } from './app.component';

import { FormulaireService } from "./services/formulaire.service";

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  { path: 'affichage', component: AffichageComponent },
  { path: 'formulaire', component: FormulaireComponent },
  { path: '', component: AffichageComponent }
];

@NgModule({
  declarations: [
    AffichageComponent,
    AppComponent,
    FormulaireComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    FormulaireService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
