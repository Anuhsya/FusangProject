import { Component, OnInit, ViewChild, Input, AfterViewInit, TemplateRef, OnChanges, SimpleChanges } from '@angular/core';
import {MatSort, MatTableDataSource, MatAutocompleteSelectedEvent, MatPaginator} from '@angular/material';
import { GeneralService } from '../../general.service';
import { SharedService } from '../../shared.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Calendar } from 'primeng/calendar';
import { isArray } from 'util';


@Component({
  selector: 'app-table-component',
  templateUrl: './table-component.component.html',
  styleUrls: ['./table-component.component.css']
})
export class TableComponentComponent implements OnInit, AfterViewInit {
  en: any;
  @ViewChild('p-calendar') calendar: Calendar;
  statusSearch = [];
  roleSearch = [];
  Search = [];
  searchValue: any = null;
  rangeDates: Date[];
  startdate: any = null;
  enddate: any = null;
  statusValue: any = null;
  roleValue: any = null;
  typeValue: any = null;
  statuslist: any = [];
  rolelist: any = [];
  @Input() workflowData: string;
  @Input() userStatus: string;
  // @Input() hideIncustomer: boolean;
  // @Input() hideInticket: boolean;
  displayedColumns: any[] = [];
  tableColumns: any[] = [];
  data: MatTableDataSource<any>;
  totalTableData = [];
  typelist = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  obj: (o: {}) => string[];
  tabData: any = [];
  totalTabData: any = [];
  mycolumns: string[];
  showSearch = false;
  resultsLength: any;
  pageIndex: any = 0;
  current: any;
  showRole: any;
  loggedinUserId: any = '';
  role1: string;
  roles: any;
  constructor(private router: Router,
     private fb: FormBuilder, private gs: GeneralService, private ss: SharedService, private modalService: BsModalService) {
    this.obj = Object.keys;

    const res = JSON.parse(sessionStorage.getItem('firstLogin'));
    console.log(res);
    if (res !== null) {
      this.roles = res['roles'];
    }
   }


  ngOnInit() {
    this.ss.displayedColumn.subscribe(
      res => {
        this.tableColumns = [];
        this.displayedColumns = [];
        this.tableColumns = res;
        res.forEach(element => {
          this.displayedColumns.push(element.value);
        });
       }
     );
     this.ss.tableData.subscribe(res => {
       this.tabData = [];
       this.totalTabData = [];
     this.tabData = res;
     this.totalTabData = res;
     this.resultsLength = Number(sessionStorage.getItem('totalLength'));
     console.log(this.workflowData);
      this.data = new MatTableDataSource(res);
     this.data.sort = this.sort;
      this.data.paginator = this.paginator;
    // this.typeList();
    this.statusList();
    // this.roleList();
    // this.getNotification();
});
  }
public ngAfterViewInit() {

}
public pageChanged(event: any): void {
  this.pageIndex = event.page - 1;
  if ( this.workflowData === 'customer' ) {
  this.listUser();
  } else if ( this.workflowData === 'ticket' ) {
    this.filter();
  } else if ( this.workflowData === 'user' ) {
    this.listUser();
  }
}
roleList() {
  if (this.workflowData === 'user') {
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
        }
      },
      e => {
            },
      () => {
      }
    );
  }
}
statusList() {
  if (this.workflowData === 'ticket') {
  const reqParam = {};

  this.gs.generalServiceInfo('service/getTicketStatusList', 'post', reqParam)
    .subscribe(
      res => {
        if ( res['status'].toString() === 'success') {
          this.statuslist = res['data'];
        }
      },
      e => {
            },
      () => {
      }
    );
  } else {
    this.statuslist = ['Invited', 'Verified', 'Checked', 'Approved', 'Active', 'CustomerKyc', 'Rejected'];
  }
}
// getNotification() {
// }
typeList() {
  const reqParam = {};

  this.gs.generalServiceInfo('service/getWorkflowTypeList', 'post', reqParam)
    .subscribe(
      res => {
        if ( res['status'].toString() === 'success') {
          this.typelist = res['data'];
        }
      },
      e => {
            },
      () => {
      }
    );
}
listUser() {
  let reqParam;
  if ( this.workflowData === 'customer' ) {
  reqParam = {
    'isCustomer': true,
    'page': this.pageIndex,
    'size': 10
  };
} else if ( this.workflowData === 'user' ) {
  reqParam = {
    'isCustomer': false,
    'page': this.pageIndex,
    'size': 10
  };
}
  this.gs.generalServiceInfo('user/getUsersList', 'post', reqParam)
    .subscribe(
      res => {
        // console.log('tiwari',res);
        if ( res['status'].toString() === 'success') {
          let tableData = [];
          // this.ss.TotalTableData(res['data']);
          sessionStorage.setItem('totalLength', res['data'].totalItems );
          sessionStorage.setItem('workflowObject', JSON.stringify(res['data']['userList']));
          if ( this.workflowData === 'customer' ) {
          res['data']['userList'].forEach((element) => {
          if ( this.ss.validVal(element.userStatus)) {
          element.userStatus = element.userStatus.split('Pre').join('');
          element.userStatus = element.userStatus.split('Post').join('');
              tableData.push({
              'firstname': element.firstName.toLowerCase(),
             'username': element.emailId,
             'status': element.userStatus,
             'id':  element.id
            });
          }
    });

  } else {
    res['data']['userList'].forEach((element) => {
      if ( this.ss.validVal(element.userStatus)) {
      element.userStatus = element.userStatus.split('Pre').join('');
      element.userStatus = element.userStatus.split('Post').join('');
          tableData.push({
            'firstname': element.firstName.toLowerCase(),
            'username': element.emailId,
            'role': element.userRoles,
            'status': element.userStatus,
            'id':  element.id
        });
      }
});
}
const startItem = this.pageIndex * 10;
const endItem = ( this.pageIndex + 1 ) * 10;
tableData = tableData.slice(startItem, endItem);
    this.ss.TableData(tableData);
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
public ticketList() {
  const reqParam = {
  };
  this.gs.generalServiceInfo('service/getTicketList?page=' + this.pageIndex + '&size=10', 'post', reqParam)
    .subscribe(
      res => {
        if ( res['status'].toString() === 'success') {
          // this.ss.TotalTableData(res['data']);
          const tableData = [];
          sessionStorage.setItem('totalLength', res['data'].totalItems );
          sessionStorage.setItem('workflowObject', JSON.stringify(res['data']['serviceRequestList']));
        res['data']['serviceRequestList'].forEach((element) => {
              tableData.push({ 'ticketNumber': element.ticketNumber,
             'info': element.info,
             'createdDate': element.createdDate,
             'workflowType': element.workflowType,
             'status': element.ticketStatus,
             'id': element.id
            });
    });
    this.ss.TableData(tableData);
    // this.ss.DisplayedColumn(this.newColumns);
  }
      },
      e => {
          // }
            },
      () => {
      }
    );
}

public showOnboarding(index, value) {
     let tempValue;
      let tempObject;
      if (this.workflowData === 'ClientUser') {
      tempValue = JSON.parse(sessionStorage.getItem('workflowObjectUser'));
      tempValue.forEach(element => {
        if (element.id === value.id ) {
          tempObject = element;
        }
      });
    }
  // Added below condition to stop naviagtion for super user and if he is in completed Tab
  if (!(this.roles.indexOf('USER_ADMIN') >= 0) || this.userStatus === 'Completed') {
    if (this.workflowData !== 'ClientUser') {
    this.totalTableData = [];
    this.totalTableData = JSON.parse(sessionStorage.getItem('workflowObject'));
    sessionStorage.setItem('workflowTab', this.workflowData);
    console.log(this.workflowData);
    this.totalTableData.forEach(element => {
      this.displayedColumns.push(element.value);
      if (element.id === value.id ) {
        sessionStorage.setItem('workflowObject1', JSON.stringify(element));
      }
    });
  } else {
    if (tempObject.isworkflow || this.userStatus === 'Completed') {
      this.totalTableData = [];
      this.totalTableData = JSON.parse(sessionStorage.getItem('workflowObject'));
      sessionStorage.setItem('workflowTab', this.workflowData);
      console.log(this.workflowData);
      this.totalTableData.forEach(element => {
        this.displayedColumns.push(element.value);
      if (element.id === value.id ) {
        sessionStorage.setItem('workflowObject1', JSON.stringify(element));
      }
    });
    }
  }
  }
  if ( this.workflowData === 'user' && this.userStatus === 'Completed') {
    this.router.navigate(['/fusang/adminProfile']);
  } else if (this.workflowData === 'client' && this.userStatus === 'Completed') {
    this.router.navigate(['/fusang/clientProfile']);
  } else if (this.workflowData === 'ClientUser' && this.userStatus === 'Completed') {
    this.router.navigate(['/fusang/User/userDetailsProfile']);
  } else if (!(this.roles.indexOf('USER_ADMIN') >= 0)) {
    if (this.workflowData !== 'ClientUser') {
        this.router.navigate(['/fusang/onboarding']);
    } else {
      if (tempObject.isworkflow) {
         this.router.navigate(['/fusang/onboarding']);
      } else {
          this.ss.ToasterMessage('User is invited as part of client invite. For more details refer respective client invite workflow');
          document.getElementById('modalButton1').click();
      }
    }
  }
}

public searchClick() {
  this.showSearch = !this.showSearch;
  this.searchValue = '';
}

statusChange(dropdownType, value) {
  this.roleSearch = [];
  this.Search = [];
  this.statusSearch = [];
  if (this.workflowData === 'ticket') {
  if (dropdownType === 'status') {
    this.statusValue = value;
    this.filter();
}
if (dropdownType === 'type') {
  this.typeValue = value;
  this.filter();
}
if (dropdownType === 'search') {
  this.searchValue = value;
  setTimeout(() => {
    this.filter();
  }, 1000);
}
} else {
  this.tabData = [];
  if (dropdownType === 'status') {
    if ( this.roleValue === null && this.searchValue === null ) {
          this.totalTabData.forEach(element => {
      if ( element.status.toLowerCase() ===  this.statusValue.toLowerCase() ) {
        this.tabData.push(element);
      }
    });
    } else if ( this.roleValue === null || this.searchValue === null ) {
        if ( this.roleValue !== null) {
        this.totalTabData.forEach(element => {
          element.role.forEach(element1 => {
            if ( element1.indexOf('_') !== -1) {
              element1 = element1.split('_').join('');
            }
            let roleValue;
            if ( this.roleValue.indexOf('_') !== -1) {
              roleValue = this.roleValue.split('_').join('');
            }
          if ( element1.toLowerCase() ===  roleValue.toLowerCase() ) {
            this.statusSearch.push(element);
          }
        });
      });
    } else if ( this.searchValue !== null ) {
      this.statusSearch = this.filterIt(this.totalTabData, this.searchValue);
    }
          this.statusSearch.forEach(element => {
      if ( element.status.toLowerCase() ===  value.toLowerCase() ) {
        this.tabData.push(element);
      }
    });
  } else if ( this.roleValue !== null && this.searchValue !== null ) {
    this.totalTabData.forEach(element => {
      element.role.forEach(element1 => {
        if ( element1.indexOf('_') !== -1) {
          element1 = element1.split('_').join('');
        }
        let roleValue;
        if ( this.roleValue.indexOf('_') !== -1) {
          roleValue = this.roleValue.split('_').join('');
        }
      if ( element1.toLowerCase() ===  roleValue.toLowerCase() ) {
        this.roleSearch.push(element);
      }
    });
  });
  this.Search = this.filterIt(this.roleSearch, this.searchValue);
      this.Search.forEach(element => {
  if ( element.status.toLowerCase() ===  value.toLowerCase() ) {
    this.tabData.push(element);
  }
});
}
// }
  //   if ( this.roleSearch.length !== 0 ) {
  //     this.roleSearch.forEach(element => {
  //     if ( element.status.toLowerCase() ===  value.toLowerCase() ) {
  //       this.statusSearch.push(element);
  //     }
  //   });
  //   this.roleSearch = [];
  // } else if ( this.Search.length !== 0 ) {
  //   this.Search.forEach(element => {
  //     if ( element.status.toLowerCase() ===  value.toLowerCase() ) {
  //       this.statusSearch.push(element);
  //     }
  //   });
  //   this.Search = [];
  // } else {
  //   this.totalTabData.forEach(element => {
  //     if ( element.status.toLowerCase() ===  value.toLowerCase() ) {
  //       this.statusSearch.push(element);
  //     }
  //   });
  } else if (dropdownType === 'role') {
    if ( this.statusValue === null && this.searchValue === null ) {
          this.totalTabData.forEach(element => {
        element.role.forEach(element1 => {
          if ( element1.indexOf('_') !== -1) {
            element1 = element1.split('_').join('');
          }
          let roleValue;
          if ( this.roleValue.indexOf('_') !== -1) {
            roleValue = this.roleValue.split('_').join('');
          }
        if ( element1.toLowerCase() ===  roleValue.toLowerCase() ) {
          this.tabData.push(element);
        }
      });
    });
} else if ( this.statusValue === null || this.searchValue === null ) {
    if ( this.statusValue !== null) {
   this.totalTabData.forEach(element => {
      if ( element.status.toLowerCase() ===  this.statusValue.toLowerCase() ) {
        this.roleSearch.push(element);
      }
    });
} else if ( this.searchValue !== null ) {
  this.roleSearch = this.filterIt(this.totalTabData, this.searchValue);
}
this.roleSearch.forEach(element => {
  element.role.forEach(element1 => {
    if ( element1.indexOf('_') !== -1) {
      element1 = element1.split('_').join('');
    }
    let roleValue;
    if ( this.roleValue.indexOf('_') !== -1) {
      roleValue = this.roleValue.split('_').join('');
    }
  if ( element1.toLowerCase() ===  roleValue.toLowerCase() ) {
    this.tabData.push(element);
  }
});
});
} else if ( this.statusValue !== null && this.searchValue !== null ) {
this.totalTabData.forEach(element => {
  if ( element.status.toLowerCase() ===  this.statusValue.toLowerCase() ) {
    this.statusSearch.push(element);
  }
});

this.Search = this.filterIt(this.statusSearch, this.searchValue);
        this.Search.forEach(element => {
        element.role.forEach(element1 => {
          if ( element1.indexOf('_') !== -1) {
            element1 = element1.split('_').join('');
          }
          let roleValue;
          if ( this.roleValue.indexOf('_') !== -1) {
            roleValue = this.roleValue.split('_').join('');
          }
        if ( element1.toLowerCase() ===  roleValue.toLowerCase() ) {
          this.roleSearch.push(element);
        }
      });
    });
}
    // if ( this.statusSearch.length !== 0 ) {
    //   this.statusSearch.forEach(element => {
    //     element.role.forEach(element1 => {
    //     if ( element1.toLowerCase() ===  value.toLowerCase() ) {
    //       this.roleSearch.push(element);
    //     }
    //   });
    // });
    // this.statusSearch = [];
    // } else if ( this.Search.length !== 0 ) {
    //   this.Search.forEach(element => {
    //     element.role.forEach(element1 => {
    //     if ( element1.toLowerCase() ===  value.toLowerCase() ) {
    //       this.roleSearch.push(element);
    //     }
    //   });
    // });
    // this.Search = [];
    // } else {
    //   this.totalTabData.forEach(element => {
    //     element.role.forEach(element1 => {
    //     if ( element1.toLowerCase() ===  value.toLowerCase() ) {
    //       this.roleSearch.push(element);
    //     }
    //   });
    // });
    // }
  } else if (dropdownType === 'search') {
    // if ( this.statusSearch.length !== 0 ) {
    //   this.Search  = this.filterIt(this.statusSearch, this.searchValue);
    //   this.statusSearch = [];
    // } else if ( this.roleSearch.length !== 0 ) {
    //   this.Search  = this.filterIt(this.roleSearch, this.searchValue);
    //   this.roleSearch = [];
    // } else {
    //   this.Search = this.filterIt(this.totalTabData, this.searchValue);
    // }
    if ( this.statusValue === null && this.roleValue === null ) {
      this.tabData = this.filterIt(this.totalTabData, this.searchValue);
} else if ( this.statusValue === null || this.roleValue === null ) {
if ( this.statusValue !== null) {
this.totalTabData.forEach(element => {
  if ( element.status.toLowerCase() ===  this.statusValue.toLowerCase() ) {
    this.Search.push(element);
  }
});
} else if ( this.roleValue === null ) {
  this.totalTabData.forEach(element => {
    element.role.forEach(element1 => {
      if ( element1.indexOf('_') !== -1) {
        element1 = element1.split('_').join('');
      }
      let roleValue;
      if ( this.roleValue.indexOf('_') !== -1) {
       roleValue = this.roleValue.split('_').join('');
      }
    if ( element1.toLowerCase() === roleValue.toLowerCase() ) {
      this.Search.push(element);
    }
  });
});
}
this.tabData = this.filterIt(this.Search, this.searchValue);
} else if ( this.statusValue !== null && this.roleSearch !== null ) {
this.totalTabData.forEach(element => {
if ( element.status.toLowerCase() ===  this.statusValue.toLowerCase() ) {
this.statusSearch.push(element);
}
});

    this.statusSearch.forEach(element => {
    element.role.forEach(element1 => {
      if ( element1.indexOf('_') !== -1) {
        element1 = element1.split('_').join('');
      }
      let roleValue;
      if ( this.roleValue.indexOf('_') !== -1) {
        roleValue = this.roleValue.split('_').join('');
      }
    if ( element1.toLowerCase() ===  roleValue.toLowerCase() ) {
      this.roleSearch.push(element);
    }
  });
});
this.tabData = this.filterIt(this.roleSearch, this.searchValue);
}
  }
  // if ( this.statusSearch.length !== 0 ) {
  //   this.resultsLength = this.statusSearch.length;
  //   this.data = new MatTableDataSource(this.statusSearch);
  // }
  // if ( this.roleSearch.length !== 0 ) {
  //   this.resultsLength = this.roleSearch.length;
  //   this.data = new MatTableDataSource(this.roleSearch);
  // }
  // if ( this.Search.length !== 0 ) {
  //   this.resultsLength = this.Search.length;
  //   this.data = new MatTableDataSource(this.Search);
  // }
      this.resultsLength = this.tabData.length;
    this.data = new MatTableDataSource(this.tabData);
  this.data.sort = this.sort;
  this.data.paginator = this.paginator;
  }
}
inviteCustomer() {
  if ( this.workflowData === 'customer' ) {
  document.getElementById('invitPopups').click();
} else   if ( this.workflowData === 'user' ) {
  document.getElementById('userPopup').click();
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
        finalData.push({
          'department' : undefined,
          'role_type' : element
        });
       } else if (element === 'USER_SIGNER') {
         element = 'SIGNER';
         finalData.push({
          'department' : undefined,
          'role_type' : element
        });
       } else if (element === 'USER_VIEWER') {
         element = 'VIEWER';
         finalData.push({
          'department' : undefined,
          'role_type' : element
        });
       } else {
        finalData.push({
          'department' : element.split('_')[0].toLowerCase(),
          'role_type' : element.split('_')[1]
        });
       }
    });
  }
  // console.log(finalData);
  return finalData;
}


public filter() {
  // const reqParam = {
  //   fromDate: this.startdate,
  //   info: this.searchValue,
  //   pageNumber: this.pageIndex,
  //   pageSize: 10,
  //   statusType: this.statusValue,
  //   toDate: this.enddate,
  //   typeOfWorkFlow: this.typeValue
  // };
  const reqParam = {
    fromDate: null,
    info: null,
    pageNumber: this.pageIndex,
    pageSize: 10,
    statusType: null,
    toDate: null,
    typeOfWorkFlow: null
  };

  this.gs.generalServiceInfo('service/getFilteredData', 'post', reqParam)
    .subscribe(
      res => {
        if ( res['status'].toString() === 'success') {
          const tableData = [];
          sessionStorage.setItem('totalLength', res['data'].totalItems );
          sessionStorage.setItem('workflowObject', JSON.stringify(res['data']['serviceRequestList']));
        res['data']['serviceRequestList'].forEach((element) => {
              tableData.push({ 'ticketNumber': element.ticketNumber,
             'info': element.info,
             'createdDate': element.createdDate,
             'workflowType': element.workflowType,
             'status': element.ticketStatus,
             'id': element.id
            });
    });
    this.ss.TableData(tableData);
    this.data = new MatTableDataSource(tableData);
    this.data.sort = this.sort;
    this.data.paginator = this.paginator;
        }
      },
      e => {
            },
      () => {
      }
    );
}
public searchChange(value) {



}
public selectDate(date) {
}
public datePickerClose(date) {
  if (date[0] === null ) {
    this.ss.ToasterMessage('Please select start date');
    document.getElementById('modalButton1').click();
  } else if (date[1] === null) {
    this.ss.ToasterMessage('Please select end date');
    document.getElementById('modalButton1').click();
  } else if (date[0] === null && date[1] === null) {
    this.ss.ToasterMessage('Please select start and end date');
    document.getElementById('modalButton1').click();
  } else if (date[0] !== null && date[1] !== null) {
    const date1 = new Date(date[0]);
    const date2 = new Date(date[1]);
    this.startdate = date1.getTime();
    this.enddate = date2.getTime();
    this.filter();
  }
}
// arr.filter(obj =>
//    Object.keys(obj)
//      .some(key => obj[key].includes(searchKey))
// );
filterIt(arr, searchKey) {
  return arr.filter((obj) => {
    return Object.keys(obj).some((key) => {
      if (key !== 'id') {
      return obj[key].indexOf(searchKey) >= 0;
    }
    });
  });
}

// search() {
//   if (this.workflowData !== 'ticket') {
//   if (this.searchValue === '') {
//     return this.tabData;
//   }
//   if (this.searchValue !== '') {
//     return this.filterIt(this.tabData, this.searchValue);
//     this.resultsLength = this.tabData.length;
//     this.data = new MatTableDataSource(this.tabData);
//     this.data.sort = this.sort;
//     this.data.paginator = this.paginator;
//   }
// }
// }
clear() {
  this.tabData = this.totalTabData;
  this.searchValue = null;
  this.statusValue = null;
  this.roleValue = null;
  this.typeValue = null;
  this.startdate = null;
  this.enddate = null;
  this.showSearch = false;
  if (this.rangeDates !== null) {
  this.rangeDates = undefined;
}
  this.resultsLength = this.tabData.length;
  this.data = new MatTableDataSource(this.tabData);
this.data.sort = this.sort;
this.data.paginator = this.paginator;
if ( this.workflowData === 'customer' ) {
  this.listUser();
  } else if ( this.workflowData === 'ticket' ) {
    this.filter();
  } else if ( this.workflowData === 'user' ) {
    this.listUser();
  }
}
tool() {
  console.log('i am clicked');
}
// public ngOnChanges(changes: SimpleChanges) {
//   this.data = new MatTableDataSource(changes.data.currentValue);
// }
showTool(i) {
   this.current = i;
   event.stopPropagation();
}
showleave() {
  this.current = null;
}

}
