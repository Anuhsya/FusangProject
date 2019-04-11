import { Component, OnInit, TemplateRef } from '@angular/core';
import { ApproverInformation } from '../users/invite-customers/approverInfo';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { GeneralService } from '../../general.service';
import { SharedService } from '../../shared.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import * as _ from 'lodash';
import { TransitionCheckState } from '@angular/material';

import { MatAutocompleteSelectedEvent } from '@angular/material';
import { map } from 'rxjs/operators';
import { disableDebugTools } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-onboardflow',
  templateUrl: './onboardflow.component.html',
  styleUrls: ['./onboardflow.component.css'],
})
export class OnboardflowComponent implements OnInit {
  UserListPhone = false;
  countrycode: any;
  phonelength: any;
  phoneNumber: any = '';
  filteredOptions2: Observable<string[]>;
  filteredOptions1: Observable<string[]>;
  addUserFrom: any;
  EditBasic: any = true;
  EditBasicPC: any = true;
  isenableform1: any = false;
  editUserRole: any = true;
  // edit user starts
  editUser: any = true;
  //  edit user ends
  ExpandText: any = '';
  x: any = [];
  filteredValues: any = [];
  totalFilteredValues: any = [];
  showEdit: Boolean = true;
  showEdit1: Boolean = true;
  showEdit1Client: Boolean = true;
  clientBasicInfoEdit: Boolean = true;
  clientBasicInfoEditNW: Boolean = true;
  clientUserEdit = false;
  showEdit1Clientvalue: Boolean = true;
  showEditUB: Boolean = true;
  modalRef1: BsModalRef;
  modalRef: BsModalRef;
  modalRefactinconfrm: BsModalRef;
  modalRefsaveconfirm: BsModalRef;
  model: any = {};
  rejectRef: BsModalRef;
  confirmRef: BsModalRef;
  reassignRef: BsModalRef;
  workflowType: any = '';
  workflow: any = [];
  approve: any = '';
  reassign: any = '';
  reject: any = '';
  workflowObject: any = {};
  onbordingDetails: any = {};
  transactionDetails: any = [];
  usdDetails: any;
  oneUsdvalue: any = '';
  usdInfo: any = [];
  dollerInfo: any = [];
  insightsInfo: any = {};
  insightpopupdeatils: any = {};
  departmentdetails: any = [];
  workflowbtn = 'Verify';
  dataList: any;
  cType: boolean;
  allExpandState: any;
  tabShow: string;
  userRoleDetails: any = [];
  countrylist: any = [];
  code: any = '';
  userInfoCode: any;
  googleAuth = true;
  Yubikey = false;
  userId: any = [];
  ploicyinsightDetails: any = [];
  policyDetail: { 'type': string; 'count': number; 'details': { 'message': string; 'createdDate': string; }[]; }[];
  policyVailatedata: any;
  countryPhonelen: any;
  filteredOptions: any = [];
  countrylist1: any = [];
  userType: any;
  userType1: any = [];
  userTYpeOptions: any = [];
  verificationCodeValid = false;
  response: any = [];
  roles: any;
  role: string;
  showExtraClass = true;
  walletAddressWhitelist: any = [];
  googleCode: '';
  authmodel: any = {};
  userName: any;
  userDetailsList: any = [];
  userDetailsListfilterd: any = [];
  filterdDetailsList: any = [];
  roleList: any = [];
  addDept = false;
  roleDepartmentObj: any = {};
  roleInformationList: any = [];
  customerInfo: any = [];
  tempObj: any = {};
  roleValue: any = [];
  isEditUser = true;
  isEditBtn = false;
  isReject: any;
  invalidphone: boolean;
  // invite role changes ends
  countindex: any;
  adminRoleData: any = [];
  finalData: any = [];
  finalDataTwo: any = [];
  adminId: any;
  enableBtns: Boolean = true;
  // config = {
  //   backdrop: true,
  //   ignoreBackdropClick: true
  // };
  // customer edit starts
  userRelationshipManagerMap: any = [];
  showEditRoleManagement = true;
  userManagementEdit = true;
  // customer edit starts
  test: any = 'test';
  showexpandall: Boolean = true;
  allExpandStatus: Boolean = false;

  // >>>>>>> 1e13a913fc13acc0e5421ea43243d46acc56a273
  // tslint:disable-next-line:max-line-length
  updatedPolicyDetail: any = [];
  Daily: any = 'Daily';
  tempx: any = [];
  fulldata: any = [];
  clientDetails: any = {};
  TempclientDetails: any = [];
  clientUserDetails: any = {};
  walletDetails: any = {};
  userList: any = [];
  walletuserList: any = [];
  isenableform: boolean;
  policy: any = [];
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: false
  };
  userrolemodification: Boolean = false;
  rolemodification: Boolean = false;
  adminBasicInfo: Boolean = false;
  userBasicInfo: Boolean = false;
  userListInfo: any = [];
  showEditwallet: Boolean = true;
  showEditwallet1: Boolean = true;
  coinlist: any = ['BTC'];
  autosearchresult: any = [];
  autosearchresult1: any = [];
  Tempautosearchresult1: any = [];
  client: any = '';
  initialfslde: Boolean = false;
  modelvalue: any = {
    'username': '',
    'role': '',
  };
  updatewalletrequestobj: any = {
    'createdBy': '',
    'noOfSignatures': '',
    'noOfUsers': '',
    'ownerId': '',
    'userList': [],
    'walletId': '',
  };
  waletpolicyreqobj: any = {
    'maximumAllowedIp': '',
    'maximumAllowedWallets': '',
    'minimumBalance': '',
    'serviceCharge': '',
    'serviceRequestId': 0,
    'subcriptionCharge': '',
    'transactionLimit': '',
    'transactionTimeEnd': '',
    'transactionTimeStart': '',
    'transactionUnitOfMeasure': '',
    'transactionVolumeCap': '',
    'walletAddressWhitelist': '',
    'walletAddresslist': [],
    'walletId': 0,
    'walletTimeZone': ''
  };
  adduserStatus: any = true;
  erroinsignsture: any = false;
  validatedUser: Boolean = false;
  moreAdmins: any = false;
  existinguser: any = false;
  addUserNameField: Boolean = false;
  errorUserInfo: any = false;
  noOfUsersAvail: Boolean = false;
  tempSelectValue: any = {};
  focusedElement: any;
  confirmwalletupdate: Boolean = false;
  showupdatebtn: Boolean = false;
  makeitedit: Boolean = true;
  countrytimezonelist: any = [];
  countrytimezonelist1: any = [];
  filteredOptionstime: any = [];
  showwalletfield: Boolean = false;
  isWalletValid: Boolean = true;
  itemValuewalt: any = {};
  newwalletaddress: any = [];
  workflowwalletDetails: any = [];
  walletDetailsworkflow: any = [];
  uitofmeasureerror: any = false;
  supadminList: any[];
  inviteRequestObj: any = {};
  editUserFL: Boolean = true;
  firstClick: any = false;
  sldeepstorageId: any = '';
  slsecurestorageId: any = '';
  slhighfrquencyId: any = '';
  policyupdatedetails: any = [];
  usertyperesponse: any = [];
  deepStorage: any = [];
  secureStorage: any = [];
  highFrequency: any = [];
  policyDetails: any = [];
  secureStorageedit: any;
  deepStorageedit: any;
  highFrequencyedit: any;
  workflowwallrttype: any = '';
  workflowtypeOfWalletId: any = '';
  endtimestamperror: Boolean = false;
  timestamperror: Boolean = false;
  starttimeerror: Boolean = false;
  endtimeerror: Boolean = false;
  validateTimeZone: Boolean = false;
  walletnumber: Boolean = false;
  adminPreviousRole: any = [];
  tempx1: any[];
  walletOlduserList: any = [];
  notRegUser: boolean;
  constructor(private modalService: BsModalService,
    private gs: GeneralService, private ss: SharedService, private toastr: ToastrService, private router: Router,
    private datePipe: DatePipe, private fb: FormBuilder, private titlecasePipe: TitleCasePipe) {
    let res = JSON.parse(sessionStorage.getItem('firstLogin'));
    if (res !== null) {
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
      this.ss.firstLogin$.subscribe(res1 => res = res1);
    }
  }
  ngOnInit() {
    this.workflowObject = JSON.parse(sessionStorage.getItem('workflowObject1'));
    // console.log(this.workflowObject);
    this.tabShow = sessionStorage.getItem('workflowTab');
    this.ss.storedValue(sessionStorage.getItem('workflowTab'));
    this.getcountrylist();
    this.gettiket();
    // console.log(this.walletAddressWhitelist);
    if (this.tabShow === 'ticket') {
      this.workflowType = this.workflowObject.workflowType;
      if (this.workflowObject.ticketStatus === 'Open') {
        this.allExpandState = false;
        this.ExpandText = 'Expand';
      } else {
        this.allExpandState = true;
        this.ExpandText = 'Collapse';
      }
    } else if (this.tabShow === 'customer') {
      //  this.workflowObject.info = 'Onboarding of ' + this.workflowObject.firstName;
      this.workflowType = 'CustomerInvite';
      this.allExpandState = true;
      this.ExpandText = 'Collapse';
    } else if (this.tabShow === 'user') {
      // this.workflowObject.info = 'Onboarding of ' + this.workflowObject.firstname;
      this.workflowType = 'AdminInvite';
    } else if (this.tabShow === 'workflow') {
      this.workflowType = this.workflowObject.workflowType;
    } else if (this.tabShow === 'client') {
      // this.workflowObject.info = 'Onboarding of ' + this.workflowObject.clientName;
      this.workflowType = 'ClientInvite';
    } else if (this.tabShow === 'ClientUser') {
      // this.workflowObject.info = 'Onboarding of ' + this.workflowObject.userName;
      this.workflowType = 'UserInvite';
    }
    this.getinvitedata();
    this.getWorkflow();
    // servicid 41
    // trns servie 23

    // this.workflow = [
    //   {
    //     'status': 'Pending',
    //     'isDone': true
    //   },
    //   {
    //     'status': 'I-Verified',
    //     'isDone': true
    //   },
    //   {
    //     'status': 'I-Checked',
    //     'isDone': true
    //   },
    //   {
    //     'status': 'I-Approved',
    //     'isDone': false
    //   },
    //   {
    //     'status': 'SignedUp',
    //     'isDone': false
    //   },
    //   {
    //     'status': 'S-Verified',
    //     'isDone': false
    //   },
    //   {
    //     'status': 'S-Checked',
    //     'isDone': false
    //   },
    //   {
    //     'status': 'S-Approved',
    //     'isDone': false
    //   },
    //   {
    //     'status': 'Active',
    //     'isDone': false
    //   }
    // ];
    // this.filteredOptions = this.onbordingDetails
    // .get('country')
    // .valueChanges
    // .pipe(
    //   map(value => {
    //     return this._filter(value);
    //   })
    // );
    const regemail = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    this.addUserFrom = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', ],
      emailId: ['', [Validators.required, Validators.pattern(regemail)]],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      role: [''],
      superAdmin: [false],
    });
    this.filteredOptions2 = this.addUserFrom
      .get('country')
      .valueChanges
      .pipe(
        map(value => {
          return this._filter(value);
        })
      );
    this.getRolelist();
    this.getcountryTimezone();
    this.getpolicyDetails();
    this.getusetList();
  }
  getSavedCountryList(val) {
    this.filteredOptions1 = _.filter(this.countrylist1, (o) => {
      return _.startsWith(o.toLowerCase(), val.toLowerCase());
    });
  }
  onSelectionChangeduser(event: MatAutocompleteSelectedEvent, itemValue) {
    this.countrylist.forEach((element) => {
      if (event.option.value.toLowerCase() === element.name.toLowerCase()) {
        itemValue.code = element.dial_code;
        itemValue.countryPhonelen = element.length;
        itemValue.phoneNumber = '';
      }
    });
  }
  getTheValue(val) {
    this.filteredOptions = this._filter(val);
  }
  // private _filter(value) {
  //   if (this.ss.validVal(value)) {
  //   const filterValue = value.toLowerCase();
  //   return this.countrylist1.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  // }
  // }
  private _filter(value) {
    if (this.workflowType === 'UserPolicyChange' || this.workflowType === 'GlobalPolicyChange') {
      if (this.ss.validVal(value)) {
        const filterValue = value.toLowerCase();
        return this.countrytimezonelist1.filter(option => option.toLowerCase().indexOf(filterValue) >= 0);
      }
    } else {
      if (this.ss.validVal(value)) {
        const filterValue = value.toLowerCase();
        return this.countrylist1.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
      }
    }
  }
  onSelectionChangednextuser(event: MatAutocompleteSelectedEvent) {
    this.addUserFrom.country = event.option.value;
    this.addUserFrom.phoneNumber = '';
    this.countrycode = '';
    this.phoneNumber = '';
    this.countrylist.forEach((element) => {
      if (event.option.value.toLowerCase() === element.name.toLowerCase()) {
        this.countrycode = element.dial_code;
        this.countryPhonelen = element.length;
        this.phonelength = element.length;
        this.addUserFrom.phoneNo = this.countrycode + ' ';
      }
    });
  }
  expand() {
    this.allExpandState = !this.allExpandState;
    if (this.allExpandState) {
      this.ExpandText = 'Collapse';
    } else {
      this.ExpandText = 'Expand';
    }
  }
  editCustomerInfo() {
    this.showEdit = false;
    this.editUser = false;
  }
  edituserBasicInfo() {
    this.showEditUB = false;
    if (this.workflowType === 'UserInvite') {
      this.EditBasic = false;
    }
    // tslint:disable-next-line:max-line-length
    if (this.workflowType === 'UserInvite' || this.workflowType === 'UserEdit' || this.workflowType === 'UserReactivate') {
      this.editUserRole = false;
      this.EditBasicPC = false;
    }
  }
  resetuserBasicInfo() {
    this.showEditUB = true;
    this.EditBasic = true;
    this.invalidphone = false;
    // tslint:disable-next-line:max-line-length
    if (this.workflowType === 'UserInvite' || this.workflowType === 'UserEdit' || this.workflowType === 'UserDeactivate' || this.workflowType === 'UserReactivate') {
      this.editUserRole = true;
      this.EditBasicPC = true;
    }
    this.getinvitedata();
  }
  resetCustomerInfo() {
    this.showEdit = true;
    this.editUser = true;
    this.editUserFL = true;
    this.getinvitedata();
  }
  // saveCustomerInfo() {
  //   let typeId;
  //   if ( this.workflowType === 'CustomerInvite') {
  //   for (let i = 0 ; i < this.userType.length ; i++) {
  //     if (this.userType[i].userType === this.onbordingDetails.userType) {
  //       typeId = this.userType[i].id;
  //     }
  //   }
  //   } else if (this.workflowType = 'AdminInvite') {
  //     typeId = null;
  //   }
  //   const data = {
  //     'country': this.onbordingDetails.country,
  //     'firstName': this.onbordingDetails.firstName,
  //     'lastName': this.onbordingDetails.lastName,
  //     'phoneNumber': this.onbordingDetails.phoneNumber,
  //     'userId': this.onbordingDetails.id
  //   };
  //   const url = 'user/updateUserInfo';
  // this.gs.generalServiceInfo(url, 'post', data)
  // .subscribe(
  //   res => {
  //     this.showEdit = true;
  //     this.editUser = true;
  //     this.getinvitedata();
  //   },
  //   e => {
  //   },
  //   () => {
  //   }
  // );
  // }
  getDepartment() {
    let halfData1;
    this.tempx1 = [];
    halfData1 = this.adminPreviousRole;
    this.ss.showLoading(true);
    const url = 'department/getDepartmentList?isAll=true';
    this.gs.generalServiceInfo(url, 'post', '')
      .subscribe(
        res => {
          this.tempx1 = res['data'];
          this.finalDataTwo = [];
        this.finalDataTwo = _.map(this.tempx1, function (o) {
              const obj = _.find(halfData1, function (p) { return p.departmentId === o.id; });
              if (obj !== undefined) {
                o.role = _.map(o.role, function (r) {
                  const roleObj = _.find(obj.userRole, function (s) { return _.includes(s, _.toUpper(r)); });
                  //  let str ={};
                  // str[r] = roleObj ? true : false;
                  const str = { 'userRole': r, 'isEnable': roleObj ? true : false };
                  return str;
                });
              } else {
                o.role = _.map(o.role, function (r) {
                  const roleObj = _.find(o.userRole, function (s) { return _.includes(s, _.toUpper(r)); });
                  //  let str = {};
                  //  str[r] = roleObj ? true : false;
                  const str = { 'userRole': r, 'isEnable': roleObj ? true : false };
                  return str;
                });
              }
              return o;
            });
          this.ss.showLoading(false);
        },
        e => {
          this.ss.showLoading(false);
        },
        () => {

        }
      );
  }
  getinvitedata() {
    this.x = [];
    this.tempx = [];
    this.ss.showLoading(true);
    const url = 'department/getDepartmentList?isAll=true';
    this.gs.generalServiceInfo(url, 'post', '')
      .subscribe(
        res => {
          this.x = res['data'];
          this.tempx = res['data'];
          // this.getRoleData();
          // this.roleValue = this.x[0].role;
          // this.roleInformationList = this.x[0].role;
          this.getdetials();
          this.ss.showLoading(false);
        },
        e => {
          this.ss.showLoading(false);
        },
        () => {

        }
      );
  }
  policyinsight(bittransfer: TemplateRef<any>, value) {
    this.ploicyinsightDetails = value;
    this.modalRef = this.modalService.show(
      bittransfer,
      Object.assign({}, { class: 'policyviolationpopup1 modal-lg' }, this.config)
    );
    // this.policyVailatedata = polycyData;
  }

  onDeptSelect(item) {
    const url = 'department/getUserDepartmentRoleList';
    let data: any;
    data = {
      'id': item.id
    };
    this.gs.generalServiceInfo(url, 'post', data)
      .subscribe(
        res => {
          // this.x = res;
          this.dataList = res['data'];
        },
        e => {
        },
        () => {
        }
      );
  }
  vcValidation(event) {
    if (event.length === 6) {
      this.verificationCodeValid = true;
    } else {
      this.verificationCodeValid = false;
    }
  }
  validate(confirmchecking, rejectverification, reassign) {
    const obj: any = {};
    obj.verificationCode = this.authmodel.googleCode;

    this.gs.generalServiceInfo('user/validatedToPerformAction', 'post', obj)
      .subscribe(
        res => {
          const response: any = res.status;
          if (response === 'success') {
            // this.ss.ToasterMessage(res['message']);
            // document.getElementById('modalButton').click();
            this.authmodel.googleCode = '';
            this.lastloggedin(confirmchecking, rejectverification, reassign);
          } else {
            this.authmodel.googleCode = '';
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton1').click();
          }
        },
        e => {
          if (e.status === 403) {
            this.authmodel.googleCode = '';
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
  lastloggedin(confirmchecking, rejectverification, reassign) {
    const url = 'user/login/save';
    const obj = {
      'userId': this.userId,
    };
    this.gs.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          this.response = res;
          if (this.role === 'Customer') {
            this.router.navigate(['/fusang/walletcreate']);
          } else {
            if (this.isReject === 1) {
              this.modalRef.hide();
              this.rejectVerification(rejectverification);
              this.authmodel.googleCode = '';
            } else if (this.isReject === 0) {
              this.modalRef.hide();
              this.confirmChecking(confirmchecking);
              this.authmodel.googleCode = '';
            } else {
              this.modalRef.hide();
              this.reassignPopUP(reassign);
              this.authmodel.googleCode = '';
            }
            // this.router.navigate(['/fusang/ticket']);

          }
        },
        e => {
          if (e.status === 403) {
            this.router.navigate(['']);
            this.authmodel.googleCode = '';
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
  onFocus(val) {
    // console.log(val);
    this.filteredValues = this.dataList[val];
    this.totalFilteredValues = this.dataList[val];
  }
  onValChange(val, mod) {
    if (typeof (val) === 'string' || val === '') {
      // console.log('number');
      this.filteredValues = _.filter(this.totalFilteredValues, (o) => {
        return o.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    }
  }

  confirmChecking(confirmchecking: TemplateRef<any>) {
    this.confirmRef = this.modalService.show(confirmchecking, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
    this.authmodel.googleCode = '';
  }
  rejectVerification(rejectverification: TemplateRef<any>) {
    this.authmodel.googleCode = '';
    this.rejectRef = this.modalService.show(rejectverification, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
  }
  reassignPopUP(rejectverification: TemplateRef<any>) {
    this.authmodel.googleCode = '';
    this.reassignRef = this.modalService.show(rejectverification, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
  }

  getWorkflow() {
    this.cType = false;
    // this.ss.workflowObject$.subscribe(
    //   res => {
    //     this.workflowObject = res;
    //     console.log(this.workflowObject);
    //     this.workflowType = this.workflowObject.workflowType;
    //    }
    //  );
    let data;
    if (this.tabShow === 'ticket') {
      data = {
        'serviceRequestId': this.workflowObject['id'],
        'userId': null,
        'workflowId': null,
        'clientId': null
      };
    } else if (this.tabShow === 'customer' || this.tabShow === 'user' || this.tabShow === 'ClientUser') {
      data = {
        'serviceRequestId': null,
        'userId': this.workflowObject['id'],
        'workflowId': null,
        'clientId': null
      };
    } else if (this.tabShow === 'workflow') {
      data = {
        'serviceRequestId': null,
        'userId': null,
        'workflowId': this.workflowObject['id'],
        'clientId': null
      };
    } else if (this.tabShow === 'client') {
      data = {
        'serviceRequestId': null,
        'userId': null,
        'workflowId': null,
        'clientId': this.workflowObject['id']
      };
    }
    this.ss.showLoading(true);
    const url = 'service/getWorkflowStatus';
    this.gs.generalServiceInfo(url, 'post', data)
      .subscribe(
        res => {
          this.workflow = res['data'];
          this.workflow.forEach(element => {
            element.statusType = 'notActive';
            element.status = element.status.split('Pre').join('');
            element.status = element.status.split('Post').join('');
            // if (element.status === 'Active') {
            //   element.status = 'SignIn';
            // }
            this.ss.showLoading(false);
          });
          if (this.workflowType === 'CustomerInvite') {
            this.cType = _.find(this.workflow, function (o) { return o.status === 'CustomerKYC'; }).isDone;
          } else if (this.workflowType === 'Transaction') {
            this.cType = true;
          } else {
            this.cType = false;
          }
          //  this.cType = (_.find(this.workflow, function(o) { return o.status === 'SignUp'; }).isDone);
          for (let i = 0; i < this.workflow.length; i++) {
            if (this.workflow[i]['isDone'] === true && this.workflow[i]['isRejected'] === true) {
              break;
            } else {
              if (this.workflow[i]['isDone'] === false) {
                if (this.workflow[i]['isRejected'] === true) {
                  break;
                } else {
                  this.workflow[i].statusType = 'Active';
                  break;
                }
              }
            }
          }
          for (let i = 0; i < this.workflow.length; i++) {
            if (this.workflow[i]['isDone'] === true && this.workflow[i]['isRejected'] === true) {
              if (this.workflow[i]['status'] === 'Checked') {
                this.workflowbtn = 'Check';
              } else if (this.workflow[i]['status'] === 'Verified') {
                this.workflowbtn = 'Verify';
              } else if (this.workflow[i]['status'] === 'Approved') {
                this.workflowbtn = 'Approve';
              } else if (this.workflow[i]['status'] === 'CustomerKYC') {
                this.workflowbtn = 'CustomerKYC';
              } else if (this.workflow[i]['status'] === 'Active') {
                this.workflowbtn = 'Active';
              }
              break;
            } else if (this.workflow[i]['statusType'] === 'Active') {
              if (this.workflow[i]['status'] === 'Checked') {
                this.workflowbtn = 'Check';
              } else if (this.workflow[i]['status'] === 'Verified') {
                this.workflowbtn = 'Verify';
              } else if (this.workflow[i]['status'] === 'Approved') {
                this.workflowbtn = 'Approve';
              } else if (this.workflow[i]['status'] === 'CustomerKYC') {
                this.workflowbtn = 'CustomerKYC';
              } else if (this.workflow[i]['status'] === 'Active') {
                this.workflowbtn = 'Active';
              }
              break;
            } else {
              this.workflowbtn = 'Completed';
              this.ss.showLoading(false);
            }

          }
        },
        e => {
        },
        () => {
        }
      );
  }
  // geting onbording and transaction workflow information
  getdetials() {
    this.ss.showLoading(true);
    let data;
    if (this.tabShow === 'ticket') {
      data = {
        'serviceRequestId': this.workflowObject['id'],
        'userId': null,
        'workflowId': null,
        'clientId': null
      };
    } else if (this.tabShow === 'customer' || this.tabShow === 'user' || this.tabShow === 'ClientUser') {
      data = {
        'serviceRequestId': null,
        'userId': this.workflowObject['id'],
        'workflowId': null,
        'clientId': null
      };
    } else if (this.tabShow === 'workflow') {
      data = {
        'serviceRequestId': null,
        'userId': null,
        'workflowId': this.workflowObject['id'],
        'clientId': null
      };
    } else if (this.tabShow === 'client') {
      data = {
        'serviceRequestId': null,
        'userId': null,
        'workflowId': null,
        'clientId': this.workflowObject['id']
      };
    }
    this.ss.showLoading(true);
    const url = 'service/getUserDetails';
    // const url = 'service/getUserDetails?serviceRequestId=41' + this.workflowObject['41'];
    this.gs.generalServiceInfo(url, 'post', data)
      .subscribe(
        res => {
          this.onbordingDetails = res['data'];
          this.ss.showLoading(true);
          if (res['data'] != null) {
            this.updatedPolicyDetail = this.onbordingDetails.policyDetails;
            this.insightsInfo = this.onbordingDetails.insight;
            this.insightpopupdeatils = this.insightsInfo.statusOrNotes;
            if (this.ss.validVal(this.updatedPolicyDetail.walletAddressWhitelist)) {
              if (this.ss.validVal(this.updatedPolicyDetail.walletAddressWhitelist.newValue)) {
              this.newwalletaddress = this.updatedPolicyDetail.walletAddressWhitelist.newValue;
              }
              this.workflowwalletDetails = this.onbordingDetails.walletDetailsResponseDTO;
              this.getworkfloewallet();
            }
            // this.newwalletaddress = this.updatedPolicyDetail.walletAddressWhitelist.newValue;
            if (this.onbordingDetails['userRoleDetails'] !== null) {
              this.adminRoleData = this.onbordingDetails['userRoleDetails'];
             
              this.getroledataformatter();
            }
            if (this.onbordingDetails['oldUserRoleDetails'] !== null) {
              this.adminPreviousRole = this.onbordingDetails['oldUserRoleDetails'];
              this.getDepartment();
            }
            // this.countrylist.forEach(element => {
            if (this.onbordingDetails.country !== null) {
              this.filteredOptions = this._filter(this.onbordingDetails.country);
              for (let i = 0; i < this.countrylist.length; i++) {
                if (this.countrylist[i].name === this.onbordingDetails.country) {
                  this.code = this.countrylist[i].dial_code;
                  this.countryPhonelen = this.countrylist[i].length;
                  // console.log(this.code);
                }
              }
            }
            // });

            if (this.onbordingDetails['userDepartmentRoleDetails'] !== null) {
              this.departmentdetails = this.onbordingDetails['userDepartmentRoleDetails'];
              this.departmentdetails.forEach(element => {
                let deptId: any;
                deptId = element.id;
                element.userList.forEach(el => {
                  let roleType: any, userType: any;
                  roleType = el.roleType;
                  userType = el.userType;
                  this.model[userType + '_' + deptId + '_' + roleType.toUpperCase()] = el.userDetails;
                });
              });
            }
            if (this.onbordingDetails['transactionDetailsResponseDTO'] !== null) {
              this.transactionDetails = this.onbordingDetails['transactionDetailsResponseDTO'];

              this.transactionDetails.createdDate = this.datePipe.transform(this.transactionDetails.createdDate, 'yyyy-MM-dd');
              // this.transactionDetails.createdDate.format('m/dd/yyyy');
              this.policy = this.insightsInfo.policy;
              if (this.transactionDetails.walletType === 'HighFrequency') {
                this.transactionDetails.walletType = 'High Frequency';
              } else if (this.transactionDetails.walletType === 'SecureStorage') {
                this.transactionDetails.walletType = 'Secure Storage';
              } else if (this.transactionDetails.walletType === 'DeepStorage') {
                this.transactionDetails.walletType = 'Deep  Storage';
              }
              // this.transactionDetails.usd = (this.transactionDetails.btc * this.transactionDetails.usd).toFixed(2);
              // this.dollerInfo = this.usdDetails.USD;
              // if (this.transactionDetails.btc) {
              //   this.usdInfo = (this.transactionDetails.btc * this.dollerInfo.last).toFixed(2);
              // }
            }
            if (this.onbordingDetails['walletDetailsResponseDTO'] !== null) {
              this.walletDetails = this.onbordingDetails['walletDetailsResponseDTO'];
              this.workflowtypeOfWalletId = this.walletDetails.typeOfWalletId;
              // console.log(this.walletDetails.typeOfWallet);
              this.workflowwallrttype = this.walletDetails.typeOfWallet;
              if (this.walletDetails.typeOfWallet === 'HighFrequency') {
                this.policyDetails = this.highFrequency;
              } else if (this.walletDetails.typeOfWallet === 'SecureStorage') {
                this.policyDetails = this.secureStorage;
              } else if (this.walletDetails.typeOfWallet === 'DeepStorage') {
                this.policyDetails = this.deepStorage;

              }
              this.walletuserList = this.walletDetails.getUserWalletDetailsDTOS;
              if (this.ss.validVal(this.walletDetails.getOldUserWalletDetailsDTOS)) {
                  this.walletOlduserList = this.walletDetails.getOldUserWalletDetailsDTOS;
              }
              this.walletuserList.forEach(element => {
                if (element.role === 'USER_VIEWER') {
                  element.role = 'Viewer';
                } else if (element.role === 'USER_SIGNER') {
                  element.role = 'Signer';
                }
              });
              this.getusetList();
            }
            if (this.onbordingDetails['userRoleDetails'] !== null) {
              this.userRoleDetails = this.onbordingDetails['userRoleDetails'];
              // this.dataformatter();
              // console.log("Ashutosh testing",this.userRoleDetails);
            }
            this.TempclientDetails = [];
            let tempObj = {};
            if (this.onbordingDetails['clientDetails'] !== null) {
              this.clientDetails = this.onbordingDetails['clientDetails'];
              this.clientDetails.userList.forEach(element => {
                tempObj = element;
                // delete tempObj['userRoles'];
                element.userRoles.forEach(ele => {
                  if (ele !== 'USER_ADMIN') {
                    tempObj['userRoles'] = ele;
                  }
                });
                this.TempclientDetails.push(tempObj);
              });
              // this.clientDetails = this.onbordingDetails['clientDetails'];
              for (let i = 0; i < this.countrylist.length; i++) {
                for (let j = 0; j < this.TempclientDetails.length; j++) {
                  if (this.countrylist[i].name === this.TempclientDetails[j].country) {
                    this.TempclientDetails[j].code = this.countrylist[i].dial_code;
                    this.TempclientDetails[j].countryPhonelen = Number(this.countrylist[i].length);
                    // console.log(this.TempclientDetails);
                  }
                }
              }
            }

            if (this.onbordingDetails['clientUserDetails'] !== null) {
              this.clientUserDetails = this.onbordingDetails['clientUserDetails'];
              this.clientUserDetails.userRoles.forEach(ele => {
                if (ele === 'USER_ADMIN') {
                  this.clientUserDetails['userRoles'] = 'Super User';
                } else {
                  this.clientUserDetails['userRoles'] = 'User';
                }
              });
             if (this.ss.validVal(this.clientUserDetails.oldUserRoles)) {
              this.clientUserDetails.oldUserRoles.forEach(ele => {
                if (ele === 'USER_ADMIN') {
                  this.clientUserDetails['oldUserRole'] = 'Super User';
                } else {
                  this.clientUserDetails['oldUserRole'] = 'User';
                }
              });
            }

              if (this.onbordingDetails['clientUserDetails'].country !== null) {
                for (let i = 0; i < this.countrylist.length; i++) {
                  if (this.countrylist[i].name === this.onbordingDetails['clientUserDetails'].country) {
                    this.userInfoCode = this.countrylist[i].dial_code;
                    this.countryPhonelen = this.countrylist[i].length;
                  }
                }
              }
            }
            // this.countrylist.forEach(element => {

            this.ss.showLoading(false);
          } else if (res['data'] === null) {
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton1').click();
            this.router.navigate(['/fusang/userlist']);

          }
          this.ss.showLoading(false);
        },
        e => {
          this.ss.showLoading(false);
        },
        () => {
        }
      );
  }
  displayFn(user): string {
    if (user === null || user === undefined || user === '') {
      return '';
    } else {
      return user ? user.name : user;
    }
  }

  updateDetail(dataValue) {
    const url = 'service/updateTicketDetail';
    let Notedata;
    if (dataValue === 'Close') {
      Notedata = this.approve;
    } else if (dataValue === 'Reject') {
      Notedata = this.reject;
    } else {
      Notedata = this.reassign;
    }
    const data = {
      'note': Notedata,
      'ticketId': this.workflowObject.id,
      'ticketStatus': dataValue
    };
    this.gs.generalServiceInfo(url, 'post', data)
      .subscribe(
        res => {
          let msg: any;
          msg = '';
          if (dataValue === 'Close') {
            if (this.workflowbtn === 'Check') {
              msg = 'Ticket Checked Successfully';
            } else if (this.workflowbtn === 'Verify') {
              msg = 'Ticket Verified Successfully';
            } else if (this.workflowbtn === 'Approve') {
              msg = 'Ticket Approved Successfully';
            }
          } else if (dataValue === 'Reject') {
            msg = 'Ticket Rejected Successfully';
          } else {
            msg = 'Ticket Reassigned Successfully';
          }

          if (res['status'].toString() === 'success') {
            if (dataValue === 'Close') {
              this.confirmRef.hide();
            } else if (dataValue === 'Reject') {
              this.rejectRef.hide();
            } else {
              this.reassignRef.hide();
              this.reassign = '';
            }

            this.ss.ToasterMessage(msg);
            document.getElementById('modalButton').click();
            this.getWorkflow();
            this.router.navigate(['/fusang/ticket']);
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
  getcountrylist() {
    const url = '/assets/countrylist.json';
    this.gs.localfileinfo(url)
      .subscribe(
        res => {
          this.countrylist = res['countrylist'];
          this.countrylist.forEach((element) => {
            this.countrylist1.push(element.name);
          });

        },
        e => {
        },
        () => {
        }
      );
  }
  gettiket() {
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
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.validateTimeZone = false;
    this.onbordingDetails.phoneNumber = '';
    this.clientUserDetails.phoneNumber = '';
    this.countrylist.forEach((element) => {
      if (event.option.value.toLowerCase() === element.name.toLowerCase()) {
        this.code = element.dial_code;
        this.userInfoCode = element.dial_code;
        this.countryPhonelen = element.length;
        // console.log(this.code);
      }
    });
  }
  // getuserType() {
  //   const url = 'wallet/getUserType';
  //   this.gs.generalServiceInfo(url, 'post', '')
  //   .subscribe(
  //     res => {
  //       // this.x = res;
  //       this.userType = res['data'];
  //       this.userType.forEach((element) => {
  //         this.userType1.push(element.userType);
  //       });
  //     },
  //     e => {
  //     },
  //     () => {
  //     }
  //   );
  // }

  private _filter1(value) {
    if (value !== '') {
      const filterValue = value.toLowerCase();
      return this.userType1.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
  }
  getuserTYpeValue() {
    this.userTYpeOptions = this._filter1(this.onbordingDetails.userType);
  }

  showgooleAuth() {
    this.googleAuth = true;
    this.Yubikey = false;
  }
  showyubikey() {
    this.googleAuth = false;
    this.Yubikey = true;
  }
  authPublic(auth: TemplateRef<any>, status, confirmaction: TemplateRef<any>) {
    // console.log(this.enableBtns);
    // tslint:disable-next-line:max-line-length
    if (!this.enableBtns || !this.showEdit1 || !this.showEdit1Client || !this.showEditwallet || !this.showEditUB || !this.showEditRoleManagement || !this.makeitedit) {
      this.modalRefactinconfrm = this.modalService.show(confirmaction, Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
      // tslint:disable-next-line:max-line-length
    } else if (this.enableBtns || this.showEdit1 || this.showEdit1Client || this.showEditwallet || this.showEditUB || this.showEditRoleManagement || this.makeitedit) {
      this.isReject = status;
      this.modalRef = this.modalService.show(auth, Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
    }
  }
  confirmProcess(auth: TemplateRef<any>) {
    this.modalRefactinconfrm.hide();
    this.isReject = status;
    // this.enableBtns = false;
    // this.enableBtns = true;
    // this.showEdit1 = true;
    // this.modalRef = this.modalService.show(auth, Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
  }



  // user role starts
  onDepFocus() {
    // console.log(this.userDetailsList);
    if (this.userDetailsList.length === 0) {
      this.x.forEach(el => {
        this.userDetailsList.push(el.name);
        this.userDetailsListfilterd.push(el.name);
      });
    }
    // this.userDetailsList = this.x;
    this.filterdDetailsList = this.x;
  }
  onRoleFocus() {
    // this.userDetailsList = this.roleList;
    // this.filterdDetailsList = this.roleList;
    this.roleInformationList = this.roleValue;
    // console.log(this.x);
  }

  addDepartment() {
    this.addDept = true;
    this.userDetailsList = [];
    this.userDetailsListfilterd = [];
    const obj: any = this.roleDepartmentObj;
    if (this.ss.validVal(this.roleDepartmentObj.deparmentName) && this.ss.validVal(this.roleDepartmentObj.userRole)) {
      if (!(this.roleDepartmentObj.userRole.indexOf('_') >= 0)) {
        const dataValue = this.roleDepartmentObj.deparmentName.split(' ');
        this.roleDepartmentObj.userRole = (dataValue[0] + '_' + this.roleDepartmentObj.userRole).toUpperCase();
      }
      if (_.findIndex(this.userRoleDetails, function (o) {
        return (o.deparmentName === obj.deparmentName && o.userRole === obj.userRole);
      }) === -1) {
        //  this.x.
        this.x.forEach(element => {
          if (this.roleDepartmentObj.deparmentName === element.name) {
            this.roleDepartmentObj.departmentId = element.id;
          }
        });
        this.userRoleDetails.push(this.roleDepartmentObj);
        // this.listDepartment(this.roleDepartmentDetails);
        this.roleDepartmentObj = {};
      } else {
        this.toastr.error('Department and role is already added');
      }
    }
  }
  onDepSearch(val) {
    this.x.forEach(element => {
      if (val.deparmentName === element.name) {
        val.departmentId = element.id;
      }
    });
    val.userRole = '';
    // console.log('val', val.deparmentName);
    // console.log(this.userRoleDetails);
    if (_.findIndex(this.x, function (o) { return o.name === val.deparmentName; }) > -1) {
      this.roleInformationList = _.find(this.x, function (o) { return o.name === val.deparmentName; }).role;
    }
    if (typeof (val.deparmentName) === 'string' || val.deparmentName === '') {
      this.userDetailsList = _.filter(this.userDetailsListfilterd, (o) => {
        return o.toLowerCase().indexOf(val.deparmentName.toLowerCase()) > -1;
      });
    }
  }
  deleteDepartment(i) {
    this.userRoleDetails.splice(i, 1);
    if (this.userRoleDetails.length === 0) {
      this.addDept = true;
    }
  }
  clearDepartment() {
    this.roleDepartmentObj = {
      'department': '',
      'userRole': ''
    };
  }
  onDepChanged(event: MatAutocompleteSelectedEvent) {
    const departmentId = event.option.value.id;
    this.tempObj.departmentId = departmentId;
  }
  onRoleChanged(event: MatAutocompleteSelectedEvent) {
    const userRole = event.option.value;
    this.tempObj.userRole = userRole;
  }
  edituserInfo() {
    // this.addDept = true;
    document.getElementById('closeId').click();
    this.showEdit1 = false;
    this.isEditUser = false;
    this.isEditBtn = true;
    this.editUser = false;
    if (this.workflowType === 'AdminInvite') {
      this.editUserFL = false;
    }
  }
  resetuserInfo() {
    document.getElementById('closeId').click();
    this.showEdit1 = true;
    this.roleDepartmentObj = {};
    this.addDept = false;
    this.isEditUser = true;
    this.isEditBtn = false;
    this.x = [];
    this.finalData = [];
    this.isenableform1 = false;
    this.editUser = true;
    this.editUserFL = true;
    this.getinvitedata();
    // this.getinvitedata();
  }
  // test(dep,role,event){
  //   if(event.checked){
  //     this.roleDepartmentObj.departmentId = dep.id;
  //     this.roleDepartmentObj.deparmentName = dep.name;
  //     this.roleDepartmentObj.userRole = dep.name.split(' ')[0].toUpperCase()+"_"+role.toUpperCase();
  //     this.userRoleDetails.push(this.roleDepartmentObj);
  //     this.roleDepartmentObj={};
  //     console.log(this.userRoleDetails);
  //   }
  //   if(!event.checked){
  //     let i;
  //     i = _.findIndex(this.userRoleDetails, function(o) {
  //           return (o.departmentId === dep.id && o.userRole === dep.name.split(' ')[0].toUpperCase()+"_"+role.toUpperCase());
  //           })
  //     this.userRoleDetails.splice(i,1);
  //     console.log(this.userRoleDetails);
  //   }

  // }
  // saveuserInfo() {
  //   console.log(this.userRoleDetails);
  //   const finalData = [];
  //   const obj: any  = this.roleDepartmentObj;
  //   let deptTrue = true;
  //   if (this.ss.validVal(this.roleDepartmentObj.deparmentName) && this.ss.validVal(this.roleDepartmentObj.userRole)) {
  //     if (!this.roleDepartmentObj.userRole.includes('_')) {
  //         const dataValue = this.roleDepartmentObj.deparmentName.split(' ');
  //         this.roleDepartmentObj.userRole = (dataValue[0] + '_' + this.roleDepartmentObj.userRole).toUpperCase();
  //     }
  //     if (_.findIndex(this.userRoleDetails, function(o) {
  //       return (o.deparmentName === obj.deparmentName && o.userRole === obj.userRole);
  //     }) === -1) {
  //       //  this.x.
  //       this.x.forEach(element => {
  //           if (this.roleDepartmentObj.deparmentName === element.name) {
  //             this.roleDepartmentObj.departmentId = element.id;
  //           }
  //       });
  //       this.userRoleDetails.push(this.roleDepartmentObj);
  //       // this.listDepartment(this.roleDepartmentDetails);
  //       this.roleDepartmentObj = {};
  //       deptTrue = true;
  //     } else {
  //       deptTrue = false;
  //       // this.toastr.error('Department and role is already added');
  //     }
  //   }

  //   if ( this.userRoleDetails.length !== 0) {
  //     if (deptTrue === true) {
  //           this.userRoleDetails.forEach(element => {
  //               let dataValue;
  //               if (!element.userRole.includes('_')) {
  //                   dataValue = element.deparmentName.split(' ');
  //                   element.userRole = (dataValue[0] + '_' + element.userRole).toUpperCase();
  //               }
  //           });
  //           // let tempdata = this.userRoleDetails;

  //               const finalDataValue = {
  //                 'roleDepartmentDetails': this.userRoleDetails,
  //                 'userId': this.onbordingDetails.id
  //               };
  //               const url = 'user/updateUserRole';
  //               this.gs.generalServiceInfo(url, 'post', finalDataValue)
  //               .subscribe(
  //                 res => {
  //                   // this.x = res;
  //                   if (res['status'].toString() === 'success') {
  //                     this.showEdit1 = true;
  //                     this.roleDepartmentObj = {};
  //                     this.addDept = false;
  //                     this.isEditBtn = false;
  //                     this.ss.ToasterMessage(res['message']);
  //                     document.getElementById('modalButton').click();
  //                     this.getdetials();
  //                     this.isEditUser = true;
  //                   } else {
  //                     this.ss.ToasterMessage(res['message']);
  //                     document.getElementById('modalButton1').click();
  //                   }

  //                 },
  //                 e => {
  //                 },
  //                 () => {
  //                 }
  //               );
  //     } else {
  //       // this.toastr.error('Department and role is already added');
  //       this.ss.ToasterMessage('Department and role is already added');
  //       document.getElementById('modalButton1').click();
  //     }

  //     } else {
  //     // this.toastr.error('Atleast on role and department has to select');
  //         this.ss.ToasterMessage('Atleast on role and department has to select');
  //         document.getElementById('modalButton1').click();
  //     }


  // }
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
  onChange1(val) {
    if (this.ss.validVal(val)) {
      val = val.toString();
      if (val.length === Number(this.countryPhonelen)) {
        this.invalidphone = false;
      } else {
        this.invalidphone = true;
      }
    } else {
      this.phoneNumber = '';
    }
  }

  // user role ends
  //  editUserdata() {
  //       Object.keys(this.model).forEach((el) => {
  //         let deptId: any, index: any;
  //         deptId = '';
  //         deptId = el.split('_')[1];
  //         index = _.findIndex(this.userRelationshipManagerMap, function(o) { return o.departmentId === deptId; });
  //         if (index === -1) {
  //           this.userRelationshipManagerMap.push({'departmentId': deptId});
  //         }
  //       });
  //       this.userRelationshipManagerMap.forEach(dept => {
  //         let data: any, userTotalData: any;
  //         data = [], userTotalData = [];
  //         Object.keys(this.model).forEach((user) => {
  //           let type: any, deptId: any, obj: any;
  //           obj = {};
  //           type = user.split('_')[0];
  //           deptId = user.split('_')[1];
  //           if (deptId === dept.departmentId) {
  //             obj['userRole'] = this.model[user].userRole;
  //             obj['userType'] = {
  //               'type': type,
  //               'id': this.model[user].id
  //             };
  //             data.push(obj);
  //           }
  //           // console.log('data', data);
  //         });
  //         data.forEach(userObject => {
  //           let userData: any, userInfo: any;
  //           userInfo = {};
  //           userData = _.filter(data, (o) => {
  //             return o.userRole === userObject.userRole;
  //           });
  //           userData.forEach(ui => {
  //             userInfo['userRole'] = ui.userRole;
  //             userInfo[ui.userType.type] = ui.userType.id;
  //           });
  //           userTotalData.push(userInfo);
  //         });
  //         userTotalData = _.uniqBy(userTotalData, 'userRole');
  //         dept['relationshipManagerDetails'] = userTotalData;
  //       });
  //       const finaldata = {};
  //       finaldata['userRelationshipManagerMap'] = this.userRelationshipManagerMap;
  //       finaldata['isCustomer'] = true;
  //       finaldata['userId'] = this.onbordingDetails.id;
  //       const url = 'user/updateUserRelationshipManager';
  //       this.gs.generalServiceInfo(url, 'post', finaldata)
  //       .subscribe(
  //         res => {
  //           if (res['status'].toString() === 'success') {
  //             this.showEditRoleManagement = true;
  //             this.userManagementEdit = true;
  //             this.ss.ToasterMessage(res['message']);
  //             document.getElementById('modalButton').click();
  //             this.getdetials();
  //           } else {
  //             this.ss.ToasterMessage(res['message']);
  //             document.getElementById('modalButton1').click();
  //           }
  //         },
  //         e => {

  //         },
  //         () => {
  //         }
  //       );
  // }
  updateRoleModifications(saveconfirmaction: TemplateRef<any>) {
    this.rolemodification = true;
    this.userrolemodification = false;
    this.adminBasicInfo = false;
    this.userBasicInfo = false;
    this.modalRefsaveconfirm = this.modalService.show(saveconfirmaction, Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
  }
  saveCustomerInfo(saveconfirmaction) {
    this.rolemodification = false;
    this.userrolemodification = false;
    this.adminBasicInfo = true;
    this.userBasicInfo = false;
    this.modalRefsaveconfirm = this.modalService.show(saveconfirmaction, Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
  }
  saveUserBasiInfo(saveconfirmaction) {
    this.rolemodification = false;
    this.userrolemodification = false;
    this.adminBasicInfo = false;
    this.userBasicInfo = true;
    this.modalRefsaveconfirm = this.modalService.show(saveconfirmaction, Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
  }
  cancelRoleManagemnet() {
    this.enableBtns = true;
    this.showEdit1 = true;
    this.showEditRoleManagement = true;
    // console.log(this.showEditRoleManagement);
    this.userManagementEdit = true;
    this.getinvitedata();
  }
  editRoleManagemnet() {
    this.showEditRoleManagement = false;
    // console.log(this.showEditRoleManagement);
    this.userManagementEdit = false;
  }
  ClentEdit() {
    this.showEdit1Client = false;
    this.clientBasicInfoEdit = false;
    if (this.workflowType === 'ClientInvite') {
      this.clientUserEdit = true;
      this.clientBasicInfoEditNW = false;
    }
  }
  resetClentEdit() {
    this.showEdit1Client = true;
    this.clientBasicInfoEdit = true;
    this.clientUserEdit = false;
    this.clientBasicInfoEditNW = true;
    this.addUserFrom.reset();
    this.addUserFrom.value.superAdmin = false;
    this.firstClick = false;
    this.getinvitedata();
  }
  updateClentEdit() {
    const url = 'client/clientDetailsWorkflowUpdate';
    if (this.workflowType === 'ClientInvite') {
      this.supadminList = [];
      const addUserFromObject = Object.keys(this.addUserFrom.value);
      let count = 0;
      for (let i = 0; i < addUserFromObject.length; i++) {
        if (addUserFromObject[i] !== 'superAdmin' && addUserFromObject[i] !== 'role') {
          if (this.ss.validVal(this.addUserFrom.value[addUserFromObject[i]])) {
            count = count + 1;
          }
        }
      }
      if (count === addUserFromObject.length - 2 || count === 0) {
        let tempemail = false;
        if (this.addUserFrom.value.firstName && this.addUserFrom.valid) {
          if (this.addUserFrom.value.superAdmin == null) {
            this.addUserFrom.value.superAdmin = false;
          }
          this.TempclientDetails.forEach(element => {
            if (element.emailId === this.addUserFrom.value.emailId) {
              tempemail = true;
            } else {
              tempemail = false;
            }
          });
          if (tempemail === false) {
            const temp = this.addUserFrom.value;
            temp.code = this.countrycode;
            temp.phoneNumber = temp.phoneNumber.toString();
            temp.countryPhonelen = Number(this.countryPhonelen);
            this.TempclientDetails.push(temp);
            this.addUserFrom.reset();
            this.firstClick = false;
            this.addUserFrom.value.superAdmin = false;
            this.countrycode = '';
            this.phoneNumber = '';
          }
        }
        // }
        const finaLdataValue = [];
        this.TempclientDetails.forEach((element) => {
          element['userRoles'] = [];
          const rol = [];
          if (element.superAdmin) {
            rol.push('USER_ADMIN');
          } else {
            rol.push('USER');
          }
          // tslint:disable-next-line:max-line-length
          finaLdataValue.push({
            'firstName': this.titlecasePipe.transform(element.firstName), 'lastName': this.titlecasePipe.transform(element.lastName), 'emailId': element.emailId,
            'country': element.country, 'phoneNumber': element.phoneNumber, 'userRoles': rol
          });
        });
        this.TempclientDetails.forEach((element) => {
          if (element.superAdmin === true) {
            this.supadminList.push(element.superAdmin);
          }
        });
        this.inviteRequestObj.userList = finaLdataValue;
        this.inviteRequestObj.address = this.clientDetails.address;
        this.inviteRequestObj.clientName = this.clientDetails.clientName;
        this.inviteRequestObj.country = this.clientDetails.country;
        if (this.ss.validVal(this.clientDetails.domainName)) {
          this.inviteRequestObj.domainName = this.clientDetails.domainName.toLowerCase();
        } else {
          this.inviteRequestObj.domainName = '';
        }
        this.inviteRequestObj.notes = this.clientDetails.notes;
        this.inviteRequestObj.serviceRequestId = this.workflowObject.id;
        if (this.supadminList.length === 0) {
          this.ss.ToasterMessage('Please invite atleast one super user');
          document.getElementById('modalButton1').click();
        } else {
          this.gs.generalServiceInfo(url, 'post', this.inviteRequestObj)
            .subscribe(
              res => {
                const response: any = res.status;
                if (response === 'success') {
                  this.ss.ToasterMessage(res['message']);
                  document.getElementById('modalButton').click();
                  this.inviteRequestObj = {};
                  this.showEdit1Client = true;
                  this.clientBasicInfoEdit = true;
                  this.clientUserEdit = false;
                  this.clientBasicInfoEditNW = true;
                  this.addUserFrom.reset();
                  this.addUserFrom.value.superAdmin = false;
                  this.firstClick = false;
                  this.getinvitedata();
                } else if ((response === 'failure')) {
                  this.ss.ToasterMessage(res['message']);
                  document.getElementById('modalButton1').click();
                  this.inviteRequestObj = {};
                  
                }
              },
              e => {
                if (e.status === 403) {
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
      } else {
        this.ss.ToasterMessage('Please enter all the required feilds');
        document.getElementById('modalButton1').click();
      }
    } else if (this.workflowType === 'ClientEdit') {
      const data = {};
      data['address'] = this.clientDetails.address;
      data['clientName'] = this.clientDetails.clientName;
      data['country'] = this.clientDetails.country;
      data['domainName'] = this.clientDetails.domainName;
      data['notes'] = this.clientDetails.notes;
      data['serviceRequestId'] = this.workflowObject.id;
      data['userList'] = this.TempclientDetails;
      this.gs.generalServiceInfo(url, 'post', data)
        .subscribe(
          res => {
            const response: any = res.status;
            if (response === 'success') {
              this.ss.ToasterMessage(res['message']);
              document.getElementById('modalButton').click();
              this.inviteRequestObj = {};
              this.showEdit1Client = true;
              this.clientBasicInfoEdit = true;
              this.clientUserEdit = false;
              this.addUserFrom.reset();
              this.addUserFrom.value.superAdmin = false;
              this.clientBasicInfoEditNW = true;
              this.getinvitedata();
            } else if ((response === 'failure')) {
              this.ss.ToasterMessage(res['message']);
              document.getElementById('modalButton1').click();
              this.inviteRequestObj = {};
            }
          },
          e => {
            if (e.status === 403) {
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
  }
  nextStep() {
    if (this.firstClick) {
      if (this.addUserFrom.value.firstName && this.addUserFrom.valid) {
        if (this.addUserFrom.value.superAdmin == null) {
          this.addUserFrom.value.superAdmin = false;
        }
        const temp = this.addUserFrom.value;
        temp.code = this.countrycode;
        temp.phoneNumber = temp.phoneNumber.toString();
        temp.countryPhonelen = Number(this.countryPhonelen);
        this.TempclientDetails.push(temp);
        this.countrycode = '';
        this.addUserFrom.reset();
        this.addUserFrom.value.superAdmin = false;
        this.countrycode = '';
        this.phoneNumber = '';
      }
    } else {
      this.firstClick = true;
    }
  }
  inviteclient() {
    const url = 'client/invite';
    this.supadminList = [];
    const addUserFromObject = Object.keys(this.addUserFrom.value);
    let count = 0;
    for (let i = 0; i < addUserFromObject.length; i++) {
      if (addUserFromObject[i] !== 'superAdmin' || addUserFromObject[i] !== 'role') {
        if (this.ss.validVal(this.addUserFrom.value[addUserFromObject[i]])) {
          count = count + 1;
        }
      }
    }
    if (count === addUserFromObject.length - 1 || count === 0) {
      let tempemail = false;
      if (this.addUserFrom.value.firstName && this.addUserFrom.valid) {
        if (this.addUserFrom.value.superAdmin == null) {
          this.addUserFrom.value.superAdmin = false;
        }
        this.TempclientDetails.forEach(element => {
          if (element.emailId === this.addUserFrom.value.emailId) {
            tempemail = true;
          } else {
            tempemail = false;
          }
        });
        if (tempemail === false) {
          const temp = this.addUserFrom.value;
          temp.code = this.countrycode;
          temp.phoneNumber = temp.phoneNumber.toString();
          temp.countryPhonelen = Number(this.countryPhonelen);
          this.TempclientDetails.push(temp);
          this.addUserFrom.reset();
          this.addUserFrom.value.superAdmin = false;
          this.countrycode = '';
          this.phoneNumber = '';
        }
      }
      // }
      const finaLdataValue = [];
      this.TempclientDetails.forEach((element) => {
        element['userRoles'] = [];
        const rol = [];
        if (element.superAdmin) {
          rol.push('USER_ADMIN');
        } else {
          rol.push('USER');
        }
        // tslint:disable-next-line:max-line-length
        finaLdataValue.push({
          'firstName': this.titlecasePipe.transform(element.firstName), 
          'lastName': this.titlecasePipe.transform(element.lastName), 'emailId': element.emailId,
          'country': element.country, 'phoneNumber': element.phoneNumber, 'userRoles': rol
        });
      });
      this.TempclientDetails.forEach((element) => {
        if (element.superAdmin === true) {
          this.supadminList.push(element.superAdmin);
        }
      });
      this.inviteRequestObj.userList = finaLdataValue;
      if (this.supadminList.length === 0) {
        this.ss.ToasterMessage('Please invite atleast one super user');
        document.getElementById('modalButton1').click();
      } else {
        // console.log('Success');
        // console.log(this.inviteRequestObj);
        this.inviteRequestObj = {};
      }
    } else {
      this.ss.ToasterMessage('Please enter all the required feilds');
      document.getElementById('modalButton1').click();

    }
  }
  // dataformatter(){
  //   var roleobj={'rolename':'','status':''}
  //   var myobj = {'role':[]}
  //   this.x.forEach(el => {
  //     var fullobj={'id':'','name':'','visible':'','role':[]}
  //     this.userRoleDetails.forEach(ele => {
  //       var role=[];
  //       Object.keys(el.role).forEach((elm) => {
  //         roleobj.rolename= el.role[elm];
  //         if(el.id === ele.departmentId && el.role[elm].toLowerCase()===ele.userRole.split('_')[1].toLowerCase()){
  //           roleobj.status = 'true';
  //         }else{
  //           roleobj.status = 'false';
  //         }
  //         fullobj.id=el.id;
  //         fullobj.name=el.name;
  //         fullobj.visible=el.visible;
  //         role.push(roleobj);
  //         myobj.role=role;
  //         fullobj.role=myobj.role;
  //       });
  //       console.log(fullobj);
  //     });
  //   });
  // }

  claim(successtemplate: TemplateRef<any>) {
    this.modalRef1 = this.modalService.show(successtemplate, { class: 'whitelist modal-lg' });
  }
  confirmClime() {
    const obj = {
      'serviceRequestId': this.workflowObject.id
    };
    const url = 'service/claim';
    this.gs.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          const response: any = res.status;
          // console.log(response);
          if (response === 'success') {
            this.ss.ToasterMessage(res['message']);
            this.workflowObject.ticketStatus = 'Claimed';
            this.getWorkflow();
            // this.getdetials();
            this.modalRef1.hide();
            document.getElementById('modalButton').click();
          } else {

          }
        },
        e => {
          // }
        },
        () => {
        }
      );
  }

  // getRoleData() {
  //   const idobj = {
  //     'userId': this.adminId
  //   };
  //   const url = 'user/getUserInfo';
  //   this.adminRoleData = [];
  //   this.gs.generalServiceInfo(url, 'post', idobj)
  //   .subscribe(
  //     res => {
  //       if (res['status'].toString() === 'success') {
  //       this.adminRoleData = res['data'].roleDepartmentDetails;
  //       //  console.log("adminRoleData",this.adminRoleData);
  //        console.log('data', this.adminRoleData);
  //        this.getroledataformatter();
  //       }
  //       // console.log(this.x[0]['name']);
  //       // this.x.forEach(element => {
  //       //   this.userDepList.push(element.name);
  //       // });
  //     },
  //     e => {
  //      // this.enableBtns = true;
  //     },
  //     () => {
  //       // this.enableBtns = true;
  //     }
  //   );
  // }
  public getroledataformatter() {
    let halfData;
    let halfData1;
    this.fulldata = [];
    this.x = this.tempx;
    this.fulldata = this.x;
    halfData = this.adminRoleData;
    halfData1 = this.adminPreviousRole;
    this.finalData = [];
   
    this.finalData = _.map(this.fulldata, function (o) {
      const obj = _.find(halfData, function (p) { return p.departmentId === o.id; });
      if (obj !== undefined) {
        o.role = _.map(o.role, function (r) {
          const roleObj = _.find(obj.userRole, function (s) { return _.includes(s, _.toUpper(r)); });
          //  let str ={};`
          // str[r] = roleObj ? true : false;
          const str = { 'userRole': r, 'isEnable': roleObj ? true : false };
          return str;
        });
      } else {
        o.role = _.map(o.role, function (r) {
          const roleObj = _.find(o.userRole, function (s) { return _.includes(s, _.toUpper(r)); });
          //  let str = {};
          //  str[r] = roleObj ? true : false;
          const str = { 'userRole': r, 'isEnable': roleObj ? true : false };
          return str;
        });
      }
      return o;
    });
    // this.finalDataTwo = _.map(this.tempx1, function (o) {
    //   const obj = _.find(halfData1, function (p) { return p.departmentId === o.id; });
    //   if (obj !== undefined) {
    //     o.role = _.map(o.role, function (r) {
    //       const roleObj = _.find(obj.userRole, function (s) { return _.includes(s, _.toUpper(r)); });
    //       //  let str ={};
    //       // str[r] = roleObj ? true : false;
    //       const str = { 'userRole': r, 'isEnable': roleObj ? true : false };
    //       return str;
    //     });
    //   } else {
    //     o.role = _.map(o.role, function (r) {
    //       const roleObj = _.find(o.userRole, function (s) { return _.includes(s, _.toUpper(r)); });
    //       //  let str = {};
    //       //  str[r] = roleObj ? true : false;
    //       const str = { 'userRole': r, 'isEnable': roleObj ? true : false };
    //       return str;
    //     });
    //   }
    //   return o;
    // });
    // return finalData;
    // console.log(this.finalData);
  }
  updateAdminRole(obj, rdlobj, event) {
    let i; let j;
    // console.log(this.finalData);
    // console.log(rdlobj);
    i = _.findIndex(this.finalData, function (o) {
      // if (o.id === obj.id) {
      // j =  _.findIndex(o.role, function(r) {
      //     return (rdlobj.userRole === r.userRole && r.isEnable === rdlobj.isEnable);
      //   });
      // }
      return (o.id === obj.id);
    });
    if (i !== -1) {
      j = _.findIndex(this.finalData[i].role, function (r) {
        return (rdlobj.userRole === r.userRole && r.isEnable === rdlobj.isEnable);
      });
    }
    // console.log(i, j);
    if (event.checked && i !== -1) {
      this.finalData[i].role[j].isEnable = true;
    }
    if (!event.checked && i !== -1) {
      this.finalData[i].role[j].isEnable = false;

    }
    // console.log(this.finalData);
    let tempChaker = true;
    // tslint:disable-next-line:no-shadowed-variable
    for (let i = 0; i < this.finalData.length; i++) {
      // tslint:disable-next-line:no-shadowed-variable
      for (let j = 0; j < this.finalData[i].role.length; j++) {
        if (this.finalData[i].role[j].isEnable) {
          tempChaker = false;
          break;
        } else {
          tempChaker = true;
        }
      }
      if (tempChaker === false) {
        break;
      }
    }
    this.isenableform1 = tempChaker;
  }

  editForm() {
    this.enableBtns = !this.enableBtns;
    this.editUserRole = false;
  }

  cancelModifications() {
    this.enableBtns = !this.enableBtns;
    this.editUserRole = true;
    this.getdetials();
  }

  updateRole(saveconfirmaction: TemplateRef<any>) {
    this.userrolemodification = true;
    this.rolemodification = false;
    this.modalRefsaveconfirm = this.modalService.show(saveconfirmaction, Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
  }
  closeApprove() {
    this.confirmRef.hide();
    this.approve = '';
  }
  closeReject() {
    this.rejectRef.hide();
    this.reject = '';
  }
  closeReassign() {
    this.reassignRef.hide();
    this.reassign = '';
  }
  confirmupdate() {
    if (this.confirmwalletupdate) {
      const url = 'wallet/v2/updateWalletWorkFlow';
      this.gs.generalServiceInfo(url, 'post', this.updatewalletrequestobj)
        .subscribe(
          res => {
            const response: any = res.status;
            if (response === 'success') {
              this.ss.ToasterMessage(res['message']);
              document.getElementById('modalButton').click();
              this.modalRefsaveconfirm.hide();
              this.resetwalletInfo();
            } else {
              this.ss.ToasterMessage(res['message']);
              document.getElementById('modalButton1').click();
            }
          }
        );
    } else {
      if (this.userrolemodification || this.userBasicInfo) {
        const obj = {
          'serviceRequestId': this.workflowObject.id,
          'userId': null,
          'userRoles': [],
          'firstName': this.clientUserDetails.firstName,
          'lastName': this.clientUserDetails.lastName,
          'emailId': this.clientUserDetails.emailId,
          'country': this.clientUserDetails.country,
          'phoneNumber': this.clientUserDetails.phoneNumber,
          'clientId': null
        };

        if (this.clientUserDetails.superAdmin) {
          obj.userRoles.push('USER_ADMIN');
        } else {
          obj.userRoles.push('USER');
        }
        const url = 'user/v2/updateClientUserWorkflow';
        this.gs.generalServiceInfo(url, 'post', obj)
          .subscribe(
            res => {
              if (res['status'].toString() === 'success') {
                this.ss.ToasterMessage(res['message']);
                document.getElementById('modalButton').click();
                if (this.userrolemodification) {
                  this.editUserRole = true;
                  this.enableBtns = true;
                  this.showEdit1 = true;
                } else if (this.userBasicInfo) {
                  this.showEditUB = true;
                  this.EditBasic = true;
                  this.editUserRole = true;
                  this.EditBasicPC = true;
                }
                this.modalRefsaveconfirm.hide();
                this.getdetials();
              } else {
                this.ss.ToasterMessage(res['message']);
                document.getElementById('modalButton1').click();
                this.modalRefsaveconfirm.hide();
              }
            },
            e => {
            },
            () => {
            }
          );
      } else if (this.rolemodification || this.adminBasicInfo) {
        let fullFinalRoleUpdatedData;
        fullFinalRoleUpdatedData = [];
        this.finalData.forEach(function (o) {
          const obj = { 'departmentId': '', 'deparmentName': '', 'userRole': [] };
          let userRole;
          userRole = [];
          o.role.forEach(e => {
            if (e.isEnable) {
              userRole.push(o.name.split(' ')[0].toUpperCase() + '_' + e.userRole.toUpperCase());
            }
          });
          if (userRole.length !== 0) {
            obj.departmentId = o.id;
            obj.deparmentName = o.name;
            obj.userRole = userRole;
            fullFinalRoleUpdatedData.push(obj);
          }
          // console.log(fullFinalRoleUpdatedData);
        });
        const param = {
          'userId': null,
          'serviceRequestId': this.workflowObject.id,
          'roleDepartmentDetails': fullFinalRoleUpdatedData,
          'country': this.onbordingDetails.country,
          'firstName': this.onbordingDetails.firstName,
          'lastName': this.onbordingDetails.lastName,
          'phoneNumber': this.onbordingDetails.phoneNumber,
          'username': this.onbordingDetails.username
        };
        const url = 'user/v2/updateUserWorkflow';
        this.gs.generalServiceInfo(url, 'post', param)
          .subscribe(
            res => {
              if (res['status'].toString() === 'success') {
                this.ss.ToasterMessage(res['message']);
                document.getElementById('modalButton').click();
                document.getElementById('closeId').click();
                if (this.rolemodification) {
                  this.enableBtns = true;
                  this.showEdit1 = true;
                } else if (this.adminBasicInfo) {
                  this.showEdit = true;
                  this.editUser = true;
                }
                this.resetuserInfo();
                this.modalRefsaveconfirm.hide();
              } else {
                this.modalRefsaveconfirm.hide();
                document.getElementById('closeId').click();
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
  expandAll() {
    this.showexpandall = false;
    this.allExpandStatus = true;
  }
  collapseAll() {
    this.showexpandall = true;
    this.allExpandStatus = false;
  }
  // Added below code to allow only numbers when you go to the application each time
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }

  // Function to provide a indicator if we have a new wallet Address.
  newAddressIndicator(newWalletAddress) {
    return _.findIndex(this.updatedPolicyDetail.walletAddressWhitelist.oldValue, function (o) { return o.address === newWalletAddress; });
  }

  // Function to find out the deleted addresses and show in the indicator icon
  deletedAddressIndicator() {
    return _.differenceBy(this.updatedPolicyDetail.walletAddressWhitelist.oldValue,
      this.updatedPolicyDetail.walletAddressWhitelist.newValue, 'address');

  }
  // delete user
  deleteList(event, i) {
    this.TempclientDetails.splice(i, 1);
    event.stopPropagation();
  }
  // wallet update function
  deleterow(i) {
    this.walletuserList.splice(i, 1);
    this.userListInfo.splice(i, 1);
    this.userListInfo.splice(this.userListInfo.length - 1, 1);
    // console.log(this.walletuserList);
  }
  getRolelist() {
    this.gs.getRolelist()
      .subscribe(
        res => {
          this.roleList = res['roleList'];
          // console.log(this.roleList);
        },
        e => {
        },
        () => {
        }
      );
  }
  editwallet() {
    this.showEditwallet = false;
    document.getElementById('closeIdWallet').click();
    if (this.workflowType === 'WalletCreation') {
      this.showEditwallet1 = false;
    }
  }
  resetwalletInfo() {
    document.getElementById('closeIdWallet').click();
    this.showEditwallet = true;
    this.showEditwallet1 = true;
    this.initialfslde = false;
    this.existinguser = false;
    this.notRegUser = false;
    this.modelvalue = {
      'username': '',
      'role': '',
    };
    this.getdetials();
  }
  savewalletInfo(addUserForm: NgForm, saveconfirmaction: TemplateRef<any>) {
    // console.log(this.walletDetails);
    // console.log(this.walletuserList);
    //  this.roleInf = [];
    if (this.erroinsignsture !== true) {
      // this.showPageLoading = true;
      const x: any = _.findIndex(this.walletuserList, ['username', this.modelvalue.username]);
      // console.log(x);
      if ((x === -1) && this.ss.validVal(this.modelvalue.username)) {
        this.checkId(this.modelvalue.username, addUserForm, 'create', addUserForm, saveconfirmaction);
        this.existinguser = false;
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
      if (this.walletDetails.coins === null || this.walletDetails.coins === undefined) {
        // this.errmsg = true;
        // this.showPageLoading = false;
      // tslint:disable-next-line:max-line-length
      } else if ((Number(this.walletuserList.length) < Number(this.walletDetails.numberOfUsers)) || (Number(this.walletuserList.length) > Number(this.walletDetails.numberOfUsers))) {
        if (this.validatedUser === true) {
          this.ss.ToasterMessage('Userlist should be equal to number of user.');
          document.getElementById('modalButton1').click();
        }  else if (this.validatedUser === false) {
          if (Number(this.walletuserList.length) !== Number(this.walletDetails.numberOfUsers)) {
            this.ss.ToasterMessage('Userlist should be equal to number of user.');
            document.getElementById('modalButton1').click();
          }
        }
      } else if (Number(this.walletuserList.length) !== Number(this.walletDetails.numberOfUsers)) {
        // this.showPageLoading = false;
        if (this.validatedUser === true) {
          this.ss.ToasterMessage('Userlist should be equal to number of user.');
          document.getElementById('modalButton1').click();
        }
        // this.ss.ToasterMessage('Userlist should be equal to number of user.');
        // document.getElementById('modalButton1').click();
      } else if (Number(c) < Number(this.walletDetails.numberOfSign)) {
        // this.showPageLoading = false;
        this.ss.ToasterMessage('Signers should be equal to number of signatures.');
        document.getElementById('modalButton1').click();
      } else {
        // if (!this.validatedUser) {
        //   this.toastr.error(this.model.username + ' is unavailable');
        //   return false;
        // }
        if (!this.validatedUser) {
          // console.log(this.modelvalue.username);
          if (this.walletuserList.length > 0) {
            this.validatedUser = true;
          } else {
            this.ss.ToasterMessage('"' + this.modelvalue.username + '" is not a registered user!');
            document.getElementById('modalButton1').click();
            return false;
          }
        }
        // this.walletDetails['typeOfWalletId'] = this.walletid;
        // this.walletDetails['createdBy'] = this.owner_Id;
        // this.walletDetails['owner_Id'] = this.owner_Id;
        // console.log(this.walletuserList);
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
          // 'createdBy': this.walletDetails.createdBy,
          'noOfUsers': parseInt(this.walletDetails.numberOfUsers, 10),
          'noOfSignatures': parseInt(this.walletDetails.numberOfSign, 10),
          // 'ownerId': Number(this.walletDetails.owner_Id),
          'walletId': this.walletDetails.id,
          'userList': this.walletuserList,
          'clientId': this.walletDetails.clientId,
          'coinType': this.walletDetails.coins,
          'serviceRequestId': this.workflowObject['id'],
          'typeOfWalletId': this.workflowtypeOfWalletId,
          'walletName': this.walletDetails.walletName
        };
        // console.log(this.updatewalletrequestobj);
        // if (this.userList.length )
        // this.userList['createdBy'] = value;
        delete this.walletDetails.auditTrail;
        this.moreAdmins = false;
        delete this.walletDetails['auditTrail'];
        // console.log(this.walletDetails);
        this.confirmwalletupdate = true;
        this.modalRefsaveconfirm = this.modalService.show(saveconfirmaction, Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
      }
    }
    }
  }
  coinSelected(val) {
    // console.log(val);
  }
  getusetList() {
    this.autosearchresult1 = [];
    // console.log(this.walletDetails.clientId);
    const obj = {
      'searchString': '',
      'clientId': this.walletDetails.clientId
    };
    const url = 'user/autoSearch';
    this.gs.autoSearch(url, 'post', obj)
      .subscribe(
        res => {
          this.autosearchresult = res['data'];
          for (let i = 0; i < this.autosearchresult.length; i++) {
            this.autosearchresult1.push(this.autosearchresult[i].username);
          }
          this.Tempautosearchresult1 = this.autosearchresult1;
          // console.log(this.autosearchresult1);
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
  addUser(addUserForm: NgForm, saveconfirmaction) {
    // console.log(this.modelvalue);
    // this.roleInf = [];
    this.moreAdmins = false;
    this.addUserNameField = false;
    if (this.walletDetails.numberOfUsers > 0 && this.walletDetails.numberOfSign > 0) {
      this.noOfUsersAvail = false;
      this.initialfslde = true;
      const x: any = _.findIndex(this.walletuserList, ['username', this.modelvalue.username]);
      // console.log(x);
      if ((x === -1) && this.ss.validVal(this.modelvalue.username)) {
        this.checkId(this.modelvalue.username, addUserForm, '', addUserForm, saveconfirmaction);
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
  onuserChange(val) {
    if (this.initialfslde === true) {
      this.initialfslde = false;
      this.modelvalue = {
        'username': '',
        'role': ''
      };
    }
    if (Number(val) >=  Number(this.walletDetails.numberOfSign)) {
      this.erroinsignsture = false;
    } else {
      this.erroinsignsture = true;
    }
     this.walletDetails.oldNumberOfUsers = this.walletDetails.oldNumberOfUsers.toString();
    this.adduserStatus = true;
  }
  onsignatureChange(val) {
    if (Number(val) > Number(this.walletDetails.numberOfUsers)) {
      this.erroinsignsture = true;
    } else {
      this.erroinsignsture = false;
    }
    this.walletDetails.oldNumberOfSign = this.walletDetails.oldNumberOfSign.toString();
  }
  checkId(val, formName, type, addUserForm, saveconfirmaction) {
    const x: any = _.indexOf(this.Tempautosearchresult1, this.modelvalue.username);
    if ((x === -1) && this.ss.validVal(this.modelvalue.username)) {
      this.ss.ToasterMessage('"' + this.modelvalue.username + '" is not a registered user!');
      document.getElementById('modalButton1').click();
      this.notRegUser = true;
    } else if (x >= 0) {
      this.notRegUser = false;
      if (this.ss.validVal(this.modelvalue.userId)) {
        this.validatedUser = true;
        this.userListInfo.push(this.modelvalue);
        this.walletuserList.push(this.modelvalue);
        this.validatedUser = false;
        let c;
        c = 0;
        this.walletuserList.forEach(function (el) {
          c = (el.role === 'Signer') ? c + 1 : c;
        });
        if (Number(c) < Number(this.walletDetails.numberOfSign)) {
          if (this.validatedUser === true) {
            // this.toastr.error('Admin role of the added user should  be equal to  no of signatures.');
            this.ss.ToasterMessage('Signers should be equal to number of signatures.');
            document.getElementById('modalButton1').click();
            this.walletuserList.splice(-1, 1);
          }
        }
        if (Number(this.walletuserList.length) === Number(this.walletDetails.numberOfUsers)) {
          this.initialfslde = false;
        }
        this.modelvalue = {
          'username': '',
          'role': '',
        };
        if (type === 'create') {
          // this.ss.ToasterMessage('Please click on Submit again to complete the process.');
          // document.getElementById('modalButton2').click();
          // this.clickagain(addUserForm, wallettemplate);
        }
        this.modelvalue = {
          'username': '',
          'role': '',
        };
        this.addUserNameField = true;
      } else {
        this.validatedUser = true;
        this.ss.ToasterMessage('"' + this.modelvalue.username + '" is not a registered user!');
        document.getElementById('modalButton1').click();
        this.addUserNameField = false;
      }
      this.errorUserInfo = false;
      this.addUserNameField = false;
      this.getusetList();
    }
  }
  uiautoserach(value) {
    this.autosearchresult1 = [];
    const x: any = _.indexOf(this.Tempautosearchresult1, value);
    // const x: any = _.findIndex(this.Tempautosearchresult1, ['username', this.model.username]);
    console.log(x);
    if ((x === -1) && this.ss.validVal(this.modelvalue.username)) {
    } else if (x >= 0)  {
      this.tempSelectValue = {};
      for ( let i = 0; i < this.autosearchresult.length ; i++) {
        if (this.autosearchresult[i].username.toLowerCase() === value.toLowerCase()) {
          this.tempSelectValue = this.autosearchresult[i];
        }
      }
      // if (val.id) {
        this.modelvalue.userId = this.tempSelectValue.id;
        this.modelvalue.username = this.tempSelectValue.username;
    }
    this.autosearchresult1 = _.filter(this.Tempautosearchresult1, (o) => {
      return _.startsWith(o.toLowerCase(), value.toLowerCase());
    });
  }
  userSelected(event: MatAutocompleteSelectedEvent) {
    this.tempSelectValue = {};
    for (let i = 0; i < this.autosearchresult.length; i++) {
      // this.autosearchresult1.push(this.autosearchresult[i].username);
      if (this.autosearchresult[i].username === event.option.value) {
        this.tempSelectValue = this.autosearchresult[i];
      }
    }
    this.modelvalue.userId = this.tempSelectValue.id;
    this.modelvalue.username = this.tempSelectValue.username;
  }
  roleuserSelected(value, index) {
    // console.log(value);
    // console.log(index);
  }
  public focusFunction(element) {
    this.focusedElement = element;
  }
  roleSelected(val: any) {
    // console.log(val);
  }
  deleteextrarow() {
    this.initialfslde = false;
    this.modelvalue = {
      'username': '',
      'role': '',
      // 'roleName': ''
    };
    this.getusetList();

  }
  // policy update starts
  editPolicy() {
    this.showupdatebtn = true;
    this.makeitedit = false;
    // console.log(this.updatedPolicyDetail);
  }
  getcountryTimezone() {
    const url = '/assets/timezonelist.json';
    this.gs.localfileinfo(url)
      .subscribe(
        res => {
          this.countrytimezonelist = res['timeZoneList'];
          // console.log(this.countrytimezonelist);
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
  getTheTimezone(value) {
    this.validateTimeZone = true;
    this.filteredOptions = this._filter(value);
  }
  walletAddressValidation(value) {
    // console.log(value);
    if (value.length < 27 || value.length > 34) {
      this.isWalletValid = false;
    } else {
      this.isWalletValid = true;
    }
  }
  removewalletaddress1() {
    this.itemValuewalt.address = '',
      this.showwalletfield = false;
    this.isWalletValid = true;
  }
  // addwalletaddress() {
  //   if (this.newwalletaddress.length === 0) {
  //     this.showwalletfield = true;
  //   }   else if (Number(this.updatedPolicyDetail.maximumAllowedWallets.newValue) < Number(this.newwalletaddress.length)) {
  //    this.walletnumber = true;
  //   } else if (this.itemValuewalt.walletaddress) {
  //       if (this.ss.validVal(this.itemValuewalt.walletaddress)) {
  //         let UserCheck = false;
  //         let toWalletUserCheck = false;
  //         for (let i = 0; i < this.newwalletaddress.length; i++) {
  //           if (this.itemValuewalt.walletaddress === this.newwalletaddress[i]) {
  //             UserCheck = true;
  //             break;
  //           }
  //         }
  //         if (this.walletDetailsworkflow.address === this.itemValuewalt.walletaddress) {
  //           toWalletUserCheck = true;
  //         }
  //         if (!UserCheck && !toWalletUserCheck) {
  //           this.newwalletaddress.push(this.itemValuewalt.walletaddress);
  
  //           // this.obj.walletAddresslist.push(this.WalletAddressWhitelist);
  //           this.itemValuewalt.walletaddress = '';
  //           this.showwalletfield = false;
  //         } else if (UserCheck) {
  //           this.ss.ToasterMessage('Wallet Address already added');
  //           document.getElementById('modalButton1').click();
  //         } else if (toWalletUserCheck) {
  //           this.ss.ToasterMessage('Whitelisting for the same wallet address is not permitted');
  //           document.getElementById('modalButton1').click();
  //         }
  //       }
  //     } else if (this.itemValuewalt.walletaddress === '' || this.itemValuewalt.walletaddress === undefined ||
  //       this.itemValuewalt.walletaddress === null) {
  //       this.showwalletfield = true;
  //     }
    
  //   console.log(this.newwalletaddress.length);
   
  //   // this.obj.walletAddresslist.push(this.itemvalue.walletaddress);
  // }

  addwalletaddress() {
    if (this.newwalletaddress.length === 0) {
      this.showwalletfield = true;
    }
  if (this.itemValuewalt.address) {
    if (this.ss.validVal(this.itemValuewalt.address)) {
    let UserCheck = false;
    let toWalletUserCheck = false;
    for (let i = 0; i < this.newwalletaddress.length; i++) {
      if (this.itemValuewalt.address === this.newwalletaddress[i].address) {
        UserCheck = true;
        break;
      }
    }
    if (this.newwalletaddress.address === this.itemValuewalt.address) {
      toWalletUserCheck = true;
    }
    if (!UserCheck && !toWalletUserCheck) {
      this.itemValuewalt.nickName = '';
      this.newwalletaddress.push(this.itemValuewalt);

      // this.obj.walletAddresslist.push(this.WalletAddressWhitelist);
      this.itemValuewalt = {};
      this.showwalletfield = true;
    } else if (UserCheck) {
      this.ss.ToasterMessage('Wallet Address already added');
      document.getElementById('modalButton1').click();
    } else if (toWalletUserCheck) {
      this.ss.ToasterMessage('Whitelisting for the same wallet address is not permitted');
      document.getElementById('modalButton1').click();
    }
  }
  } else if (this.itemValuewalt.address === '' || this.itemValuewalt.address === undefined ||
  this.itemValuewalt.address === null) {
    this.showwalletfield = true;
  }
  // this.obj.walletAddresslist.push(this.itemvalue.walletaddress);
} 





  removewalletaddress(i) {
    const index = i;
    if (index === 0 || index) {
      this.newwalletaddress.splice(i, 1);
    }
  }
  // this.workflowwalletDetails = this.onbordingDetails.walletDetailsResponseDTO;
  getworkfloewallet() {
    const obj = { 'walletId': this.workflowwalletDetails.id };
    const url = 'wallet/get';
    this.gs.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          this.walletDetailsworkflow = res['data'];
          // console.log(this.walletDetailsworkflow);
        }
      );
  }
  cancelPolicyModifications() {
    // console.log(this.isWalletValid);
    // this.router.navigate(['/fusang/walletcreate']);
    this.itemValuewalt = {};
    this.showwalletfield = false;
    this.validateTimeZone = false;
    this.getcountryTimezone();
    this.showupdatebtn = false;
    this.makeitedit = true;
    this.getdetials();
  }
  updateWalletPolicyDetails() {
    // console.log(this.isWalletValid)
    if (this.workflowType === 'UserPolicyChange') {
      if (this.showwalletfield === true) {
        this.addwalletaddress();
      }
      // console.log(this.updatedPolicyDetail);
      this.waletpolicyreqobj = {
        'maximumAllowedIp': this.updatedPolicyDetail.maximumAllowedIp.newValue,
        'maximumAllowedWallets': this.updatedPolicyDetail.maximumAllowedWallets.newValue,
        'minimumBalance': this.updatedPolicyDetail.minimumBalance.newValue,
        'serviceCharge': this.updatedPolicyDetail.serviceCharge.newValue,
        'serviceRequestId': this.workflowObject.id,
        'subcriptionCharge': this.updatedPolicyDetail.subcriptionCharge.newValue,
        'transactionLimit': this.updatedPolicyDetail.transactionLimit.newValue,
        'transactionTimeEnd': this.updatedPolicyDetail.transactionTimeEnd.newValue,
        'transactionTimeStart': this.updatedPolicyDetail.transactionTimeStart.newValue,
        'transactionUnitOfMeasure': this.updatedPolicyDetail.transactionUnitOfMeasure.newValue,
        'transactionVolumeCap': this.updatedPolicyDetail.transactionVolumeCap.newValue,
        'walletAddressWhitelist': this.updatedPolicyDetail.walletAddressWhitelist.newValue,
        'walletId': this.workflowwalletDetails.id,
        'walletTimeZone': this.updatedPolicyDetail.walletTimeZone.newValue
      };
      const sum: any = Number(this.waletpolicyreqobj.minimumBalance) + Number(this.waletpolicyreqobj.transactionVolumeCap);
      if (this.updatedPolicyDetail.maximumAllowedWallets.newValue < this.updatedPolicyDetail.walletAddressWhitelist.newValue.length) {
        this.ss.ToasterMessage('"Wallet Address" should be less than or equal to "Maximum Allowed Wallet Address"');
        document.getElementById('modalButton1').click();
      } else {
        if (sum > 100) {
          this.ss.ToasterMessage('You have exceeded the sum of transaction volume cap and minimum balance more than 100%');
          document.getElementById('modalButton1').click();
        } else {
        const url = 'user/policy/updatePolicyWorkflow';
        this.gs.generalServiceInfo(url, 'post', this.waletpolicyreqobj)
          .subscribe(
            res => {
              const response: any = res.status;
              if (response === 'success') {
                this.ss.ToasterMessage(res['message']);
                document.getElementById('modalButton').click();
                this.cancelPolicyModifications();
              } else if (response === 'failure') {
                this.ss.ToasterMessage(res['message']);
                document.getElementById('modalButton1').click();
              }
            }
          );  }
      }
    }
    if (this.workflowType === 'GlobalPolicyChange') {
      const objglobal = {
        'maximumAllowedIp': this.updatedPolicyDetail.maximumAllowedIp.newValue,
        'maximumAllowedWallets': this.updatedPolicyDetail.maximumAllowedWallets.newValue,
        'minimumBalance': this.updatedPolicyDetail.minimumBalance.newValue,
        'serviceCharge': this.updatedPolicyDetail.serviceCharge.newValue,
        'subcriptionCharge': this.updatedPolicyDetail.subcriptionCharge.newValue,
        'transactionLimit': this.updatedPolicyDetail.transactionLimit.newValue,
        'transactionTimeEnd': this.updatedPolicyDetail.transactionTimeEnd.newValue,
        'transactionTimeStart': this.updatedPolicyDetail.transactionTimeStart.newValue,
        'transactionUnitOfMeasure': this.updatedPolicyDetail.transactionUnitOfMeasure.newValue,
        'transactionVolumeCap': this.updatedPolicyDetail.transactionVolumeCap.newValue,
        'walletTimeZone': this.updatedPolicyDetail.walletTimeZone.newValue,
        'serviceRequestId': this.workflowObject.id,
        'typeOfWalletId': this.workflowwalletDetails.typeOfWalletId
        
      };
      const sum: any = Number(objglobal.minimumBalance) + Number(objglobal.transactionVolumeCap);
      if (sum > 100) {
        this.ss.ToasterMessage('You have exceeded the sum of transaction volume cap and minimum balance more than 100%');
        document.getElementById('modalButton1').click();
      } else {
      const url = 'user/policy/updatePolicyWorkflow';
      this.gs.generalServiceInfo(url, 'post', objglobal)
        .subscribe(
          res => {
            const response: any = res.status;
            if (response === 'success') {
              this.ss.ToasterMessage(res['message']);
              document.getElementById('modalButton').click();
              this.cancelPolicyModifications();
            } else if (response === 'failure') {
              this.ss.ToasterMessage(res['message']);
              document.getElementById('modalButton1').click();

            }
          }
        );
      }
    }
    // console.log(this.waletpolicyreqobj);
  }
  checkunitofmeasure(val) {
    // console.log(val);
    const term = val;
    const re = new RegExp('^[0-9]{1,4}\d*$');
    // if (re.test(term) || ) {
    //    console.log("Valid");
    // } else {
    // console.log(re.test(term));
    // }
    // console.log((re.test(term)) || this.policylist.transactionUnitOfMeasure);
    if (!(re.test(term)) || val > 1440) {
      this.uitofmeasureerror = true;
    } else {
      this.uitofmeasureerror = false;
    }
  }
  CloseAuth() {
    this.modalRef.hide();
    this.authmodel.googleCode = '';
  }
  getpolicyDetails() {
    const url = 'user/policy/getGlobalWalletTypePolicy';
    this.gs.generalServiceInfo(url, 'post', '')
      .subscribe(
        res => {
          this.usertyperesponse = res['data'];
          // console.log(this.usertyperesponse);
          this.usertyperesponse.forEach(element => {
            if (element.userType === 'DeepStorage') {
              this.sldeepstorageId = element.id;
              this.deepStorage = element.rules;
              // console.log(this.deepStorage);
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
  editpolicy(value: any) {
    // console.log(value);
    // this.userList['typeOfWalletId'] = value;
    this.workflowtypeOfWalletId = value;
    // this.isEdit = true;
    // console.log(this.workflowtypeOfWalletId )
    // console.log(value);
    if (value === 0) {
      this.workflowwallrttype = 'DeepStorage';
      this.secureStorageedit = true;
      this.highFrequencyedit = true;
      this.policyDetails = this.deepStorage;
      // console.log(this.policyDetails);
    } else if (value === 1) {
      this.workflowwallrttype = 'SecureStorage';
      this.deepStorageedit = true;
      this.highFrequencyedit = true;
      this.policyDetails = this.secureStorage;
    } else if (value === 2) {
      this.workflowwallrttype = 'HighFrequency';
      this.secureStorageedit = true;
      this.deepStorageedit = true;
      this.policyDetails = this.highFrequency;
    }
  }
  timestampvalidation() {
    this.endtimestamperror = false;
    const term = this.updatedPolicyDetail.transactionTimeStart.newValue;
    const re = new RegExp('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');
    if (!(re.test(term))) {
      this.starttimeerror = true;
    } else if (re.test(term)) {
      const timeParts = term.split(':');
      const timeendparts = this.updatedPolicyDetail.transactionTimeEnd.newValue;
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
  endtimestampvalidation() {
    this.timestamperror = false;
    const term = this.updatedPolicyDetail.transactionTimeEnd.newValue;
    const re = new RegExp('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');
    if (!(re.test(term))) {
      this.endtimeerror = true;
    } else if (re.test(term)) {
      const timeParts = term.split(':');
      const timeendparts = this.updatedPolicyDetail.transactionTimeStart.newValue;
      const endtime = timeendparts.split(':');
      const endTime = (+timeParts[0] * (60000 * 60)) + (+timeParts[1] * 60000);
      const  startTime = (+endtime[0] * (60000 * 60)) + (+endtime[1] * 60000);
      this.endtimeerror = false;
      if (startTime >= endTime) {
        this.endtimestamperror = true;
      } else {
        this.endtimestamperror = false;
        this.timestamperror = false;
      }
    }
  }
  roleChange() {
    if (this.clientUserDetails.superAdmin) {
      this.clientUserDetails.userRoles = 'Super User';
    } else {
      this.clientUserDetails.userRoles = 'User';
    }
  }
  onChangeList(value) {
    this.UserListPhone = false;
   for (let i = 0 ; i < this.TempclientDetails.length ; i++ ) {
             if (Number(this.TempclientDetails[i].countryPhonelen) !== this.TempclientDetails[i].phoneNumber.length) {
             this.UserListPhone = true;
       break;
     }
     }
}
}
