import { Component, OnInit } from '@angular/core';
import { ExecSummaryService } from './executive-summary.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-executive-summary',
  templateUrl: './executive-summary.component.html',
  styleUrls: ['./executive-summary.component.css']
})
export class ExecutiveSummaryComponent implements OnInit {

  private execSummTabs: {id: number, name: string}[] = [];

  constructor(private execSummTabsService: ExecSummaryService, 
              private router: Router,
              private route: ActivatedRoute ) { }

  ngOnInit() {
    this.execSummTabs = this.execSummTabsService.getExecSummTabs();
  }

}
