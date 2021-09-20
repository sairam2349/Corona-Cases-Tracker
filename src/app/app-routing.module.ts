import { NewsComponent } from './components/news/news.component';
import { SelfassessmentComponent } from './components/selfassessment/selfassessment.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CountriesComponent } from './components/countries/countries.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SymptomsComponent } from './components/symptoms/symptoms.component';


const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'countries', component: CountriesComponent},
  { path: 'symptoms', component: SymptomsComponent},
  { path: 'news', component: NewsComponent},
  { path: 'selfassessment', component: SelfassessmentComponent},
  { path: 'aboutus', component: AboutusComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
