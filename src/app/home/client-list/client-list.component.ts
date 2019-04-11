import { Component, OnInit, TemplateRef, ViewChild, Input, } from '@angular/core';
import { GeneralService } from '../../general.service';
import { SharedService } from '../../shared.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormControl, Validators, FormGroup, FormBuilder, AbstractControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import * as _ from 'lodash';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { TitleCasePipe } from '@angular/common';
// import { ValidateUrl } from './validators/url.validator';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  // addUserFrom: any =  FormGroup;
  UserListPhone = false;
  step = 0;
  showSearch = false;
  searchValue: any = null;
  rolelist: any = [];
  userRole: any = null;
  userSearch: any = null;
  tabValue: any = 'Completed';
  userValue: String = 'client';
  activeState: any = true;
  clientname: any = '';
  tableData: any = [];
  modalRef: BsModalRef;
  basic = true;
  assignroles: boolean;
  approver = false;
  basicForm: any;
  userFrom: any;
  addUserFrom: any;
  clientstatus: Boolean = true;
  fullUserFormData: any = {};
  filteredOptions: Observable<string[]>;
  filteredOptions1: Observable<string[]>;
  filteredOptions2: Observable<string[]>;
  userlist: boolean;
  submitClick: Boolean = true;
  totalItem: any = [];
  pageIndex: any = 0;
  pageIndexModel = 0;
  countrylist: any = [];
  code: any;
  countrycode: any;
    phonelength: any;
    countryPhonelen: any;
    countrylist1: any = [];
    phoneNumber: any = '';
    // itemValue: any;
    userDetails: any = [];
    userInfoDetails: any = [];
    userList: any = [];
    filterData: any = [];
    inviteRequestObj: any = {};
    supadminList: any = [];
    invalidphone: Boolean = false;
    config = {
      backdrop: true,
      ignoreBackdropClick: true,
      keyboard: false
    };
  @Input() workflowData: string;
  @Input() userStatus: string;
  basicmodel: any = {firstName: '',
                    lastName: '',
                    country: '',
                    phoneNo: '',
                    email: ''
                  };
  columns: string[] = ['profilePic', 'clientName', 'domainName', 'status'];
  newColumns: any[] = [
    {
      'name': '',
      'value': 'profilePic'
    },
    {
      'name': 'Client Name',
      'value': 'clientName'
    },
    {
      'name': 'Website',
      'value': 'domainName'
    },
    {
      'name': 'Status',
      'value': 'status'
    },
    {
      'name': 'Created Date',
      'value': 'createdDate'
    }
    // {
    //   'name': 'Status',
    //   'value': 'status'
    // }
  ];
  validForm: any = false;
  clientId: any = '';
      client: any = '' ;
      NoDataFound: Boolean =  false;
      isHidden: Boolean =  false;
  defaultclient: any = './assets/images/dashboard/defaultclient.svg';
  c: number;
  Submit = true;
  filterSearching: Boolean =  false;
  addUserFromTouched: boolean;
  constructor(private _domSanitizer: DomSanitizer, private modalService: BsModalService,
    // tslint:disable-next-line:max-line-length
    private router: Router, private gs: GeneralService, private ss: SharedService, private fb: FormBuilder, private titlecasePipe: TitleCasePipe) {
      const res = JSON.parse(sessionStorage.getItem('firstLogin'));
    if  (res != null) {
      this.clientId = res.clientId;
      this.client = res.firstName;
    }
        }

  ngOnInit() {
    // this.ss.storedValue('client');
    this.NoDataFound = false;
    this.clientname = null;
    this.userRole = null;
    this.c = 0;
    this.listUser();
    const reg = new RegExp(/^([w-wW-W]{3})\.([a-zA-Z0-9_\-]+)\.([a-zA-Z]{2,5})$/);
    const regemail = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    this.basicForm = this.fb.group({
      clientName: ['', Validators.required],
      domainName: [''],
      address: ['', [Validators.required]],
      country: ['', [Validators.required]],
      notes: ['', Validators.required]
    });
    this.filteredOptions = this.basicForm
    .get('country')
    .valueChanges
    .pipe(
      map(value => {
        return this._filter(value); })
    );
    this.getcountrylist();
    this.userFrom = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', ],
      emailId: ['', [Validators.required, Validators.pattern(regemail)]],
      country: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      role: ['', Validators.required],
      superAdmin: [false],
    });
    this.filteredOptions1 = this.userFrom
    .get('country')
    .valueChanges
    .pipe(
      map(value => {
        return this._filter(value); })
    );
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
        return this._filter(value); })
    );
  }
  private _filter(value) {
    if (this.ss.validVal(value)) {
    const filterValue = value.toLowerCase();
    return this.countrylist1.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  }
  userstatusChange(type) {
    this.userRole = type;
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
  public searchClick() {
    this.showSearch = !this.showSearch;
    this.filterSearching =  true;
    this.searchValue = '';
  }
  inviteAdmins() {
  }
  tabClick(data) {
    if (data === 'Completed') {
      this.activeState = true;
      this.pageIndex = 0;
      this.pageIndexModel = 0;
    }
    if (data === 'Onboarding') {
      this.activeState = false;
      this.pageIndex = 0;
      this.pageIndexModel = 0;
    }
    this.tabValue = data;
    this.clearClientData();
    // this.listUser();
  }
  listUser() {
    const obj = {
      'clientName': this.clientname,
      'isCompleted': this.activeState,
      'pageNumber': this.pageIndex,
      'pageSize': 10,
      'status': this.userRole  === '0' ? null : this.userRole,
    };
    const url = 'client/getClientList';
    this.gs.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          this.tableData = [];
          if ( res['status'].toString() === 'success') {
            this.filterData = res['data']['status'];
            sessionStorage.setItem('totalLength', res['data'].total );
            this.totalItem = res['data'].total;
            if (res['data'].total === 0 || res['data'].total === '' ) {
              this.NoDataFound = true;
              this.isHidden =  true;
            }
            if (res['data'].total !== 0 && res['data'].total !== '' && res['data'].total !== null ) {
              this.isHidden =  false;
              this.filterSearching = false;
            }
            sessionStorage.setItem('workflowObject', JSON.stringify(res['data']['clientList']));
          res['data']['clientList'].forEach((element) => {
            if ( element.userStatus !== null) {
                  if (element.profilePic === '' || element.profilePic === undefined || element.profilePic === null) {
                    element.profilePic = this.defaultclient;
                  }
                this.tableData.push({
                  'profilePic': element.profilePic,
                'clientName': element.clientName,
               'domainName': element.domainName,
               'status': element.userStatus,
               'createdDate': element.createdDate,
              //  'status': element.userStatus,
               'id':  element.id
              });
            }
      });
      sessionStorage.setItem('workflowObject', JSON.stringify(this.tableData));
      this.ss.TableData(this.tableData);
      this.ss.DisplayedColumn(this.newColumns);
      sessionStorage.setItem('displaycolumns' , JSON.stringify(this.newColumns));
      sessionStorage.setItem('tableData' , JSON.stringify(this.tableData));

    } else {
        this.NoDataFound =  true;
        this.isHidden =  true;
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
  inviteClient(invitetemplate: TemplateRef<any>) {
    this.showbasic();
    this.modalRef = this.modalService.show(invitetemplate, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
  }
  showbasic() {
    this.basic = true;
    this.assignroles = false;
  }
  nexttab() {
    // const name = this.basicForm.value.username;
    this.userlist = true;
    this.inviteUserrequest();
  }
  inviteUserrequest() {
    Object.keys(this.basicForm.value).forEach(element => {
      this.fullUserFormData[element] = this.basicForm.value[element];
    });
        this.showassignroles();
  }
  showassignroles() {
    Object.keys(this.basicForm.value).forEach(element => {
      this.fullUserFormData[element] = this.basicForm.value[element];
    });
    this.nextStep();
    this.basic = false;
    this.assignroles = true;
  }
  getSavedCountryList(val) {
    this.filteredOptions1 = _.filter(this.countrylist1, (o) => {
      return _.startsWith(o.toLowerCase(), val.toLowerCase());
    });
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
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
       this.basicmodel.country = event.option.value;
    this.countrylist.forEach((element) => {
      if (event.option.value.toLowerCase() === element.name.toLowerCase()) {
        this.code = element.dial_code;
        this.basicmodel.phoneNo = this.code + ' ';
      }
    });
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
  onSelectionChangeduser(event: MatAutocompleteSelectedEvent, itemValue) {
    this.countrylist.forEach((element) => {
      if (event.option.value.toLowerCase() === element.name.toLowerCase()) {
        itemValue.code = element.dial_code;
        itemValue.countryPhonelen = element.length;
        itemValue.phoneNumber = '';
      }
    });
  }
  inviteUser() {
  }
  // onChange() {}
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
      this.Submit = false;
      if (this.submitClick) {
      if (this.addUserFrom.value.firstName && this.addUserFrom.valid) {
        if (this.addUserFrom.value.superAdmin == null) {
          this.addUserFrom.value.superAdmin = false;
        }
        this.userlist = false;
        const temp = this.addUserFrom.value;
        temp.code = this.countrycode;
        temp.countryPhonelen = this.countryPhonelen;
        this.userList.push(temp);
      this.countrycode = '';
      this.Submit = false;
      this.addUserFrom.reset();
      this.addUserFrom.value.superAdmin = false;
      this.userlist = true;
      this.countrycode = '';
      this.phoneNumber = '';
         } else {
        this.userlist = true;
      }
    } else {
      this.addUserFrom.reset();
      this.userlist = true;
      this.submitClick = true;
    }
      // t
  }
inviteclient() {
  const url = 'client/invite';
  this.supadminList = [];
  const addUserFromObject = Object.keys(this.addUserFrom.value);
  let count = 0;
  for (let i = 0; i < addUserFromObject.length; i++) {
    if (addUserFromObject[i] !== 'superAdmin' && addUserFromObject[i] !== 'role') {
      if (this.ss.validVal(this.addUserFrom.value[addUserFromObject[i]])) {
        count = count + 1;
      } else {
      }
    }
  }
  if (count === addUserFromObject.length - 2 || count === 0) {
    let tempemail = false;
    // if (this.c === 0) {
      if (this.addUserFrom.value.firstName && this.addUserFrom.valid) {
        if (this.addUserFrom.value.superAdmin == null) {
          this.addUserFrom.value.superAdmin = false;
        }
        this.userList.forEach(element => {
           if (element.emailId === this.addUserFrom.value.emailId) {
            tempemail = true;
           } else {
            tempemail = false;
           }
        });
        if (tempemail === false) {
          const temp = this.addUserFrom.value;
          temp.code = this.countrycode;
          temp.countryPhonelen = this.countryPhonelen;
          this.userList.push(temp);
          // this.c = 1;
          this.Submit = false;
          this.addUserFrom.reset();
          this.submitClick = false;
          this.userlist = false;
        }
      }
    // }
      const finaLdataValue = [];
    this.userList.forEach((element) => {
      element['userRoles'] = [];
      const rol = [];
      //  rol.push(element.role);
       if (element.superAdmin) {
        rol.push('USER_ADMIN');
      } else {
        rol.push('USER');
      }
      // tslint:disable-next-line:max-line-length
      finaLdataValue.push({'firstName': this.titlecasePipe.transform(element.firstName), 'lastName': this.titlecasePipe.transform(element.lastName) , 'emailId' : element.emailId ,
                              'country': element.country , 'phoneNumber' :  element.phoneNumber , 'userRoles' : rol});
    });
    this.userList.forEach((element) => {
      // delete element.role;
      // delete element.superAdmin;
      if (element.superAdmin === true) {
        this.supadminList.push(element.superAdmin);
      }
    });
    this.basicForm.value.clientName = this.titlecasePipe.transform(this.basicForm.value.clientName);
    if (this.ss.validVal(this.basicForm.value.domainName)) {
      this.basicForm.value.domainName = this.basicForm.value.domainName.toLowerCase();
    } else {
      this.basicForm.value.domainName = '';
    }
    this.inviteRequestObj = this.basicForm.value;
    this.inviteRequestObj.userList = finaLdataValue;
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
                this.basicForm.reset();
                this.addUserFrom.reset();
                this.addUserFrom.value.superAdmin = false;
                this.code = '';
                this.countrycode = '';
                this.phoneNumber = '';
                this.inviteRequestObj = {};
                this.userDetails = [];
                this.userList = [] ;
                this.c = 0;
                this.modalRef.hide();
                this.listUser();
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
  }
roleSelected(value) {
}

  onChange(val) {
    if (this.ss.validVal(val)) {
      val = val.toString();
      if (val.length  ===  Number(this.countryPhonelen)) {
        this.invalidphone = false;
      } else {
        this.invalidphone = true;
      }
    } else {
      this.phoneNumber = '';
    }
  }
  onChangeList(value) {
    // value.phoneNumber = '';
    this.UserListPhone = false;
    for (let i = 0 ; i < this.userList.length ; i++ ) {
            if (Number(this.userList[i].countryPhonelen) !== this.userList[i].phoneNumber.length) {
              this.UserListPhone = true;
         break;
      }
    }
  }

edituser(index, value) {
}
public pageChanged(event: any): void {
  this.pageIndex = event.page - 1;
  this.listUser();
}
onChangerole(value, index) {
}

clearClientData() {
  // here we are clearing the data
  this.NoDataFound = false;
  this.clientname = null;
  this.userRole = '0';
  this.pageIndex = 0;
  this.pageIndexModel = 0;
  this.searchValue = null;
  this.showSearch = false;
  this.filterSearching =  false;
  // this.filterData= null;
  this.listUser();
}

clearfilter() {
  this.NoDataFound = false;
  this.clientname = null;
  this.searchValue = null;
  this.showSearch = !this.showSearch;
  this.filterSearching =  true;
  this.listUser();
}

modelClear() {
  this.basicForm.reset();
  this.addUserFrom.reset();
  this.submitClick = true;
  this.invalidphone = false;
    this.Submit = true;
    this.UserListPhone = false;
  this.addUserFrom.value.superAdmin = false;
  this.code = '';
  this.userDetails = [];
  this.userList = [];
  this.c = 0;
  this.phoneNumber = '';
  this.modalRef.hide();
}
refresh() {
  // this.NoDataFound = false;
  // this.clientname = null;
  // this.userRole = '0';
  // this.pageIndex = 0;
  // this.searchValue = null;
  // this.filterData= null;
  // this.activeState = true;
  // this.tabValue = 'Completed';
  this.listUser();
}
deleteList(event, i) {
  this.userList.splice(i, 1);
  event.stopPropagation();
}
numberOnly(event): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}

}
