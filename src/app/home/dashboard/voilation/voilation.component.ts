import { Component, OnInit,ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../../general.service';
import { SharedService } from '../../../shared.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import * as moment from 'moment';
import {MatTableModule} from '@angular/material/table';
import { SidebarModule } from 'ng-sidebar';
import { trigger, state , transition, animate, style } from '@angular/animations';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
@Component({
  selector: 'app-voilation',
  templateUrl: './voilation.component.html',
  styleUrls: ['./voilation.component.css'],
  // animations: [
  //   trigger('changeDivSize', [
  //     state('initial', style({
  //       width: '0',
  //     })),
  //     state('final', style({
  //       width: '342px'
  //     })),
  //     transition('initial=>final', animate('300ms')),
  //     transition('final=>initial', animate('300ms'))
  //   ]),
  // ]


  animations: [
    trigger('changeDivSize', [
      transition(
        ':enter', [
          style({transform: 'translateX(100%)'}),
          animate('300ms', style({transform: 'translateX(0)'}))
        ]),
        transition(
          ':leave', [
            style({transform: 'translateX(0)'}),
            animate('300ms', style({transform: 'translateX(100%)'}))
      ])
  ])
  ]

})
export class VoilationComponent implements OnInit {
  @ViewChild(MatSort) sort: MatSort;
  currentState = 'initial';
  displayedColumns: any[] = [];
  // columns: string[] = ['Walletname', 'PolicyVoilated', 'ActualValue', 'Voilatedvalue','Wallettype','voilateddate','User'];
  newColumns: any[] = [
    {
      'name': 'Client Name',
      'value': 'clientName'
    },
    {
      'name': 'Wallet Name',
      'value': 'fromWalletName'
    },
    {
      'name': 'Policy Violated',
      'value': 'policyType'
    },
    {
      'name': 'Expected Value',
      'value': 'expectedValue'
    },
    {
      'name': 'Violated Value',
      'value': 'actualValue'
    },
    {
      'name': 'Wallet Type',
      'value': 'walletType'
    },
    {
      'name': 'Violated Date',
      'value': 'createdDate'
    },
    {
      'name': 'User',
      'value': 'firstName'
    }
  ];

  clientId: any = null;
  clientList: any = [];
  selected: any;
  typeValue = '0';
  userValue: any = null;
  walletValue: any = null;
  policyValue: any = null;
  ranges: any = {
    'Today': [moment().startOf('day'), moment().endOf('day')],
    'Yesterday': [moment().startOf('day').subtract(1, 'days'), moment().endOf('day').subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
    'Last 3 Month': [moment().subtract(3, 'month'), moment()],
    'YTD': [moment().subtract(12, 'month'), moment()]
  };

  walletList: any;
  uList: any;
  userName: any = null;
  waltType: any;
  voilation: any = null;
  startdate = null;
  enddate = null;
  totalItem: any = [];
  pageIndex: any = 0;


  opened = false;
  waltId: any = null;
  tableData: any = [];
  NoDataFound: Boolean = false;
  isHidden: Boolean = false;
  voilationDetails: any = {};
  voilationList = new MatTableDataSource();
  walletType: any = {};
  statusList: any = {};
  walletUserLlist: any = [];
  polvoi: any = [];
  currentPage: any = 0;
  object: any;
  objArray: string[];
  walletNameList: any = [];

  constructor(private router: Router, private gs: GeneralService, private ss: SharedService) { }

  ngOnInit() {
    this.newColumns.forEach(element => {
      this.displayedColumns.push(element.value);
      console.log(this.displayedColumns);
    });

    this.getClientName();
    // this.getTableList();
    // this.getUName();
    // this.getwalletName();
    // this.getPolicyVoilation();


   this.getVoilationlist();
   this.getWalletUserList();
   this.getWalletNameList();
  }

  getClientName() {
    const url = 'client/getClientNameList';
    this.gs.generalServiceInfo(url, 'post', '')
      .subscribe(
        res => {
          this.clientList = res['data'];
          console.log(this.clientList);
        },
      );
  }

  // getUName()
  // {
  //   const url = '/assets/json/users.json';
  //   this.gs.localfileinfo(url).subscribe(
  //     res => {
  //     this.uList=res['users'];
  //      console.log(this.uList);
  //     });
  // }
  // getwalletName()
  // {
  //   const url='/assets/json/walletName.json';
  //   this.gs.localfileinfo(url).subscribe(
  //     res => {
  //     this.walletList=res['wallet'];
  //      console.log(this.walletList);
  //     });
  // }


  // getPolicyVoilation()
  // {
  //   const url='/assets/json/policyVoilation.json';
  //   this.gs.localfileinfo(url).subscribe(
  //     res => {
  //     this.voilationList=res['voilation'];
  //      console.log(this.voilationList);
  //     });
  // }

  applyFilter() {
    this.getVoilationlist();
    // console.log('------filter---------');
    // console.log('client id :',this.clientId);
    // console.log('user name :',this.userName);
    // console.log('wallet name :',this.waltType);
    // console.log('policy voilation :',this.voilation);
    // console.log('startOFdate',this.startdate);
    // console.log('endOFdate',this.enddate);
    // console.log('------filter---------');
  }
  clear() {
    this.userName = null;
    this.voilation = null;
    this.startdate = null;
    this.enddate = null;
    this.waltId = null;
    this.userValue = null;
    this.walletValue = null;
    this.policyValue = null;
    this.selected = null;
    this.pageIndex = 0;
    this.currentPage = 0;
    this.getVoilationlist();
  }
  // getTableList()
  // {
  //   const url='/assets/json/tranTable.json';
  //   this.gs.localfileinfo(url).subscribe(
  //     res => {
  //     this.transList=res['newColumns'];
  //      console.log(this.transList);
  //     });
  // }



  public pageChanged(event: any): void {
    this.pageIndex = event.page - 1;
    this.getVoilationlist();
  }

openNav() {
    this.opened = ! this.opened;
   // this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
 }
  closeNav() {
   this.opened = false;
   // this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
 }

  SelectClient(val) {
    console.log(val);
    this.userName = null;
    this.waltId = null;
    this.userValue = null;
    this.walletValue = null;
    if (val === '0') {
      this.clientId = null;
    } else {
      this.clientId = val;
    }
    if (this.startdate === null) {
        this.selected = null;
    }
    this.getVoilationlist();
    this.getWalletUserList();
    this.getWalletNameList();
  }

  SelectUsers(val) {
    // console.log('user value: ', val);
    if (val !== 'null') {
      this.userName = val;
    } else {
      this.userName = null;
    }
  }

  SelectWallet(val) {
    // console.log('wallet value: ', val);
    if (val !== 'null') {
      this.waltId = val;
    } else {
      this.waltId = null;
    }
  }

  SelectVoilation(val) {
    // console.log('voilation value: ' , val);
    if (val !==  'null') {
      this.voilation = val;
    } else {
      this.voilation = null;
    }

  }

  datesUpdated(selected) {
    if (selected.startDate !== null && selected.endDate !== null) {
      this.startdate = new Date(selected.startDate);
      this.enddate =  new Date(selected.endDate);
   } else {
      this.startdate = null;
      this.enddate =  null;
      this.selected = null;
   }
  }

  getVoilationlist() {
    const url = 'user/policy/violation/list';
    const obj = {
      'endDate': this.enddate,
      'page': this.pageIndex,
      'size': 20,
      'startDate': this.startdate,
      'policyViolated': this.voilation,
    };
    if (this.clientId !== null ) {
      obj['clientId'] = Number(this.clientId);
    } else {
      obj['clientId'] = null;
    }
    if (this.userName !== null ) {
      obj['userId'] = Number(this.userName);
    } else {
      obj['userId'] = null;
    }
    if (this.waltId !== null) {
     obj['walletId'] = Number(this.waltId);
   } else {
     obj['walletId'] = null;
   }


    this.gs.generalServiceInfo(url, 'post', obj)
            .subscribe (
              res => {
                const response: any = res.status;
                if (response === 'success') {
                  this.totalItem = res['data'].totalItems;
                  if (res['data'].totalItems === 0 || res['data'].totalItems === '') {
                    this.NoDataFound = true;
                    this.isHidden =  true;
                  }
                  this.voilationDetails = res['data'];
                  // this.voilationList = this.voilationDetails.violationList;
                  this.voilationList = new MatTableDataSource(this.voilationDetails.violationList);
                  this.voilationList.sort = this.sort;
                  this.polvoi = this.voilationDetails.policyType;
                }
              }
            );
  }

  getWalletUserList() {
    const obj = {
       'id': this.clientId
    };
    const url = 'user/getUserListForClient';
    this.gs.generalServiceInfo(url, 'post', obj)
    .subscribe(
      res => {
      this.walletUserLlist = res['data'];
      }
    );
  }

  exporttoExcel() {
    // let newTempSDate;
    // let newTempEDate;
    let newSDate;
      let newEDate;
    if (this.startdate != null && this.enddate != null) {
      newSDate = moment.utc(this.startdate).format();
      newEDate = moment.utc(this.enddate).format();
      // tslint:disable-next-line:max-line-length
      // newSDate =  (newTempSDate.getMonth() + 1) + '/' + newTempSDate.getDate() + '/' + newTempSDate.getFullYear() + ' ' + newTempSDate.getHours() + ':' + newTempSDate.getMinutes() + ':' +  newTempSDate.getSeconds();
      // tslint:disable-next-line:max-line-length
      // newEDate = (newTempEDate.getMonth() + 1) + '/' + newTempEDate.getDate() + '/' + newTempEDate.getFullYear() + ' ' + newTempEDate.getHours() + ':' + newTempEDate.getMinutes() + ':' +  newTempEDate.getSeconds();
    } else {
      newSDate = null;
      newEDate = null;
    }
      this.object = {
        'policyViolated': this.voilation,
        'walletId': this.waltId,
        'endDate': newEDate,
        'startDate': newSDate,
        'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
      };
      if (this.clientId !== null ) {
        this.object['clientId'] = Number(this.clientId);
      } else {
        this.object['clientId'] = null;
      }
      if (this.userName !== null ) {
        this.object['userId'] = Number(this.userName);
      } else {
        this.object['userId'] = null;
      }
       this.objArray = Object.keys(this.object);
      console.log('arry :', this.objArray);
      let  url = 'https://vault-staging-api.fusang.co/api/excel/violation';
      let count = 0;
      // let count1 = 0;
        for (let i = 0; i < this.objArray.length; i++) {
          // if (i === 0) {
          //   if (this.object[this.objArray[i]] !== null ) {
          //     url = url + '?' + this.objArray[i] + '=' + this.object[this.objArray[i]];
          //     count++;
          //   }
          // } else {
          //   if (count === 0) {
          //     if (this.object[this.objArray[i]] !== null ) {
          //       url = url + '?' + this.objArray[i] + '=' + this.object[this.objArray[i]];
          //       count++;
          //       count1++;
          //     }
          //   }
          //   if (this.object[this.objArray[i]] !== null && count1 !== 1) {
          //     url = url + '&' + this.objArray[i] + '=' + this.object[this.objArray[i]];
          //   }
          // }
          if (this.object[this.objArray[i]] !== null ) {
            if (count === 0) {
              url = url + '?' + this.objArray[i] + '=' + this.object[this.objArray[i]];
              count++;
            } else {
              url = url + '&' + this.objArray[i] + '=' + this.object[this.objArray[i]];
            }
          }
        }
        console.log('url : ', url);
        window.open(url, 'Download');
    }

    getWalletNameList() {
      if (this.clientId === null) {
        this.clientId = null;
      } else {
        this.clientId = Number(this.clientId);
      }
        const obj = {
          'clientId': this.clientId
        };
        const url = 'wallet/v2/getWalletNameForPolicy';
        this.gs.generalServiceInfo(url, 'post', obj)
        .subscribe(
          res => {
          this.walletNameList = res['data'];
          }
        );
 }
 copy() {
  this.ss.ToasterMessage('Copied the data');
  document.getElementById('modalButton').click();
}

}

// ?clientId=' + this.clientId +'&userId='+ this.userName +'&walletId=' + this.waltId + '&policyViolated='+ this.voilation +'&startDate='+ this.startdate + '&endDate='+ this.enddate