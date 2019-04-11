import { Component, OnInit, TemplateRef, ViewChild, Input} from '@angular/core';
import { GeneralService } from '../../general.service';
import { SharedService } from '../../shared.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormControl, Validators, FormGroup, FormBuilder , AbstractControl} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { TitleCasePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-admins',
  templateUrl: './admins.component.html',
  styleUrls: ['./admins.component.css']
})
export class AdminsComponent implements OnInit {
  invalidCountry: any = true;
  typeValue: any = null;
  message: any;
  totalItem: any = [];
  pageIndex: any = 0;
  pageIndexModel = 0;
  phoneNumber: any = '';
  showSearch = false;
  searchValue: any = null;
  customerValue: String = 'Fusang Admins';
  filteredValues: any = [];
  totalFilteredValues: any = [];
  msg: any;
  model: any = {};
  modalRef: BsModalRef;
  showCustomer = Boolean(false);
  showticket = Boolean(true);
  tableData: any = [];
  tabValue: any = 'Completed';
  userValue: String = 'user';
  roleValue: any = null;
  NoDataFound: Boolean =  false;
  columns: string[] = ['profilePic', 'firstname', 'username', 'role', 'status', 'createdDate'];
  newColumns: any[] = [
    {
      'name': '',
      'value': 'profilePic'
    },
    {
      'name': 'Username',
      'value': 'firstname'
    },
    {
      'name': 'Email ID',
      'value': 'username'
    },
    {
      'name': 'Roles',
      'value': 'role'
    },
    {
      'name': 'Status',
      'value': 'status'
    },
    {
      'name': 'Created Date',
      'value': 'createdDate'
    }
  ];
  typeObj = {
    'primary': '',
      'backup': '',
      'userRole': ''
    };
    dpControl = new FormControl('', [
      Validators.email,
    ]);
    totalData: any = {};
    basic = true;
    approver = false;
    cusclass: any = [];
    countrylist: any = [];
    countrylist1: any = [];
    basicmodel: any = {firstName: '',
                    lastName: '',
                    country: '',
                    phoneNo: '',
                    email: ''
                  };
    x: any = [];
    fullformData: any = {};
    fullUserFormData: any = {};
    userRelationshipManagerMap: any = [];
    relationshipManagerDetails: any = [];
    dataList: any = {};
    filteredOptions: Observable<string[]>;
    // filteredValues: any = [];
    code: any;
    phonelength: any;
    successRef: BsModalRef;
    complianceRef: BsModalRef;
    invitesuccessRef: BsModalRef;
    policyRef: BsModalRef;
    signupsuccessRef: BsModalRef;
    rejectRef: BsModalRef;
    confirmRef: BsModalRef;
    departmentLists: any = [];
    departmentSubListsVerfier: any;
    basicForm: any;
    approverForm: any;
    appService: any;
    // msg: any;
    Yubikey = false;
    googleAuth = true;
    verificationCodeValid = false;
    googleCode: any;
    countryPhonelen: any;
    phonelenth: any;
    assignroles: boolean;
    roleDepartmentDetails: any = [];
    roleDepartmentObj: any = {};
    userDetailsList: any = [];
    userDetailsListfilterd: any = [];
    filterdDetailsList: any = [];
    // roleList: any;
    tempObj: any = {};
    roleInformationList: any = [];
    index: any = 0;
    newDeptRoleObj: any = {};
    addDept = true;
    invalidphone: Boolean = false;
    assignRoleEnable = false;
    isenableform: any = false;
    rolelist: any = [];
    userRole: any = null;
    @Input() workflowData: string;
    @Input() userStatus: string;
  activeState: any = true;
  userSearch: any = null;
  statuslist: any = [];
  // status: any = null;
  statusValue: any = null;
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: false
  };
  isHidden: Boolean =  false;
  filterSearching: Boolean =  false;
  defauluser: any = './assets/images/dashboard/defaultuser.svg';
  // constructor( private modalService: BsModalService,) { }
  constructor(private _domSanitizer: DomSanitizer, private modalService: BsModalService,
    private router: Router, private gs: GeneralService, private ss: SharedService, private toastr: ToastrService,
     private titlecasePipe: TitleCasePipe, private fb: FormBuilder ) {

        }

  ngOnInit() {
    // this.ss.storedValue('user');
    const regemail = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
    this.NoDataFound =  false;
     this.listUser();
     this.roleList();
    this.basicForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.pattern(regemail)]],
      country: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]]
    });
    this.filteredOptions = this.basicForm
    .get('country')
    .valueChanges
    .pipe(
      map(value => {
        return this._filter(value); })
    );
    this.getcountrylist();
    this.getinvitedata();
  }
  private _filter(value) {
    if (value !== '') {
    const filterValue = value.toLowerCase();
    return this.countrylist1.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
  }
  public searchClick() {
    this.showSearch = !this.showSearch;
    this.searchValue = '';
    this.filterSearching =  true;
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
    this.clear();
    // this.listUser();
  }
  inviteAdmins(invitetemplate: TemplateRef<any>) {
    this.modalRef = this.modalService.show(invitetemplate, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
  }
  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.basicForm.phoneNumber = '';
    this.phoneNumber = '';
    // this.code = '';
    this.basicmodel.country = event.option.value;
    this.countrylist.forEach((element) => {
      if (event.option.value.toLowerCase() === element.name.toLowerCase()) {
        this.code = element.dial_code;
        this.countryPhonelen = element.length;
        this.phonelength = element.length;
        this.basicmodel.phoneNo = this.code + ' ';
      }
    });
    this.invalidCountry = false;
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
  roleList() {
    // if (this.workflowData === 'user') {
    const reqParam = {};
    this.gs.generalServiceInfo('user/getRoleList', 'post', reqParam)
      .subscribe(
        res => {
          if ( res['status'].toString() === 'success') {
           res['data'].forEach(element => {
              if (element !== 'USER' && element !== 'ADMIN') {
                this.rolelist.push(element);
              }
          });
          } else {
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
  getcountrylist() {
    const url = '/assets/countrylist.json';
    this.gs.localfileinfo(url)
    .subscribe(
      res => {
        this.countrylist = res['countrylist'];
        this.countrylist.forEach((element) => {
          element.minLength = '10';
          this.countrylist1.push(element.name);
        });
        console.log(this.countrylist);
      },
      e => {
        if (e.status === 403) {
          this.router.navigate(['']);
          // this.ss.ToasterMessage('Your Session has Expired');
          // document.getElementById('modalButton1').click();
          sessionStorage.removeItem('firstLogin');
          sessionStorage.removeItem('useremailid');
          sessionStorage.removeItem('accessToken');
        }
      },
      () => {
      }
    );
  }
  inviteUserrequest() {
    Object.keys(this.basicForm.value).forEach(element => {
      this.fullUserFormData[element] = this.basicForm.value[element];
    });
    this.showassignroles();
  }
  showbasic() {
    this.basic = true;
    this.assignroles = false;
  }
  nexttab() {
    const name = this.basicForm.value.username;
    this.inviteUserrequest();
   }
  showassignroles() {
    Object.keys(this.basicForm.value).forEach(element => {
      this.fullUserFormData[element] = this.basicForm.value[element];
    });
    this.basic = false;
    this.assignroles = true;
  }
  getinvitedata() {
    const nullobj = {};
    const url = 'department/getDepartmentList?isAll=true';
    this.gs.generalServiceInfo(url, 'post', nullobj)
    .subscribe(
      res => {
        this.x = res['data'];
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
  // test latest one
  test(dep, role, event, data) {
    if (event.checked) {
      this.roleDepartmentObj.departmentName = dep;
      this.roleDepartmentObj.userRole = role;
      this.roleDepartmentDetails.push(this.roleDepartmentObj);
      this.roleDepartmentObj = {};
      if (this.roleDepartmentDetails.length > 0) {
        this.isenableform = true;
      } else {
        this.isenableform = false;
      }
    }
    if (!event.checked) {
      let i;
      i = _.findIndex(this.roleDepartmentDetails, function(o) {
            return (o.departmentName === dep && o.userRole === role);
            });
      this.roleDepartmentDetails.splice(i, 1);
      if (this.roleDepartmentDetails.length > 0) {
        this.isenableform = true;
      } else {
        this.isenableform = false;
      }
    }

  }
  clear() {
    this.userRole = null;
    this.userSearch = null;
    this.searchValue = '';
    this.statusValue = null;
    this.showSearch = false;
    this.filterSearching =  false;
    this.pageIndex = 0;
    this.pageIndexModel = 0;
    this.listUser();

  }
  inviteUser(signupsuccess: TemplateRef<any>) {
    // this.roleDepartmentDetails.push(this.roleDepartmentObj)
    const url1 = 'user/isValidFusangDomain?emailId=' + this.basicForm.value.username.toLowerCase();
    this.gs.generalServiceInfo(url1, 'post', '')
            .subscribe(
              res => {
                const response: any = res.status;
                if (response === 'success') {
                  this.assignRoleEnable = true;
                  if (this.ss.validVal(this.roleDepartmentObj.departmentName) && this.ss.validVal(this.roleDepartmentObj.userRole)) {
                    const obj: any  = this.roleDepartmentObj;
                    if (_.findIndex(this.roleDepartmentDetails, function(o) {
                      return (o.departmentName === obj.departmentName && o.userRole === obj.userRole);
                    }) === -1) {
                      this.roleDepartmentDetails.push(this.roleDepartmentObj);
                      // this.listDepartment(this.roleDepartmentDetails);
                      this.roleDepartmentObj = {};
                    } else {
                      this.toastr.error('same entry');
                      return false;
                    }
                   }
                   let data: any;
                   data = [];
                   this.roleDepartmentDetails.forEach(element => {
                     let obj: any;
                     obj = {};
                     obj['departmentId'] = _.find(this.x, function(o) {return o.name === element.departmentName; }).id;
                     obj['departmentName'] = element.departmentName;
                     obj['userRole'] = element.departmentName.split(' ')[0].toUpperCase() + '_' + element.userRole.toUpperCase();
                     data.push(obj);
                   });
                   let tempData: any;
                   tempData = {};
                   let tempDataArray: any;
                   tempDataArray = [];
                   this.x.forEach(element => {
                    tempData = {'departmentId': '', 'departmentName' : '' , 'userRole' : []};
                      data.forEach(ele => {
                         if (ele.departmentId === element.id) {
                           tempData.departmentId =  element.id;
                           tempData.departmentName =  element.Name;
                           tempData.userRole.push(ele.userRole);
                         }
                      });
                      if (tempData.userRole.length > 0) {
                      tempDataArray.push(tempData);
                      }
                   });
                   this.totalData['roleDepartmentDetails'] = tempDataArray;
                   this.fullUserFormData.username = this.fullUserFormData.username.toLowerCase();
                   this.fullUserFormData.firstName = this.titlecasePipe.transform(this.fullUserFormData.firstName);
                   this.fullUserFormData.lastName = this.titlecasePipe.transform(this.fullUserFormData.lastName);
                   this.fullUserFormData.roleDepartmentDetails = this.totalData['roleDepartmentDetails'];
                   const url = 'user/invite';
                   this.gs.generalServiceInfo(url, 'post', this.fullUserFormData)
                   .subscribe(
                     res1 => {
                       this.msg = res1['message'];
                       const response: any = res1.status;
                       if (response === 'success') {
                          this.message = res1['message'];
                              this.basicForm.reset();
                            this.code = '';
                            this.phoneNumber = '';
                            this. model = {};
                            this.showbasic();
                            this.modalRef.hide();
                            this.roleDepartmentDetails = [];
                            this.userDetailsList = [];
                            this.listUser();
                         this.invitesuccessRef = this.modalService.show(signupsuccess,
                           Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
                        //  this.listUser();
                       } else if (response === 'failure') {
                         this.ss.ToasterMessage(res1['message']);
                         document.getElementById('modalButton1').click();
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
                } else {
                  this.assignRoleEnable = false;
                  this.ss.ToasterMessage(res['message']);
                  document.getElementById('modalButton1').click();
                }
              },
              () => {
              }
            );
   }
   listUser() {
    const reqParam = {
      // 'page': this.pageIndex,
      // 'size': 10,
      'clientName': null,
      'isCompleted': this.activeState,
      'isCustomer': false,
      'pageNumber': this.pageIndex,
      'pageSize': 10,
      'status': this.statusValue,
      'userRole': this.userRole,
      'username': this.userSearch
    };
    this.gs.generalServiceInfo('user/getUsersList', 'post', reqParam)
      .subscribe(
        res => {
          this.tableData = [];
          if ( res['status'].toString() === 'success') {
            this.NoDataFound =  false;
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

            this.statuslist = res['data'].status;
            sessionStorage.setItem('workflowObject', JSON.stringify(res['data']['userList']));
          res['data']['userList'].forEach((element) => {
                if ( element.userStatus !== null) {
                element.userStatus = element.userStatus.split('Pre').join('');
                element.userStatus = element.userStatus.split('Post').join('');
                  if (element.profilePic === '' || element.profilePic === undefined || element.profilePic === null) {
                    element.profilePic = this.defauluser;
                  }
                    this.tableData.push({
                      'profilePic': element.profilePic,
                    'firstname': element.firstName,
                  'username': element.emailId,
                  'role': element.userRoles,
                  'status': element.userStatus,
                  'id':  element.id,
                  'createdDate': element.createdDate
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
  roleChange(type) {
    if (type === 'null') {
      this.userRole = null;
    } else {
      this.userRole = type;
    }
    this.filterSearching =  true;
    this.listUser();
  }
  statusChange(type) {
    if (type === 'null') {
      this.statusValue = null;
    } else {
      this.statusValue = type;
    }
    this.filterSearching =  true;
    this.listUser();
  }
  searchUser(searchValue) {
    this.userSearch = searchValue;
    this.listUser();
  }
  clearAdmin() {
     this.basic = true;
     this.assignroles = false;
     this.code = '';
     this.phoneNumber = '';
     this.basicForm.reset();
     this.model = {};
     this.roleDepartmentDetails = [];
     this.userDetailsList = [];
     this.modalRef.hide();
  }
  refresh() {
    // this.basic = true;
    // this.userRole = null;
    // this.userSearch = null;
    // this.searchValue = '';
    // this.statusValue = null;
    // this.activeState = true;
    // this.tabValue = 'Completed';
    this.listUser();
  }

  clearfilter() {
    this.userSearch = null;
    this.showSearch = !this.showSearch;
    this.showSearch = false;
    this.listUser();
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  changeCountry() {
    this.invalidCountry = true;
    this.basicForm.phoneNumber = '';
    this.phoneNumber = '';
    this.code = '';
  }
}
