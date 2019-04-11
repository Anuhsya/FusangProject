import { Component, OnInit, TemplateRef } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { GeneralService } from '../../../general.service';
import { SharedService } from '../../../shared.service';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { FormBuilder, FormGroup, } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-wallet-creat-info',
  templateUrl: './wallet-creat-info.component.html',
  styleUrls: ['./wallet-creat-info.component.css']
})
export class WalletCreatInfoComponent implements OnInit {
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: false
  };
  modalRefauth: BsModalRef;
  verificationCodeValid = false;
  authmodel: any = {};
  tempSelectValue: any = {};
  modalRefwallet: BsModalRef;
  public id: number; public name: string;
  secureStorageedit: any;
  focusedElement: any;
  deepStorageedit: any;
  highFrequencyedit: any;
  // editpolicy: any;
  // slsecurestorageId: any;
  usersForm: FormGroup;
  // filteredUsers: any;
  wDetails: any = {
    'walletName': '',
    // 'ownerName': '',
    'noOfUsers': '',
    'noOfSignatures': '',
  };
  model: any = {
    'username': '',
    'role': '',
    // 'roleName': ''
  };
  itemValue: any = {
    'username': '',
    'role': 'Signer',
    'userId': '',
  };
  ownerId: any = '';
  ownerRole: any = '';
  // ownerName: any = '';
  //  ownerdetails: any = {
  //    'ownerId': ''
  //  };
  coinValue: any = {
    'coinType': ''
  };
  userListsearch: any = {
    'userId': '',
  };
  userList: any = [
  ];
  initialfslde: any = false;
  userListInfo: any = [];
  response: any = [];
  roleList: any = [];
  coinList: any = [];
  //   roleList: [
  //   {
  //     'name': 'Signer',
  //     'value': 'ADMIN'
  //   },
  //   {
  //     'name': 'Viewer',
  //     'value': 'USER'
  //   }
  // ];
  coinlist: any = ['BTC'];
  autosearchresult: any = [];
  // showPageLoading: any = false;
  errmsg: any = false;
  errinrole: any = false;
  errorUserInfo: any = false;
  erroinsignsture: any = false;
  userlength: any = '';
  nofouser: any = '';
  count: any = 1;
  adduserStatus: any = true;
  noOfUsersAvail: Boolean = false;
  roleInf: any = [];
  moreAdmins: any = false;
  existinguser: any = false;
  invaliduser: any = false;
  roleselectedinfo: any = [];
  validatedUser: Boolean = false;
  selectedItem: any = '';
  compRef: any;
  color: any;
  isEdit: Boolean = false;
  // roles: any;
  // role: string;
  sldeepstorageId: any = '';
  slsecurestorageId: any = '';
  slhighfrquencyId: any = '';
  policyupdatedetails: any = [];
  usertyperesponse: any = [];
  deepStorage: any = [];
  secureStorage: any = [];
  highFrequency: any = [];
  requestobj: any = {};
  policyDetails: any = [];
  view: Boolean = false;
  typeOfWalletId: any = '';
  initialvalue: Boolean = true;
  client: any = [];
  valumeunit: any = 'Daily';
  addUserNameField: Boolean =  false;
  autosearchresult1: any = [];
  Tempautosearchresult1: any = [];
  notRegUser: boolean;
  // moreuser: Boolean = false;
  // moreSignatories: Boolean = false;
  constructor(private router: Router, private genaralservice: GeneralService, private ss: SharedService, private toastr: ToastrService,
    private fb: FormBuilder, private modalService: BsModalService) {
    const res = JSON.parse(sessionStorage.getItem('firstLogin'));
    console.log(res);
    if (res !== null) {
      this.ownerId = res['userId'];
      this.client = res['clientId'];
      // this.wDetails.ownerName = res['firstName'] + ' ' + res['lastName'];
      this.itemValue.username = res['username'];
      this.itemValue.userId = res['userId'];
      this.userList.push(this.itemValue);
      console.log( this.userList);
      // this.roles.forEach(element => {
      //   if (element === 'USER_ADMIN') {
      //     this.role = 'superUser';
      //   } else if (element === 'ADMIN_VERIFIER' || element === 'ADMIN_CHECKER' || element === 'ADMIN_APPROVER') {
      //     this.role = 'Admin';
      //   } else if (element === 'USER_SIGNER' || element === 'USER_VIEWER') {
      //     this.role = 'User';
      //   }
      // });
    }
    // this.userListInfo.push(this.itemValue);



  }

  ngOnInit() {

    this.compRef = this;
    this.usersForm = this.fb.group({
      userInput: null
    });
    this.getRolelist();
    this.getpolicyDetails();
    this.getusetList();
    this.getCoinType();
  }
  public focusFunction(element) {
    this.focusedElement = element;
  }
  checkId(val, type, wallettemplate) {
    // let x : any = _.findIndex(this.Tempautosearchresult1, function (el) {
    //       return el === this.model.username;
    // });
    const x: any = _.indexOf(this.Tempautosearchresult1, this.model.username);
          // const x: any = _.findIndex(this.Tempautosearchresult1, ['username', this.model.username]);
          console.log(x);
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
            if (type === 'create') {
            }
            this.model = {
              'username': '',
              'role': '',
              // 'roleName': ''
            };
            this.addUserNameField =  true;
          } else {
            this.validatedUser = true;
            this.ss.ToasterMessage('"' + this.model.username + '" is not a registered user!');
            document.getElementById('modalButton1').click();
            this.addUserNameField =  false;
          }
          this.errorUserInfo = false;
        this.addUserNameField =  false;
        }
        this.getusetList();
  }
  addUser(wallettemplate) {
    console.log(this.model);
    this.roleInf = [];
    this.moreAdmins = false;
    this.addUserNameField =  false;
    if (this.wDetails.noOfUsers > 0 && this.wDetails.noOfSignatures > 0) {
      this.noOfUsersAvail = false;
      this.initialfslde = true;
        const x: any = _.findIndex(this.userList, ['username', this.model.username]);
        console.log(x);
        if ((x === -1) && this.ss.validVal(this.model.username)) {
          this.checkId(this.model.username, '', wallettemplate);
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
  }
  roleSelected(val: any) {
    console.log(val);
    // this.roleselectedinfo = [];
    // let temp: any = {};
    // for (let i = 0; i < this.roleList.length; i++) {
    //   if (this.roleList[i] === val) {
    //     temp = this.roleList[i];
    //   }
    // }
    // this.model.role = this.roleList[0];
      // if (this.model.role === 'Signer') {
      //  this.model.roleName = 'Signer';
      // } else if (this.model.role === 'USER_VIEWER') {
      //   this.model.roleName = 'Viewer';
      // }
    // console.log(temp);
    // this.model['role'] = temp;
    // this.model['roleName'] = temp;
    console.log(this.model);
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
      'username': '',
      'role': '',
      // 'roleName': ''
    };
    this.getusetList();

  }

  onuserChange(val) {
    // if (val !== 0) {
    //   this.moreSignatories = false;
    if (this.initialfslde === true) {
      this.initialfslde = false;
      console.log(this.model);
      this.model = {
        'username': '',
        'role': '',
        // 'roleName': ''
      };
    }
    if (Number(val) >=  Number(this.wDetails.noOfSignatures)) {
      this.erroinsignsture = false;
    } else {
      this.erroinsignsture = true;
    }
    this.adduserStatus = true;
    // } else {
    //   this.moreSignatories = true;
    // }
  }
  getusetList() {
    this.autosearchresult1 = [];
    const obj = {
      'searchString': '',
      'clientId': this.client
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

  onChange(val) {
    if (val === '') {
      this.addUserNameField =  false;
    }
    // setTimeout(() => {
    this.nofouser = val;
    if (this.ss.validVal(val)) {
      if (val.length > 3) {
        const obj = {
          'searchString': val,
          'clientId': this.client
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
    //  }, 4000);
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
  onsignatureChange(val) {
    if (Number(val) > Number(this.wDetails.noOfUsers)) {
      this.erroinsignsture = true;
      // this.showPageLoading = false;
    } else {
      this.erroinsignsture = false;
    }
    // if (val === 0) {
    //   this.moreuser = true;
    // }
  }
  clickagain(addUserForm, wallettemplate) {
    this.createWallet(wallettemplate);
  }
  createWallet(wallettemplate: TemplateRef<any>) {
    this.roleInf = [];
    if (this.typeOfWalletId === 0 || this.typeOfWalletId) {
    if (this.erroinsignsture !== true) {
      const x: any = _.findIndex(this.userList, ['username', this.model.username]);
        if ((x === -1) && this.ss.validVal(this.model.username)) {
          this.checkId(this.model.username, 'create', wallettemplate);
          this.existinguser = false;
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
      } else if (this.userList.length.toString() < this.wDetails.noOfUsers) {
        if (this.validatedUser === true) {
          this.ss.ToasterMessage('Userlist should be equal to number of user.');
          document.getElementById('modalButton1').click();
        }
        this.ss.ToasterMessage('Userlist should be equal to number of user.');
          document.getElementById('modalButton1').click();
      } else if (this.userList.length.toString() !== this.wDetails.noOfUsers) {
        if (this.validatedUser === true) {
          this.ss.ToasterMessage('Userlist should be equal to number of user.');
          document.getElementById('modalButton1').click();
        } else if (this.validatedUser === false) {
          if (this.userList.length.toString() !== this.wDetails.noOfUsers) {
            this.ss.ToasterMessage('Userlist should be equal to number of user.');
          document.getElementById('modalButton1').click();
          }

        }
      } else if (c.toString() < this.wDetails.noOfSignatures) {
        this.ss.ToasterMessage('Signers should be equal to number of signatures.');
        document.getElementById('modalButton1').click();
      } else {
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
        this.wDetails['typeOfWalletId'] = this.typeOfWalletId;
        this.wDetails['createdBy'] = this.ownerId;
        this.wDetails['ownerId'] = this.ownerId;
        this.wDetails['userList'] = this.userList;
        this.wDetails['clientId'] = this.client;
        this.moreAdmins = false;
        this.modalRefwallet = this.modalService.show(wallettemplate, { class: 'whitelist modal-lg' });
              }
            }
    }
  } else {
    this.ss.ToasterMessage('Please select walletType.');
    document.getElementById('modalButton1').click();
  }
  }
  canclerequest() {
    this.router.navigate(['/fusang/walletcreate']);
  }
  deleterow(i) {
    this.userList.splice(i, 1);

    this.userListInfo.splice(i, 1);
    this.getusetList();
    this.userListInfo.splice(this.userListInfo.length - 1, 1);
  }
  displayFn(user) {
    if (user) { return user.name; }
  }
  filteredUsers() {
    console.log(this.usersForm.get('userInput'));
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
    this.userList['typeOfWalletId'] = value;
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
    this.view = true;
    this.initialvalue = false;
  }
  termsandcondition() {

  }
  help() {
    window.location.href = 'support@fusang.co';
  }
  authPublic(auth: TemplateRef<any>) {
    this.modalRefauth = this.modalService.show(auth, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
  }

  authSuccess() {
    const obj: any = {};
    obj.verificationCode = this.authmodel.googleCode;
    this.genaralservice.generalServiceInfo('user/validatedToPerformAction', 'post', obj)
      .subscribe(
        res => {
          const response: any = res.status;
          if (response === 'success') {
            this.modalRefauth.hide();
            this.authmodel.googleCode = '';
            this.confirmClime();
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
  confirmClime() {
    const url = 'wallet/create';
    this.genaralservice.generalServiceInfo(url, 'post', this.wDetails)
      .subscribe(
        res => {
          this.response = res['data'];
          const respns: any = res.status;
          if (respns === 'success') {
            this.modalRefwallet.hide();
          this.ss.ToasterMessage(res['message']);
          document.getElementById('modalButton').click();
          this.router.navigateByUrl('/fusang/walletcreate');
          } else {
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton1').click();
          }
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
  roleuserSelected(value, index) {
    console.log(value);
    console.log(index);
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
  CloseAuth() {
    this.modalRefauth.hide();
    this.authmodel.googleCode = '';
  }
  cancelCreateWallet() {
    this.validatedUser = false;
    this.modalRefwallet.hide();
  }
  getCoinType() {
    const url = '/assets/timezonelist.json';
    this.genaralservice.localfileinfo(url)
      .subscribe(
        res => {
          this.coinList = res;
        },
        e => {
        },
        () => {
        }
      );
  }
}
