import { Component, OnInit, TemplateRef } from '@angular/core';
import { GeneralService } from '../../../general.service';
import { SharedService } from '../../../shared.service';
import {FormBuilder, FormGroup, Validators, NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import * as _ from 'lodash';
@Component({
  selector: 'app-wallet-create',
  templateUrl: './wallet-create.component.html',
  styleUrls: ['./wallet-create.component.css']
})
export class WalletCreateComponent implements OnInit {
  noData: any = false;
  walletUserId: any = null;
  walletstatusType: any = null;
  WalletType: any = null;
  pageIndexWallet: any = 0;
  pageValue: any = 0;
  res = [];
  userId = '';
  username = '';
  tabValue: any = 'All Wallets';
  totalBtc: Number;
  walletsummaryinfo: any = {};
  walletUserLlist: any = [];
  walletList: any = [];
  invitedlist: any = false;
  // showPageLoading: any = false;
  walletId: any = '';
  walletstatus: any = [];
  lastlogin: any = '';
  model: any = {};
  usdDetails: any = [];
  oneUsdvalue: any = '';
  default: any = {'type': 'Bitcoin(BTC)', 'symbol': 'btc.svg'};
  coinlist: any = [
    {'type': 'Bitcoin(BTC)', 'symbol': 'btc.svg'}
    // , {'type' : 'Litetcoin(LTC)', 'symbol': 'lte.svg'}
  ];
  imageUrl: any;
  // cratewallet new dessign
  basic: Boolean = true;
  approver: Boolean = false;
  assignroles: Boolean = false;
  initialfslde: any = false;
  basicForm: any;
  walletInfo: any;
  fullformData: any = {};
  walletmodalRef: BsModalRef;
  userList: any = [
  ];
  itemValue: any = {
    'username' : '',
    'role' : 'ADMIN',
    'userId' : '',
    'roleName': 'Signer',
  };
  ownerId: any = '';
  ownerRole: any = '';
  ownerName: any = '';
  focusedElement: any ;
  compRef: any;
  usersForm: FormGroup;
  roleList: any = [];
  validatedUser: Boolean = false;
userListInfo: any = [];
wDetails: any = {
  'walletName' : '',
  'ownerName' : '',
  'noOfUsers' : '',
  'noOfSignatures' : '',
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
  // coinlist: any = ['BTC'];
  autosearchresult: any = [];
  response: any = [];
  coinValue: any = {
    'coinType': ''
  };
  secureStorageedit: Boolean = false;
  deepStorageedit: Boolean = false;
  highFrequencyedit: Boolean = false;
  deepStorage: any = [];
  secureStorage: any = [];
  highFrequency: any = [];
  policyDetails: any = [];
  isEdit: Boolean = false;
  requestobj: any = {};
  sldeepstorageId: any = '';
  slsecurestorageId: any = '';
  slhighfrquencyId: any = '';
  policyupdatedetails: any = [];
  usertyperesponse: any = [];
  view: Boolean = false;
  initialvalue: Boolean = true;
  roles: any;
  role: string;
  client: any ;
  tempUserId: any = null;
  tempclient: any;
  coinType: any = null;
    constructor(private toastr: ToastrService, private genralservice: GeneralService,  private ss: SharedService, private router: Router,
      private fb: FormBuilder, private modalService: BsModalService) {
      const res = JSON.parse(sessionStorage.getItem('firstLogin') );
      if (res != null) {
        this.userId = res['userId'];
        this.client = res['clientId'];
        this.tempclient = res['clientId'];
        this.username = res['firstName'];
        this.lastlogin = res['lastLoggedInTime'];
        this.imageUrl = res['profilePicUrl'];
        if ( this.imageUrl === null ) {
          this.imageUrl = './assets/images/sidebar/profile.svg';
        }
        this.roles = res['roles'];
        // this.roles.forEach(element => {
        //   if (element === 'USER_ADMIN') {
        //     this.role = 'superUser';
        //   } else if (element === 'ADMIN_VERIFIER' || element === 'ADMIN_CHECKER' || element === 'ADMIN_APPROVER') {
        //     this.role = 'Admin';
        //   } else if (element === 'USER') {
        //     this.role = 'Customer';
        //   }  else if (element === 'USER_SIGNER' || element === 'USER_VIEWER') {
        //     this.role = 'User';
        //   }
        // });
        // tslint:disable-next-line:max-line-length
        if ((this.roles.indexOf('USER_ADMIN') >= 0)) {
          this.role = 'SuperUser';
        // tslint:disable-next-line:max-line-length
        } else if ((this.roles.indexOf('USER') >= 0)) {
          this.role = 'User';
          this.tempclient = null;
          this.tempUserId = this.userId;
          this.tabValue = 'My Wallets';
           // tslint:disable-next-line:max-line-length
        } else if (this.roles.indexOf('ADMIN_VERIFIER') >= 0 || this.roles.indexOf('ADMIN_CHECKER') >= 0  || this.roles.indexOf('ADMIN_APPROVER') >= 0  ) {
          this.role = 'Admin';
        // tslint:disable-next-line:max-line-length
        } else {
          this.role = 'Fusang User';
        }
      }
      if (res !== null) {
        this.ownerId = res['userId'];
        this.itemValue.username = res['username'];
        this.itemValue.userId = res['userId'];
        this.userList.push(this.itemValue);
        console.log(this.userList);
        }
   }

  ngOnInit() {
// createwallet new design
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
    this.getRolelist ();
    const res = JSON.parse(sessionStorage.getItem('firstLogin') );
     this.userId = res['userId'];
    this.username = res['firstName'];
    this.lastlogin = res['lastLoggedInTime'];
    this.imageUrl = res['profilePicUrl'];
    if ( this.imageUrl === null ) {
      this.imageUrl = './assets/images/sidebar/profile.svg';
    }
document.getElementById('loggedInImage').setAttribute('src', this.imageUrl);
    this.walletsummary();
    this.getcurrentusdvalue();
    // this.getpolicyDetails();
      }
      public focusFunction(element) {
        this.focusedElement = element;
      }
  walletsummary() {
    const obj = {
      'userId' : this.tempUserId,
      'clientId': this.tempclient,
      'coinType': this.coinType,
      'pageNumber': this.pageIndexWallet,
      'pageSize': 10,
      'walletStatus': this.walletstatusType,
      'walletType': this.WalletType
    };
    const url = 'user/summary';
    this.genralservice.generalServiceInfo(url, 'post', obj)
                      .subscribe(
                        res => {
                          this.getWalletUserList();
                          const response: any = res.status;
                          if (response === 'success') {
                            if (this.ss.validVal(res['data'])) {
                                this.walletsummaryinfo = res['data'];
                                this.walletList = this.walletsummaryinfo ['walletList'];
                            } else {
                              this.walletsummaryinfo = {};
                              this.walletList = [];
                            }
                         } else {
                          this.ss.ToasterMessage(res['message']);
                          document.getElementById('modalButton1').click();
                         }
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
  getWalletUserList() {
    const obj = {
       'id': this.client
    };
    const url = 'user/getUserListForClient';
    this.genralservice.generalServiceInfo(url, 'post', obj)
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
  redirect(val) {
    if ( val.status  === 'Completed' || val.status  === 'Freezed') {
      this.ss.Walletid(val.walletId);
      sessionStorage.setItem('currentWalletStatus', val.status);
      sessionStorage.setItem('fromNavigation', 'createWallet');
      this.router.navigate(['/fusang/personalwallet']);
    } else if (val.status  === 'Incomplete') {
      this.ss.Walletid(val.walletId);
      sessionStorage.setItem('currentWalletStatus', val.status);
      sessionStorage.setItem('fromNavigation', 'createWallet');
      this.router.navigate(['/fusang/personalwallet']);
    }
  }
  navigateTo() {
    this.router.navigateByUrl('/walletcreate-info');
  }
  joinwallet(val) {
    const url = 'wallet/join';
    const obj = {
      'userId' : this.userId,
      'walletId' : val,
      'status': 'joined'
    };
    this.genralservice.generalServiceInfo(url, 'post', obj)
            .subscribe(
              res => {
                this.walletstatus = res;
                this.walletsummary();
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
                this.walletsummary();
              }
            );
  }
  cancelRequesyt(value) {
    const url = 'wallet/join';
    const obj = {
      'userId' : this.userId,
      'walletId' : value,
      'status': 'canceled'
    };
    this.genralservice.generalServiceInfo(url, 'post', obj)
            .subscribe(
              res => {
                this.walletstatus = res;
                this.walletsummary();
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
  getcurrentusdvalue() {
    this.genralservice.getBitCoin('https://blockchain.info/ticker')
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
  }
  createwallet(invitetemplate: TemplateRef<any>) {
    this.walletmodalRef = this.modalService.show(invitetemplate,
      Object.assign({}, { class: 'whitelist modal-lg' }));
    // this.modalRef.hide();
  }
  // creatre wallet new design
  nexttab() {
    Object.keys(this.basicForm.value).forEach(element => {
      this.fullformData[element] = this.basicForm.value[element];

    });
    console.log( this.fullformData);
    this.showapprover();
  }
  showbasic() {
    this.basic = true;
    this.approver = false;
    this.assignroles = false;
  }
  showapprover() {
    Object.keys(this.basicForm.value).forEach(element => {
      this.fullformData[element] = this.basicForm.value[element];

    });
    this.basic = false;
    this.approver = true;
    this.assignroles = false;
  }
  showassignroles() {
    // Object.keys(this.basicForm.value).forEach(element => {
    //   this.fullUserFormData[element] = this.basicForm.value[element];

    // });
    // console.log(this.fullUserFormData);
    this.basic = false;
    this.approver = false;
    this.assignroles = true;
  }
onSelectionChanged(vale) {}
inviteCustomer(invitetemplate: TemplateRef<any>) {}
getRolelist () {
  this.genralservice.getRolelist()
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
checkId (val, formName, type) {
  const obj = {
    'searchString': this.model.username
  };
  const url = 'user/autoSearch';
  this.genralservice.generalServiceInfo(url, 'post', obj)
    .subscribe(
      res => {
        this.model.userId = this.ss.validVal(_.find(res['data'], function(o) { return o.username === val.toLowerCase(); })) ?
        _.find(res['data'], function(o) { return o.username === val.toLowerCase(); }).id : '';
        console.log(this.model.username);
        console.log(val);
        if (this.ss.validVal(this.model.userId)) {
          this.validatedUser = true;
          this.userListInfo.push(this.model);
          this.userList.push(this.model);
          this.validatedUser = false;
          let c;
          c = 0;
          this.userList.forEach(function(el) {
            c = (el.role === 'ADMIN') ? c + 1 : c;
          });
          if (c > this.wDetails.noOfSignatures) {
            // this.showPageLoading = false;
            // this.moreAdmins = true;
            if (this.validatedUser === true) {
            // this.toastr.error('Admin role of the added user should  be equal to  no of signatures.');
            this.ss.ToasterMessage('Signers should be equal to number of signatures.');
            document.getElementById('modalButton1').click();
            this.userList.splice(-1, 1);
            }
          }
          if (this.userList.length === this.wDetails.noOfUsers) {
            this.initialfslde = false;
          }
          this.model = {
            'username' : null,
            'role' : null,
            'roleName': null
          };
          if (type === 'create') {
            this.ss.ToasterMessage('Please click on Submit again to complete the process.');
            document.getElementById('modalButton2').click();
          }
          formName.reset();
        } else {
          this.validatedUser = true;
          this.ss.ToasterMessage(this.model.username + ' is not registerd user.');
          document.getElementById('modalButton1').click();
        }
        this.errorUserInfo = false;
        // this.toastr.error('Number of users added does not match with count');
      },
      e => {
      },
      () => {
      });
  // return id;
}
addUser(addUserForm: NgForm) {
  this.roleInf = [];
  this.moreAdmins = false;
  if (this.wDetails.noOfUsers > 0 && this.wDetails.noOfSignatures > 0) {
    this.noOfUsersAvail = false;
    this.initialfslde = true;
    // let u;
    // u = this.model.username;
    const x: any = _.findIndex(this.userList, ['username', this.model.username]);
    if ((x === -1) && this.ss.validVal(this.model.username)) {
            this.checkId(this.model.username, addUserForm, '');
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
coinSelected(item) {
  this.wDetails.coinType = item;
  this.wDetails.ownerId = this.ownerId;
}
roleSelected(val: any) {
  // this.roleselectedinfo = [];
  let temp: any = {};
  for (let i = 0; i < this.roleList.length; i++) {
    if (this.roleList[i].value === val) {
      temp = this.roleList[i];
    }
  }
  console.log(temp);
    this.model['role'] = temp.value;
  this.model['roleName'] = temp.name;
}
userroleSelected(val, index) {
  console.log(val);
  this.model['role'] = val.value;
  this.model['roleName'] = val.name;
  this.selectedItem = val.value;
    // this.userList.role = val.value;
    // this.userList.roleName = val.name;
    for (let i = 0; i < this.userList.length; i++) {
      if (i === index) {
        this.userList[i].role = val.value;
        this.userList[i].roleName = val.name;
      }
    }
}

deleteextrarow() {
  this.initialfslde = false;
  this.model = {
    'username' : null,
    'role' : null,
    'roleName': null
  };

}

onuserChange(val) {
  if (this.initialfslde === true) {
    this.initialfslde = false;
    console.log(this.model);
    this.model = {
      'username' : null,
      'role' : null,
      'roleName': null
    };
  }
  this.adduserStatus = true;
}
onChange(val) {
  // setTimeout(() => {
  this.nofouser = val;
  if (this.ss.validVal(val)) {
    if (val.length > 3 ) {
      const obj = {
        'searchString': val
      };
      const url = 'user/autoSearch';
      this.genralservice.autoSearch(url, 'post', obj)
        .subscribe(
          res => {
            this.autosearchresult = res['data'];
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
userSelected(val) {
 if (val.id) {
  this.model.userId = val.id;
  this.model.username = val.username;
 } else {
  this.ss.ToasterMessage('Please select the user in list');
  document.getElementById('modalButton1').click();
 }

}
onsignatureChange(val) {
  if (val > this.wDetails.noOfUsers) {
    this.erroinsignsture = true;
    // this.showPageLoading = false;
  } else {
    this.erroinsignsture = false;
  }
}
createWallet(addUserForm: NgForm) {
  this.roleInf = [];
  if (this.erroinsignsture !== true) {
    // this.showPageLoading = true;
    if (this.ss.validVal(this.model.username)) {
      this.checkId(this.model.username, addUserForm, 'create');
    } else {
    }
    let c;
    c = 0;
    this.userList.forEach(function(el) {
      c = (el.role === 'ADMIN') ? c + 1 : c;
    });


    if (this.wDetails.coinType === null || this.wDetails.coinType === undefined) {
      this.errmsg = true;
      // this.showPageLoading = false;
    } else if (this.userList.length < this.wDetails.noOfUsers) {
      if (this.validatedUser === true) {
        this.ss.ToasterMessage('Userlist should be equal to number of user.');
        document.getElementById('modalButton1').click();
      }
      // this.showPageLoading = false;
      // this.errorUserInfo = true;
      // this.toastr.error('Userlist should be equal to number of user');
    } else if (this.userList.length !== this.wDetails.noOfUsers) {
      // this.showPageLoading = false;
      if (this.validatedUser === true) {
        this.ss.ToasterMessage('Userlist should be equal to number of user.');
        document.getElementById('modalButton1').click();
      }
      this.ss.ToasterMessage('Userlist should be equal to number of user.');
      document.getElementById('modalButton1').click();
    } else if (c !== this.wDetails.noOfSignatures) {
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
                if (this.userList.length > 0 ) {
                  this.validatedUser = true;
                } else {
                  this.ss.ToasterMessage(this.model.username + ' is not registerd user.');
                  document.getElementById('modalButton1').click();
                return false;
                }
              }
      this.wDetails['userList'] = this.userList;
      this.moreAdmins = false;
      const url = 'wallet/create';
      this.genralservice.generalServiceInfo(url, 'post', this.wDetails)
        .subscribe(
          res => {
            this.response = res['data'];
            // this.showPageLoading = false;
            this.ss.ToasterMessage(res['message']);
                  document.getElementById('modalButton').click();
            this.router.navigateByUrl('/fusang/walletcreate');
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

  }
}
canclerequest() {
  this.router.navigate(['/fusang/walletcreate']);
}
deleterow(i) {
          this.userList.splice(i, 1);

          this.userListInfo.splice(i, 1);
          this.userListInfo.splice(this.userListInfo.length - 1, 1);
}
displayFn(user) {
  if (user) { return user.name; }
}
filteredUsers () {
  console.log(this.usersForm.get('userInput'));
}
editpolicy(value) {
  this.requestobj['typeOfUserId'] = value;
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
refresh() {
  this.noData = false;
  this.WalletType = null;
  this.walletstatusType = null;
  this.walletUserId = null;
  this.pageIndexWallet = 0;
  this.pageValue = 0;
  this.coinType = null;
  if (this.tabValue === 'All Wallets') {
    this.tempUserId = null ;
    this.tempclient = this.client;
  } else if (this.tabValue === 'My Wallets') {
    this.tempUserId = this.userId ;
    this.tempclient = null;
  }
  this.walletsummary();
  this.getcurrentusdvalue();
}
clear() {
  this.walletsummary();
  this.getcurrentusdvalue();
}
public pageChangewallet(event: any): void {
  this.pageIndexWallet = event.page - 1;
  this.walletsummary();
}
tabclick(value) {
  this.noData = false;
  this.tabValue = value;
  this.WalletType = null;
  this.walletstatusType = null;
  this.walletUserId = null;
  this.coinType = null;
  this.pageIndexWallet = 0;
  this.pageValue = 0;
  if (value === 'All Wallets') {
    this.tempUserId = null ;
    this.tempclient = this.client;
    this.walletsummary();
  } else if (value === 'My Wallets') {
    this.tempUserId = this.userId ;
    this.tempclient = null;
    this.walletsummary();
  }
}
typeChange(value) {
  this.pageIndexWallet = 0;
  this.pageValue = 0;
  this.noData = true;
  if (value === 'null') {
    this.WalletType = null;
  } else {
    this.WalletType = value;
  }
  this.walletsummary();
}
walletstatusChange(value) {
  this.noData = true;
  this.pageIndexWallet = 0;
  this.pageValue = 0;
  if (value === 'null') {
    this.walletstatusType = null;
  } else {
    this.walletstatusType = value;
  }
  this.walletsummary();
}
userChange(value) {
  this.pageIndexWallet = 0;
  this.pageValue = 0;
  if (value === 'null') {
    this.tempUserId = null;
    this.tempclient = this.client;
  } else {
    this.tempUserId = value;
    this.tempclient = null;
  }
  this.noData = true;
  // this.tempclient = null;
  this.walletsummary();
}
coinTypeChange(value) {
  this.noData = true;
  this.pageIndexWallet = 0;
  this.pageValue = 0;
  if (value === 'null') {
    this.coinType = null;
  } else {
    this.coinType = value;
  }
  this.walletsummary();
}
}
