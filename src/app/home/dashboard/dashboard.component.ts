import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  userName = '';
  role: any = Number;
  constructor() {
    const res = JSON.parse(sessionStorage.getItem('firstLogin'));
    if (res !== null) {
    this.userName = res['firstName'];
    // this.userName = 'Mahesha'
    this.role = res['typeOfUser'];
  }
  }

  ngOnInit() {
  }

}
