import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { IntroductionService } from '../introduction.service';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

  constructor(
              private route: ActivatedRoute,
              private router: Router
  ) { 
              
  }

  ngOnInit() {
  }

}
