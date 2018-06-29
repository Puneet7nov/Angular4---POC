import { Component, OnInit } from '@angular/core';
import { CommonTextService } from '../app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private commonText: {customer_name: string, cust_location: string, monitor_date: string}[] = [];

  constructor(private commonTextService: CommonTextService) { }

  ngOnInit() {
    this.commonText = this.commonTextService.getCustName();
  }

}
