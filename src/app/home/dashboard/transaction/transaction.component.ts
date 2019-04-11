import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../../general.service';
import { SharedService } from '../../../shared.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import {ExcelService} from '../../../excel.service';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import * as moment from 'moment';
import { trigger, state , transition, animate, style } from '@angular/animations';


@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
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
export class TransactionComponent implements OnInit {
  // data1 = new MatTableDataSource();
  visible = false;
  opened = false;
  ranges: any = {
    'Today': [moment().startOf('day'), moment().endOf('day')],
    'Yesterday': [moment().startOf('day').subtract(1, 'days'), moment().endOf('day').subtract(1, 'days')],
    'Last 7 Days': [moment().subtract(6, 'days'), moment()],
    'Last 30 Days': [moment().subtract(29, 'days'), moment()],
    'This Month': [moment().startOf('month'), moment().endOf('month')],
    'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
    'Last 3 Month': [ moment().subtract(3, 'month'), moment()],
    'YTD': [ moment().subtract(12, 'month'), moment()]
  };
  selected: any;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  datepickerConfig: Partial<BsDatepickerConfig>;
  typeValue: any  = null;
  userlst: any = null;
  transtype: any = null;
  waltype: any = null;
  status: any = null;
  daterange: any = null;
  transDetails: any = {};
  transActionList = new MatTableDataSource();
  clientList: any = [];
  transactionType: any = [];
  walletType: any = [];
  statusList: any = [];
  tableData: any = [];
  totalItem: any = [];
  NoDataFound: Boolean =  false;
  isHidden: Boolean =  false;
  cilentId: any = null;
  enddate: any = null;
  startdate: any = null;
  transstatus: any = null;
  waltId: any = null;
  waltType: any = null;
  transactiontype: any = [];
  displayedColumns: any[] = [];
  fusanguser: Boolean = false;
  walletUserLlist: any = [];
  listType: any = '';
  columns: string[] = [ 'clientName', 'fromWalletName', 'toWalletName', 'type', 'netAmount', 'walletType', 'createdDate', 'status'];
  newColumns: any[] = [
    {
      'name': 'Client Name',
      'value': 'clientName'
    },
    {
      'name': 'From Wallet Name',
      'value': 'fromWalletName'
    },
    {
      'name': 'To Wallet Name',
      'value': 'toWalletName'
    },
    {
      'name': 'Transaction Type',
      'value': 'type'
    },
    {
      'name': 'BTC',
      'value': 'netAmount'
    },
    {
      'name': 'USD',
      'value': 'netUsd'
    },
    {
      'name': 'Wallet Type',
      'value': 'walletType'
    },
    {
      'name': 'Created Date',
      'value': 'createdDate'
    },
    {
      'name': 'Status',
      'value': 'transactionStatus'
    }
  ];
  userColumns: any[] = [
    {
      'name': 'User Name',
      'value': 'firstName'
    },
    {
      'name': 'From Wallet Name',
      'value': 'fromWalletName'
    },
    {
      'name': 'To Wallet Name',
      'value': 'toWalletName'
    },
    {
      'name': 'Transaction Type',
      'value': 'type'
    },
    {
      'name': 'BTC',
      'value': 'netAmount'
    },
    {
      'name': 'USD',
      'value': 'netUsd'
    },
    {
      'name': 'Wallet Type',
      'value': 'walletType'
    },
    {
      'name': 'Created Date',
      'value': 'createdDate'
    },
    {
      'name': 'Status',
      'value': 'transactionStatus'
    }
  ];
  activeColums: any = [];
  pageIndex: any = 0;
  currentPage: any = 0;

  modalRef: BsModalRef;
  closedsts: any = [];
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: false
  };
  showtransactiondetails: any = {};
  USDAmount: any = '';
  usdDetails: any = [];
  oneUsdvalue: any = '';
  InitiatedBy: Boolean = false;
  disableInsight: Boolean = false;
  roles: any;
  role: string;
  superAdmin: boolean;
  typeOfUser: Boolean = true;
  obj: any = {};
  userId: any = null;
  objArray: string[];
  // tslint:disable-next-line:max-line-length
  object: { 'clientId': any; 'endDate': any; 'startDate': any; 'status': any; 'transactionType': any; 'walletId': any; 'walletType': any; 'userId': any; 'timeZone': any};
  constructor(private router: Router, private gs: GeneralService, private ss: SharedService, private modalService: BsModalService,
     private excelService: ExcelService) {
    const res = JSON.parse(sessionStorage.getItem('firstLogin'));
    console.log(res);
    if  (res != null) {
      this.roles = res['roles'];
      if ((this.roles.indexOf('USER_ADMIN') >= 0 )) {
        this.role = 'superUser';
        this.cilentId = res.clientId;
        console.log(this.cilentId);
      // tslint:disable-next-line:max-line-length
      } else if ((this.roles.indexOf('USER') >= 0 ) ) {
        this.role = 'User';
      // tslint:disable-next-line:max-line-length
      } else if (this.roles.indexOf('ADMIN_VERIFIER') >= 0 || this.roles.indexOf('ADMIN_CHECKER') >= 0 || this.roles.indexOf('ADMIN_APPROVER') >= 0 ) {
        this.role = 'Admin';
      // tslint:disable-next-line:max-line-length
      } else {
        this.role = 'Fusang User';
        this.cilentId = null;
      }

      if ((this.roles.indexOf('SUPER_ADMIN') >= 0 ) ) {
          this.superAdmin = true;
          this.cilentId = null;
      }
      console.log(this.role);
    if (res['typeOfUser'] === 'User') {
      this.typeOfUser = false;
    }
  }
   }
   currentState = 'initial';
   clickOption() {
    this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
   }

  ngOnInit() {
    if (this.role ===  'Fusang User' || this.superAdmin === true || this.role === 'Admin') {
      this.newColumns.forEach(element => {
        this.displayedColumns.push(element.value);
        console.log(this.displayedColumns);
      });
    } else if (this.role ===  'superUser') {
      this.userColumns.forEach(element => {
        this.displayedColumns.push(element.value);
        console.log(this.displayedColumns);
      });
    }
    this.getTransactionlist();
    this.getClientName();
    this.gs.getBitCoin('https://blockchain.info/ticker')
      .subscribe(
        res => {
          this.usdDetails = res;
          this.oneUsdvalue = (this.usdDetails.USD.last).toFixed(4);
        },
        e => {
        },
        () => {
        }
      );
      this.getWalletUserList();
  }

  SelectClient(val) {
    if (val !== 'null') {
      this.cilentId = val;
    } else {
      this.cilentId = null;
    }
   if (this.startdate === null) {
       this.selected = null;
   }
    this.getTransactionlist();
  }
  Selecttranction(trns) {
    if (trns !== 'null') {
      this.transtype = trns;
    } else {
      this.transtype = null;
    }
  }
  Selectwallettype(type) {
    console.log(type);
    // this.waltType = type;
    if (type !== 'null') {
      this.waltType = type;
    } else {
      this.waltType = null;
    }
  }
  statusChange(stats) {
    console.log(stats);
    // this.transstatus = stats;
    if (stats !== 'null') {
      this.transstatus = stats;
    } else {
      this.transstatus = null;
    }
  }
  SelectClientuser(usr) {
    // this.userId = usr;
    if (usr !== 'null') {
      this.userId = usr;
    } else {
      this.userId = null;
    }
    if (this.startdate === null) {
      this.selected = null;
  }
   this.getTransactionlist();
  }
  Selectdatarange (date) {
    console.log(date);
    if (date[0] === null) {
      this.ss.ToasterMessage('Please select start date');
      document.getElementById('modalButton1').click();
    } else if (date[1] === null) {
      this.ss.ToasterMessage('Please select end date');
      document.getElementById('modalButton1').click();
    } else if (date[0] === null && date[1] === null) {
      this.ss.ToasterMessage('Please select start and end date');
      document.getElementById('modalButton1').click();
    } else if (date[0] !== null && date[1] !== null) {
      const date1 = new Date(date[0]);
      console.log(date1);
      date1.setHours(0, 0, 0, 0);
      const date2 = new Date(date[1]);
      date2.setHours(23, 59, 59, 999);
      this.startdate = date1.getTime();
      this.enddate = date2.getTime();
      date[0] = null;
      date[1] =  null;
      this.startdate =  this.startdate;
      this.enddate =  this.enddate;
    }
  }
  SelectdatarangePick(selected) {
       if (selected.startDate !== null && selected.endDate !== null) {
          this.startdate = new Date(selected.startDate);
          this.enddate =  new Date(selected.endDate);
       } else {
          this.startdate = null;
          this.enddate =  null;
          this.selected = null;
       }
  }
  applyFilter() {
    console.log(this.startdate);
    console.log(this.enddate);
    this.getTransactionlist();
  }
  getTransactionlist() {
    const url = 'wallet/transaction/list';
    if (this.role ===  'Fusang User' || this.superAdmin === true || this.role === 'Admin' ) {
      this.obj = {
        'clientId': this.cilentId,
        'endDate': this.enddate,
        'page': this.pageIndex,
        'size': 20,
        'startDate': this.startdate,
        'status': this.transstatus,
        'transactionType': this.transtype,
        'walletId': this.waltId,
        'walletType': this.waltType
      };
      this.fusanguser = true;
    } else if (this.role ===  'superUser') {
    this.obj = {
      'clientId': this.cilentId,
      'endDate': this.enddate,
      'page': this.pageIndex,
      'size': 20,
      'startDate': this.startdate,
      'status': this.transstatus,
      'transactionType': this.transtype,
      'walletId': this.waltId,
      'walletType': this.waltType,
      'userId': this.userId
    };
    this.fusanguser = false;
  }
    this.gs.generalServiceInfo(url, 'post', this.obj)
            .subscribe (
              res => {
                this.tableData = [];
                this.transDetails = {};
                // this.transActionList = [];
                this.activeColums = [];
                const response: any = res.status;
                if (response === 'success') {
                  sessionStorage.setItem('totalLength', res['data'].total);
                  this.totalItem = res['data'].totalItems;
                  if (res['data'].totalItems === 0 || res['data'].totalItems === '') {
                    this.NoDataFound = true;
                    this.isHidden =  true;
                     // This condition is to check when- onloading nodatafound flag should be set to true.
                    //  if (this.filterSearching ===  true) {
                    //   this.NoDataFound = false;
                    // }
                  } else {
                    this.NoDataFound = false;
                    this.isHidden =  false;
                  this.transDetails = res['data'];
                  this.transactionType = this.transDetails.transactionType;
                  this.walletType = this.transDetails.typeOfWallet;
                  this.statusList = this.transDetails.status;
                  this.transActionList = new MatTableDataSource(this.transDetails.transactionList);
                  this.transActionList.sort = this.sort;
                  console.log(this.transActionList);
                  if (this.fusanguser === true) {
                    this.activeColums = this.newColumns;
                    this.listType = 'clients';
                  } else if (this.fusanguser === false) {
                    this.listType = 'users';
                    this.activeColums = this.userColumns;
                  }
                }
                }
              }
            );
  }
  getClientName() {
    const url = 'client/getClientNameList';
    this.gs.generalServiceInfo(url, 'post', '')
      .subscribe(
        res => {
          this.clientList = res['data'];
          console.log(this.clientList);
        },
        e => {
          // if (e.status === 403) {
          //   this.router.navigate(['']);
          //   this.ss.ToasterMessage('Your Session has Expired');
          //   document.getElementById('modalButton1').click();
          //   sessionStorage.removeItem('firstLogin');
          //   sessionStorage.removeItem('useremailid');
          //   sessionStorage.removeItem('accessToken');
          // }
        },
        () => {
        }
      );
  }
  cleareFilter() {
    // this.typeValue  = null;
    // this.userlst = null;
  this.transtype = null;
  this.waltype = null;
  this.status = null;
  this.daterange = null;
  this.enddate = null;
  this.startdate = null;
  this.transstatus = null;
  this.waltId = null;
  this.waltType = null;
  this.selected = null;
  this.pageIndex = 0;
  this.currentPage = 0;
  console.log();
  // if (this.fusanguser === true) {
  //   this.cilentId = null;
  // } else if (this.fusanguser === false) {
  //   this.cilentId = this.cilentId;
  //    this.userId = null;
  // }
  this.getTransactionlist();
  }
  // showTransactionDetails(element) {
  //   console.log(element);
  // }
  public pageChanged(event: any): void {
    this.pageIndex = event.page - 1;
    this.getTransactionlist();
  }
  public showTransactionDetails(element, template: TemplateRef<any>) {
    this.closedsts = [];
    // this.modalRef = this.modalService.show(template);
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'transactionDetails modal-lg'}, this.config)
    );
    this.showtransactiondetails = element;
    console.log(this.showtransactiondetails);
    this.USDAmount = (this.usdDetails.USD.last * this.showtransactiondetails.amount).toFixed(4);
    if (this.showtransactiondetails.signatory != null) {
    this.showtransactiondetails.signatory.forEach(elem => {
      if (elem.ticketStatus === 'Close') {
        this.closedsts.push(elem);
        console.log(this.closedsts.length);
      }
      if (elem.emailId === this.showtransactiondetails.emailId) {
          this.InitiatedBy = true;
      }
    });
  }
    console.log(this.USDAmount);
    if (element.transactionStatus.toLowerCase() !== 'completed' || element.transactionId === null) {
      this.disableInsight = true;
    } else {
      this.disableInsight = false;
    }

  }
  closeTransaction() {
    this.InitiatedBy = false;
    this.modalRef.hide();
  }
  exporttoExcel(): void {
    //  let newTempSDate;
    //   let newTempEDate;
    let newSDate;
      let newEDate;
    if (this.startdate != null && this.enddate != null) {
      newSDate = moment.utc(this.startdate).format();
      newEDate = moment.utc(this.enddate).format();
      // tslint:disable-next-line:max-line-length
      // newSDate = newTempSDate.getDate() + '/' + (newTempSDate.getMonth() + 1) + '/' + newTempSDate.getFullYear() + '' + newTempSDate.getHours() + ':' + newTempSDate.getMinutes() + ':' +  newTempSDate.getSeconds();
      // tslint:disable-next-line:max-line-length
      // newEDate = newTempEDate.getDate() + '/' + (newTempEDate.getMonth() + 1) + '/' + newTempEDate.getFullYear() + '' + newTempEDate.getHours() + ':' + newTempEDate.getMinutes() + ':' +  newTempEDate.getSeconds();
    } else {
      newSDate = null;
      newEDate = null;
    }
    this.object = {
      'clientId': this.cilentId,
      'endDate': newEDate,
      'startDate': newSDate,
      'status': this.transstatus,
      'transactionType': this.transtype,
      'walletId': this.waltId,
      'walletType': this.waltType,
      'userId': this.userId,
      'timeZone': Intl.DateTimeFormat().resolvedOptions().timeZone
    };
     this.objArray = Object.keys(this.object);
    console.log('arry :', this.objArray);
    let  url = 'https://vault-staging-api.fusang.co/api/excel/download';
    let count = 0;
      for (let i = 0; i < this.objArray.length; i++) {
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
  getWalletUserList() {
    const obj = {
       'id': this.cilentId
    };
    const url = 'user/getUserListForClient';
    this.gs.generalServiceInfo(url, 'post', obj)
                     .subscribe(
                       res => {
                        this.walletUserLlist = res['data'];
                       },
                       e => {
                       },
                       () => {
                       }
                     );
  }
  openNav() {
    this.opened = ! this.opened;
   // this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }
    closeNav() {
    this.opened = false;
    // this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
  }

}
