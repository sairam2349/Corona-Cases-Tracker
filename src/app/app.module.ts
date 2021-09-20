import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HttpClientModule} from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardCardComponent } from './components/dashboard-card/dashboard-card.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { SymptomsComponent } from './components/symptoms/symptoms.component';
import { SelfassessmentComponent } from './components/selfassessment/selfassessment.component';
import { NewsComponent } from './components/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    DashboardCardComponent,
    AboutusComponent,
    SymptomsComponent,
    SelfassessmentComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    BrowserAnimationsModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
