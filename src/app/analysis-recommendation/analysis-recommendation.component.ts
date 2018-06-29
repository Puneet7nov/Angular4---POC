import { Component, OnInit } from '@angular/core';
import { AnalRecommService } from './analysis-recommendation.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-analysis-recommendation',
  templateUrl: './analysis-recommendation.component.html',
  styleUrls: ['./analysis-recommendation.component.css']
})
export class AnalysisRecommendationComponent implements OnInit {

  private analRecommTabs: {id: number, name: string}[] = [];

  constructor(private analRecommTabsService: AnalRecommService, 
              private router: Router,
              private route: ActivatedRoute) { 
              }

  ngOnInit() {
    this.analRecommTabs = this.analRecommTabsService.getAnalRecommTabs();
  }

}
