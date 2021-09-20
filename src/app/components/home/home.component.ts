import { GlobalDataSummary } from './../../models/globaldata';
import { DataserviceService } from './../../services/dataservice.service';
import { Component, OnInit, ChangeDetectorRef, Input } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ram = " hi ram";
  tDate: Date;
  totalConfirmed = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  totalActive = 0;
  globalData: GlobalDataSummary[] ;
  pieChart : GoogleChartInterface = {
    chartType : 'PieChart'
  }
  columnChart : GoogleChartInterface = {
    chartType : 'ColumnChart'
  }
  constructor(private dataService: DataserviceService) { }

  initChart(){
    let datatable = [];
    datatable.push(["Country","Cases"])
    this.globalData.forEach(cs => {
        if(cs.confirmed > 10000)
          datatable.push([
          cs.country, cs.confirmed
       ])
    })
    
    console.log(datatable);

    this.pieChart = {
      chartType : 'PieChart',
      dataTable : datatable,
      options: {
        height: 350,
        width: 650
      },
    }

    this.columnChart = {
      chartType : 'ColumnChart',
      dataTable : datatable,
      options: {
        height: 350,
        width: 650
      },
    }
  }

  ngOnInit() {
    
    this.dataService.getGlobalData()
    .subscribe(
      {
        next: (result)=>{
          console.log(result);
          this.globalData = result;
          console.log("Global Data",this.globalData);
          result.forEach(cs=>{
            if(!Number.isNaN(cs.confirmed)){
              this.totalConfirmed +=cs.confirmed
              this.totalDeaths +=cs.deaths
              this.totalRecovered +=cs.recovered
              this.totalActive +=cs.active
            }
          })
          this.initChart();
        }
      }
    )
  }

  
}
