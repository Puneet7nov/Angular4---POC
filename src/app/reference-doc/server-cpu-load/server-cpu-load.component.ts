import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-cpu-load',
  templateUrl: './server-cpu-load.component.html',
  styleUrls: ['./server-cpu-load.component.css']
})
export class ServerCpuLoadComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

BackFn() {
  this.router.navigate(['../analysisRecommendation/Server Performance']);
}
}
