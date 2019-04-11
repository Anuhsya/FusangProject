import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../general.service';
import { SharedService } from '../../../shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-genarate-report',
  templateUrl: './genarate-report.component.html',
  styleUrls: ['./genarate-report.component.css'],
})
export class GenarateReportComponent implements OnInit {
  disableGenarateBtn: any = true;
  showReport: any = false;
  clientList: any = [];
  customerName = 0;
  Month = 0;
  Year = 0;
  mainData: any = {};
  data: any = {};
  displayedColumns: string[] = ['transactionId', 'user', 'dateTime', 'amount' , 'serviceCharge'];
  displayedColumnsTitle = [
    {
       'Name': 'Transaction Id',
       'Value': 'transactionId'
    },
    {
        'Name': 'Username',
        'Value': 'user'
    },
    {
      'Name': 'Time',
      'Value': 'dateTime'
    },
    {
      'Name': 'Amount',
      'Value': 'amount'
    },
    {
      'Name': 'Fusang Fee',
      'Value': 'serviceCharge'
    }

  ];
  MonthLIst: any = [];
  yearList: any = [];
  constructor(private gs: GeneralService, private ss: SharedService, private router: Router) { }

  ngOnInit() {
    this.getClientName();
    this.genarateYear();
    // this.data =  this.mainData.data;
    this.MonthLIst = [
      {
        'abbreviation': 'Jan',
        'name': 'January',
        'code': '01'
      },
      {
        'abbreviation': 'Feb',
        'name': 'February',
        'code': '02'
      },
      {
        'abbreviation': 'Mar',
        'name': 'March',
        'code': '03'
      },
      {
        'abbreviation': 'Apr',
        'name': 'April',
        'code': '04'
      },
      {
        'abbreviation': 'May',
        'name': 'May',
        'code': '05'
      },
      {
        'abbreviation': 'Jun',
        'name': 'June',
        'code': '06'
      },
      {
        'abbreviation': 'Jul',
        'name': 'July',
        'code': '07'
      },
      {
        'abbreviation': 'Aug',
        'name': 'August',
        'code': '08'
      },
      {
        'abbreviation': 'Sep',
        'name': 'September',
        'code': '09'
      },
      {
        'abbreviation': 'Oct',
        'name': 'October',
        'code': '10'
      },
      {
        'abbreviation': 'Nov',
        'name': 'November',
        'code': '11'
      },
      {
        'abbreviation': 'Dec',
        'name': 'December',
         'code': '12'
      }
    ];
    // this.yearList = [
    //    '2010', '2011', '2013', '2014' , '2015' , '2016' , '2017' , '2018'
    // ];
  }

  getClientName() {
    const url = 'client/getClientNameList';
    this.gs.generalServiceInfo(url, 'post', '')
      .subscribe(
        res => {
          this.clientList = res['data'];
        },
        e => {
          if (e.status === 403) {
            this.router.navigate(['']);
            // this.ss.ToasterMessage('Your Session has Expired');
            // document.getElementById('modalButton1').click();
            sessionStorage.removeItem('firstLogin');
            sessionStorage.removeItem('useremailid');
            sessionStorage.removeItem('accessToken');
          } else if (e.status === 502) {
            this.ss.ToasterMessage('System has encountered some technical problem. Please try again.');
            document.getElementById('modalButton1').click();
          }
        },
        () => {
        }
      );
  }
  generateReport() {
    // this.router.navigate(['/fusang/Report/InvoiceReport']);
    const data = {
      'clientId': this.customerName,
      'monthYear': this.Year + '-' + this.Month
    };
    console.log(data);
    const url = 'report/billing';
    this.gs.generalServiceInfo(url, 'post', data)
      .subscribe(
        res => {
          this.data = res['data'];
          console.log(this.data);
          this.showReport = true;
         },
        e => {
          if (e.status === 403) {
            this.router.navigate(['']);
            // this.ss.ToasterMessage('Your Session has Expired');
            // document.getElementById('modalButton1').click();
            sessionStorage.removeItem('firstLogin');
            sessionStorage.removeItem('useremailid');
            sessionStorage.removeItem('accessToken');
          } else if (e.status === 502) {
            this.ss.ToasterMessage('System has encountered some technical problem. Please try again.');
            document.getElementById('modalButton1').click();
          }
        },
        () => {
        }
      );
  }
  download() {
    const windowWidth = document.getElementById('htmlform').offsetWidth - (((document.getElementById('htmlform').offsetWidth) / 4) - 20);
    const windowHeight = document.getElementById('htmlform').offsetHeight;
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'px',
      format: [1000 , windowWidth]
    });
    const options = {
        pagesplit: true,
        margin: {
          top: 50,
          bottom: 50,
          useFor: 'page'
        }
    };
    pdf.addHTML(document.getElementById('htmlform'), 0, 0, options, () => {
        pdf.save(this.data.clientDetails.clientName + '_' + this.Month + '-' + this.Year + '' + '_billing.pdf');
    });
  }
  chageFilter() {
      if (this.customerName !== 0 && this.Year !== 0 && this.Month !== 0) {
        this.disableGenarateBtn = false;
      }
  }
  download1() {
    // const doc = new jsPDF();
    // doc.addHTML(document.getElementById('htmlform'), function() {
    //    doc.save('report.pdf');
    // });
      const data = document.getElementById('htmlform');
      html2canvas(data).then(canvas => {
      // Few necessary setting options
      const windowHeight = document.getElementById('htmlform').offsetHeight;
      const imgWidth = 208;
      const pageHeight = windowHeight;
      const imgHeight = canvas.height * imgWidth / canvas.width;
      const heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      const position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, 600);
      pdf.save(this.data.clientDetails.clientName + '_' + this.Month + '-' + this.Year + '' + '_billing.pdf'); // Generated PDF
      });
  }
  genarateYear() {
      let primaryYear = 2018;
      this.yearList.push(primaryYear);
      const currentDate = new Date();
      const currentYear = currentDate.getFullYear();
      const getdiffyear = currentYear - primaryYear;
      if (getdiffyear !== 0) {
         for (let i = 0 ; i < getdiffyear ; i++) {
            primaryYear = primaryYear + 1;
            this.yearList.push(primaryYear);
         }
      }
  }
}
