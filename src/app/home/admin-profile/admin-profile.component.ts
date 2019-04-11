import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { FormBuilder, FormControl, Validators , FormGroup} from '@angular/forms';
import { BsModalService } from 'ngx-bootstrap/modal';
import { NgForm } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from '../../shared.service';
import { GeneralService } from '../../general.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  isenableform: any = false;
  adminBasicInfo: any;
  pocForm: any;
  enableBtns: Boolean = false;
  userDetails: any = [];
   displayedColumns: string[] = ['info', 'status', 'createdDate'];
  // displayedColumns: string[] = ['profilePic', 'info', 'createdDate'];
  tableColumns: any[] = [];
  successRef: BsModalRef;
  editUser: any = true;
  data: MatTableDataSource<any>;
  totalTableData = [];
  typelist = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obj: (o: {}) => string[];
  tabData: any = [];
  totalTabData: any = [];
  filteredOptions: any =  [];
  mycolumns: string[];
  code: any;
  phonelength: any;
  showSearch = false;
  resultsLength: any;
  pageIndex: any = 0;
  transactionDetails: any = [];
  userDetailsList: any = [];
  getProfileInfo: any = [];
  countryPhonelen: any;
  countrylist1: any = [];
  tempList: any = [];
  invalidphone: boolean;

  phonelenth: any;
  data1 = new MatTableDataSource();
  model: any = {
    country: '',
    lastName: '',
    phoneNumber: '',
    firstName : '',
    email: ''
  };
  roleModel: any = {};
  countrylist: any = [];
  x: any = [];
  isEditAdmin: any = false;
  enableupdateBtns: any = true;
  // data1 = new MatTableDataSource();
  adminRoleData: any = [];
  adminId: any;
  workflowObject: any;
  enableWorkflowSec: Boolean = true;
    finalData: any = [];
    workflowTypeName: string;
    workflowAdminImage: Boolean  = true;
    modalRef: BsModalRef;
    invitesuccessRef: BsModalRef;
    config = {
      backdrop: true,
      ignoreBackdropClick: true,
      keyboard: false
    };

    basic = true;
    assignroles: Boolean = false;
    adminfirstName: any;
    adminLastName: any;
    adminphoneNumber: any;
    adminEmailID: any;
    // workflowTransactionImage: Boolean  = true;
    // workflowPolicyImage: Boolean  = true;

  // imageUrl: any = './assets/images/sidebar/profile.svg';
  constructor(private fb: FormBuilder, private modalService: BsModalService, private router: Router, private pcoefb: FormBuilder,
    private _domSanitizer: DomSanitizer, private ss: SharedService, private gs: GeneralService) { }

  ngOnInit() {
    this.workflowObject = JSON.parse(sessionStorage.getItem('workflowObject1'));
    this.adminId = this.workflowObject.id;

    this.getcountrylist();
    this.getWorkFlowDataInfo();
    this.getinvitedata();
    }

  onChange(val) {
    if (this.ss.validVal(val)) {
      val = val.toString();
      if (val.length  ===  Number(this.countryPhonelen)) {
        this.invalidphone = false;
      } else {
        this.invalidphone = true;
      }
    }
  }
  sucspop(successtemplate: TemplateRef<any>) {
    this.successRef = this.modalService.show(successtemplate, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
  }

  editForm() {
    this.enableBtns = true;
    this.editUser = false; // here we are making the flag to false to allow user to edit.
  }
  cancelModifications() {
    this.enableBtns = false;
    this.editUser = true;
    this.invalidphone = false;
    this.getdetials();
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
   getTheValue() {
    this.filteredOptions = this._filter(this.getProfileInfo.country);
  }
  // This function will filter the value and show in the dropdown.
  private _filter(value) {
    if (value !== '') {
    const filterValue = value.toLowerCase();
    return this.countrylist1.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
// This method will fetch the country list from the local json file.
  getcountrylist() {
    const url = '/assets/countrylist.json';
    this.gs.localfileinfo(url)
    .subscribe(
      res => {
        this.countrylist = res['countrylist'];
        this.countrylist.forEach((element) => {
          this.countrylist1.push(element.name);
        });
        // Here we will get the user details
       // this.getdetials();
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

  getdetials() {
   //  here we are fetching the  user Id of the navigated user to perform operations
  const obj = {
    'userId': this.adminId,
  };
  // url to get the user info on load of the page
    const url = 'user/getUserInfo';
    this.gs.generalServiceInfo(url, 'post', obj)
          .subscribe(
            res => {
              this.getProfileInfo = res['data'];
              this.adminfirstName = this.getProfileInfo.firstName ;
              this.adminLastName = this.getProfileInfo.lastName;
              this.adminphoneNumber = this.getProfileInfo.phoneNumber;
              this.adminEmailID = this.getProfileInfo.username;
              console.log(this.getProfileInfo);
                this.filteredOptions = this._filter(this.getProfileInfo.country);
                // for each of the country present in the list get . if it matches the country give the take the phone number code.
                for (let i = 0; i < this.countrylist.length; i++) {
                  if ( this.countrylist[i].name === this.getProfileInfo.country) {
                      this.code = this.countrylist[i].dial_code;
                      this.countryPhonelen = this.countrylist[i].length;
                  }
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
 // this is for deactivating the user.
  deActivateUser() {
    const obj = {
        'id': this.adminId,
        'user': true
    };
   // service to deactive the user
    this.gs
    .generalServiceInfo('user/deActivate', 'post', obj)
    .subscribe(
      res => {
        console.log(res);
        const response: any = res.status;
        // respective toaster messages
        if (response === 'success') {
          this.ss.ToasterMessage(res['message']);
          document.getElementById('modalButton').click();
          this.router.navigate(['/fusang/admins']);
        } else {
          this.ss.ToasterMessage(res['message']);
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
    }
  editadminInfo() {
    this.isEditAdmin = true;
    this.enableupdateBtns = false;
    this.editUser = false;
  }
  cancelRoleModifications() {
    this.enableupdateBtns = true;
    this.isEditAdmin = false;
    this.isenableform = false;
    this.editUser = true;
    this.invalidphone = false;
    this.getinvitedata();
    // this.getdetials();
  }
  updateRoleModifications() {
    let fullFinalRoleUpdatedData ;
    fullFinalRoleUpdatedData = [];
    this.finalData.forEach(function(o) {
     const obj = {'departmentId': '' , 'deparmentName': '' , 'userRole': []};
     let userRole;
      userRole = [] ;
      o.role.forEach(e => {
       if ( e.isEnable ) {
        userRole.push(o.name.split(' ')[0].toUpperCase() + '_' + e.userRole.toUpperCase());
        }
     });
     if ( userRole.length !== 0) {
      obj.departmentId = o.id;
      obj.deparmentName = o.name;
      obj.userRole = userRole;
      fullFinalRoleUpdatedData.push(obj);
     }
    // console.log(fullFinalRoleUpdatedData);
    });
    const param = {
      'country': this.getProfileInfo.country,
      'firstName': this.getProfileInfo.firstName,
      'lastName': this.getProfileInfo.lastName,
      'phoneNumber': this.getProfileInfo.phoneNumber,
      'userId': this.adminId,
      'serviceRequestId' : null,
      'roleDepartmentDetails': fullFinalRoleUpdatedData
   };
  //  console.log();
   const url = 'user/initializeEditWorkflow';
   this.gs.generalServiceInfo(url, 'post', param)
   .subscribe(
     res => {
      if (res['status'].toString() === 'success') {
        this.ss.ToasterMessage(res['message']);
        document.getElementById('modalButton').click();
        this.getinvitedata();
        this.getWorkFlowDataInfo();
        this.enableupdateBtns = true;
        this.editUser = true;
        this.isEditAdmin = false;
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
    console.log(fullFinalRoleUpdatedData);
  }
  getinvitedata() {
    // this.x = ApproverInformation.data;
    // const url = '/assets/json/inviteaccordion.json';
    this.x = [];
    const nullobj = {};
    const url = 'department/getDepartmentList?isAll=true';
    this.gs.generalServiceInfo(url, 'post', nullobj)
    .subscribe(
      res => {
        if (res['status'].toString() === 'success') {
          this.x = res['data'];
          // this.tempX = res['data'];
          this.getRoleData();
        }
        // console.log("data",this.x);
        // console.log(this.x[0]['name']);
        // this.x.forEach(element => {
        //   this.userDepList.push(element.name);
        // });
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
  // This function is to update the modifications of the form that is modified.
  updateModifications() {
    const data = {
      'userId': this.getProfileInfo.userId,
      'country': this.getProfileInfo.country,
      'firstName': this.getProfileInfo.firstName,
      'lastName': this.getProfileInfo.lastName,
      'phoneNumber': this.getProfileInfo.phoneNumber,
      'email': this.getProfileInfo.emailId
    };
    console.log(data);
    // /api/user/updateUserDetails POST /api/user/updateUserInfo
    const url = 'user/updateUserInfo';
  this.gs.generalServiceInfo(url, 'post', data)
  .subscribe(
    res => {
      const response: any = res.status;
      if (response === 'success') {
        this.editUser = true;
        this.enableBtns = false;
        this.getdetials();
        this.ss.ToasterMessage(res['message']);
        document.getElementById('modalButton').click();
      } else {
        this.ss.ToasterMessage(res['message']);
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
}

  updateAdminRole(obj, rdlobj , event) {
    let i; let j;
    console.log(this.finalData);
    console.log(rdlobj);
    i = _.findIndex(this.finalData, function(o) {
            return (o.id === obj.id) ;
        });
        if (i !== -1 ) {
          j =  _.findIndex(this.finalData[i].role, function(r) {
            return (rdlobj.userRole === r.userRole && r.isEnable === rdlobj.isEnable);
          });
        }
    console.log(i , j);
    if ( event.checked && i !== -1) {
      this.finalData[i].role[j].isEnable = true;
    }
    if (!event.checked && i !== -1) {
      this.finalData[i].role[j].isEnable = false;

    }

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
     this.isenableform = tempChaker;
  }
  // this function is to go back to the previous screen of the workflow tab
  goToIndividualWF() {
     this.enableWorkflowSec = true;
  }
  goToSelectedWorkFlow(element) {
    console.log(element);
    this.enableWorkflowSec = false;
    sessionStorage.setItem('workflowObject1', JSON.stringify(element));
    sessionStorage.setItem('workflowTab', 'workflow');
  }

  public pageChanged(event: any): void {
    this.pageIndex = event.page - 1;
    this.getWorkFlowDataInfo();
  }
  getNextSetItems() {
    let obj;
    obj = {
      'isCustomer': false,
      'page': 0,
      'size': 10
    };
}

  getWorkFlowDataInfo() {
    const workFlowDataObject = {
      'clientId': null,
      'pageNumber': this.pageIndex,   // this should be this.pageIndex
      'pageSize': 10,
      'userId': this.adminId
    };
    const url = 'user/v2/getUserWorkflowList';
    this.gs.generalServiceInfo(url, 'post', workFlowDataObject)
    .subscribe(
      res => {
        const response: any = res.status;
        // let tableData = [];
        if (response === 'success') {
            console.log(res['data']);
            this.data = new MatTableDataSource(res['data'].workflowList);
            this.data.sort = this.sort;
            this.data.paginator = this.paginator;
            this.tabData = res['data'];
            this.resultsLength = Number(res['data'].totalItems);

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
public getroledataformatter() {
  let halfData ;
  let fulldata;
  fulldata = this.x;
  halfData = this.adminRoleData;
  this.finalData = [];
  this.finalData = _.map(fulldata, function(o) {
    const obj = _.find(halfData, function(p) { return p.departmentId === o.id; });
    if (obj !== undefined) {
      o.role = _.map(o.role, function(r) {
           const roleObj = _.find(obj.userRole, function(s) { return _.includes(s, _.toUpper(r)); });
          //  let str ={};
        // str[r] = roleObj ? true : false;
         const str = {'userRole' : r, 'isEnable': roleObj ? true : false };
           return str;
        });
    } else {
      o.role = _.map(o.role, function(r) {
        const roleObj = _.find(o.userRole, function(s) { return _.includes(s, _.toUpper(r)); });
    //  let str = {};
    //  str[r] = roleObj ? true : false;
    const str = {'userRole' : r, 'isEnable': roleObj ? true : false };
    return str;
     });
        }
   return o;
 });
  // return finalData;
}

getRoleData() {
  const idobj = {
    'userId': this.adminId
  };
  const url = 'user/getUserInfo';
  this.adminRoleData = [];
  this.gs.generalServiceInfo(url, 'post', idobj)
  .subscribe(
    res => {
      if (res['status'].toString() === 'success') {
      this.adminRoleData = res['data'].roleDepartmentDetails;
      //  console.log("adminRoleData",this.adminRoleData);
       console.log('data', this.adminRoleData);
       this.getroledataformatter();
       this.getProfileInfo = res['data'];
         console.log(this.getProfileInfo);
           this.filteredOptions = this._filter(this.getProfileInfo.country);
           // for each of the country present in the list get . if it matches the country give the take the phone number code.
           for (let i = 0; i < this.countrylist.length; i++) {
             if ( this.countrylist[i].name === this.getProfileInfo.country) {
                 this.code = this.countrylist[i].dial_code;
                 this.countryPhonelen = this.countrylist[i].length;
             }
           }
           this.adminfirstName = this.getProfileInfo.firstName ;
           this.adminLastName = this.getProfileInfo.lastName;
           this.adminphoneNumber = this.getProfileInfo.phoneNumber;
           this.adminEmailID = this.getProfileInfo.username;

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

reActivatePop(successtemplate: TemplateRef<any>) {
    this.updateRoleModifications();
    this.modalRef.hide();
    this.successRef = this.modalService.show(successtemplate, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
  }

  // Final reactivation of the user when the user updation is done (with ReActivate server  )
  reActivateUser() {
  let fullFinalRoleUpdatedData ;
    fullFinalRoleUpdatedData = [];
    this.finalData.forEach(function(o) {
     const roleobj = {'departmentId': '' , 'deparmentName': '' , 'userRole': []};
     let userRole;
      userRole = [] ;
      o.role.forEach(e => {
       if ( e.isEnable ) {
        userRole.push(o.name.split(' ')[0].toUpperCase() + '_' + e.userRole.toUpperCase());
        }
     });
     if ( userRole.length !== 0) {
      roleobj.departmentId = o.id;
      roleobj.deparmentName = o.name;
      roleobj.userRole = userRole;
      fullFinalRoleUpdatedData.push(roleobj);
     }
    // console.log(fullFinalRoleUpdatedData);
    });
  const obj = {
    'country': this.getProfileInfo.country,
    'firstName': this.getProfileInfo.firstName,
    'lastName': this.getProfileInfo.lastName,
    'phoneNumber': this.getProfileInfo.phoneNumber,
    'profilePic': 'string',
    'roleDepartmentDetails': fullFinalRoleUpdatedData,
    'userId': this.adminId,
    'username': this.getProfileInfo.username
  };
  // service to deactive the user
  const url = 'user/v2/reActivateAdmin';
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
           this.getdetials();
           this.getWorkFlowDataInfo();
           this.router.navigate(['/fusang/admins']);
        } else {
          this.ss.ToasterMessage(res['message']);
          document.getElementById('modalButton1').click();
        }
      });
}

reactivateAdmin(invitetemplate: TemplateRef<any>) {
  this.modalRef = this.modalService.show(invitetemplate, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
}

// Restore the previous version of the roles before editing if we click on Cancel of ReActivate
restorePrevRoles() {
  this.basic = true;
  this.assignroles = false;
  this.cancelRoleModifications();
  this.modalRef.hide();
  this.successRef.hide();
}

// First Tab which contains the basic information
showbasic() {
  this.basic = true;
  this.assignroles = false;
}

// Second tab which contains the Roles information
showassignroles() {
  this.basic = false;
  this.assignroles = true;
}
numberOnly(event): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}


}
