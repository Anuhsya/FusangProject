import { Component, OnInit, TemplateRef, ViewChild, Input, } from '@angular/core';
import { GeneralService } from '../../../general.service';
import { SharedService } from '../../../shared.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
  customerName = 0;
  tabValue: any = 'Completed';
  userValue: String = 'ClientUser';
  activeState: any = true;
  showSearch = false;
  searchValue: any = null;
  userRole: any = null;
  modalRef: BsModalRef;
  basic = true;
  basicForm: any;
  filteredOptions: Observable<string[]>;
  totalItem: any = [];
  pageIndex: any = 0;
  pageIndexModel = 0;
  countrylist: any = [];
  code: any;
  phonelength: any;
  countryPhonelen: any;
  countrylist1: any = [];
  phoneNumber: any = '';
  userSearch: any = null;
  clientname: any = '';
  filterData: any = [];
  typeValue: any = null;
  typelist: any = [];
  invalidphone: Boolean = false;
  basicmodel: any = {
    firstName: '',
    lastName: '',
    country: '',
    phoneNo: '',
    email: ''
  };
  tableData: any = [];
  userList: any = [];
  columns: string[] = ['profilePic', 'userName', 'emailId', 'wallets', 'status', 'role', 'createdDate'];
  newColumns: any[] = [
    {
      'name': '',
      'value': 'profilePic'
    },
    {
      'name': 'Username',
      'value': 'userName'
    },
    {
      'name': 'Email ID',
      'value': 'emailId'
    },
    {
      'name': 'Client Name',
      'value': 'clientName'
    },
    {
      'name': 'Status',
      'value': 'status'
    },
    {
      'name': 'Role',
      'value': 'role'
    },
    {
      'name': 'Created Date',
      'value': 'createdDate'
    }
  ];
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: false
  };
  @Input() workflowData: string;
  @Input() userStatus: string;
  // clientname: any = '';
  isCustomer: Boolean = true;
    // userRole: any = '';
    clientId: any = '';
    userName: any = '';
    userId: any = '';
    client: any = '';
  roles: any = [];
  role: string;
  clientList: any = [];
  NoDataFound: Boolean =  false;
  isHidden: Boolean =  false;
  filterSearching: Boolean =  false;
  defauluser: any = './assets/images/dashboard/defaultuser.svg';
  constructor(private modalService: BsModalService, private gs: GeneralService, private ss: SharedService, private fb: FormBuilder,
    private router: Router, private titlecasePipe: TitleCasePipe) {
    const res = JSON.parse(sessionStorage.getItem('firstLogin'));
    console.log(res);
    if  (res != null) {
      this.userId = res.userId;
      this.clientId = res.clientId;
      this.userName = res.firstName;
      this.client = res.clientName;
      this.roles = res['roles'];
      // tslint:disable-next-line:max-line-length
      if ((this.roles.indexOf('USER_ADMIN') >= 0)) {
        this.role = 'superUser';
      // tslint:disable-next-line:max-line-length
      } else if ((this.roles.indexOf('USER') >= 0)) {
        this.role = 'User';
      // tslint:disable-next-line:max-line-length
      } else if (this.roles.indexOf('ADMIN_VERIFIER') >= 0 || this.roles.indexOf('ADMIN_CHECKER') >= 0 || this.roles.indexOf('ADMIN_APPROVER') >= 0 ) {
        this.role = 'Admin';
      // tslint:disable-next-line:max-line-length
      } else {
        this.role = 'Fusang User';
      }
    }
   }

  ngOnInit() {
    // this.ss.storedValue('ClientUser');
    this.NoDataFound =  false;
    this.isCustomer = true,
      this.userRole = null;
    this.clientname = null;
    const regemail = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    this.basicForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', ],
      emailId: ['',  [Validators.required, Validators.pattern(regemail)]],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      role: [''],
      superAdmin: [false],
    });
    this.filteredOptions = this.basicForm
      .get('country')
      .valueChanges
      .pipe(
        map(value => {
          return this._filter(value);
        })
      );
    this.getcountrylist();
    this.getClientName();
    this.listUser();
  }
  private _filter(value) {
    if (value !== '') {
      const filterValue = value.toLowerCase();
      return this.countrylist1.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
  }
  tabClick(data) {
    console.log(data);
    if (data === 'Completed') {
      this.activeState = true;
      this.pageIndex = 0;
      this.pageIndexModel = 0;
    }
    if (data === 'Onboarding') {
      this.activeState = false;
    }
    this.tabValue = data;
    this.clearUserData();
    // this.listUser();
  }
  // search function starts
  userstatusChange(type) {
    this.userRole = type;
    this.filterSearching =  true;
    console.log(type);
    this.listUser();
  }
  customerChange(customerName) {
    let tempClient = {};
    this.clientList.forEach(element => {
        if (element.id.toString() === customerName) {
          tempClient = element;
        }
    });
    this.client = tempClient['clientName'];
    this.clientId = tempClient['id'];
    this.filterSearching =  true;
    this.listUser();
  }
  statusChange(searchValue) {
    this.userSearch = searchValue;
    this.clientname = searchValue;
    this.filterSearching =  true;
    this.listUser();
  }

  // searchUser(searchValue) {
  //   this.userSearch = searchValue;
  //   this.clientname = searchValue;
  //   this.listUser();
  // }
  // search function ends
  public searchClick() {
    this.showSearch = !this.showSearch;
    this.searchValue = '';
  }
  // opening invite popup
  inviteClient(invitetemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(invitetemplate, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
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
  listUser() {
    const obj = {
      // "clientId": this.clientId,
      'clientId': this.clientId,
      'clientName': this.client,
      'isCompleted': this.activeState,
      'isCustomer': this.isCustomer,
      'pageNumber': this.pageIndex,
      'pageSize': 10,
      'status': this.userRole === '0' ? null : this.userRole,
      'userRole': this.userRole,
      'username': this.clientname,
    };
    // const url = 'client/getClientUsersList';/api/user/getUsersList
    const url = 'user/getUsersList';
    this.gs.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          this.tableData = [];
          const response: any = res.status;
          console.log(res['data']);
          if (response === 'success') {
            this.filterData = res['data']['status'];
            sessionStorage.setItem('totalLength', res['data'].total);
            this.totalItem = res['data'].total;
            if (res['data'].total === 0 || res['data'].total === '') {
              this.NoDataFound = true;
              this.isHidden =  true;
               // This condition is to check when- onloading nodatafound flag should be set to true.
              //  if (this.filterSearching ===  true) {
              //   this.NoDataFound = false;
              // }
            }

            if (res['data'].total !== 0 && res['data'].total !== '' && res['data'].total !== null ) {
              this.isHidden =  false;
              this.filterSearching = false;
            }
            sessionStorage.setItem('workflowObjectUser', JSON.stringify(res['data']['userList']));
            res['data']['userList'].forEach((element) => {
              if (element.userStatus !== null) {
                  if (element.profilePic === '' || element.profilePic === undefined || element.profilePic === null) {
                  element.profilePic = this.defauluser;
                }
                this.tableData.push({
                  'profilePic': element.profilePic,
                  'userName': element.firstName,
                  'emailId': element.emailId,
                  'clientName': element.clientName,
                  'status': element.userStatus,
                  'role': element.userRoles,
                  'id':  element.id,
                  'clientId': element.clientId,
                  'createdDate': element.createdDate
                });
              }
            });
            // const startItem = this.pageIndex * 10;
            // const endItem = (this.pageIndex + 1) * 10;
            // this.tableData = this.tableData.slice(startItem, endItem);
            sessionStorage.setItem('workflowObject', JSON.stringify(this.tableData));

            this.ss.TableData(this.tableData);
            this.ss.TableData(this.tableData);
            this.ss.DisplayedColumn(this.newColumns);
            sessionStorage.setItem('displaycolumns', JSON.stringify(this.newColumns));
            sessionStorage.setItem('tableData', JSON.stringify(this.tableData));

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
  onChange(val) {
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
  roleSelected(value) {
    console.log(value);
  }
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    // console.log(event.option.value);
    this.basicmodel.country = event.option.value;
    this.countrylist.forEach((element) => {
      if (event.option.value.toLowerCase() === element.name.toLowerCase()) {
        this.code = element.dial_code;
        this.countryPhonelen = element.length;
        // console.log(this.countryPhonelen);
        this.phonelength = element.length;
        this.basicmodel.phoneNo = this.code + ' ';
        this.phoneNumber = '';
      }
    });
  }
  inviteUser() {
    this.userList = [];
    if (this.basicForm.value.firstName) {
      this.userList = this.basicForm.value;
          }
      this.userList.userRoles = [];
      // this.userList.userRoles.push(this.userList.role);
      if (this.basicForm.value.superAdmin) {
        this.userList.userRoles.push('USER_ADMIN');
      } else {
        this.userList.userRoles.push('USER');
      }
      delete this.userList.superAdmin;
      delete this.userList.role;
      this.userList.firstName = this.titlecasePipe.transform(this.userList.firstName);
      this.userList.lastName = this.titlecasePipe.transform(this.userList.lastName);
      this.userList['clientId'] =  this.clientId;
      const url = 'client/inviteClientUser';
      this.gs.generalServiceInfo(url, 'post', this.userList)
              .subscribe(
                res => {
                  const response: any = res.status;
                  if (response === 'success') {
                    this.ss.ToasterMessage(res['message']);
                    document.getElementById('modalButton').click();
                    this.listUser();
                    this.basicForm.reset();
                    this.basicForm.value.superAdmin = false;
                    this.code = '';
                    this.modalRef.hide();

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
      public pageChanged(event: any): void {
        this.pageIndex = event.page - 1;
        this.listUser();
      }

      clearUserData() {
        this.NoDataFound =  false;
        this.isCustomer = true,
        this.userRole = '0';
        this.pageIndex = 0;
        this.pageIndexModel = 0;
        // this.clientname = null;
        if (this.role !== 'superUser') {
          this.client = null;
          this.clientId = null;
          this.customerName = 0;
        }
        this.searchValue = null;
        this.userSearch = null;
        this.clientname = null;
        this.filterSearching =  false;
        this.showSearch = false;
        this.listUser();
      }

      clearfilter() {
        this.NoDataFound =  false;
        this.searchValue = null;
        this.userSearch = null;
        this.clientname = null;
        this.showSearch = !this.showSearch;
        this.listUser();
      }

    modelClear() {
        this.basicForm.reset();
        this.basicForm.value.superAdmin = false;
        this.code = '';
        this.userRole = 0;
        this.searchValue = null;
        this.clientname = null;
        this.modalRef.hide();
      }
      refresh() {
        // this.userRole = '0';
        // this.userRole = null;
        // this.NoDataFound =  false;
        // this.isCustomer = true,
        // this.pageIndex = 0;
        // this.customerName = 0;
        // this.clientname = null;
        // this.tabValue = 'Completed';
        // this.searchValue = null;
        this.listUser();
      }
      numberOnly(event): boolean {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 48 || charCode > 57)) {
          return false;
        }
        return true;
      }
}
