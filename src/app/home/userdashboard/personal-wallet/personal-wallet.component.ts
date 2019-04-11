import { Component, OnInit, OnDestroy, AfterViewInit, TemplateRef, ViewChild } from '@angular/core';
import { GeneralService } from '../../../general.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { DatePipe } from '@angular/common';
import { SharedService } from '../../../shared.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
// import * as c3 from 'c3';
import { ToastrService } from 'ngx-toastr';
import { Chart } from 'angular-highcharts';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import * as _ from 'lodash';
import { parseDate } from 'ngx-bootstrap/chronos';

@Component({
  selector: 'app-personal-wallet',
  templateUrl: './personal-wallet.component.html',
  styleUrls: ['./personal-wallet.component.css']
})
export class PersonalWalletComponent implements OnInit, OnDestroy {
  validateTimeZone: Boolean = false;
  policyAuth: string;
  pageIndex: any = 0;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  data1 = new MatTableDataSource();
  columns: any[] = [
    {
      'name': 'Wallet Name',
      'value': 'fromTowalletName'
    },
    {
      'name': 'Initiated By',
      'value': 'emailId'
    },
    {
      'name': 'Total Amount (BTC)',
      'value': 'netAmount'
    },
    {
      'name': 'Total Amount (USD)',
      'value': 'netUsd'
    },
    {
      'name': 'Type',
      'value': 'type'
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
  displayedColumns: any[] = [];
  disableSettings = true;
  focusedElement: any;
  chart: any;
  // var Highcharts = require('highcharts');
  public angularxQrCode: string = null;
  transdiv: Boolean = false;
  userdiv: Boolean = false;
  settingdiv: Boolean = false;
  auditdiv: Boolean = false;
  taskdiv: Boolean = false;
  policydiv: Boolean = false;
  policy: Boolean = true;
  compilance: Boolean = false;
  walletDetails: any = {
    walletName: '',
    ownerId: '',
    noOfUsers: '',
    noOfSignatures: '',
    coinType: '',
    balanceUsd: '',
  };
  walletid = '';
  url = '';
  transactionDetails: any = [];
  userDetails: any = [];
  auditTrailDetails: any = [];
  settingDetails: any = [];
  modalRef: BsModalRef;
  QrmodalRef: BsModalRef;
  walletpolicyRef: BsModalRef;
  whitelistrefrence: BsModalRef;
  modalRefpolicyvoilation: BsModalRef;
  itemVlue: any = {
    'username': '',
    'fromwalletAddress': '',
    'toaddress': '',
    'coin': '',
    'toWalletName': '',
    'transactionFee': 0.0 ,
  };
  walletnamedetails: any = { 'toWalletName': '' };
  tractionsstatus: any = [];
  transactionInfo: any = [];
  modalrefrence: BsModalRef;
  modalRefauth: BsModalRef;
  transactions: any = [];
  roleList: any = [];
  coinlist: any = ['BTC'];
  errorGraphDetailData: any = [];
  graphData: any = [];
  graphLabel: any = [];
  graphDataPrice: any = [];
  graphDataCurrent: any = [];
  graphOptions: any = {};
  timeinstant: any = [];
  message: any = [];

  usdDetails: any = [];
  usdInfo: any = [];
  dollerInfo: any = [];
  USDAmount: any = '';

  dataoutput: any = [];
  oneUsdvalue: any = '';
  avaragePrice: any = '';
  owner_Id: any = '';
  updateeResponse: any = [];
  tasklistinfo: any = [];
  confirmRef: BsModalRef;
  // modalrefrence: BsModalRef;
  reject: any = '';
  approve: any = '';
  transactionDetailsStatus: any = [];
  signerStatus: any = [];
  usd: any = '';
  ticketstatus: any = [];
  transactionlist: any = [];
  walletwhitelistinfo: any = [];
  walletnameinfo: any = '';
  resultsLength: any;
  showtransactiondetails: any = {};
  disableInsight = false;
  closedstsudata: any = [];
  closedsts: any = [];
  googleAuth = true;
  Yubikey = false;
  userId: any = [];
  googleCode: '';
  authmodel: any = {};
  userName: any;
  verificationCodeValid = false;
  roles: any;
  role: string;
  response: any = [];
  policylist: any = [];
  WalletAddressWhitelist: any = [];
  policyType: any = '';
  showwalletfield: Boolean = false;
  Daily: any = 'Daily';
  itemvalue: any = {};
  // policyupdate details
  usertyperesponse: any = [];
  deepStorage: any = [];
  secureStorage: any = [];
  highFrequency: any = [];
  userTypeId: any = '';
  deepStorageId: any;
  secureStorageId: any;
  highFrequencyId: any;
  accessToken: any = '';
  typeOfUser: Boolean = true;
  currWalletStatus: any;
  navigatedFrom: any;
  invaliWalletAddress: Boolean = false;
  isWalletValid: Boolean = true;
  showupdatebtn: Boolean = false;
  showexpandall: Boolean = true;
  allExpandState: Boolean = false;
  makeitedit: Boolean = true;
  makeitedit1: Boolean = true;
  samewallet: Boolean = false;
  // invaliWalletAddress: Boolean = false;
  hideTasksTab: Boolean = false;
  NoDataFound: Boolean = false;
  // timezone
  countrytimezonelist: any = [];
  countrytimezonelist1: any = [];
  getProfileInfo: any = [];
  filteredOptions: any = [];
  showindication: Boolean = false;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: false
  };
  ploicyinsightDetails: any = [];
  netfeeusd: any = '';
  fusangusd: any = '';
  totalBTC: any = '';
  networkfee: any = '';
  fusanfee: any = 0;
  totalusd: any = '';
  avilableBalaceBTC: any = '';
  avilableBalaceUSD: any = '';
  servicecharge: any = '';
  walletuserList: any = [];
  initialfslde: any = false;
  model: any = {
    'username': '',
    'role': ''
  };
  addUserNameField: Boolean =  false;
  autosearchresult: any = [];
  nofouser: any = '';
  clientId: any = '';
  secureStorageedit: any;
  deepStorageedit: any;
  highFrequencyedit: any;
  isEdit: Boolean = false;
  typeOfWalletId: any = '';
  sldeepstorageId: any = '';
  slsecurestorageId: any = '';
  slhighfrquencyId: any = '';
  policyDetails: any = [];
  erroinsignsture: any = false;
  validatedUser: Boolean = false;
  roleInf: any = [];
  moreAdmins: any = false;
  existinguser: any = false;
  // autosearchresult: any = [];
  // showPageLoading: any = false;
  errmsg: any = false;
  errinrole: any = false;
  errorUserInfo: any = false;
  // erroinsignsture: any = false;
  modalRefwallet: BsModalRef;
  modalRefwalletfreez: BsModalRef;
  userListInfo: any = [];
  noOfUsersAvail: Boolean = false;
  adduserStatus: any = true;
  networkfeedetail: any = [];
  trnsamount: any = '';
  feelist: any =  [
    {
      'name': 'high',
      'value': '0.0'
    }, {
      'name': 'medium',
      'value': '0.0'
    }, {
      'name': 'low',
      'value': '0.0'
    }
  ];
  trnsfee: any;
  updatewalletrequestobj: any = {
   'createdBy': '',
'noOfSignatures': '',
'noOfUsers': '',
'ownerId': '',
'userList': [],
'walletId': '',
  };
  walletuserupdate: Boolean = false;
  makeuseritedit: Boolean = false;
  auditTraillist: any = [];
  auditlistLength: any;
  pageIndexaudit: any = 0;
  iseditable: Boolean = true;
  autosearchresult1: any = [];
  Tempautosearchresult1: any = [];
  tempSelectValue: any = {};
  policyviolation: Boolean = false;
  workflowObjectfromadminid: any;
  transactinfeeerror: Boolean = false;
  uitofmeasureerror: any = false;
  freezewalletstatus: Boolean = false;
  unfreezewalletstatus: Boolean = false;
  endtimestamperror: Boolean = false;
  timestamperror: Boolean = false;
  starttimeerror: Boolean = false;
  endtimeerror: Boolean = false;
  InitiatedBy: Boolean = false;
  intialtedApprove: boolean;
  loggedinuserDetails: any = [];
  tempdata: any = [];
  frezeeuser: any = '';
  PartofWallet: boolean;
  current: any;
  TrasactionvalumeCap: any;
  transalimit: boolean;




  nickName: any;
  nickName1: any;
  walletArray: any = [];
  tempObject: any = {};
  keyUp: any;
  isTouched = false;
  selectedName: any;
  WalletName = [];
  InactiveLoginUser: boolean;
  nickNameOption: any = [];
  TempNickNameOption: any = [];
  showNickNameFeild: boolean;
  notRegUser: boolean;





  constructor(private _domSanitizer: DomSanitizer,
    private router: Router, private genaralservice: GeneralService, private formBuilder: FormBuilder,
    private ss: SharedService, private modalService: BsModalService, private datePipe: DatePipe, private toastr: ToastrService) {
    const response = JSON.parse(sessionStorage.getItem('walletid'));
    let logedres = JSON.parse(sessionStorage.getItem('firstLogin'));
    this.workflowObjectfromadminid = JSON.parse(sessionStorage.getItem('workflowObjectfromadmin'));
    console.log(this.workflowObjectfromadminid);
    console.log(response);
    this.walletid = response;
    const res = JSON.parse(sessionStorage.getItem('firstLogin'));
    this.loggedinuserDetails = JSON.parse(sessionStorage.getItem('firstLogin'));
    console.log(this.loggedinuserDetails.username);
    if (res !== null) {
      this.owner_Id = res['userId'];
      this.clientId = res['clientId'];
      console.log( this.clientId);
      this.roles = res['roles'];
      console.log(this.roles);
      if ((this.roles.indexOf('USER_ADMIN') >= 0)) {
        this.role = 'superUser';
        // tslint:disable-next-line:max-line-length
      } else if ((this.roles.indexOf('USER_SIGNER') >= 0)) {
        this.role = 'User';
        // tslint:disable-next-line:max-line-length
      } else if ((this.roles.indexOf('ADMIN_VERIFIER') >= 0 || this.roles.indexOf('ADMIN_CHECKER') >= 0 || this.roles.indexOf('ADMIN_APPROVER') >= 0  ) && (this.roles.indexOf('ACCOUNT_VERIFIER') >= 0 || this.roles.indexOf('ACCOUNT_CHECKER') >= 0 || this.roles.indexOf('ACCOUNT_APPROVER') >= 0)) {
        this.role = 'Account';
      // tslint:disable-next-line:max-line-length
    } else if (!(this.roles.indexOf('ADMIN_VERIFIER') >= 0 || this.roles.indexOf('ADMIN_CHECKER') >= 0 || this.roles.indexOf('ADMIN_APPROVER') >= 0  ) && (this.roles.indexOf('ACCOUNT_VERIFIER') >= 0 || this.roles.indexOf('ACCOUNT_CHECKER') >= 0 || this.roles.indexOf('ACCOUNT_APPROVER') >= 0)) {
      this.role = 'Account';
    // tslint:disable-next-line:max-line-length
    } else {
        this.role = 'Fusang User';
      }
      if ((this.roles.indexOf('COMPLIANCE_CHECKER') >= 0)) {
        this.frezeeuser = 'complianceChecker';
        // tslint:disable-next-line:max-line-length
      }
      if (res['typeOfUser'] === 'User') {
        this.typeOfUser = false;
      }
      // If the wallet user role is Viewer, then the tasks tab should not be available for the user
      if (this.roles.indexOf('USER_VIEWER') >= 0) {
        this.hideTasksTab = true;
        this.role = 'userViewer';
      } else {
        this.hideTasksTab = false;
      }
    }
    console.log(this.role);
    if (this.clientId === '' || this.clientId === undefined || this.clientId === null ) {
      this.clientId = this.workflowObjectfromadminid.clientId;
    }
    console.log( this.clientId);
    if (logedres !== null) {
      this.userId = res['userId'];
      // this.firstLoginn = res['isFirstLogin'];
      this.authmodel.secretKey = res['userSecret'];
      this.userName = res['firstName'];
      // this.imageUrl = res['profilePicUrl'];
      this.roles = res['roles'];
      // this.roles.forEach(element => {
      //   if (element.toLowerCase() === 'user') {
      //     this.role = 'Customer';
      //   } else if (element.toLowerCase() === 'admin') {
      //     this.role = 'Admin';
      //   } else {
      //     this.role = 'User';
      //   }
      // });
      // if ( this.imageUrl === null ) {
      //   this.imageUrl = './assets/images/sidebar/profile.svg';
      // }
    } else {
      // this.firstLoginn = 1;
      this.ss.firstLogin$.subscribe(res1 => logedres = res1);
    }

  }
  'data':
    {
      'ticketStatus': 'Close',
      'firstName': 'harish',
      'transactionRequestId': 1,
      'amount': '0.2',
      'transactionDetailsStatus': 'Completed',
      'toaddress': 'trywywrywtrywt'
    };
  transactionsettings = {
    mode: 'inline',
    hideSubHeader: true,
    pager: {
      display: true,
      perPage: 10,
    },
    delete: {
      confirmDelete: true
    },
    actions: false,
    columns: {
      //     profilePic: {
      //       title: '',
      //       width: '20px',
      //     filter: false,
      //     type: 'html',
      //     valuePrepareFunction: (profilePic) => {
      //       return this._domSanitizer.bypassSecurityTrustHtml(`<img src="${profilePic}" alt="Smiley face" height="32" width="32"
      //       style="border-radius: 50%">`);
      //   }
      // },
      // firstName: {
      //       title: 'Initiated By',
      //       type: 'html',
      //     },
      // id: {
      //   title: 'ID'
      // },
      // transactionId: {
      //   title: 'Transaction Id',
      // },
      toAddress: {
        // editable: false,
        title: 'To/From Address',
      },
      createdDate: {
        // editable: false,
        title: 'Created Date',
        valuePrepareFunction: (value) => {
          //   value = this.CBBdata
          return this.dateFormat(value);
        }
      },
      amount: {
        // editable: false,
        title: 'BTC'
      },


      type: {
        title: 'Type',
        type: 'html',
      },
      transactionStatus: {
        title: 'Status',
        type: 'html',
      }
    }
  };
  ngOnInit() {
    // this.WalletName = [
    //   {
    //     'name' : 'test',
    //     'value': 'test'
    //   },
    //   {
    //     'name' : 'test1',
    //     'value': 'test1'
    //   }
    // ];
    this.navigatedFrom = sessionStorage.getItem('fromNavigation');
    this.columns.forEach(element => {
      this.displayedColumns.push(element.value);
      console.log(this.displayedColumns);
    });
    this.genaralservice.getBitCoin('https://blockchain.info/ticker')
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
    this.getwalletdetails();
    // this.getTransactionDetails();
    this.getNickName();
    this.refresh();
    this.showtransaction();
    this.btcexchangerate();
    this.gettasklist();
    // this.getTransactionList();
    this.loadpolicies();
    this.getcountryTimezone();
    // this.getpolicyDetails();
    this.getnetworkfee();
    this.getaudit();
    this.getusetList();
    this.getRolelist();
    }
    getRolelist() {
      this.genaralservice.getRolelist()
        .subscribe(
          res => {
            this.roleList = res['roleList'];
            console.log(this.roleList);
          },
          e => {
          },
          () => {
          }
        );
    }
  public dateFormat(date) {
    const d = new Date(date);
    return d.toLocaleString();
  }

  public focusFunction(element) {
    this.focusedElement = element;
  }

  // tslint:disable-next-line:member-ordering
  settings = {
    mode: 'external',
    hideSubHeader: true,
    pager: {
      display: true,
      perPage: 10,
    },
    delete: {
      confirmDelete: true
    },
    actions: false,
    columns: {
      txid: {
        title: 'Transaction ID'
      },
      time: {
        title: 'Time',
        type: 'html',
        valuePrepareFunction: (value) => {
          const myDate = new Date(value * (1000));
          return value = myDate.toLocaleString();
        }
      }

    }
  };
  // tslint:disable-next-line:member-ordering
  usersettings = {
    mode: 'inline',
    hideSubHeader: true,
    pager: {
      display: false,
      perPage: 20,
    },
    delete: {
      confirmDelete: true
    },
    actions: false,
    columns: {
      profilePic: {
        title: '',
        filter: false,
        type: 'html',
        width: '20px',
        valuePrepareFunction: (profilePic) => {
          return this._domSanitizer.bypassSecurityTrustHtml(`<img src="${profilePic}" alt="Smiley face" height="32" width="32"
        style="border-radius: 50%">`);
        }
      },
      firstname: {
        title: 'Username',
        valuePrepareFunction: (value) => {
          return value;
        },
      },
      username: {
        title: 'Email ID',
      },
      role: {
        title: 'Role',
        type: 'html',
        valuePrepareFunction: (value) => {
          //   value = this.CBBdata
          if (value === 'Signer') {
            return `Signer`;
          } else if (value === 'Viewer') {
            return `Viewer`;
          }
        }
      },
      status: {
        title: 'Status',
        type: 'html',
        valuePrepareFunction: (value) => {
          //   value = this.CBBdata
          if (value === 'Completed' || value === 'Incomplete') {
            return `<img src='assets/images/dashboard/oval-4.png' > Active`;
          } else if (value === 'Invited') {
            return `<img src='assets/images/dashboard/Critical.png' > Inactive`;
          }
        }
      }
    }
  };
  // tslint:disable-next-line:member-ordering
  tasksetting = {
    mode: 'external',
    hideSubHeader: true,
    pager: {
      display: false,
      perPage: 20,
    },
    actions: false,
    columns: {
      initiatedBy: {
        title: 'Initiated By'
      },
      toAddress: {
        title: 'To Address'
      },
      netAmount: {
        title: 'Total Amount (BTC)'
      },
      netUsd: {
        title: 'USD'
      },
      ticketStatus: {
        title: 'Ticket Status',
        type: 'html',
        valuePrepareFunction: (value) => {
          //   value = this.CBBdata
          if (value === 'Open') {
            return this._domSanitizer.bypassSecurityTrustHtml
              (`<button style='border:none;border-radius:3px;background-color:#e6c10b;color:white' (click)="approved()">pending</button>`);
          } else if (value === 'Close') {
            return this._domSanitizer.bypassSecurityTrustHtml
              (`<button style="border:none;border-radius:3px;background-color:#56ac17;color:white">Approved</button>`);
          } else if (value === 'Rejected') {
            return this._domSanitizer.bypassSecurityTrustHtml
              (`<button style="border:none;border-radius:3px;background-color:#ea1c49;color:white">Rejected</button>`);
          }
        }
      },
      createdDate: {
        title: 'Time',
        type: 'html',
        valuePrepareFunction: (value) => {
          return value = this.datePipe.transform(value, 'dd-MM-yyyy HH:mm');
        }
      }
    }
  };

  // tslint:disable-next-line:member-ordering
  auditsettings = {
    mode: 'external',
    hideSubHeader: true,
    pager: {
      display: false,
      perPage: 20,
    },
    delete: {
      confirmDelete: true
    },
    actions: false,
    columns: {
      message: {
        title: 'Message'
      },
      dataTime: {
        title: 'Time',
        type: 'html',
        valuePrepareFunction: (value) => {
          return value = this.datePipe.transform(value, 'yyyy-MM-dd HH:mm:ss');
        }
      }
    }
  };


  // tslint:disable-next-line:member-ordering

  showtransaction() {
    // this.getTransactionDetails();
    this.getTransactionList();
    this.transdiv = true;
    this.userdiv = false;
    this.settingdiv = false;
    this.auditdiv = false;
    this.taskdiv = false;
    this.policydiv = false;
  }
  showusers() {
    this.transdiv = false;
    this.userdiv = true;
    this.settingdiv = false;
    this.auditdiv = false;
    this.taskdiv = false;
    this.policydiv = false;
  }
  showsettings() {
    this.getTransactionList();
    this.getwalletdetails();
    this.gettasklist();
    this.cancelwalletuserupdate();
    this.transdiv = false;
    this.userdiv = false;
    this.settingdiv = true;
    this.auditdiv = false;
    this.policydiv = false;
    this.taskdiv = false;
  }
  showaudittrail() {
    this.transdiv = false;
    this.userdiv = false;
    this.settingdiv = false;
    this.auditdiv = true;
    this.taskdiv = false;
    this.policydiv = false;
    this.pageIndexaudit = 0;
    this.getaudit();
  }
  showtasklist() {
    this.transdiv = false;
    this.userdiv = false;
    this.settingdiv = false;
    this.auditdiv = false;
    this.taskdiv = true;
    this.policydiv = false;
  }
  showpolicylist() {
    this.transdiv = false;
    this.userdiv = false;
    this.settingdiv = false;
    this.auditdiv = false;
    this.taskdiv = false;
    this.policydiv = true;
  }

  coinSelected(item) {
    // this.walletDetails.coinType = item;
    // this.walletDetails.owner_Id = this.owner_Id;
  }
  // calling API for getting Audittrails and othre wallet info fo perticular wallet...
  getwalletdetails() {
    this.PartofWallet = false;
    this.InactiveLoginUser = false;
    const obj = { 'walletId': this.walletid };
    const url = 'wallet/get';
    this.genaralservice.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          this.walletDetails = res['data'];
          this.currWalletStatus = this.walletDetails.status;
          console.log(this.currWalletStatus);
          this.userDetails = this.walletDetails['userList'];
          this.avilableBalaceBTC = (this.walletDetails.balanceBtc).toFixed(8);
          this.walletuserList = this.userDetails;
          console.log(this.walletuserList);
          this.walletuserList.forEach(element => {
            if (element.username === this.loggedinuserDetails.username) {
              this.tempdata = element;
              this.PartofWallet = true;
            }
          });
          this.userDetails.forEach((element) => {
            if (element['profilePic'] === null) {
              element['profilePic'] = './assets/images/sidebar/profile.svg';
              this.userDetails['profilePic'] = element['profilePic'];
            }
            if (element.username === this.loggedinuserDetails.username && element.status === 'Invited') {
              this.InactiveLoginUser = true;
            }
          });
          this.auditTrailDetails = this.walletDetails['auditTrail'];
          this.settingDetails = this.walletDetails['walletInfo'];
          // this.angularxQrCode = 'otpauth://totp/fusang:sumanthm@getnada.com?secret=PGQFHYVNA5Z4IOFI&issuer:fusang';
          this.angularxQrCode = this.walletDetails.address;
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
  // opening share qr code popup modal..............
  ShareQrCode(walletAddress: TemplateRef<any>) {
    this.QrmodalRef = this.modalService.show(walletAddress,
      Object.assign({}, { class: 'share_modal_content' }));
  }
  // Copy address code strats
  copyLink(value) {
    document.execCommand('copy');
  }
  copy() {
    this.ss.ToasterMessage('Copied the wallet address');
    document.getElementById('modalButton').click();
  }
  // Copy address code Ends
  // opening SEND FUND popup and calling api for getting dollar info.....
  OpenNew(bittransfer: TemplateRef<any>, whitelistpop: TemplateRef<any>) {
    const obj = {
      'walletId': this.walletid,
    };
    const url = 'user/getWalletAddress';
    this.genaralservice.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          const response: any = res.status;
          console.log(response);
          if (response === 'success') {
            this.walletwhitelistinfo = res;
            this.modalRef = this.modalService.show(
              bittransfer,
              Object.assign({}, { class: 'btcpopup modal-lg' }, this.config)
            );
          } else if (response === 'failure') {
            this.whitelistrefrence = this.modalService.show(
              whitelistpop,
              Object.assign({}, { class: 'whitelist modal-lg' }, this.config)
            );
          }
        },
        () => {
        }
      );

  }
  openBTC(bittransfer: TemplateRef<any>, whitelistpop: TemplateRef<any>) {
    this.selectedName = '';
    this.TrasactionvalumeCap = '';
    this.transalimit = false;
    const obj = {
      'walletId': this.walletid,
    };
    this.getNickName();
    const url = 'user/getWalletAddress';
    this.genaralservice.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          const response: any = res.status;
          console.log(response);
          if (response === 'success') {
            this.walletwhitelistinfo = res;
            this.modalRef = this.modalService.show(
              bittransfer,
              Object.assign({}, { class: 'btcpopup modal-lg' }, this.config)
            );
          } else if (response === 'failure') {
            this.whitelistrefrence = this.modalService.show(
              whitelistpop,
              Object.assign({}, { class: 'whitelist modal-lg' }, this.config)
            );
          }
        },
        () => {
        }
      );
    this.itemVlue = {
      'username': '',
      'toaddress': '',
      'coin': '',
    };
    this.fusanfee = '0.0';
    this.usdInfo = '';
    this.totalusd = '';
    this.avilableBalaceUSD = '';
    this.totalBTC  = '';
    this.netfeeusd = '';
    this.fusangusd = '';
    this.itemVlue.username = this.walletDetails.walletName;
    this.itemVlue.transactionFee = ((this.trnsfee / 100000000) * 256 ).toFixed(8);
    this.itemVlue.fromwalletAddress = this.walletDetails.address;
    console.log(this.itemVlue.fromwalletAddress);
    this.avilableBalaceUSD = (this.avilableBalaceBTC * this.oneUsdvalue).toFixed(4);
    this.totalBTC = (Number(this.itemVlue.transactionFee) + Number(this.fusanfee)).toFixed(8);
    this.totalusd = (Number(this.totalBTC) * this.oneUsdvalue).toFixed(4);
    this.fusangusd = (this.fusanfee *  this.oneUsdvalue).toFixed(4);
    this.netfeeusd = (Number(this.itemVlue.transactionFee) * this.oneUsdvalue).toFixed(4);
  }
  onChangefees(value) {
    this.totalBTC = (Number(this.fusanfee) + (Number(this.trnsamount)) + ( Number(value))).toFixed(8);
    this.totalusd = (Number(this.totalBTC) * this.dollerInfo.last).toFixed(4);
    // this.netfeeusd = (Number(value) * this.dollerInfo.last).toFixed(4);

  }
  // fund transfer from one wallet to an other
  transaction(successtemplate: TemplateRef<any>) {
    console.log(this.totalBTC);
    console.log(this.walletDetails.avilableBtc);
    if (this.totalBTC > this.walletDetails.avilableBtc) {
      this.ss.ToasterMessage('Total amount should be less than available balance');
      document.getElementById('modalButton1').click();
    } else {
    this.modalrefrence = this.modalService.show(successtemplate,
      Object.assign({}, { class: 'whitelist modal-lg' }, this.config));
    this.modalRef.hide();
    }
  }
  tempbtn(Policyviolation: TemplateRef<any>) {
    this.modalRefpolicyvoilation = this.modalService.show(
      Policyviolation,
      Object.assign({}, { class: 'policyviolationpopup modal-lg'}, this.config)
    );
  }
  sendbtc(Policyviolation: TemplateRef<any>) {
    const url = 'wallet/transaction/transfer';
    const obj = {
      'walletId': this.walletid, 'toAddress': this.itemVlue.toaddress, 'coins': this.itemVlue.coin, 'note': this.itemVlue.note,
      'userId': this.owner_Id, 'balanceAmount': this.walletDetails.avilableBtc, 'toWalletName': this.itemVlue.toWalletName,
      'transactionFee': this.itemVlue.transactionFee, 'netAmount': this.totalBTC, 'serviceCharge': this.fusanfee,
       'transactionPercentage': this.policylist.serviceCharge
    };
    // 'netAmount': this.totalBTC,
    // if (this.itemVlue.coin > this.walletDetails.avilableBtc) {
    // } else {
    this.genaralservice.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          this.tractionsstatus = res;
          const response: any = res.status;
          if (response === 'success') {
            // this.message = this.tractionsstatus.data;
            // this.ss.ToasterMessage(this.tractionsstatus.message);
            // document.getElementById('modalButton').click();
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton').click();
            this.getTransactionList();
            this.getwalletdetails();
             this.gettasklist();
            // this.modalrefrence.hide();
            this.modalRef.hide();

          } else {
            // this.ss.ToasterMessage(this.tractionsstatus.message);
            // document.getElementById('modalButton1').click();
            this.ploicyinsightDetails = res['data'];
            this.modalRef.hide();
            this.modalRefpolicyvoilation = this.modalService.show(
              Policyviolation,
              Object.assign({}, { class: 'policypopup modal-lg' } , this.config)
            );
            // this.itemVlue.toaddress = '';
            // this.itemVlue.coin = '';
            // this.itemVlue.note = '';
          }
        },
        e => {
          console.log(e);
          if (e.status === 403) {
            this.router.navigate(['']);
            // this.ss.ToasterMessage('Your Session has Expired');
            // document.getElementById('modalButton1').click();
            sessionStorage.removeItem('firstLogin');
            sessionStorage.removeItem('useremailid');
            sessionStorage.removeItem('accessToken');
          } else if (e.status === 'BAD_REQUEST') {
            this.ss.ToasterMessage(e.error.message);
            document.getElementById('modalButton1').click();
          } else if (e.status === 502) {
            this.ss.ToasterMessage('System has encountered some technical problem. Please try again.');
            document.getElementById('modalButton1').click();
          }
        },
        () => {
        }
      );
  // }
}

  showgooleAuth() {
    this.googleAuth = true;
    this.Yubikey = false;
  }
  showyubikey() {
    this.googleAuth = false;
    this.Yubikey = true;
  }
  vcValidation(event) {
    if (event.length === 6) {
      this.verificationCodeValid = true;
    } else {
      this.verificationCodeValid = false;
    }
  }
  validate(bittransfer: TemplateRef<any>,  Policyviolation: TemplateRef<any>) {
    
    const obj: any = {};
    obj.verificationCode = this.authmodel.googleCode;

    this.genaralservice.generalServiceInfo('user/validatedToPerformAction', 'post', obj)
      .subscribe(
        res => {
          const response: any = res.status;
          if (response === 'success') {
            // this.ss.ToasterMessage(res['message']);
            // document.getElementById('modalButton').click();
            this.modalRefauth.hide();
            this.authmodel.googleCode = '';
            if (this.policyAuth === 'proceed' || this.policyAuth === 'Close' || this.policyAuth === 'Reject') {
              this.lastloggedin(Policyviolation);
              // this.getwalletdetails();
              // this.getTransactionList();
              // this.gettasklist();
            } else if (this.policyAuth === 'policy') {
              this.updateWalletPolicyDetails();
            } else if (this.policyAuth === 'UpdateWallet') {
              this.confirmClaim();
            } else if (this.policyAuth === 'unFreeze') {
              this.Freezewallet();
            } else if (this.policyAuth === 'Freeze') {
              this.Freezewallet();
            }
            // this.getTransactionDetails();
          } else if (response === 'failure') {
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton1').click();

            // this.modalRefauth.hide();
            // this.getwalletdetails();
            // this.getTransactionDetails();
            this.authmodel.googleCode = '';
          }
        },
        e => {
          if (e.status === 403) {
            this.router.navigate(['']);
            // this.ss.ToasterMessage('Your Session has Expired');
            this.authmodel.googleCode = '';
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
  lastloggedin( Policyviolation: TemplateRef<any>) {
    const url = 'user/login/save';
    const obj = {
      'userId': this.userId,
    };
    this.genaralservice.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          this.response = res;
          // if (this.role === 'Customer') {
          if (this.ticketstatus !== 'proceed') {
            this.updateDetail();
          } else {
            this.sendbtc(Policyviolation);
          }
          // this.router.navigate(['/fusang/walletcreate']);
          // } else {
          // console.log("error occured");
          // this.modalRef.hide();
          // this.confirmChecking(confirmchecking);          // this.router.navigate(['/fusang/ticket']);
          // }
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
  confirmFreeze(freeze: TemplateRef<any>) {
    this.modalRefwalletfreez = this.modalService.show(freeze, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
  }
  authPublic(auth: TemplateRef<any>, value) {
    if ( value === 'proceed' || value === 'Close' || value === 'Reject' ) {
      this.ticketstatus = value;
      this.policyAuth = value;
      this.modalRefauth = this.modalService.show(auth, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
      if (this.ticketstatus === 'proceed') {
        this.modalrefrence.hide();
      } else {
        this.confirmRef.hide();
      }
   } else {
     this.policyAuth = value;
    this.modalRefauth = this.modalService.show(auth, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
   }
  }
  // update wallet info .......
  updateWallet(addUserForm: NgForm, wallettemplate: TemplateRef<any>) {
    // const obj = {
    //   'walletId': this.walletDetails.walletId,
    //   'walletName': this.walletDetails.walletName,
    //   'owner_Id': this.owner_Id,
    //   'noOfSignatures': this.walletDetails.noOfSignatures,
    // };
    console.log(this.walletDetails);
    this.roleInf = [];
        if (this.erroinsignsture !== true) {
      // this.showPageLoading = true;
      const x: any = _.findIndex(this.walletuserList, ['username', this.model.username]);
        console.log(x);
        if ((x === -1) && this.ss.validVal(this.model.username)) {
          this.checkId(this.model.username, addUserForm, 'create', addUserForm, wallettemplate);
        } else if (x >= 0) {
          this.existinguser = true;
          this.ss.ToasterMessage('User already exist.');
          document.getElementById('modalButton1').click();
        }
        if (!this.existinguser && !this.notRegUser) {
      let c;
      c = 0;
      this.walletuserList.forEach(function (el) {
        c = (el.role === 'Signer') ? c + 1 : c;
      });


      if (this.walletDetails.coinType === null || this.walletDetails.coinType === undefined) {
        this.errmsg = true;
        // this.showPageLoading = false;
      } else if (Number(this.walletuserList.length) < Number(this.walletDetails.noOfUsers)) {
        if (this.validatedUser === true) {
          this.ss.ToasterMessage('Userlist should be equal to number of user.');
          document.getElementById('modalButton1').click();
        } else if (this.validatedUser === false) {
          if (Number(this.walletuserList.length) !== Number(this.walletDetails.noOfUsers)) {
          this.ss.ToasterMessage('Userlist should be equal to number of user.');
          document.getElementById('modalButton1').click();
        }
        }
      } else if (Number(this.walletuserList.length) !== Number(this.walletDetails.noOfUsers)) {
        // this.showPageLoading = false;
        if (this.validatedUser === true) {
          this.ss.ToasterMessage('Userlist should be equal to number of user.');
          document.getElementById('modalButton1').click();
        }   // else if (this.validatedUser === false) {
        //   if (Number(this.walletuserList.length) !== Number(this.walletDetails.noOfUsers)) {
        //   this.ss.ToasterMessage('Userlist should be equal to number of user.');
        //   document.getElementById('modalButton1').click();
        // }
        // }
        // this.ss.ToasterMessage('Userlist should be equal to number of user.');
        // document.getElementById('modalButton1').click();
      } else if (Number(c) < Number(this.walletDetails.noOfSignatures)) {
                // this.showPageLoading = false;
        this.ss.ToasterMessage('Signers should be equal to number of signatures.');
        document.getElementById('modalButton1').click();
      } else {
        // if (!this.validatedUser) {
        //   this.toastr.error(this.model.username + ' is unavailable');
        //   return false;
        // }
        if (!this.validatedUser) {
          console.log(this.model.username);
          if (this.walletuserList.length > 0) {
            this.validatedUser = true;
          } else {
            this.ss.ToasterMessage('"' + this.model.username + '" is not a registered user!');
            document.getElementById('modalButton1').click();
            return false;
          }
        }
        this.walletDetails['typeOfWalletId'] = this.walletid;
        this.walletDetails['createdBy'] = this.owner_Id;
        // this.walletDetails['owner_Id'] = this.userList[0].userId;
        this.walletDetails['owner_Id'] = this.owner_Id;
        console.log(this.walletuserList);
        // this.updatewalletrequestobj['userList'] = [];
        delete this.walletuserList.profilePic;
        this.walletuserList.forEach(element => {
          if (element.profilePic && element.status && element.firstname) {
            delete element.profilePic;
            delete element.status;
            delete element.firstname;
          }
        });
        // this.walletDetails['userList'] = this.userList;
        this.updatewalletrequestobj = {
          'createdBy': Number(this.walletDetails.owner_Id),
          'noOfUsers': parseInt(this.walletDetails.noOfUsers, 10),
          'noOfSignatures': parseInt(this.walletDetails.noOfSignatures, 10),
          'ownerId': Number(this.walletDetails.owner_Id),
          'walletId': this.walletDetails.walletId,
          'userList': this.walletuserList,
          'clientId': this.clientId,
          'coinType': this.walletDetails.coinType,
          // 'serviceRequestId': null,
          // 'typeOfWalletId': this.walletid ,
          'walletName': this.walletDetails.walletName
        };
        console.log(this.updatewalletrequestobj);
        // if (this.userList.length )
        // this.userList['createdBy'] = value;
        delete this.walletDetails.auditTrail;
        this.moreAdmins = false;
        delete this.walletDetails['auditTrail'];
        console.log(this.walletDetails);
        this.modalRefwallet = this.modalService.show(wallettemplate, { class: 'whitelist modal-lg' });
              }
            }
    }
  }
  // get perticular wallet details.....
  getTransactionDetails() {
    const obj = {
      'walletId': this.walletid,
      'from': 0,
      'to': 10,
    };
    this.ss.showLoading(true);
    const url = 'wallet/transaction/list';
    this.genaralservice.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          this.transactionInfo = res['data'];
          this.ss.showLoading(false);
          // if (this.transactionInfo['items'] !== undefined) {
          //   this.transactions = this.transactionInfo['items'];
          // }
        },
        e => {
          if (e.status === 403) {
            this.ss.showLoading(false);
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
  btcexchangerate() {
    this.graphData = [];
    this.graphLabel = [];
    this.graphDataPrice = [];
    this.graphDataCurrent = [];
    // https://mining-profit.com/api/btc-chart?range=1d&exchanges=[%22bitstamp%22]
    this.genaralservice.getBitCoin('https://api.coindesk.com/v1/bpi/historical/close.json')
      .subscribe(res => {
        // this.errorGraphDetailData = JSON.parse(res['prices']);
        // this.graphData = this.errorGraphDetailData['bitstamp'];
        console.log(res);
        this.graphData = res['bpi'];
        console.log(this.graphData);
        this.graphDataPrice = _.values(this.graphData);
        this.graphDataCurrent = Object.keys(this.graphData);
        this.graphDataCurrent.forEach(element => {
          const a = [];
          a.push(element);
          a.push(this.graphData[element]);
          this.dataoutput.push(a);
        });
        console.log(this.graphDataCurrent);
        console.log(this.graphDataPrice);
        this.graphLabel = this.graphDataCurrent;
        console.log(this.graphLabel);
        this.chart = new Chart({
          chart: {
            type: 'spline'
          },
          credits: {
            enabled: false
          },
          title: {
            text: null
          },
          yAxis: {
            visible: false,
            tickLength: 0,
            labels: {
              enabled: true
            },
            title: {
              enabled: null
            }
          },
          xAxis: {
            visible: false,
            tickLength: 0,
            title: {
              enabled: null
            },
            labels: {
              enabled: false
            }
          },
          legend: {
            enabled: false
          },
          plotOptions: {
            spline: {
              lineWidth: 3,
              states: {
                hover: {
                  lineWidth: 4,
                }
              },
              marker: {
                enabled: false
              },
              // pointInterval: 3600000,
              // pointStart: Date.UTC(2018, 2, 13, 0, 0, 0)
            }
          },
          series: [
            {
              name: 'Exchange Rate',
              data: this.dataoutput,
            },
            // {
            //   name: 'Date',
            //   data: this.graphDataPrice,
            // }
          ],
        });
        // this.dataoutput = _.map(this.graphData, function(value) {
        //   Object.keys(this.graphData).sort().map(function (key) {
        //         return this.graphData[key];
        //       });
        // });
        // this.dataoutput = this.graphData.map(function (obj) {
        //   return Object.keys(obj).sort().map(function (key) {
        //     return obj[key];
        //   });
        // });
        // this.graphLabel = this.errorGraphDetailData['date'];
        // this.graphLabel = this.graphDataCurrent;
      },
        e => {
        });
  }
  public convertDate(date1) {
    const a = new Date(date1 * 1000);
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const year = a.getFullYear();
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    const min = a.getMinutes();
    const sec = a.getSeconds();
    const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
    //     const date=new Date(Number(date1));
    //  return date.getUTCDate() + '-' + (date.getUTCMonth() + 1)+ '-' + date.getUTCFullYear();
  }
  // convertion from bitcoin to usd
  onChange(val) {
    if (val > 0.00000545) {
        // tslint:disable-next-line:max-line-length
        this.TrasactionvalumeCap = ((((Number(val) * ( 1 + ( Number(this.policylist.serviceCharge) / 100))) + Number(this.itemVlue.transactionFee ) ) / Number(this.walletDetails.avilableBtc)) * 100).toFixed(2);
      if (Number(this.policylist.transactionVolumeCap) >= Number(this.TrasactionvalumeCap)) {
        this.transalimit = false;
      } else {
        this.transalimit  = true;
      }
      this.policyviolation = false;
    this.trnsamount = val;
    this.dollerInfo = this.usdDetails.USD;
    this.usdInfo = (val * this.dollerInfo.last).toFixed(4);
    this.fusanfee = (((this.policylist.serviceCharge) / 100) * Number(val)).toFixed(8);
    // this.totalBTC = (Number(val) + Number(this.itemVlue.transactionFee) + Number(this.fusanfee)).toFixed(7);
    console.log((this.fusanfee * Number(val)) + Number(val));
    console.log((this.fusanfee * Number(val)) + Number(val));
    this.totalBTC = (Number(this.fusanfee) + (Number(val)) + ( Number(this.itemVlue.transactionFee))).toFixed(8);
    // this.totalBTC = (Number(this.fusanfee) + (Number(val)) + ( Number(this.itemVlue.transactionFee))).toFixed(8)
    this.totalusd = (this.totalBTC * this.dollerInfo.last).toFixed(4);
    this.fusangusd = (this.fusanfee * this.dollerInfo.last).toFixed(4);
    console.log(this.servicecharge);
      } else {
        this.policyviolation = true;
      }
    }
  myFunction(val) {
    console.log(val);
  }
  onCustom(event) {
  }
  // geting task list for wallet admins
  gettasklist() {
    const url = 'wallet/transaction/ApproveList';
    const obj = {
      'walletId': this.walletid
      // 'walletId' : 1
    };
    this.genaralservice.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          const response: any = res.status;
          if (res['data'].length !== 0) {
            this.tasklistinfo = res['data'];
            this.NoDataFound = false;
            this.showindication = true;
          } else {
            this.NoDataFound = true;
            this.showindication = false;
          }
        },
        e => {
        },
        () => {
        }
      );
  }
  approved() {
  }
  onUserRowSelect(value, confirmchecking: TemplateRef<any>) {
    this.approve = '';
    this.closedstsudata = [];
    this.transactionDetailsStatus = value['data'];
    this.usd = (this.oneUsdvalue * this.transactionDetailsStatus.amount).toFixed(4);
    this.transactionDetailsStatus.signatory.forEach(element => {
      if (element.ticketStatus === 'Close') {
        this.closedstsudata.push(element);
        console.log(this.closedstsudata.length);
      }
      if (this.transactionDetailsStatus.initiatedBy === element.emailId) {
          this.intialtedApprove = true;
      }
    });
    if (this.transactionDetailsStatus.ticketStatus === 'Open') {
      this.confirmRef = this.modalService.show(confirmchecking, Object.assign({}, { class: 'Sign_Transaction_Request_pop modal-lg' },
       this.config));
    }
  }
  closeApprove() {
    this.confirmRef.hide();
    this.intialtedApprove = false;
  }
  updateDetail() {
    const obj = {
      'transactionRequestId': this.transactionDetailsStatus.transactionRequestId,
      'note': this.approve,
      'ticketStatus': this.ticketstatus,
    };
    const url = 'wallet/transaction/approve';
    console.log(obj);
    this.genaralservice.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          const response: any = res.status;
          console.log(response);
          if (response === 'success') {
            this.signerStatus = res['data'];
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton').click();
            this.confirmRef.hide();
            this.gettasklist();
            this.transdiv = true;
            this.taskdiv = false;
            this.approve = '';
            this.getwalletdetails();
            this.getTransactionList();
            this.modalRef.hide();
          }
        },
        e => {
        },
        () => {
        }
      );
  }
  // rejecttask() {
  //   this.ticketstatus = 'Reject';
  //   this.updateDetail();
  // }
  // approvetask() {
  //   this.ticketstatus = 'Close';
  //   this.updateDetail();
  // }
  getTransactionList() {
    const obj = {
      'page': this.pageIndex,
      'size': 10,
      'walletId': this.walletid,
      'clientId': null,
      'endDate': null,
      'startDate': null,
      'status': null,
      'transactionType': null,
      'walletType': null
    };
    this.ss.showLoading(true);
    const url = 'wallet/transaction/list';
    this.genaralservice.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          if (this.ss.validVal(res['data'].transactionList)) {
            this.transactionlist = res['data'].transactionList;
            this.ss.showLoading(false);
            this.transactionlist.forEach(element => {
              element.morePic = './assets/images/menu-icon-copy-4.png';
              // if (element['type'] === 'Sent' && element['transactionStatus'] === 'Completed') {
              //   element.statusPic = './assets/images/personalwallet/group-11.svg';
              // } else if (element['type'] === 'Received' && element['transactionStatus'] === 'Completed') {
              //   element.statusPic = './assets/images/personalwallet/group-10.svg';
              // } else if (element['transactionStatus'] === 'Unconfirmed') {
              //   element.statusPic = './assets/images/personalwallet/group-5.svg';
              // }  else if (element['transactionStatus'] === 'Rejected') {
              //   element.statusPic = './assets/images/personalwallet/close-5.svg';
              // } else if (element['transactionStatus'] === 'Initiated') {
              //   element.statusPic = './assets/images/personalwallet/flag-2.svg';
              // }
              if (element['profilePic'] === null) {
                element['profilePic'] = './assets/images/sidebar/profile.svg';
              }
              if (element['type'] === 'Sent') {
                element.fromTowalletName =  element.toWalletName;
              } else {
                element.fromTowalletName =  element.fromWalletName;
              }
            });
            this.resultsLength = res['data'].totalItems;
            this.data1 = new MatTableDataSource(this.transactionlist);
            this.data1.sort = this.sort;
            this.data1.paginator = this.paginator;
          } else {
            this.transactionlist = [];
            // this.ss.showLoading(false);
          }
          this.ss.showLoading(false);
        },
        e => {
          if (e.status === 403) {
            this.ss.showLoading(false);
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
  whitelist() {
    // this.router.navigate(['/fusang/policy']);
    this.showpolicylist();
    this.whitelistrefrence.hide();
  }
  getwalletaddress() {
    if (this.itemVlue.toaddress.length < 27 || this.itemVlue.toaddress.length > 34) {
      this.invaliWalletAddress = true;
      this.samewallet = false;
      this.itemVlue['toWalletName'] = '';
      this.walletnamedetails['toWalletName'] = '';
    } else if (this.itemVlue.toaddress === this.walletDetails.address) {
      this.invaliWalletAddress = false;
      this.samewallet = true;
    } else {
      this.invaliWalletAddress = false;
      this.samewallet = false;
      const url = 'wallet/getWalletName';
      const obj = {
        'walletAddress': this.itemVlue.toaddress
      };
      this.genaralservice.generalServiceInfo(url, 'post', obj)
        .subscribe(
          res => {
            this.walletnameinfo = res['data'];
            this.itemVlue['toWalletName'] = this.walletnameinfo;
            this.walletnamedetails['toWalletName'] = this.walletnameinfo;
          },
          () => {
          }
        );
    }
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
    this.showtransactiondetails.signatory.forEach(elem => {
      if (elem.ticketStatus === 'Close') {
        this.closedsts.push(elem);
        console.log(this.closedsts.length);
      }
      if (elem.emailId === this.showtransactiondetails.emailId) {
          this.InitiatedBy = true;
      }
    });
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
  public pageChanged(event: any): void {
    this.pageIndex = event.page - 1;
    this.getTransactionList();
  }
  showpolicyconfig() {
    this.policy = true;
    this.compilance = false;
  }
  // Policy loading and updaet
  loadpolicies() {
    const obj = {
      'walletId': this.walletid
    };
    const url = 'user/policy/get-policy';
    this.genaralservice.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          this.policylist = res['data'];
          // this.TrasactionvalumeCap = this.policylist.transactionVolumeCap;
          this.WalletAddressWhitelist = this.policylist.walletAddressWhitelist;
          // this.WalletAddressWhitelist.forEach(element => {
          //   element.touched = true;
          // });
          this.policyType = this.policylist.userType;
          // this.networkfee  = this.policylist.serviceCharge;
          // this.fusanfee = (this.policylist.subcriptionCharge) / 100;
          console.log(this.fusanfee);
        },
        e => {
        },
        () => {
        }
      );
  }
  addwalletaddress() {
    if (this.WalletAddressWhitelist.length === 0) {
this.showwalletfield = true;
    }
  if (this.itemvalue.address) {
    if (this.ss.validVal(this.itemvalue.address)) {
    let UserCheck = false;
    let toWalletUserCheck = false;
    for (let i = 0; i < this.WalletAddressWhitelist.length; i++) {
if (this.itemvalue.address === this.WalletAddressWhitelist[i].address) {
  UserCheck = true;
  break;
}
    }
    if (this.walletDetails.address === this.itemvalue.address) {
toWalletUserCheck = true;
    }
    if (this.itemvalue.nickName === null || this.itemvalue.nickName === undefined) {
this.itemvalue.nickName = '';
    }
    this.tempObject = {
      'address': this.itemvalue.address,
      'nickName': this.itemvalue.nickName
    };
    if (!UserCheck && !toWalletUserCheck) {
    this.WalletAddressWhitelist.push(this.tempObject);
this.itemvalue = {};
this.showwalletfield = true;
    } else if (UserCheck) {
this.ss.ToasterMessage('Wallet Address already added');
document.getElementById('modalButton1').click();
    } else if (toWalletUserCheck) {
this.ss.ToasterMessage('Whitelisting for the same wallet address is not permitted');
document.getElementById('modalButton1').click();
    }
  }
  } else if (this.itemvalue.address === '' || this.itemvalue.address === undefined ||
    this.itemvalue.address === null) {
    this.showwalletfield = true;
    // this.itemvalue = {};
  }
}

  removewalletaddress(i) {
    const index = i;
    if (index === 0 || index) {
      console.log(this.WalletAddressWhitelist);
      this.WalletAddressWhitelist.splice(i, 1);
      console.log(this.WalletAddressWhitelist);
    }
  }
  removewalletaddress1() {
    this.itemvalue.address = '',
      this.showwalletfield = false;
      this.isWalletValid = true;
  }

  cancelPolicyModifications() {
    // this.router.navigate(['/fusang/walletcreate']);
    this.validateTimeZone = false;
    this.itemvalue = {};
    this.showwalletfield = false;
    this.loadpolicies();
    this.getwalletdetails();
    this.getcountryTimezone();
    this.showupdatebtn = false;
    this.makeitedit = true;
    this.makeitedit1 = true;
    this.policydiv = true;
    this.endtimestamperror = false;
    this.timestamperror = false;
    this.endtimeerror = false;
    this.timestamperror = false;
    this.isWalletValid = true;
  }
  updateWalletPolicyDetails() {
    if ((Number(this.policylist.minimumBalance) + Number(this.policylist.transactionVolumeCap) > 100)) {
     this.ss.ToasterMessage('You have exceeded the sum of transaction volume cap and minimum balance more than 100%');
 document.getElementById('modalButton1').click();
   } else {
   const obj = {
     'maximumAllowedIp': this.policylist.maximumAllowedIp,
     'minimumBalance': this.policylist.minimumBalance,
     'transactionLimit': this.policylist.transactionLimit,
     'transactionTimeEnd': this.policylist.transactionTimeEnd,
     'transactionTimeStart': this.policylist.transactionTimeStart,
     'transactionUnitOfMeasure': this.policylist.transactionUnitOfMeasure,
     'transactionVolumeCap': this.policylist.transactionVolumeCap,
     'maximumAllowedWallets': this.policylist.maximumAllowedWallets,
     // 'tts': this.policylist.tts,
     // 'tte': this.policylist.tte,
     'serviceCharge': this.policylist.serviceCharge,
     'subcriptionCharge': this.policylist.subcriptionCharge,
     'walletTimeZone': this.policylist.walletTimeZone,
     'walletId': this.walletid,
     'walletAddressWhitelist': [
     ]
   };
   this.policylist['WalletAddresslist'] = [];
   let UserCheck = false;
   let toWalletUserCheck = false;
   if (this.itemvalue.address) {
     for (let i = 0; i < this.WalletAddressWhitelist.length; i++) {
 if (this.itemvalue.address === this.WalletAddressWhitelist[i].address) {
   UserCheck = true;
   break;
 }
     }
     if (this.walletDetails.address === this.itemvalue.address) {
 toWalletUserCheck = true;
     }

     if (!UserCheck && !toWalletUserCheck) {

 if (this.itemvalue.nickName === null || this.itemvalue.nickName === undefined) {
   this.itemvalue.nickName = '';
 }
 this.WalletAddressWhitelist.push(this.itemvalue);



 // this.obj.walletAddresslist.push(this.WalletAddressWhitelist);
      this.itemvalue = {};
 this.showwalletfield = true;
     } else if (UserCheck) {
 this.ss.ToasterMessage('Wallet Address already added');
 document.getElementById('modalButton1').click();
     } else if (toWalletUserCheck) {
 this.ss.ToasterMessage('From Wallet Address should not be added');
 document.getElementById('modalButton1').click();
     }
   }
   // this.policylist.WalletAddresslist = this.WalletAddressWhitelist;
   // this.walletaddressinfo.push(this.WalletAddressWhitelist);
   console.log(UserCheck);

   if (!UserCheck && !toWalletUserCheck) {
     this.WalletAddressWhitelist.forEach(element => {
 const object = {
   'address': element.address,
   'nickName': element.nickName
 };
 obj.walletAddressWhitelist.push(object);
     });
     // this.policylist.WalletAddresslist.push(this.WalletAddressWhitelist);
     this.policylist['userId'] = this.owner_Id;
     const url = 'user/policy/update-policy';
     this.genaralservice.generalServiceInfo(url, 'post', obj)
 .subscribe(
   res => {
     const response: any = res.status;
     if (response === 'success') {
       this.ss.ToasterMessage(res['message']);
       document.getElementById('modalButton').click();
       this.loadpolicies();
       if (this.role !== 'Admin') {
   this.router.navigateByUrl('/fusang/walletcreate');
       } else {
   this.cancelPolicyModifications();
       }
     } else if (response === 'failure') {
       this.ss.ToasterMessage(res['message']);
       document.getElementById('modalButton1').click();
     }
   },
   e => {
   },
   () => {
   }
 );
   }
 }
 }

  updateWalletPolicy(updateWalletPolicy: TemplateRef<any>) {
    this.walletpolicyRef = this.modalService.show(updateWalletPolicy,
      Object.assign({}, { class: 'policypopupupdate modal-lg' }, this.config));
    this.getusertype();
  }
  getusertype() {
    const url = 'user/policy/getGlobalWalletTypePolicy';
    this.genaralservice.generalServiceInfo(url, 'post', '')
      .subscribe(
        res => {
          this.usertyperesponse = res['data'];
          console.log(this.usertyperesponse);
          this.usertyperesponse.forEach((element) => {
            if (element.userType === 'DeepStorage') {
              this.deepStorage = element;
            } else if (element.userType === 'SecureStorage') {
              this.secureStorage = element;
            } else if (element.userType === 'HighFrequency') {
              this.highFrequency = element;
            }
          });
          // this.deepStorageId = this.usertyperesponse.deepStorageId ;
          // this.secureStorageId = this.usertyperesponse.secureStorageId;
          // this.highFrequencyId = this.usertyperesponse.highFrequencyId ;
        },
        e => {
        },
        () => {
        }
      );
  }

  ngOnDestroy() {
    // Called once, before the instance is destroyed.

    sessionStorage.removeItem('currentWalletStatus');
    sessionStorage.removeItem('fromNavigation');
    this.currWalletStatus = '';
    this.navigatedFrom = '';
  }
  clearefund() {
    this.policyviolation = false;
    this.invaliWalletAddress = false;
    this.fusanfee = '';
    this.fusangusd = '';
    this.transactinfeeerror = false;
    this.trnsfee = this.feelist[0].value;
  }
  editPolicy() {
    this.showupdatebtn = true;
    this.makeitedit = false;
    if (this.role === 'Admin') {
      this.makeitedit1 = false;
    }
  }
  expandAll() {
    this.showexpandall = false;
    this.allExpandState = true;
  }
  collapseAll() {
    this.showexpandall = true;
    this.allExpandState = false;
  }
  getcountryTimezone() {
    const url = '/assets/timezonelist.json';
    this.genaralservice.localfileinfo(url)
      .subscribe(
        res => {
          this.countrytimezonelist = res['timeZoneList'];
          console.log(this.countrytimezonelist);
          this.countrytimezonelist.forEach((element) => {
            this.countrytimezonelist1.push(element);
          });
        },
        e => {
        },
        () => {
        }
      );
  }
  // Timezone related
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.validateTimeZone = false;
    this.policylist.walletTimeZone = event.option.value;
    this.countrytimezonelist.forEach((element) => {
      if (event.option.value.toLowerCase() === element.name.toLowerCase()) {
      }
    });
  }
  getTheValue(value) {
    this.validateTimeZone = true;
    this.filteredOptions = this._filter(this.policylist.walletTimeZone);
  }
  // This function will filter the value and show in the dropdown.
  private _filter(value) {
    if (value !== '') {
      const filterValue = value.toLowerCase();
      return this.countrytimezonelist1.filter(option => option.toLowerCase().indexOf(filterValue) >= 0 );
    }
  }
  walletAddressValidation(event) {
    console.log(event);
    if (event.length < 27 || event.length > 34) {
      this.isWalletValid = false;
    } else {
      this.isWalletValid = true;
    }
  }

   // Added below code to allow only numbers when you go to the application each time
   numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  newTransaction(bittransfer, whitelistpop) {
    this.modalRefpolicyvoilation.hide();
    // this.openBTC(bittransfer, whitelistpop);
    this.OpenNew(bittransfer, whitelistpop);
  }
  // add and remove the user from wallet
  addUser(addUserForm: NgForm, wallettemplate) {
    console.log(this.model);
    this.roleInf = [];
    this.moreAdmins = false;
    this.addUserNameField =  false;
    if (this.walletDetails.noOfUsers > 0 && this.walletDetails.noOfSignatures > 0) {
      this.noOfUsersAvail = false;
      // this.initialfslde = false; old
      this.initialfslde = true;
        const x: any = _.findIndex(this.walletuserList, ['username', this.model.username]);
        console.log(x);
        if ((x === -1) && this.ss.validVal(this.model.username)) {
          this.checkId(this.model.username, addUserForm, '', addUserForm, wallettemplate);
        } else if (x >= 0) {
          this.existinguser = true;
          this.ss.ToasterMessage('User already exist.');
          document.getElementById('modalButton1').click();
        }
        } else {
      // this.noOfUsersAvail = true;
      this.ss.ToasterMessage('Enter number of sigmatuers more than 0.');
      document.getElementById('modalButton1').click();
    }
      }
      deleteextrarow() {
        this.initialfslde = false;
        this.model = {
          'username': '',
          'role': ''
        };
      }
      onuserChange(val) {
        if (Number(val) >=  Number(this.walletDetails.noOfSignatures)) {
          this.erroinsignsture = false;
        } else {
          this.erroinsignsture = true;
        }
      }
      onUserchange(val) {
        if (val === '') {
          this.addUserNameField =  false;
        }
        // setTimeout(() => {
        this.nofouser = val;
        if (this.ss.validVal(val)) {
          if (val.length > 3) {
            const obj = {
              'searchString': val,
              'clientId': this.clientId
            };
            const url = 'user/autoSearch';
            this.genaralservice.autoSearch(url, 'post', obj)
              .subscribe(
                res => {
                  this.autosearchresult = res['data'];
                  console.log(this.autosearchresult);
                },
                e => {
                  if (e.status === 403) {
                    this.router.navigate(['']);
                    // this.ss.ToasterMessage('Your Session has Expired.');
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
        }
      }
      // userSelected(val) {
      //   if (val.id) {
      //     this.model.userId = val.id;
      //     this.model.username = val.username;
      //     this.roleList = val.userRole;
      //     this.model.role = val.userRole[0];
      //     if (this.model.role === 'USER_SIGNER') {
      //      this.model.roleName = 'Signer';
      //     } else if (this.model.role === 'USER_VIEWER') {
      //       this.model.roleName = 'Viewer';
      //     }
      //   } else {
      //     this.ss.ToasterMessage('Please select the user in list');
      //     document.getElementById('modalButton1').click();
      //   }
      // }
      deleterow(i) {
        this.walletuserList.splice(i, 1);
        this.userListInfo.splice(i, 1);
        this.userListInfo.splice(this.userListInfo.length - 1, 1);
      }
      getpolicyDetails() {
        const url = 'user/policy/getGlobalWalletTypePolicy';
        this.genaralservice.generalServiceInfo(url, 'post', '')
          .subscribe(
            res => {
              this.usertyperesponse = res['data'];
              this.usertyperesponse.forEach(element => {
                if (element.userType === 'DeepStorage') {
                  this.sldeepstorageId = element.id;
                  this.deepStorage = element.rules;
                  console.log(this.deepStorage);
                } else if (element.userType === 'SecureStorage') {
                  this.slsecurestorageId = element.id;
                  this.secureStorage = element.rules;
                } else if (element.userType === 'HighFrequency') {
                  this.slhighfrquencyId = element.id;
                  this.highFrequency = element.rules;
                }
              });
            },
            e => {
            },
            () => {
            }
          );
      }
      editpolicy(value) {
        this.walletuserList['typeOfWalletId'] = value;
        this.typeOfWalletId = value;
        this.isEdit = true;
        console.log(value);
        if (value === 0) {
          this.secureStorageedit = true;
          this.highFrequencyedit = true;
          this.policyDetails = this.deepStorage;
          console.log(this.policyDetails);
        } else if (value === 1) {
          this.deepStorageedit = true;
          this.highFrequencyedit = true;
          this.policyDetails = this.secureStorage;
        } else if (value === 2) {
          this.secureStorageedit = true;
          this.deepStorageedit = true;
          this.policyDetails = this.highFrequency;
        }
}
onsignatureChange(val) {
  if (Number(val) > Number(this.walletDetails.noOfUsers)) {
    this.erroinsignsture = true;
    // this.showPageLoading = false;
  } else {
    this.erroinsignsture = false;
  }
  // if (val === 0) {
  //   this.moreuser = true;
  // }
}
checkId(val, formName, type, addUserForm, wallettemplate) {
  // const obj = {
  //   'searchString': this.model.username,
  //   'clientId': this.clientId
  // };
  // const url = 'user/autoSearch';
  // this.genaralservice.generalServiceInfo(url, 'post', obj)
  //   .subscribe(
  //     res => {
        // this.model.userId = this.ss.validVal(_.find(res['data'], function (o) { return o.username === val.toLowerCase(); })) ?
        //   _.find(res['data'], function (o) { return o.username === val.toLowerCase(); }).id : '';
        // console.log(this.model.username);
        // console.log(val);
        // const x: any = _.findIndex(this.Tempautosearchresult1, ['username', this.model.username]);
        const x: any = _.indexOf(this.Tempautosearchresult1, this.model.username);
        if ((x === -1) && this.ss.validVal(this.model.username)) {
          this.ss.ToasterMessage('"' + this.model.username + '" is not a registered user!');
          document.getElementById('modalButton1').click();
          this.notRegUser = true;
        } else if (x >= 0)  {
          this.notRegUser = false;
        if (this.ss.validVal(this.model.userId)) {
          this.validatedUser = true;
          this.userListInfo.push(this.model);
          this.walletuserList.push(this.model);
          this.validatedUser = false;
          let c;
          c = 0;
          this.walletuserList.forEach(function (el) {
            c = (el.role === 'Signer') ? c + 1 : c;
          });
          if (Number(c) < Number(this.walletDetails.noOfSignatures)) {
            // this.showPageLoading = false;
            // this.moreAdmins = true;
            if (this.validatedUser === true) {
              // this.toastr.error('Admin role of the added user should  be equal to  no of signatures.');
              this.ss.ToasterMessage('Signers should be equal to number of signatures.');
              document.getElementById('modalButton1').click();
              this.walletuserList.splice(-1, 1);
            }
          }
          if (Number(this.walletuserList.length) === Number(this.walletDetails.noOfUsers)) {
            this.initialfslde = false;
          }
          this.model = {
            'username': '',
            'role': '',
          };
          if (type === 'create') {

            // this.ss.ToasterMessage('Please click on Submit again to complete the process.');
            // document.getElementById('modalButton2').click();
            // this.clickagain(addUserForm, wallettemplate);
          }
          this.model = {
            'username': '',
            'role': '',
          };
          this.addUserNameField =  true;
          this.getusetList();
        } else {
          this.validatedUser = true;
          this.ss.ToasterMessage('"' + this.model.username + '" is not a registered user!');
          document.getElementById('modalButton1').click();
          this.addUserNameField =  false;
        }
        this.errorUserInfo = false;
        // this.toastr.error('Number of users added does not match with count');
      // },
      // e => {
      //   this.addUserNameField =  false;
      // },
      // () => {
      // });
      this.addUserNameField =  false;
  // return id;
      }
}
clickagain(addUserForm, wallettemplate) {
  this.updateWallet(addUserForm, wallettemplate);
}
onnumberuserChange(val)  {
  if (this.initialfslde === true) {
    this.initialfslde = false;
    console.log(this.model);
    this.model = {
      'username': '',
      'role': '',
    };
  }
  this.adduserStatus = true;
}
getnetworkfee() {
  this.genaralservice.gettransactionfee('https://bitcoinfees.earn.com/api/v1/fees/recommended')
                      .subscribe(
                        res => {
                          this.networkfeedetail = res;
                          console.log(res);
                          console.log(this.networkfeedetail);
                          this.feelist =  [
                            {
                              'name': '1 Block',
                              'value': this.networkfeedetail.fastestFee
                            }, {
                              'name': '3 Block',
                              'value': this.networkfeedetail.hourFee
                            }
                          ];
                          this.trnsfee = this.feelist[0].value;
                        }
                      );
 }
 feeSelected(val) {
  this.itemVlue.transactionFee = ((val / 100000000) * 256).toFixed(8);
  this.netfeeusd = (this.itemVlue.transactionFee * this.oneUsdvalue).toFixed(4);
  let transactionAmount;
  if (this.policylist.transactionVolumeCap >= this.TrasactionvalumeCap) {
    this.transalimit = false;
  } else {
    this.transalimit = true;
  }
    // tslint:disable-next-line:max-line-length
    transactionAmount = ((Number(this.walletDetails.avilableBtc) * (Number(this.TrasactionvalumeCap) / 100)) - Number(this.itemVlue.transactionFee )) / (1 + (Number(this.policylist.serviceCharge) / 100));
    this.itemVlue.coin = transactionAmount.toFixed(8);
  this.totalBTC = (Number(this.fusanfee) + Number(this.trnsamount) +
  ( Number(this.itemVlue.transactionFee))).toFixed(8);
  this.totalusd = (this.totalBTC *  this.oneUsdvalue).toFixed(4);
  }
  feeSelected1(val) {
    console.log(val);
    if (val < 0.00000647) {
      this.transactinfeeerror = true;
    } else {
      this.transactinfeeerror = false;
    this.netfeeusd = (Number(val) * this.oneUsdvalue).toFixed(4);
    let transactionAmount;
  if (this.policylist.transactionVolumeCap >= this.TrasactionvalumeCap) {
    this.transalimit = false;
  } else {
    this.transalimit = true;
  }
    // tslint:disable-next-line:max-line-length
    transactionAmount = ((Number(this.walletDetails.avilableBtc) * (Number(this.TrasactionvalumeCap) / 100)) - Number(this.itemVlue.transactionFee )) / (1 + (Number(this.policylist.serviceCharge) / 100));
    this.itemVlue.coin = transactionAmount.toFixed(8);
    this.totalBTC = (Number(this.fusanfee) + Number(this.trnsamount) +
    ( Number(val))).toFixed(8);
    this.totalusd = (this.totalBTC *  this.oneUsdvalue).toFixed(4);
  }
}
  editwalletdetails() {
    this. walletuserupdate = true;
    this.iseditable = false;
  }
  cancelwalletuserupdate() {
    this.getwalletdetails();
    this.gettasklist();
    this. walletuserupdate = false;
    this.iseditable = true;
    this.initialfslde = false;
    this.erroinsignsture = false;
    this.existinguser = false;
    this.notRegUser = false;
    this.model = {};
  }
  getaudit() {
    const obj = {
      'page': this.pageIndexaudit,
      'size': 20,
      'walletId': this.walletid,
    };
    this.ss.showLoading(true);
    const url = 'wallet/audit';
    this.genaralservice.generalServiceInfo(url, 'post', obj)
            .subscribe (
              res => {
                this.auditTraillist = res['data'].auditList;
                this.auditlistLength = res['data'].totalItems;
                this.ss.showLoading(false);
              },
              e => {
                this.userListInfo = [];
                if (e.status === 403) {
                  this.router.navigate(['']);
                  this.ss.showLoading(false);
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
  public pageChangedaudit(event: any): void {
    this.pageIndexaudit = event.page - 1;
    this.getaudit();
  }

  getusetList() {
    this.autosearchresult1 = [];
    const obj = {
      'searchString': '',
      'clientId': this.clientId
    };
    const url = 'user/autoSearch';
    this.genaralservice.autoSearch(url, 'post', obj)
      .subscribe(
        res => {
          this.autosearchresult = res['data'];
          for ( let i = 0; i < this.autosearchresult.length ; i++) {
            this.autosearchresult1.push(this.autosearchresult[i].username);
          }
          this.Tempautosearchresult1 = this.autosearchresult1;
          console.log(this.autosearchresult1);
        },
        e => {
          if (e.status === 403) {
            this.router.navigate(['']);
            // this.ss.ToasterMessage('Your Session has Expired.');
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
  uiautoserach(value) {
    this.autosearchresult1 = [];
    const x: any = _.indexOf(this.Tempautosearchresult1, value);
          // const x: any = _.findIndex(this.Tempautosearchresult1, ['username', this.model.username]);
          console.log(x);
          if ((x === -1) && this.ss.validVal(this.model.username)) {
          } else if (x >= 0)  {
            this.tempSelectValue = {};
            for ( let i = 0; i < this.autosearchresult.length ; i++) {
              if (this.autosearchresult[i].username.toLowerCase() === value.toLowerCase()) {
                this.tempSelectValue = this.autosearchresult[i];
              }
            }
            // if (val.id) {
              this.model.userId = this.tempSelectValue.id;
              this.model.username = this.tempSelectValue.username;
          }
    this.autosearchresult1 = _.filter(this.Tempautosearchresult1 , (o) => {
      return _.startsWith(o.toLowerCase(), value.toLowerCase());
    });
  }

  userSelected(event: MatAutocompleteSelectedEvent) {
    this.tempSelectValue = {};
    for ( let i = 0; i < this.autosearchresult.length ; i++) {
      // this.autosearchresult1.push(this.autosearchresult[i].username);
      if (this.autosearchresult[i].username === event.option.value) {
        this.tempSelectValue = this.autosearchresult[i];
      }
    }
    // if (val.id) {
      this.model.userId = this.tempSelectValue.id;
      this.model.username = this.tempSelectValue.username;
        }
    confirmClaim() {
      const url = 'wallet/walletDetailsUpdate';
        this.genaralservice.generalServiceInfo(url, 'post', this.updatewalletrequestobj)
                            .subscribe (
                              res => {
                                const respose: any = res.status;
                                if (respose === 'success') {
                                  this.ss.ToasterMessage(res['message']);
                                  document.getElementById('modalButton').click();
                                  this. walletuserupdate = false;
                                  this.cancelwalletuserupdate();
                                } else if (respose === 'failure') {
                                  this.ss.ToasterMessage(res['message']);
                                  document.getElementById('modalButton1').click();
                                }
                              }
                            );
    }
    roleuserSelected(value, index) {
      console.log(value);
      console.log(index);
    }
    roleSelected(val: any) {
      console.log(val);
    }
    refresh() {
      const obj = {
        'walletId': this.walletid
      };
      const url = 'wallet/v2/transactionDataSync';
      this.genaralservice.generalServiceInfo(url, 'post', obj)
              .subscribe(
                res => {
                  // const response: any = res.status;
                  // if (response === 'success') {
                    
                  // }
                }
              );
              this.refreshData();
    }
    refreshData() {
      const obj = {
        'walletId': this.walletid
      };
      const url = 'wallet/v2/updateTransactionStatus';
      this.genaralservice.generalServiceInfo(url, 'post', obj)
              .subscribe(
                res => {
                }
              );
              this.getwalletdetails();
              this.getTransactionList();
    }
   checkunitofmeasure(val) {
      console.log(val);
      const term = this.policylist.transactionUnitOfMeasure;
const re = new RegExp('^[0-9]{1,4}\d*$');
// if (re.test(term) || ) {
//    console.log("Valid");
// } else {
   console.log(re.test(term));
// }
      // console.log((re.test(term)) || this.policylist.transactionUnitOfMeasure);
      if (!(re.test(term)) || this.policylist.transactionUnitOfMeasure > 1440) {
        this.uitofmeasureerror = true;
      } else {
        this.uitofmeasureerror = false;
      }
    }
    Freezewallet() {
        const obj = { 'walletId': this.walletid };
        if (this.policyAuth === 'unFreeze') {
          obj['freeze'] = false;
        } else if (this.policyAuth === 'Freeze') {
          obj['freeze'] = true;
        }
        console.log(obj);
      const url = 'wallet/v2/walletStatusUpdate';
      this.genaralservice.generalServiceInfo(url, 'post', obj)
                          .subscribe(
                            res => {
                              const response: any = res.status;
                              if (response === 'success') {
                                this.ss.ToasterMessage(res['message']);
                                  document.getElementById('modalButton').click();
                                  this.getwalletdetails();
                                  this.getTransactionList();
                                  this.modalRefauth.hide();
                                  this.currWalletStatus = this.walletDetails.status;
                                  console.log( this.currWalletStatus);
                                  this.freezewalletstatus = false;
                              } else if (response === 'failure') {
                                this.ss.ToasterMessage(res['message']);
                                document.getElementById('modalButton1').click();
                              }
                            }
                          );
      }
      CloseAuth() {
        this.modalRefauth.hide();
        this.authmodel.googleCode = '';
      }
      timestampvalidation() {
        this.endtimestamperror = false;
        const term = this.policylist.transactionTimeStart;
        const re = new RegExp('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');
        if (!(re.test(term))) {
          this.starttimeerror = true;
        } else if (re.test(term)) {
        const timeParts = term.split(':');
        const timeendparts = this.policylist.transactionTimeEnd;
        const endtime = timeendparts.split(':');
        const startTime = (+timeParts[0] * (60000 * 60)) + (+timeParts[1] * 60000);
        const endTime = (+endtime[0] * (60000 * 60)) + (+endtime[1] * 60000);
          this.starttimeerror = false;
          if (startTime >= endTime) {
            this.timestamperror = true;
          } else {
            this.timestamperror = false;
            this.endtimestamperror = false;
          }
        }
      }
      endtranstampvalidation() {
        this.timestamperror = false;
        const term = this.policylist.transactionTimeEnd;
        const re = new RegExp('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');
        if (!(re.test(term))) {
          this.endtimeerror = true;
        } else if (re.test(term)) {
          const timeParts = term.split(':');
        const timeendparts = this.policylist.transactionTimeStart;
        const endtime = timeendparts.split(':');
        const  endTime = (+timeParts[0] * (60000 * 60)) + (+timeParts[1] * 60000);
        const startTime = (+endtime[0] * (60000 * 60)) + (+endtime[1] * 60000);
          this.endtimeerror = false;
          if (startTime >= endTime) {
            this.endtimestamperror = true;
          } else {
            this.endtimestamperror = false;
            this.timestamperror = false;
          }
        }
      }
      manualTriger(event, element) {
          console.log(element);
          const obj = {
            id : element.id
          };
          const url = 'wallet/v2/updateTransactionStatus';
          this.genaralservice.generalServiceInfo(url, 'post', obj)
                              .subscribe (
                                res => {
                                  const respose: any = res.status;
                                  if (respose === 'success') {
                                    this.getTransactionList();
                                    this.ss.ToasterMessage(res['message']);
                                    document.getElementById('modalButton').click();
                                  } else if (respose === 'failure') {
                                    this.ss.ToasterMessage(res['message']);
                                    document.getElementById('modalButton1').click();
                                  }
                                }
                              );
          event.stopPropagation();
      }
      showTool(i) {
        this.current = i;
        event.stopPropagation();
     }
     showleave() {
      this.current = null;
    }
    getTransactionAmount(value) {
      console.log(this.TrasactionvalumeCap);
      const networkFee = this.trnsfee;
      const fusangfee = this.policylist.serviceCharge;
      let transactionAmount;
          if (this.TrasactionvalumeCap !== null && this.TrasactionvalumeCap !== '' && this.TrasactionvalumeCap !== undefined) {
            if (Number(this.policylist.transactionVolumeCap) >= Number(this.TrasactionvalumeCap)) {
              this.transalimit = false;
              if (Number(this.TrasactionvalumeCap) <= 0 ) {
                this.TrasactionvalumeCap = 1;
              }
            } else {
              this.TrasactionvalumeCap = this.policylist.transactionVolumeCap;
            }
              // tslint:disable-next-line:max-line-length
              transactionAmount = ((Number(this.walletDetails.avilableBtc) * (Number(this.TrasactionvalumeCap) / 100)) - Number(this.itemVlue.transactionFee )) / (1 + (Number(this.policylist.serviceCharge) / 100));
              this.itemVlue.coin = transactionAmount.toFixed(8);
              if (this.itemVlue.coin > 0.00000545) {
                this.policyviolation = false;
              this.trnsamount = this.itemVlue.coin;
              this.dollerInfo = this.usdDetails.USD;
              this.usdInfo = (this.itemVlue.coin * this.dollerInfo.last).toFixed(4);
              this.fusanfee = (((this.policylist.serviceCharge) / 100) * Number(this.itemVlue.coin)).toFixed(8);
              // this.totalBTC = (Number(val) + Number(this.itemVlue.transactionFee) + Number(this.fusanfee)).toFixed(7);
              console.log((this.fusanfee * Number(this.itemVlue.coin)) + Number(this.itemVlue.coin));
              console.log((this.fusanfee * Number(this.itemVlue.coin)) + Number(this.itemVlue.coin));
              this.totalBTC = (Number(this.fusanfee) + (Number(this.itemVlue.coin)) + ( Number(this.itemVlue.transactionFee))).toFixed(8);
              // this.totalBTC = (Number(this.fusanfee) + (Number(val)) + ( Number(this.itemVlue.transactionFee))).toFixed(8)
              this.totalusd = (this.totalBTC * this.dollerInfo.last).toFixed(4);
              this.fusangusd = (this.fusanfee * this.dollerInfo.last).toFixed(4);
              console.log(this.servicecharge);
                } else {
                  this.policyviolation = true;
                }
      }
    }

    saveNickName1(list) {
      // console.log('nickname from array ', walletNickName);
      const obj = {
          'walletId': this.walletid,
          'walletAddressNicknameList': list
       };
       console.log('object in save ', obj);
        const url = 'wallet/v2/updateWalletAddressNickname';
        this.genaralservice.generalServiceInfo(url, 'post', obj)
        .subscribe (
    res => {
      console.log(res);
      const respose: any = res.status;
      if (respose === 'success') {
       this.loadpolicies();
       this.getNickName();
        this.ss.ToasterMessage(res['message']);
        document.getElementById('modalButton').click();
      } else if (respose === 'failure') {
        this.ss.ToasterMessage(res['message']);
        document.getElementById('modalButton1').click();
      }
    });
  }


nickNameInput(name) {
  console.log('input', name);
  this.nickName1 = name;
}
getAddress() {
  this.itemVlue.toaddress = this.selectedName;
  this.getwalletaddress();
}
getNickName() {
  // console.log('nickname from array ', walletNickName);
  const obj = {
 'id': this.walletid
   };
    const url = 'wallet/v2/getWalletNickName';
    this.genaralservice.generalServiceInfo(url, 'post', obj)
    .subscribe (
        res => {
          const respose: any = res.status;
          if (respose === 'success') {
            if (this.ss.validVal( res['data'])) {
                  this.WalletName = res['data'];
                  this.showNickNameFeild =  false;
                // this.nickNameOption = this.WalletName.nickName;
                this.nickNameOption = [];
                this.TempNickNameOption = [];
                this.WalletName.forEach(element => {
                  if (this.ss.validVal(element.nickName)) {
                    this.nickNameOption.push(element.nickName);
                    this.TempNickNameOption.push(element.nickName);
                    console.log('niop', this.nickNameOption);
                  }
                });
          } else {
            this.showNickNameFeild = true;
          }
          } else if (respose === 'failure') {
            this.WalletName = [];
            this.showNickNameFeild = true;
            // this.ss.ToasterMessage(res['message']);
            // document.getElementById('modalButton1').click();
          }
        });
    }
    nickNameInput1(name) {
      this.nickNameOption = _.filter(this.TempNickNameOption , (o) => {
        return _.startsWith(o.toLowerCase(), name.toLowerCase());
      });
           console.log('input', name);
       }
       filter(name) {
         if (name !== '') {
           const filterValue = name.toLowerCase();
           return this.TempNickNameOption.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
         }
       }
       autoComplete(event: MatAutocompleteSelectedEvent) {
         this.WalletName.forEach(element => {
           if (event.option.value.toLowerCase() === element.nickName.toLowerCase()) {
             this.itemVlue.toaddress = element.address;
             this.getwalletaddress();
           }
         });
       }
    saveMultiNickName() {
        console.log(this.WalletAddressWhitelist);
        this.saveNickName1(this.WalletAddressWhitelist);
    }
}
