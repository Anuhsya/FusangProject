import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { GeneralService } from '../../general.service';
import { Router, ActivatedRoute } from '@angular/router';
import * as _ from 'lodash';
import { SharedService } from '../../shared.service';
import { ToastrService } from 'ngx-toastr';
import { TitleCasePipe } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
// invite user starts
showSearch: any;
workflowData: any;
statusValue: any;
pageIndex: any = 0;

typeObj = {
  'primary': '',
    'backup': '',
    'userRole': ''
  };
  dpControl = new FormControl('', [
    Validators.email,

  ]);
  totalData: any = {};
  phoneNumber: any = '';
  model: any = {};
  modalRef: BsModalRef;
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
  userRelationshipList: any = [];
  relationshipManagerDetails: any = [];
  dataList: any = {};
  filteredOptions: Observable<string[]>;
  filteredValues: any = [];
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
  msg: any;
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
  userDetailsListfilterd:any = []
  filterdDetailsList: any = [];
  roleList: any;
  tempObj: any = {};
  roleInformationList: any = [];
  index: any = 0;
  newDeptRoleObj: any = {};
  addDept = true;
  // invite user ends
  userValue: String = 'user';
  userValueSatus: String = 'Completed';
  totalFilteredValues: any = [];
  tableData: any = [];
  columns: string[] = ['firstname', 'username', 'role', 'status'];
  newColumns: any[] = [
    {
      'name': 'First Name',
      'value': 'firstname'
    },
    {
      'name': 'Email',
      'value': 'username'
    },
    {
      'name': 'Role',
      'value': 'role'
    },
    {
      'name': 'Status',
      'value': 'status'
    }
  ];
  depList: any = [
     {
      'id': 1,
      'name': 'Account Management',
      'visible': false,
      'role': [
        'Signer',
        'Viewer'
      ]
    },
    {
      'id': 2,
      'name': 'Policy Management',
      'visible': false,
      'role': [
        'Signer',
        'Viewer'
      ]
    },
    {
      'id': 3,
      'name': 'Transaction Management',
      'visible': false,
      'role': [
        'Signer',
        'Viewer'
      ]
    }
  ];
  invalidphone: Boolean = false;
  assignRoleEnable = false;
  tabValue: any = 'Completed';

  isenableform: any = false;
  totalItem: any;
   constructor(private _domSanitizer: DomSanitizer, private modalService: BsModalService,
    private router: Router, private gs: GeneralService, private ss: SharedService, private toastr: ToastrService,
     private titlecasePipe: TitleCasePipe, private fb: FormBuilder ) {

        }

  // settings = {
  //   mode : 'inline',
  //       hideSubHeader : true,
  //       pager: {
  //           display: true,
  //           perPage: 10,
  //       },
  //       delete : {
  //           confirmDelete : true
  //       },
  //       actions: false,
  //   columns: {
  //     profilePic: {
  //       title: '',
  //       width: '20px',
  //     filter: false,
  //     type: 'html',
  //     valuePrepareFunction: (profilePic) => {
  //         return this._domSanitizer.bypassSecurityTrustHtml(`<img src="${profilePic}" alt="Smiley face" height="32" width="32"
  //         style="border-radius: 50%">`);
  //     }
  // },
  //     firstName: {
  //       title: 'User Name',
  //       type: 'html',
  //       valuePrepareFunction: (value) => {
  //         return value = this.titlecasePipe.transform(value);
  //       },
  //     },
  //     roles: {
  //       title: 'Role'
  //     },
  //     username: {
  //       title: 'Email ID',
  //     },


  //     status: {
  //       title: 'Status',
  //       type: 'html',
  //             valuePrepareFunction: (value) => {
  //               if (value === 2) {
  //                 return `<img src='assets/images/dashboard/oval-4.png' > Active`;
  //               } else if (value === 1) {
  //                 return `<img src='assets/images/dashboard/Critical.png' > InActive`;
  //               }
  //             }
  //     }
  //   }
  // };

  ngOnInit() {
    this.listUser();
    this.basicForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
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
    // this.getrolelist();
  }

  listUser() {
    const reqParam = {
      'isCustomer': false,
      'page': this.pageIndex,
      'size': 10
    };
    this.gs.generalServiceInfo('user/getUsersList', 'post', reqParam)
      .subscribe(
        res => {
          this.tableData = [];
          if ( res['status'].toString() === 'success') {
            // this.ss.TotalTableData(res['data']);
            sessionStorage.setItem('totalLength', res['data'].totalItems );
            this.totalItem = res['data'].totalItems;
            sessionStorage.setItem('workflowObject', JSON.stringify(res['data']['userList']));
          res['data']['userList'].forEach((element) => {
            if ( element.userStatus !== null) {
            element.userStatus = element.userStatus.split('Pre').join('');
            element.userStatus = element.userStatus.split('Post').join('');
                this.tableData.push({
                'firstname': element.firstName.toLowerCase(),
               'username': element.emailId,
               'role': element.userRoles,
               'status': element.userStatus,
               'id':  element.id
              });
            }
      });
      const startItem = this.pageIndex * 10;
      const endItem = ( this.pageIndex + 1 ) * 10;
      this.tableData = this.tableData.slice(startItem, endItem);
          this.ss.TableData(this.tableData);
      this.ss.TableData(this.tableData);
      this.ss.DisplayedColumn(this.newColumns);
      sessionStorage.setItem('displaycolumns' , JSON.stringify(this.newColumns));
      sessionStorage.setItem('tableData' , JSON.stringify(this.tableData));

    } else {

    }
        },
        e => {
              },
        () => {
        }
      );
  }
  // invite user starts
// test(dep,role,event){
//   if(event.checked){
//     this.roleDepartmentObj.department = dep;
//     this.roleDepartmentObj.userRole = role;
//     this.roleDepartmentDetails.push(this.roleDepartmentObj);
//     this.roleDepartmentObj={};
//     if(this.roleDepartmentDetails.length > 0){
//       this.isenableform = true;
//     }
//     else{
//       this.isenableform = false;
//     }
//     console.log(this.roleDepartmentDetails);
//   }
//   if(!event.checked){
//     let i;
//     i = _.findIndex(this.roleDepartmentDetails, function(o) {
//           return (o.department === dep && o.userRole === role);
//           })
//     this.roleDepartmentDetails.splice(i,1);
//     if(this.roleDepartmentDetails.length > 0){
//       this.isenableform = true;
//     }
//     else{
//       this.isenableform = false;
//     }
//     console.log(this.roleDepartmentDetails);
//   }

// }
//   onDepFocus() {
//     if(this.userDetailsList.length==0){
//       this.x.forEach(el => {
//         this.userDetailsList.push(el.name);
//         this.userDetailsListfilterd.push(el.name);
//       });
//     }
//     this.filterdDetailsList = this.x;
//  }
//  onRoleFocus() {
//    this.userDetailsList = this.roleList;
//    this.filterdDetailsList = this.roleList;
//    console.log(this.x);
// }

// addDepartment() {
//   this.addDept = true;
//   this.userDetailsList=[];
//   this.userDetailsListfilterd=[];
//   const obj: any  = this.roleDepartmentObj;
//   if (this.ss.validVal(this.roleDepartmentObj.department) && this.ss.validVal(this.roleDepartmentObj.userRole)) {
//     if (_.findIndex(this.roleDepartmentDetails, function(o) {
//       return (o.department === obj.department && o.userRole === obj.userRole);
//     }) === -1) {
//       this.roleDepartmentDetails.push(this.roleDepartmentObj);
//       this.roleDepartmentObj = {};
//     } else {
//       this.toastr.error('Department and role is already added');
//     }
//     console.log(this.roleDepartmentDetails);
//   } else {
//     this.toastr.error('Please enter the details!!!');
//     return false;
//   }
// }
// onDepSearch(val) {
//   console.log('val', val);
//   if (_.findIndex(this.x, function(o) { return o.name === val;}) > -1) {
//     this.roleInformationList = _.find(this.x, function(o) {return o.name === val; }).role;
//   }
//   if (typeof(val) === 'string' || val === '') {
//     this.userDetailsList = _.filter(this.userDetailsListfilterd, (o) => {
//       return o.toLowerCase().indexOf(val.toLowerCase()) > -1;
//     });
//   }

// }
// onDepSearch(val) {
//   console.log('val', val);
//  if (typeof(val) === 'string' || val === '') {
//    this.userDetailsList = _.filter(this.userDetailsList, (o) => {
//      return o.toLowerCase().indexOf(val.toLowerCase()) > -1;
//    });
//  }
// }
inviteUser(signupsuccess: TemplateRef<any>) {
  // this.roleDepartmentDetails.push(this.roleDepartmentObj)
  const url1 = 'user/isValidFusangDomain?emailId=' + this.basicForm.value.username;
  this.gs.generalServiceInfo(url1, 'post', '')
          .subscribe(
            res => {
              const response: any = res.status;
              if (response === 'success') {
                this.assignRoleEnable = true;
                if (this.ss.validVal(this.roleDepartmentObj.department) && this.ss.validVal(this.roleDepartmentObj.userRole)) {
                  const obj: any  = this.roleDepartmentObj;
                  if (_.findIndex(this.roleDepartmentDetails, function(o) {
                    return (o.department === obj.department && o.userRole === obj.userRole);
                  }) === -1) {
                    this.roleDepartmentDetails.push(this.roleDepartmentObj);
                    // this.listDepartment(this.roleDepartmentDetails);
                    this.roleDepartmentObj = {};
                  } else {
                    this.toastr.error('same entry');
                    return false;
                  }
                 }
                //  console.log(this.roleDepartmentObj);
                 let data: any;
                 data = [];
                 this.roleDepartmentDetails.forEach(element => {
                   let obj: any;
                   obj = {};
                   obj['departmentId'] = _.find(this.x, function(o) {return o.name === element.department; }).id;
                   obj['userRole'] = element.department.split(' ')[0].toUpperCase() + '_' + element.userRole.toUpperCase();
                   data.push(obj);
                 });
                 this.totalData['roleDepartmentDetails'] = data;
                 this.fullUserFormData.isCustomer = false;
                 this.fullUserFormData.username = this.fullUserFormData.username.toLowerCase();
                 // this.full
                 this.fullUserFormData.roleDepartmentDetails = this.totalData['roleDepartmentDetails'];
                 console.log(this.fullUserFormData);
                 const url = 'user/invite';
                 this.gs.generalServiceInfo(url, 'post', this.fullUserFormData)
                 .subscribe(
                   res1 => {
                     this.msg = res['message'];
                     const response: any = res.status;
                     if (response === 'success') {
                       this.invitesuccessRef = this.modalService.show(signupsuccess, Object.assign({}, 
                        { class: 'invite-cus-pop modal-lg' }));
                       this.listUser();
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
                 this.basicForm.reset();
                 this.code = '';
                 this.phoneNumber='';
                 this. model = {};
                 this.showbasic();
                 this.modalRef.hide();
                 this.roleDepartmentDetails = [];
                 this.userDetailsList = [];
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
//  deleteDepartment(i) {
//   this.roleDepartmentDetails.splice(i, 1);
//   if (this.roleDepartmentDetails.length === 0) {
//    this.addDept = true;
//   }
//  }
//  clearDepartment() {
//   this.addDept = false;
//   if (this.roleDepartmentDetails.length === 0) {
//     this.addDept = true;
//     return false;
//   } else {
//     this.roleDepartmentObj = {
//       'department' : '',
//       'userRole' : ''
//     };
//   }
// }
// onDepChanged(event: MatAutocompleteSelectedEvent) {
//  const departmentId = event.option.value.id;
//  this.tempObj.departmentId = departmentId;
// }
// onRoleChanged(event: MatAutocompleteSelectedEvent) {
//  const userRole = event.option.value;
//  this.tempObj.userRole = userRole;
// }
// getrolelist(){

//   const nullobj={}
//   const url= 'user/getRoleList'
//   this.gs.generalServiceInfo(url,'post',nullobj)
//   .subscribe(
//     response => {
//       this.roleList = response['data'];
//       console.log(this.x);
//       // console.log(this.x[0]['name']);
//       // this.x.forEach(element => {
//       //   this.userDepList.push(element.name);
//       // });
//     },
//     e => {
//     },
//     () => {
//     }
//   );
// }

// displayFn(user): string {
//   if (user === null || user === undefined || user === '') {
//     return '';
//   } else {
//     return user ? user.name : user;
//   }
// }
inviteUserrequest() {
  Object.keys(this.basicForm.value).forEach(element => {
    this.fullUserFormData[element] = this.basicForm.value[element];

  });
  this.showassignroles();
}
nexttab() {
  const name = this.basicForm.value.username;
  console.log(name);
  this.inviteUserrequest();
 }
showassignroles() {
  Object.keys(this.basicForm.value).forEach(element => {
    this.fullUserFormData[element] = this.basicForm.value[element];

  });
  this.basic = false;
  this.assignroles = true;
}
  showbasic() {
    this.basic = true;
    this.assignroles = false;
  }
  getinvitedata() {
    // this.x = ApproverInformation.data;
    // const url = '/assets/json/inviteaccordion.json';
    const nullobj = {};
    const url = 'department/getDepartmentList';
    this.gs.generalServiceInfo(url, 'post', nullobj)
    .subscribe(
      res => {
        this.x = res['data'];
        console.log('data', this.x);
        console.log(this.x[0]['name']);
        // this.x.forEach(element => {
        //   this.userDepList.push(element.name);
        // });
      },
      e => {
      },
      () => {
      }
    );
  }
  private _filter(value) {
    if (value !== '') {
    const filterValue = value.toLowerCase();
    return this.countrylist1.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
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
    // console.log(event.option.value);
    this.basicForm.phoneNumber = '';
    this.phoneNumber = '';
    this.basicmodel.country = event.option.value;
    this.countrylist.forEach((element) => {
      if (event.option.value.toLowerCase() === element.name.toLowerCase()) {
        this.code = element.dial_code;
        this.countryPhonelen = element.length;
        console.log(this.countryPhonelen);
        this.phonelength = element.length;
        this.basicmodel.phoneNo = this.code + ' ';
      }
    });

  }
  inviteCustomer(invitetemplate: TemplateRef<any>) {
    // this.basicmodel=
    this.modalRef = this.modalService.show(invitetemplate, Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
  }
// invite user ends
callfunc(value){
  console.log(value);
  Object.keys(this.model).forEach((el) => {
    let deptId: any, index: any;
    deptId = '';
    deptId = el;
    index = _.findIndex(this.userRelationshipList, function(o) { return o.departmentName === deptId; });
    if (index === -1) {
      this.userRelationshipList.push({'departmentName': deptId,'userRole':value});
    }
    else if(index!== -1){
      this.userRelationshipList.splice(index,1)
      this.userRelationshipList.push({'departmentName': deptId,'userRole':value});
    }
  });
  console.log(this.userRelationshipList);
}
tabClick(data) {
   this.tabValue = data;
   this.listUser();
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
public pageChanged(event: any): void {
  this.pageIndex = event.page - 1;
  this.listUser();
}

}

