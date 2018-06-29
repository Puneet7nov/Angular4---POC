import { Component, OnInit } from '@angular/core';
import { ReferenceDocService } from './reference-doc.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reference-doc',
  templateUrl: './reference-doc.component.html',
  providers: [ReferenceDocService],
  styleUrls: ['./reference-doc.component.css']
})
export class ReferenceDocComponent implements OnInit {

  private referenceDocTabs: {id: number, name: string}[] = [];

  constructor(private referenceDocTabsService: ReferenceDocService, 
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.referenceDocTabs = this.referenceDocTabsService.getReferenceDocTabs();
  }


}
