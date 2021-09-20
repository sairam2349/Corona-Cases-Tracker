import { DataserviceService } from './../../services/dataservice.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  private data: any;
  public articles: any = [];

  constructor(private dataService: DataserviceService) { }

  ngOnInit() {
    this.dataService.getNewsData().subscribe(newsData =>{
      this.data = !!newsData.articles ? newsData.articles : [];
      this.articles = this.data.splice(0,3);
      console.log(this.articles);
    })
    
  }

}
