import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hw-info',
  templateUrl: './hw-info.component.html',
  styleUrls: ['./hw-info.component.css']
})
export class HwInfoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

BackFn() {
  this.router.navigate(['../analysisRecommendation/Server Performance']);
}
}
