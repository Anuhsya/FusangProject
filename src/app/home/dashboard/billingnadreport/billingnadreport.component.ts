import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-billingnadreport',
  templateUrl: './billingnadreport.component.html',
  styleUrls: ['./billingnadreport.component.css']
})
export class BillingnadreportComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    console.log('mahesh_billing');
  }

}
