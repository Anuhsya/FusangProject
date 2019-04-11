import { Component, OnInit, ViewChild, TemplateRef, Input } from '@angular/core';
import { MatTabsModule } from '@angular/material';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { SharedService } from '../../shared.service';
import { GeneralService } from '../../general.service';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import * as _ from 'lodash';
import { isArray } from 'util';


@Component({
  selector: 'app-client-profile',
  templateUrl: './client-profile.component.html',
  styleUrls: ['./client-profile.component.css']
})
export class ClientProfileComponent implements OnInit {
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
  pageIndexUser: any = 0;
  countrylist: any = [];
  countrylist1: any = [];
  transactionDetails: any = [];
  successRef: BsModalRef;
  userDetailsList: any = [];
  getProfileInfo: any = [];
  getProfileInfo1: any = [];
  OnloadWorkFlowdata = new MatTableDataSource();
  clientId: any = '';
  editUser: any = true;
  totalItem: any = [];
  filteredOptions: any =  [];
  countryPhonelen: any;
  dummyData: any = [];
  totalUsers: any = 0;
  totalWallets: any = 0;
  dummyData1: any = [];
  enableBtns: Boolean = false;
  moreThanTwoWallets: Boolean =  false;
  @Input() workflowData: string;
  current: any;
  enableWorkflowSec: Boolean = true;
  // dispWorkFlowColumns: string[] = ['info', 'createdDate', 'status'];
  dispWorkFlowColumns: string[] = ['info', 'status', 'createdDate'];
  columns: string[] = ['profilePic', 'userName', 'emailId', 'role', 'status'];
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
      'name': 'Wallets',
      'value': 'numberWallet'
    },
    {
      'name': 'Status',
      'value': 'status'
    },
    {
      'name': 'Roles',
      'value': 'role'
    }
  ];
  templist: any = [];
  workflowObject: any;
  constructor(private modalService: BsModalService, private gs: GeneralService, private router: Router,
     private _domSanitizer: DomSanitizer, private ss: SharedService) { }

  ngOnInit() {
    this.workflowObject = JSON.parse(sessionStorage.getItem('workflowObject1'));
    this.clientId = this.workflowObject.id;
    this.getCountryList();
    this.getuserDetailsList();
    this.getWorkFlowDataInfo();
  }
  public pageChanged(event: any): void {
    this.pageIndex = event.page - 1;
    // this.getuserDetailsList();
    this.getWorkFlowDataInfo();
  }
  getNextSetItems(event: any) {
    // let obj;
    // obj = {
    //   'isCustomer': false,
    //   'page': this.pageIndex,
    //   'size': 10
    // };
    this.pageIndexUser = event.page - 1;
    this.getuserDetailsList();
}

editForm() {
  this.enableBtns = true;
  this.editUser = false; // here we are making the flag to false to allow user to edit.
}
// This function is for adding user list data in users tab.
  getuserDetailsList() {
         const obj = {
          'clientId': this.clientId,
          'isCompleted': true,
          'pageNumber': this.pageIndexUser,
          'pageSize': 10,
          'userName': null,
          'userVerificationStatus': null
     };
     this.tableData = [];
     this.displayedColumns = [];
      const url = 'client/getClientUsersList';
    this.gs.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          if (this.ss.validVal(res['data']['clientUsersList'])) {
            this.templist = [];
            this.userDetailsList = res['data']['clientUsersList'];
            this.totalUsers = res['data'].total;
            this.totalWallets = res['data'].wallets;

            if (this.totalWallets > 0) {
              this.moreThanTwoWallets =  true;
            } else {
              this.moreThanTwoWallets =  false;
            }
            this.userDetailsList.forEach(element => {
              if ( element.userStatus !== null) {
                this.tableData.push({
                  'profilePic': element.profilePic,
                  'userName': element.firstName,
                  'emailId': element.emailId,
                  'role': element.userRoles,
                  'numberWallet': element.numberWallet,
                  'id':  element.id,
                  'status' : element.userStatus
                });
               }
            });

            this.totalItem = res['data'].totalItems;
            const startItem = this.pageIndex * 10;
            const endItem = ( this.pageIndex + 1 ) * 10;
            this.templist = this.templist.slice(startItem, endItem);
            this.newColumns.forEach(element => {
              this.displayedColumns.push(element.value);
            });
            this.data = new MatTableDataSource(this.tableData);
           this.data.sort = this.sort;
           this.data.paginator = this.paginator;

          } else {
            this.userDetailsList = [];
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
        this.getClientDetails();
       },
      e => {
      },
      () => {
      }
    );
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

  public getProperRole(val) {
    // console.log(val);
    let finalData: any;
    finalData = [];
    if (isArray(val)) {
      val.forEach(element => {
        if (element === 'USER_ADMIN' || element === 'ADMIN') {
         element = 'SUPER USER';
        } else if (element === 'USER_SIGNER') {
          element = 'SIGNER';
        } else if (element === 'USER_VIEWER') {
          element = 'VIEWER';
        }
        finalData.push({
          'role_type' : element

        });
      });
    }
    return finalData;
  }

  getClientDetails() {
     const obj = {
       'clientId': this.clientId,
     };
    const url = 'client/getClientDetails';
    this.gs.generalServiceInfo(url, 'post', obj)
    .subscribe(
      res => {
        const response: any = res.status;
        if (response === 'success') {
          this.editUser = true;
          this.enableBtns = false;
          this.getProfileInfo = res['data'];
        }
           },
      e => {
      },
      () => {
      }
    );

     }
// This is for success popup - toaster message.
     sucspop(successtemplate: TemplateRef<any>) {
      this.successRef = this.modalService.show(successtemplate, Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
    }

    // This function is for re setting the client information (when use clicks on cancel operation)
    resetClientInfo() {
      this.enableBtns = false;
      this.editUser = true;
      this.getClientDetails();
    }
// This function is for updating user information after modifications.
    updateClientInfo() {
      const data = {
        'id': this.getProfileInfo.id,
        'clientName': this.getProfileInfo.clientName,
        'country': this.getProfileInfo.country,
        'domainName': this.getProfileInfo.domainName,
        'address': this.getProfileInfo.address,
        'notes': this.getProfileInfo.notes
      };
      const url = 'client/updateClientDetails';
    this.gs.generalServiceInfo(url, 'post', data)
    .subscribe(
      res => {
        const response: any = res.status;
        if (response === 'success') {
          this.editUser = true;
          this.enableBtns = false;
          this.getClientDetails();
          this.ss.ToasterMessage(res['message']);
          document.getElementById('modalButton').click();
          this.enableBtns = true;
          this.editUser = false;
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
 }
 goToSelectedWorkFlow(element) {
   this.enableWorkflowSec = false;
   sessionStorage.setItem('workflowObject1', JSON.stringify(element));
   sessionStorage.setItem('workflowTab', 'workflow');
 }

 getWorkFlowDataInfo() {
  const workFlowDataObject = {
    'clientId': this.clientId,
    'pageNumber': this.pageIndex,   // this should be this.pageIndex
    'pageSize': 10,
    'userId': null
  };
  const url = 'user/v2/getUserWorkflowList';
  this.gs.generalServiceInfo(url, 'post', workFlowDataObject)
  .subscribe(
    res => {
      const response: any = res.status;
      // let tableData = [];
      if (response === 'success') {
          this.OnloadWorkFlowdata = new MatTableDataSource(res['data'].workflowList);
          this.OnloadWorkFlowdata.sort = this.sort;
          this.OnloadWorkFlowdata.paginator = this.paginator;
          this.tabData = res['data'];
          this.resultsLength = Number(res['data'].totalItems);
      }

    },
    e => {
        // }
          },
    () => {
    }
  );
}

 // this is for deactivating the user.
 deActivateUser() {
  const obj = {
      'id': this.clientId,
      'user': false
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
        this.router.navigate(['/fusang/clients']);
      } else {
        this.ss.ToasterMessage(res['message']);
        document.getElementById('modalButton1').click();
      }
    });
  }
  showUserProfile(index, value) {
      // value.status = this.userDetailsList[index].userStatus;
      value.clientName = this.userDetailsList[index].clientName;
      value.clientId = this.userDetailsList[index].clientId;
      sessionStorage.setItem('workflowObject1', JSON.stringify(value));
      // If user clicks back on the client user detail page, the page navigates to user tab list page
      sessionStorage.setItem('fromClient', 'clientProfile' );
      this.router.navigate(['/fusang/User/userDetailsProfile']);
  }

  showTool(i) {
    this.current = i;
    event.stopPropagation();
 }

 showleave() {
  this.current = null;
}

 // this is for ReActivating the user.
 reActivateUser() {
  const obj = {
    'serviceRequestId': null,
  'userId': this.clientId,
  'userRole': [

  ]
  };
  // service to deactive the user
  const url = 'user/v2/reActivate';
  this.gs
    .generalServiceInfo(url, 'post', obj)
    .subscribe(
      res => {
        const response: any = res.status;
        // respective toaster messages
        if (response === 'success') {
          this.ss.ToasterMessage(res['message']);
           document.getElementById('modalButton').click();
          // this.router.navigate(['/fusang/userlist']);
        } else {
          this.ss.ToasterMessage(res['message']);
          document.getElementById('modalButton1').click();
        }
      });
}
numberOnly(event): boolean {
  const charCode = (event.which) ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return false;
  }
  return true;
}
}
