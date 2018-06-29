import { Component, OnInit } from '@angular/core';
import { IntroductionService } from './introduction.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {
  private introductionTabs: {id: number, name: string}[] = [];

  constructor(private introductionTabsService: IntroductionService, 
              private router: Router,
              private route: ActivatedRoute) { 
 
  }

  ngOnInit() {
    this.introductionTabs = this.introductionTabsService.getintroductionTabs();
   // this.router.navigate(['id'], {relativeTo: this.route});
  }

    onReload() {
    // this.router.navigate(['introductionTabs'], {relativeTo: this.route});
  }

}
