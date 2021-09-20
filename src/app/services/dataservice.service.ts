import { GlobalDataSummary } from './../models/globaldata';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  private globalDataUrl = 'https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_daily_reports/';
  constructor(private http: HttpClient) { }

  getGlobalData(){
    return this.http.get(this.getExactDataUrl(), {responseType: 'text'}).pipe(
      map(result=>{
        let data: GlobalDataSummary[] = [];
        let raw = {}
        let rows = result.split('\n');
        rows.splice(0, 1);
        // console.log(rows);
        rows.forEach(row=>{
          let cols = row.split(/,(?=\S)/)    
          
          let cs = {
            country: cols[3],
            // province: cols[2],
            confirmed: +cols[7],
            deaths: +cols[8],
            recovered: +cols[9],
            active: +cols[10],
          };
          let temp: GlobalDataSummary = raw[cs.country];
          if(temp){
            temp.active = cs.active + temp.active;
            temp.confirmed = cs.confirmed + temp.confirmed;
            temp.deaths = cs.deaths + temp.deaths;
            temp.recovered = cs.recovered + temp.recovered;
            raw[cs.country] = temp;
          }else{
            raw[cs.country] = cs;
          }          
        })
        return <GlobalDataSummary[]>Object.values(raw);
      })
    )
  }

  getExactDataUrl(){
    const date = new Date();
    date.setDate(date.getDate() - 2 );
    const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric',  day: '2-digit', month: '2-digit' }) 
    const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat .formatToParts(date )
    // this.globalDataUrl = `${this.globalDataUrl}${month}-${day}-${year}.csv`;
    return `${this.globalDataUrl}${month}-${day}-${year}.csv`;
  }


  getNewsData(): Observable<any> {
    return this.http.get('https://newsapi.org/v2/everything?q=corona&apiKey=e85bad6fd9ae461e92dcdf6719d61036')
  }
}
