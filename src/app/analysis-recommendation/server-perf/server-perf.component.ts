import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-server-perf',
  templateUrl: './server-perf.component.html',
  styleUrls: ['./server-perf.component.css']
})
export class ServerPerfComponent implements OnInit {

  private showHWtable = true;

  constructor(private router: Router) {
  }

  ngOnInit() {  
  }

ShowHideHWtable() {
  this.showHWtable = !this.showHWtable;
}

myFunction() {
  this.router.navigate(['../referenceDoc/Server List']);
}

}
