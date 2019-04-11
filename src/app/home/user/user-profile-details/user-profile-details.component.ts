import { Component, OnInit, ViewChild, TemplateRef, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router, UrlHandlingStrategy } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from '../../../shared.service';
import { GeneralService } from '../../../general.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as _ from 'lodash';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-user-profile-details',
  templateUrl: './user-profile-details.component.html',
  styleUrls: ['./user-profile-details.component.css']
})
export class UserProfileDetailsComponent implements OnInit, OnDestroy {
  pageIndexWallet: any = 0;
  enableBtns1: Boolean = false;
  editUser1: any = true;
  modalRefauth: BsModalRef;
  verificationCodeValid = false;
  authmodel: any = {};
  modalRefwallet: BsModalRef;
  modalRef: BsModalRef;
  res = [];
  ListUserId = '';
  userId = '';
  username = '';
  totalBtc: Number;
  walletsummaryinfo: any = [];
  walletList: any = [];
  invitedlist: any = false;
  userDetails: any = [];
  displayedColumns: any[] = [];
  tableColumns: any[] = [];
  data: MatTableDataSource<any>;
  data_clientUsers: MatTableDataSource<any>;
  totalTableData = [];
  typelist = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obj: (o: {}) => string[];
  tabData: any = [];
  totalTabData: any = [];
  tableData: any = [];
  mycolumns: string[];
  showSearch = false;
  resultsLength: any;
  pageIndex: any = 0;
  pageIndexaudit: any = 0;
  countrylist: any = [];
  countrylist1: any = [];
  transactionDetails: any = [];
  successRef: BsModalRef;
  userDetailsList: any = [];
  getProfileInfo: any = [];
  enableWorkflowSec: Boolean = true;
  onloadUserDetailsWFData = new MatTableDataSource();

  editUser: any = true;
  totalItem: any = [];
  filteredOptions: any = [];
  countryPhonelen: any;
  dispWorkFlowColumns: string[] = ['info', 'status', 'createdDate'];
  totalUsers: any = 0;
  totalWallets: any = 0;
  dummyData1: any = [];
  enableBtns: Boolean = false;

  walletstatus: any = [];
  isEditAdmin: any = false;
  enableupdateBtns: any = true;
  invalidphone: boolean;
  templist: any = [];
  workflowObject: any;
  code: any;
  phonelength: any;
  superAdmin: Boolean = false;
  userDetailRole: any = {};
  userForm: any;
  editUserRole: any = true;
  enableModBtns: Boolean = false;
  chkuserRoleForWallets: any = [];
  isUserSigner: Boolean = false;
  walletmodalRef: BsModalRef;
  basic: Boolean = true;
  showbasicDetails: Boolean = true;
  approver: Boolean = false;
  assignroles: Boolean = false;
  initialfslde: any = false;

  fullformData: any = {};
  secureStorageedit: Boolean = false;
  deepStorageedit: Boolean = false;
  highFrequencyedit: Boolean = false;
  deepStorage: any = [];
  secureStorage: any = [];
  highFrequency: any = [];
  policyDetails: any = [];
  usertyperesponse: any = [];
  isEdit: Boolean = false;
  view: Boolean = false;
  initialvalue: Boolean = true;
  requestobj: any = {};
  sldeepstorageId: any = '';
  slsecurestorageId: any = '';
  slhighfrquencyId: any = '';
  walletTypeId: any = '';
  userList: any = [
  ];
  itemValue: any = {
    'username': '',
    'role': 'Signer',
    'userId': '',
    // 'roleName': 'Signer',
  };
  ownerId: any = '';
  ownerRole: any = '';
  ownerName: any = '';
  focusedElement: any;
  compRef: any;
  usersForm: FormGroup;
  roleList: any = [];
  validatedUser: Boolean = false;
  userListInfo: any = [];
  usdDetails: any = [];
  oneUsdvalue: any = '';
  wDetails: any = {
    'walletName': '',
    // 'ownerName': '',
    'noOfUsers': '',
    'noOfSignatures': '',
  };
  errorUserInfo: any = false;
  roleInf: any = [];
  moreAdmins: any = false;
  existinguser: any = false;
  invaliduser: any = false;
  roleselectedinfo: any = [];
  adduserStatus: any = true;
  noOfUsersAvail: Boolean = false;
  selectedItem: any = '';
  errmsg: any = false;
  errinrole: any = false;
  erroinsignsture: any = false;
  userlength: any = '';
  nofouser: any = '';
  basicForm: any;
  walletInfo: any;
  coinlist: any = ['BTC'];
  autosearchresult: any = [];
  imageUrl: any;
  lastlogin: any = '';
  response: any = [];
  coinValue: any = {
    'coinType': ''
  };
  // coinlist: any = [
  //   { 'type': 'Bitcoin(BTC)', 'symbol': 'btc.svg' }
  //   // , {'type' : 'Litetcoin(LTC)', 'symbol': 'lte.svg'}
  // ];
  model: any = {};
  loggedinUserId: any = '';
  client: any = '';
  roles: any;
  role1: string;
  isSuperAdmin: Boolean =  false;
  moreThanTwoWallets: Boolean =  true;
  frequencymesure: any = 'Daily';
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: false
  };
  navigatedFrom: any;
  auditTraillist: any = [];
  auditlistLength: any;
  showAssignroles: Boolean;
  userProfilefirstName: any;
  userProfileLastName: any;
  userProfileEmailID: any;
  isClientActive: Boolean = false;
  autosearchresult1: any = [];
  Tempautosearchresult1: any = [];
  tempSelectValue: any = {};
  clientBasicInfo: any = {};
  notRegUser: boolean;
  constructor(private fb: FormBuilder, private modalService: BsModalService, private router: Router, private pcoefb: FormBuilder,
    private _domSanitizer: DomSanitizer, private ss: SharedService, private gs: GeneralService, private datePipe: DatePipe) {
    const res = JSON.parse(sessionStorage.getItem('firstLogin'));
    console.log(res);
    if (res !== null) {
      this.roles = res['roles'];
      this.loggedinUserId = res['userId'];
      console.log(res);
      // tslint:disable-next-line:max-line-length
      if ((this.roles.indexOf('USER_ADMIN') >= 0)) {
        this.role1 = 'superUser';
      // tslint:disable-next-line:max-line-length
      } else if ((this.roles.indexOf('USER') >= 0) ) {
        this.role1 = 'User';
      // tslint:disable-next-line:max-line-length
      } else if ((this.roles.indexOf('ADMIN_VERIFIER') >= 0 || this.roles.indexOf('ADMIN_CHECKER') >= 0 || this.roles.indexOf('ADMIN_APPROVER')  ) && (this.roles.indexOf('ACCOUNT_VERIFIER') || this.roles.indexOf('ACCOUNT_CHECKER') || this.roles.indexOf('ACCOUNT_APPROVER'))) {
        this.role1 = 'Account';
      // tslint:disable-next-line:max-line-length
    } else if (!(this.roles.indexOf('ADMIN_VERIFIER') >= 0 || this.roles.indexOf('ADMIN_CHECKER') >= 0 || this.roles.indexOf('ADMIN_APPROVER') >= 0  ) && (this.roles.indexOf('ACCOUNT_VERIFIER') >= 0 || this.roles.indexOf('ACCOUNT_CHECKER') >= 0 || this.roles.indexOf('ACCOUNT_APPROVER') >= 0)) {
      this.role1 = 'Account';
    // tslint:disable-next-line:max-line-length
    }  else {
        this.role1 = 'Fusang User';
      }
    }
  }


  ngOnInit() {
    this.workflowObject = JSON.parse(sessionStorage.getItem('workflowObject1'));
    // this.wDetails.ownerName = this.workflowObject.userName;
    this.itemValue.username = this.workflowObject.emailId;
    this.itemValue.userId = this.workflowObject.id;
    this.userList.push(this.itemValue);
    this.ListUserId = this.workflowObject.id;
    this.client = this.workflowObject.clientId;
    console.log(this.workflowObject);
    // this.itemValue.role = this.workflowObject.role;
    // this.itemValue.roleName = this.workflowObject.role;
    this.chkuserRoleForWallets = this.workflowObject.role;
    this.chkuserRoleForWallets.forEach(element => {
      if (element === 'USER') {
        this.isUserSigner = true;
      } else if (element === 'USER_ADMIN') {
        this.isSuperAdmin = true;
      }
    });

    // this.navigatedFrom =  sessionStorage.getItem('fromClient');

    console.log(this.workflowObject);
    this.getCountryList();
    // this.getWorkFlowDataInfo();

    this.basicForm = this.fb.group({
      transactionLimit: ['', Validators.required],
      transactionCap: ['', Validators.required],
      frequencyCap: ['', [Validators.required, Validators.email]],
      walletAddress: ['', [Validators.required]],
      // phoneNumber: ['', [Validators.required, Validators.pattern('^([0-9]{1,5})?([7-9][0-9]{7,9})$')]]
    });

    this.walletInfo = this.fb.group({
      customerName: ['', Validators.required],
      walletName: ['', Validators.required],
      noOfUsers: ['', Validators.required],
      noOfSignatures: ['', Validators.required],
      coinType: ['', Validators.required],
    });
    this.compRef = this;
    this.usersForm = this.fb.group({
      userInput: null
    });
    this.getRolelist();
    const res = JSON.parse(sessionStorage.getItem('firstLogin'));
    this.userId = res['userId'];
    this.username = res['firstName'];
    this.lastlogin = res['lastLoggedInTime'];
    this.imageUrl = res['profilePicUrl'];
    if (this.imageUrl === null) {
      this.imageUrl = './assets/images/sidebar/profile.svg';
    }
    document.getElementById('loggedInImage').setAttribute('src', this.imageUrl);
    // this.walletsummary();
    this.getcurrentusdvalue();
    this.getPolicyDetails();
    this.getUserDetails();
    this.getusetList();
    this.getClientDetails();

  }
  // tslint:disable-next-line:member-ordering
  auditsettings = {
    mode: 'external',
    hideSubHeader: true,
    pager: {
      display: false,
      perPage: 3,
      position: 'right'
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
          return this.datePipe.transform(value, 'yyyy-MM-dd HH:mm:ss');
        }
      }
    }
  };

  getcurrentusdvalue() {
    this.gs.getBitCoin('https://blockchain.info/ticker')
      .subscribe(
        res => {
          this.usdDetails = res;
          this.oneUsdvalue = this.usdDetails.USD.last;
        },
        e => {
        },
        () => {
        }
      );
  }

  getRolelist() {
    this.gs.getRolelist()
      .subscribe(
        res => {
          this.roleList = res['roleList'];
        },
        e => {
        },
        () => {
        }
      );
  }

  public pageChanged(event: any): void {
    this.pageIndex = event.page - 1;
    this.getWorkFlowDataInfo();
  }
  getNextSetItems() {
    this.onLoadgetUserProfileDetails();
  }

  // This function is for basic info edit button
  editForm() {
    this.enableBtns = !this.enableBtns;
    this.editUser = false; // here we are making the flag to false to allow user to edit.

  }
  // This function is for roles edit button
  editRoleForm() {
    // make the form editable  -  Disabled = false
    this.editUserRole = false;
    this.enableBtns = true;
    this.enableModBtns = true;
    this.editUser = false;
  }

  editadminInfo() {
    this.enableBtns = !this.enableBtns;
    this.enableupdateBtns = false;
  }

  // This method will fetch the country list from the local json file.

  getCountryList() {
    const url = '/assets/countrylist.json';
    this.gs.localfileinfo(url)
      .subscribe(
        res => {
          this.countrylist = res['countrylist'];
          this.countrylist.forEach((element) => {
            this.countrylist1.push(element.name);
          });
          // Here we will get the user details
          this.onLoadgetUserProfileDetails();
        },
        e => {
        },
        () => {
        }
      );
  }

  onLoadgetUserProfileDetails() {
    const obj = {
      'userId': this.ListUserId,
    };
    const url = 'user/getUserInfo';
    this.gs.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          const response: any = res.status;
          if (response === 'success') {
            this.getProfileInfo = res['data'];
            // this.clientBasicInfo = {};
            if (this.getProfileInfo.numberWallet > 0) {
              this.moreThanTwoWallets =  true;
            } else {
              this.moreThanTwoWallets =  false;
            }
            this.filteredOptions = this._filter(this.getProfileInfo.country);
            // for each of the country present in the list get . if it matches the country give the take the phone number code.
            for (let i = 0; i < this.countrylist.length; i++) {
              if (this.countrylist[i].name === this.getProfileInfo.country) {
                this.code = this.countrylist[i].dial_code;
                this.countryPhonelen = this.countrylist[i].length;
              }
            }

            this.userProfilefirstName = this.getProfileInfo.firstName;
            this.userProfileLastName = this.getProfileInfo.lastName;
            this.userProfileEmailID = this.getProfileInfo.emailId;
            // this flag is to check whether the client for this user is active or not.
            // if the client is Active , Reactivate button is enabled. Other wise no button is shown.
            this.isClientActive =  this.getProfileInfo.isActiveClient;

            // Below code is for Role tab populating with values on Load
            this.superAdmin = this.getProfileInfo.superAdmin;
            this.userDetailRole = this.getProfileInfo;
            this.userDetailRole.userRoles.forEach(ele => {
              if (ele !== 'USER_ADMIN') {
                this.userDetailRole['userRoles'] = ele;
              }
            });
            //  this.onLoadUserProfileRoleData();
          }
        },
        e => {
        },
        () => {
        }
      );

  }

  // this is for deactivating the user.
  deActivateUser() {
    const obj = {
      'id': this.ListUserId,
      'user': true
    };
    // service to deactive the user
    const url = 'user/deActivate';
    this.gs
      .generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          console.log(res);
          const response: any = res.status;
          // respective toaster messages
          if (response === 'success') {
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton').click();
            this.router.navigate(['/fusang/User/userlist']);
          } else {
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton').click();
          }
        });
  }

  // This is for success popup - toaster message.
  sucspop(successtemplate: TemplateRef<any>) {
    this.successRef = this.modalService.show(successtemplate, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
  }

  onChange(val) {
    if (this.ss.validVal(val)) {
      val = val.toString();
      if (val.length === Number(this.countryPhonelen)) {
        this.invalidphone = false;
      } else {
        this.invalidphone = true;
      }
    }
  }

  cancelModifications() {
    this.enableBtns = false;
    this.editUser = true;
    this.invalidphone = false;
    this.onLoadgetUserProfileDetails();
  }
  // This function is for roles tab modification
  cancelRoleModifications() {
    this.editUser = true;
    this.enableModBtns = false;
    this.editUserRole = true;  // disabled = true
    this.enableBtns = false;
    this.invalidphone = false;
    this.onLoadgetUserProfileDetails();
  }
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.getProfileInfo.phoneNumber = '';
    this.getProfileInfo.country = event.option.value;
    this.countrylist.forEach((element) => {
      if (event.option.value.toLowerCase() === element.name.toLowerCase()) {
        this.code = element.dial_code;
        this.countryPhonelen = element.length;
        console.log(this.countryPhonelen);
        this.phonelength = element.length;
        this.getProfileInfo.phoneNo = this.code + ' ';
      }
    });
  }
  getTheValue(value) {
    this.filteredOptions = this._filter(value);
  }
  // This function will filter the value and show in the dropdown.
  private _filter(value) {
    if (value !== '') {
      const filterValue = value.toLowerCase();
      return this.countrylist1.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
  }

  // This function is to update the modifications of the form that is modified.
  updateModifications() {
    const data = {
      'userId': this.getProfileInfo.id,
      'country': this.getProfileInfo.country,
      'firstName': this.getProfileInfo.firstName,
      'phoneNumber': this.getProfileInfo.phoneNumber,
      'lastName': null

    };
    console.log(data);
    const url = 'user/updateUserInfo';
    this.gs.generalServiceInfo(url, 'post', data)
      .subscribe(
        res => {
          const response: any = res.status;
          if (response === 'success') {
            this.editUser = true;
            this.enableBtns = false;
              this.onLoadgetUserProfileDetails();
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton').click();
          }
        },
        e => {
        },
        () => {
        }
      );
  }

  // this function is for Role change in the Role Tab
  roleSelected(val: any) {
    // this.roleselectedinfo = [];
    // let temp: any = {};
    // for (let i = 0; i < this.roleList.length; i++) {
    //   if (this.roleList[i] === val) {
    //     temp = this.roleList[i];
    //   }
    // }
    // console.log(temp);
    // this.model['role'] = temp;
    // this.model['roleName'] = temp;
  }

  updateUserRoleDetails() {
    const obj = {
      'country': this.getProfileInfo.country,
      'firstName': this.getProfileInfo.firstName,
      'lastName': this.getProfileInfo.lastName,
      'phoneNumber': this.getProfileInfo.phoneNumber,
      'serviceRequestId': null,
      'userId': this.getProfileInfo.id,
      'userRole': []
    };

    if (this.getProfileInfo.superAdmin) {
      obj.userRole.push('USER_ADMIN');
    } else {
      obj.userRole.push('USER');
    }
    const url = 'user/initializeClientUserEditWorkflow';
    this.gs.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          if (res['status'].toString() === 'success') {
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton').click();
            this.cancelRoleModifications();
             this.getWorkFlowDataInfo();
          } else {
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
  // this function is to go back to the previous screen of the workflow tab
  goToIndividualWF() {
    this.enableWorkflowSec = true;
   sessionStorage.setItem('workflowObject1', JSON.stringify(this.workflowObject));
  }
  goToSelectedWorkFlow(element) {
    console.log(element);
    this.enableWorkflowSec = false;
    sessionStorage.setItem('workflowObject1', JSON.stringify(element));
    sessionStorage.setItem('workflowTab', 'workflow');
  }

  getWorkFlowDataInfo() {
    const workFlowDataObject = {
      'clientId': null,
      'pageNumber': this.pageIndex,   // this should be this.pageIndex
      'pageSize': 10,
      'userId': this.ListUserId
    };
    this.ss.showLoading(true);
    const url = 'user/v2/getUserWorkflowList';
    this.gs.generalServiceInfo(url, 'post', workFlowDataObject)
      .subscribe(
        res => {
          const response: any = res.status;
          // let tableData = [];
          if (response === 'success') {
            console.log(res['data']);
            this.onloadUserDetailsWFData = new MatTableDataSource(res['data'].workflowList);
            console.log(this.onloadUserDetailsWFData);
            this.onloadUserDetailsWFData.sort = this.sort;
            this.onloadUserDetailsWFData.paginator = this.paginator;
            this.tabData = res['data'];
            this.resultsLength = Number(res['data'].totalItems);
            this.ss.showLoading(false);
          } else {
            this.ss.showLoading(false);
          }
        },
        e => {
          this.ss.showLoading(false);
          // }
        },
        () => {
        }
      );
  }

  joinwallet(val) {
    const url = 'wallet/join';
    const obj = {
      'userId': this.userId,
      'walletId': val,
      'status': 'joined'
    };
    this.gs.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          this.walletstatus = res;
          // this.walletsummary();
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
          //  this.walletsummary();
        }
      );
  }

  walletsummary() {
    this.ss.showLoading(true);
    const obj = {
      'userId': this.ListUserId,
      'clientId': null,
      'coinType': null,
      'pageNumber': this.pageIndexWallet,
      'pageSize': 10,
      'walletStatus': null,
      'walletType': null
    };
    const url = 'user/summary';
    this.gs.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          const response: any = res.status;
          if (response === 'success') {
            if (this.ss.validVal(res['data'])) {
              this.walletsummaryinfo = res['data'];
              this.walletList = this.walletsummaryinfo['walletList'];
            } else {
              this.walletsummaryinfo = {};
              this.walletList = [];
            }
         } else {
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton1').click();
         }
          this.ss.showLoading(false);
        },
        e => {
          if (e.status === 403) {
            this.ss.showLoading(false);
            this.router.navigate(['']);
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


  ngOnDestroy() {
    this.getProfileInfo = '';
    this.filteredOptions = '';

  }

  createwallet(invitetemplate: TemplateRef<any>) {
    this.walletmodalRef = this.modalService.show(invitetemplate,
      Object.assign({}, { class: 'whitelist_create modal-lg' }, this.config));
    // this.modalRef.hide();
  }

  nexttab() {
    Object.keys(this.basicForm.value).forEach(element => {
      this.fullformData[element] = this.basicForm.value[element];

    });
    console.log(this.fullformData);
    this.showapprover();
  }
  nexttousertab() {

    this.basic = false;
    this.approver = false;
    this.assignroles = true;
   }

  showapprover() {
    Object.keys(this.basicForm.value).forEach(element => {
      this.fullformData[element] = this.basicForm.value[element];

    });
    this.basic = false;
    this.approver = true;
    this.assignroles = false;
  }

  createWallet(addForm: NgForm, wallettemplate: TemplateRef<any>) {
    this.roleInf = [];
    if (this.erroinsignsture !== true) {
      // this.showPageLoading = true;
      const x: any = _.findIndex(this.userList, ['username', this.model.username]);
        console.log(x);
        if ((x === -1) && this.ss.validVal(this.model.username)) {
          this.checkId(this.model.username, addForm, 'create', addForm, wallettemplate);
        } else if (x >= 0) {
          this.existinguser = true;
          this.ss.ToasterMessage('User already exist.');
          document.getElementById('modalButton1').click();
        }
        if (!this.existinguser && !this.notRegUser) {
      let c;
      c = 0;
      this.userList.forEach(function (el) {
        c = (el.role === 'Signer') ? c + 1 : c;
      });
      if (this.wDetails.coinType === null || this.wDetails.coinType === undefined) {
        this.errmsg = true;
        // this.showPageLoading = false;
      } else if (this.userList.length.toString() < this.wDetails.noOfUsers) {
        if (this.validatedUser === true) {
          this.ss.ToasterMessage('Userlist should be equal to number of user.');
          document.getElementById('modalButton1').click();
        }
        // this.showPageLoading = false;
        // this.errorUserInfo = true;
        // this.toastr.error('Userlist should be equal to number of user');
      } else if (this.userList.length.toString() !== this.wDetails.noOfUsers) {
        // this.showPageLoading = false;
        if (this.validatedUser === true) {
          this.ss.ToasterMessage('Userlist should be equal to number of user.');
          document.getElementById('modalButton1').click();
        }
        this.ss.ToasterMessage('Userlist should be equal to number of user.');
        document.getElementById('modalButton1').click();
      } else if (c.toString()  < this.wDetails.noOfSignatures) {
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
          if (this.userList.length > 0) {
            this.validatedUser = true;
          } else {
            this.ss.ToasterMessage('"' + this.model.username + '" is not a registered user!');
            document.getElementById('modalButton1').click();
            return false;
          }
        }
        this.wDetails['typeOfWalletId'] = this.walletTypeId;
        this.wDetails['createdBy'] = this.loggedinUserId;
        // this.wDetails['ownerId'] = this.ListUserId;
        this.wDetails['userList'] = this.userList;
        this.wDetails['ownerId'] = this.loggedinUserId;
         this.wDetails['clientId'] = this.client;
        this.moreAdmins = false;
        this.walletmodalRef.hide();
        this.modalRefwallet = this.modalService.show(wallettemplate, Object.assign({}, { class: 'whitelist modal-lg' }, this.config)); }
      }
    }
  }
  roleuserSelected(value, index) {
    console.log(value);
    console.log(index);
  }

  public focusFunction(element) {
    this.focusedElement = element;
  }

  deleterow(i) {
    this.userList.splice(i, 1);

    this.userListInfo.splice(i, 1);
    this.userListInfo.splice(this.userListInfo.length - 1, 1);
  }

  checkId(val, formName, type, addUserForm, wallettemplate) {
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
      this.userList.push(this.model);
      this.validatedUser = false;
      let c;
      c = 0;
      this.userList.forEach(function (el) {
        c = (el.role === 'Signer') ? c + 1 : c;
      });
      if (c.toString() > this.wDetails.noOfSignatures) {
        if (this.validatedUser === true) {
          this.ss.ToasterMessage('Signers should be equal to number of signatures.');
          document.getElementById('modalButton1').click();
          this.userList.splice(-1, 1);
        }
      }
      if (this.userList.length.toString() === this.wDetails.noOfUsers) {
        this.initialfslde = false;
      }
      this.model = {
        'username': '',
        'role': ''
      };
      this.model = {
        'username': '',
        'role': '',
        // 'roleName': ''
      };
    } else {
      this.validatedUser = true;
      this.ss.ToasterMessage('"' + this.model.username + '" is not a registered user!');
      document.getElementById('modalButton1').click();
    }
    this.errorUserInfo = false;
  }
  this.getusetList();
}
  clickagain(addForm, wallettemplate) {
    this.createWallet(addForm, wallettemplate);
  }

  onuserChange(val) {
    if (this.initialfslde === true) {
      this.initialfslde = false;
      console.log(this.model);
      this.model = {
        'username': null,
        'role': null,
        // 'roleName': null
      };
    }
    this.adduserStatus = true;
  }

  onsignatureChange(val) {
    if (Number(val) > Number(this.wDetails.noOfUsers)) {
      this.erroinsignsture = true;
      // this.showPageLoading = false;
    } else {
      this.erroinsignsture = false;
    }
  }
  coinSelected(item) {
    this.wDetails.coinType = item;
    this.wDetails.ownerId = this.ownerId;
  }

  userroleSelected(val, index) {
    console.log(val);
    this.model['role'] = val;
    // this.model['roleName'] = val;
    this.selectedItem = val;
    // this.userList.role = val.value;
    // this.userList.roleName = val.name;
    for (let i = 0; i < this.userList.length; i++) {
      if (i === index) {
        this.userList[i].role = val;
        // this.userList[i].roleName = val;
      }
    }
  }
  deleteextrarow() {
    this.initialfslde = false;
    this.model = {
      'username': null,
      'role': null,
      // 'roleName': null
    };
    this.getusetList();

  }
  // addUser(addForm: NgForm, wallettemplate) {
  //   this.roleInf = [];
  //   this.moreAdmins = false;
  //   if (this.wDetails.noOfUsers > 0 && this.wDetails.noOfSignatures > 0) {
  //     this.noOfUsersAvail = false;
  //     this.initialfslde = true;
  //     // let u;
  //     // u = this.model.username;
  //     const x: any = _.findIndex(this.userList, ['username', this.model.username]);
  //     if ((x === -1) && this.ss.validVal(this.model.username)) {
  //       this.checkId(this.model.username, addForm, '', addForm, wallettemplate);
  //     } else if (x >= 0) {
  //       this.existinguser = true;
  //       this.ss.ToasterMessage('User already exist.');
  //       document.getElementById('modalButton1').click();
  //     }
  //   } else {
  //     // this.noOfUsersAvail = true;
  //     this.ss.ToasterMessage('Enter number of sigmatuers more than 0.');
  //     document.getElementById('modalButton1').click();
  //   }
  // }
  addUser(addUserForm: NgForm, wallettemplate) {
    console.log(this.model);
    this.roleInf = [];
    this.moreAdmins = false;
    if (this.wDetails.noOfUsers > 0 && this.wDetails.noOfSignatures > 0) {
      this.noOfUsersAvail = false;
      this.initialfslde = true;
        const x: any = _.findIndex(this.userList, ['username', this.model.username]);
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

  inviteCustomer(invitetemplate: TemplateRef<any>) { }
  editpolicy(value) {
    this.requestobj['typeOfUserId'] = value;
    this.walletTypeId = value;
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
    this.view = true;
    this.initialvalue = false;
  }
  // Policy Details
  getPolicyDetails() {
    const url = 'user/policy/getGlobalWalletTypePolicy';
    this.gs.generalServiceInfo(url, 'post', '')
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
          if (e.status === 403 ) {
            this.ss.showLoading(false);
            this.router.navigate(['']);
            sessionStorage.removeItem('firstLogin');
            sessionStorage.removeItem('useremailid');
            sessionStorage.removeItem('accessToken');
          } else if ( e.status === 401) {
            this.ss.showLoading(false);
            this.router.navigate(['']);
            sessionStorage.removeItem('firstLogin');
            sessionStorage.removeItem('useremailid');
            sessionStorage.removeItem('accessToken');
          }
        },
        () => {
        }
      );
  }
  redirect(val) {
    console.log(this.workflowObject);
    this.ss.WorkflowObjectfromadmin(this.workflowObject);
    if ( val.status  === 'Completed' || val.status  === 'Freezed' || val.status  === 'Incomplete') {
      this.ss.Walletid(val.walletId);
      sessionStorage.setItem('currentWalletStatus', val.status);
      sessionStorage.setItem('fromNavigation', 'userProfileDetails');
      this.router.navigate(['/fusang/personalwallet']);
    }
  }
  // userSelected(val) {
  //   if (val.id) {
  //     this.model.userId = val.id;
  //     this.model.username = val.username;
  //     this.roleList = val.userRole;
  //     this.model.role = val.userRole[0];
  //     console.log(this.roleList);
  //     if (this.model.role === 'USER_SIGNER') {
  //       this.model.roleName = 'Signer';
  //      } else if (this.model.role === 'USER_VIEWER') {
  //        this.model.roleName = 'Viewer';
  //      }
  //   } else {
  //     this.ss.ToasterMessage('Please select the user in list');
  //     document.getElementById('modalButton1').click();
  //   }

  // }
  onChangeuser(val) {
    console.log('autosearch', this.client);
    // setTimeout(() => {
    this.nofouser = val;
    if (this.ss.validVal(val)) {
      if (val.length > 3) {
        const obj = {
          'searchString': val,
          'clientId': this.client
        };
        const url = 'user/autoSearch';
        this.gs.autoSearch(url, 'post', obj)
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
    //  }, 4000);
  }

  clearWalletData() {
  this.isEdit =  false;
  this.walletTypeId = null;
  // this.walletName = null;
  this.wDetails = {
    'walletName': '',
    // 'ownerName': this.workflowObject.userName,
    'noOfUsers': '',
    'noOfSignatures': '',
  };
  this.coinValue = {
    'coinType': ''
  };
  this.userList = [];
  this.userList.push(this.itemValue);
  //  this.roleList  = [];
  this.basic = true;
  this.approver = false;
  this.assignroles = false;
 this.model = {
              'username': null,
              'role': null,
              // 'roleName': null
            };
   this.walletmodalRef.hide();
  }

  // Below function is called when we click on wallets tab (loader is applied)
  tabClick(selectedTab) {
   if (selectedTab.tab['textLabel'] === 'Wallets') {
     this.walletsummary();
  } else if (selectedTab.tab['textLabel'] === 'Audit Trial') {
    this.getUserDetails();
  } else if (selectedTab.tab['textLabel'] === 'Workflow') {
    this.getWorkFlowDataInfo();
  }
     sessionStorage.setItem('workflowObject1', JSON.stringify(this.workflowObject));
   }
   numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  vcValidation(event) {
    if (event.length === 6) {
      this.verificationCodeValid = true;
    } else {
      this.verificationCodeValid = false;
    }
  }
   authPublic(auth: TemplateRef<any>) {
    this.modalRefauth = this.modalService.show(auth, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
  }

  authSuccess() {
    const obj: any = {};
    obj.verificationCode = this.authmodel.googleCode;
    this.gs.generalServiceInfo('user/validatedToPerformAction', 'post', obj)
      .subscribe(
        res => {
          const response: any = res.status;
          if (response === 'success') {
            this.modalRefauth.hide();
            this.authmodel.googleCode = '';
            this.confirmClaim();
          } else if (response === 'failure') {
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton1').click();
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
  confirmClaim() {
    const url = 'wallet/create';
        this.gs.generalServiceInfo(url, 'post', this.wDetails)
          .subscribe(
            res => {
              this.response = res['data'];
              // this.showPageLoading = false;
              this.ss.ToasterMessage(res['message']);
              document.getElementById('modalButton').click();
              // this.router.navigateByUrl('/fusang/walletcreate');
              // this.invitetemplate.
              this.walletmodalRef.hide();
              this.clearWalletData();
                },
            e => {
              this.userListInfo = [];
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
  getUserDetails() {
    const obj = {
      'clientId':  this.client,
      'pageNumber': this.pageIndexaudit,
      'pageSize': 20,
      'userId': this.ListUserId
    };
    this.ss.showLoading(true);
    const url = 'user/v2/audit';
    this.gs.generalServiceInfo(url, 'post', obj)
            .subscribe (
              res => {
                this.auditTraillist = res['data'];
                console.log(this.auditTraillist);
                // this.auditlistLength = res['data'].length;
                this.ss.showLoading(false);
                this.auditTraillist = res['data'].auditList;
                this.auditlistLength = res['data'].totalItems;
              },
              e => {
                this.userListInfo = [];
                this.ss.showLoading(false);
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

  // Re activation of the user

  reactivateUser(invitetemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(invitetemplate, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
  }
   // This popup is for re activating.
   reActivatePop(successtemplate: TemplateRef<any>) {
    // This function will update the roles what we modified
    // this.updateUserRoleDetails();
    this.modalRef.hide();
    this.successRef = this.modalService.show(successtemplate, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
  }
  restorePrevData() {
    this.cancelModifications();
    this.modalRef.hide();
    this.successRef.hide();
    // below function will make the basic info tab as active when you close or cancel the operation.
    this.showbasicInfo();
  }

  showbasic() {
    this.basic = true;
    this.approver = false;
    this.assignroles = false;
  }

  // First Tab which contains the basic information
  showbasicInfo() {
  this.showbasicDetails = true;
  this.showAssignroles = false;
}

// Second tab which contains the Roles information
showRolesInfo() {
  this.showbasicDetails = false;
  this.showAssignroles = true;
}

  // this is for ReActivating the user.
  reActivateUserDetails() {
    const obj = {
      'clientId': null,
      'userId': this.getProfileInfo.id,
      'country': this.getProfileInfo.country,
      'emailId': this.getProfileInfo.emailId,
      'firstName': this.getProfileInfo.firstName,
      'lastName': this.getProfileInfo.lastName,
      'phoneNumber': this.getProfileInfo.phoneNumber,
      'userRoles': []
    };
    if (this.getProfileInfo.superAdmin) {
      obj.userRoles.push('USER_ADMIN');
    } else {
      obj.userRoles.push('USER');
    }
    const url = 'user/v2/reactivateClientUser';
    this.gs
      .generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          console.log(res);
          const response: any = res.status;
          if (response === 'success') {
            this.ss.ToasterMessage(res['message']);
             document.getElementById('modalButton').click();
             this.onLoadgetUserProfileDetails();
             this.getWorkFlowDataInfo();
             this.router.navigate(['/fusang/User/userlist']);
          } else {
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton').click();
          }
        });
  }

  // public pageChangedaudit(event: any): void {
  //   this.pageIndex = event.page - 1;
  //   this.getUserDetails();
  // }
  getusetList() {
    this.autosearchresult1 = [];
    const obj = {
      'searchString': '',
      'clientId': this.client
    };
    const url = 'user/autoSearch';
    this.gs.autoSearch(url, 'post', obj)
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
      // this.roleList = this.tempSelectValue.userRole;
      // this.model.role = this.roleList[0];
      // if (this.model.role === 'USER_SIGNER') {
      //  this.model.roleName = 'Signer';
      // } else if (this.model.role === 'USER_VIEWER') {
      //   this.model.roleName = 'Viewer';
      // }
    // } else {
    //   this.ss.ToasterMessage('Please select the user in list');
    //   document.getElementById('modalButton1').click();
    // }
    }
  public pageChangedaudit(event: any): void {
    this.pageIndexaudit = event.page - 1;
    this.getUserDetails();
  }
  CloseAuth() {
    this.modalRefauth.hide();
    this.authmodel.googleCode = '';
    this.clearWalletData();
  }

  editFormClient() {
    this.enableBtns1 = true;
    this.editUser1 = false; // here we are making the flag to false to allow user to edit.
  }
  resetClientInfo() {
        this.enableBtns1 = false;
        this.editUser1 = true;
         this.getClientDetails();
  }
  // This function is for updating user information after modifications.
      updateClientInfo() {
        const data = {
          'id': this.clientBasicInfo.id,
          'clientName': this.clientBasicInfo.clientName,
          'country': this.clientBasicInfo.country,
          'domainName': this.clientBasicInfo.domainName,
          'address': this.clientBasicInfo.address,
          'notes': this.clientBasicInfo.notes
        };
        const url = 'client/updateClientDetails';
      this.gs.generalServiceInfo(url, 'post', data)
      .subscribe(
        res => {
          const response: any = res.status;
          if (response === 'success') {
            this.editUser1 = true;
            this.enableBtns1 = false;
            this.getClientDetails();
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton').click();
            this.enableBtns1 = true;
            this.editUser1 = false;
          } else {
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

      getClientDetails() {
        const obj = {
          'clientId': this.client
        };
       const url = 'client/getClientDetails';
       this.gs.generalServiceInfo(url, 'post', obj)
       .subscribe(
         res => {
           const response: any = res.status;
           if (response === 'success') {
             this.editUser1 = true;
             this.enableBtns1 = false;
             this.clientBasicInfo = res['data'];
           }
              },
         e => {
         },
         () => {
         }
       );
        }
        public pageChangewallet(event: any): void {
          this.pageIndexWallet = event.page - 1;
          this.walletsummary();
        }
}

