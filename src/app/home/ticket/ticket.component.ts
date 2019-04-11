import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { GeneralService } from '../../general.service';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource, MatAutocompleteSelectedEvent, MatPaginator } from '@angular/material';
import { Calendar } from 'primeng/calendar';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  datepickerConfig: Partial<BsDatepickerConfig>;
  modalRef: BsModalRef;
  @ViewChild('p-calendar') calendar: Calendar;
  rangeDates: Date[];
  startdate: any = null;
  enddate: any = null;
  data: MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  pageIndex: any = 0;
  resultsLength: any = [];
  NoDataFound: Boolean =  false;

  ticketValue: String = 'ticket';
  showticket = Boolean(false);
  showCustomer = Boolean(true);
  tableData: any = [];

  columns: string[] = ['ticketNumber', 'info', 'createdDate', 'status'];
  newColumns: any[] = [
    {
      'name': 'Ticket Number',
      'value': 'ticketNumber'
    },
    {
      'name': 'Info',
      'value': 'info'
    },
    {
      'name': 'Created Date',
      'value': 'createdDate'
    },
    {
      'name': 'Type',
      'value': 'workflowType'
    },
    {
      'name': 'Status',
      'value': 'status'
    }
  ];
  ticketCell: any = '';
  ticketListdata: any = [];
  departmentList: any = [];
  departmentListvalue = 0;
  workFlowDetailsvalue = 0;
  workFlowDetails: any = [];
  // ticketListdata: { 'id': number; 'role': string; 'claimed': string; 'close': string; 'open': number; }[];
  ticketid: any;
  displayedColumns: any = [];
  totalTableData: any[];
  departmentId: any = '';
  workFlowType: any = '';
  userrole: any = '';
  loggeduserrole: any = '';
  searchdata: any = '';
  serviceRequestId: any = '';
  searchValue: any = null;
  showSearch = false;
  bsValue = new Date();
  bsRangeValue: Date[];
  maxDate = new Date();
  currentDate = new Date();
  isHidden: Boolean =  false;
  todaysDate: any;
  filterSearching: Boolean =  false;
  timezonelist: any = [];
  constructor(private gs: GeneralService, private datePipe: DatePipe,
    private ss: SharedService, private router: Router, private modalService: BsModalService)  {
    const logedres = JSON.parse(sessionStorage.getItem('firstLogin'));
    console.log(logedres);
  }

  ngOnInit() {
    // this.ss.storedValue('ticket');
    // below code is for datepicker range selection -  getting today's date.
    // this.getuserRole()
    this.todaysDate = formatDate(this.currentDate, 'yyyy-MM-dd', 'en');

    this.datepickerConfig = Object.assign({
      showWeekNumbers: false,
      maxDate: new Date(this.todaysDate)
    });
   // this.bsRangeValue = [this.bsValue, this.maxDate];

    this.NoDataFound =  false;
    this.departmentId = '0';
    this.getticketmatrix();
    // this.userrole = this.loggeduserrole;
    this.ticketCell = 'Open';
    this.workFlowType = null;
    this.searchdata = null;
    this.enddate = null;
    this.startdate = null;
    this.getDepartmenyList();
    this.getWorkflowType();
    // this.ticketList();
    // this.getTimezone();
      }
      // getuserRole() {
              // }
  ticketList() {
    const reqParam = {
      fromDate: this.startdate,
      info: this.searchdata,
      pageNumber: this.pageIndex,
      pageSize: 10,
      statusType: this.ticketCell,
      toDate: this.enddate,
      typeOfWorkFlow: this.workFlowType === '0' ? null : this.workFlowType,
      userRole: this.userrole
    };
    this.gs.generalServiceInfo('service/getFilteredData', 'post', reqParam)
      .subscribe(
        res => {
          if (res['status'].toString() === 'success') {
             this.NoDataFound =  false;
                this.resultsLength = res['data'].totalItems;
                this.tableData = [];
                this.displayedColumns = [];
                sessionStorage.setItem('workflowObject', JSON.stringify(res['data']['serviceRequestList']));
                res['data']['serviceRequestList'].forEach((element) => {
                  this.tableData.push({
                    'ticketNumber': element.ticketNumber,
                    'info': element.info,
                    'createdDate': element.createdDate,
                    'workflowType': element.workflowType,
                    'status': element.ticketStatus,
                    'id': element.id
                  });
                });
                this.tableData.forEach(element => {
                  if (element.status === 'Open') {
                    element.status = 'Claim';
                  }
                });
                this.newColumns.forEach(element => {
                  this.displayedColumns.push(element.value);
                });
                if (res['data'].totalItems === 0 || res['data'].totalItems === '' ) {
                  this.NoDataFound =  true;
                  this.tableData = [];
                  this.isHidden =  true;
                  if (this.filterSearching === true) {
                    this.NoDataFound =  false;
                  }
                }
                this.data = new MatTableDataSource(this.tableData);
                // console.log(this.data[0].id);
                if (res['data'].totalItems !== 0 && res['data'].totalItems !== '' && res['data'].totalItems !== null ) {
                  this.data.sort = this.sort;
                  this.filterSearching = false;
                  this.isHidden =  false;
                  this.data.paginator = this.paginator;
                }
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
          // }
        },
        () => {
        }
      );
  }
  ticketCellAction(data, id, role) {
    console.log(data, id, role);
    this.ticketCell = data;
    this.ticketid = id;
    this.userrole = role;
    this.ticketList();
  }

  public pageChanged(event: any): void {
    this.pageIndex = event.page - 1;
    this.ticketList();
  }

  public showOnboarding(index, value) {
    this.totalTableData = [];
    this.totalTableData = JSON.parse(sessionStorage.getItem('workflowObject'));
    sessionStorage.setItem('workflowTab', 'ticket');
    this.totalTableData.forEach(element => {
      this.displayedColumns.push(element.value);
      if (element.id === value.id) {
        if (element.ticketStatus === 'Open') {
          element.ticketStatus = 'Claim';
        }
        sessionStorage.setItem('workflowObject1', JSON.stringify(element));
      }
    });
    this.router.navigate(['/fusang/onboarding']);
  }
  public datePickerClose(date) {
    this.filterSearching =  true;
    if (date[0] === null) {
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
      date1.setHours(0, 0, 0, 0);
      const date2 = new Date(date[1]);
      date2.setHours(23, 59, 59, 999);
      this.startdate = date1.getTime();
      this.enddate = date2.getTime();
      this.ticketList();
      date[0] = null;
      date[1] =  null;
    }
  }
  public selectDate(date) {
    console.log(date);
    // const date1 = new Date(date[0]);
    // const date2 = new Date(date[1]);
    // this.startdate = date1.getTime();
    // this.enddate = date2.getTime();
    // this.ticketList();
  }
  claim(event, successtemplate: TemplateRef<any>, element) {
    if (element.status === 'Claim') {
      this.serviceRequestId = element.id;
    this.modalRef = this.modalService.show(successtemplate, { class: 'whitelist modal-lg' });
    event.stopPropagation();
    } else {}
    console.log(element);
  }
  // Getting ticket matrix details
  getticketmatrix() {
    const obj = {
      'departmentId': this.departmentId
    };
    const url = 'service/getTicketMatrix';
    this.gs.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          const response: any = res.status;
          if (response === 'success') {
            this.ticketListdata = res['data'];
            console.log(this.ticketListdata);
            this.ticketid = this.ticketListdata[0].id;
            this.userrole = this.ticketListdata[0].userRole;
            console.log(this.loggeduserrole);
            // this.modalRef.hide();
            this.ticketList();
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
          // }
        },
        () => {
        }
      );
  }
  // getting department list
  getDepartmenyList() {
    const url = 'department/getDepartmentList?isAll=false';
    this.gs.generalServiceInfo(url, 'post', '')
            .subscribe(
              res => {
                this.departmentList = res['data'];
                console.log(this.departmentList);
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
                // }
              },
              () => {
              }
            );
  }
  departmentSelected(value) {
    this.departmentId = value;
    this.getticketmatrix();
  }
  workflowtypeSelected(value) {
    this.filterSearching =  true;
    this.workFlowType = value;
    this.ticketList();
  }
  // searchClick() {
  //   console.log(this.searchdata);
  // }
  confirmClaim() {
    console.log(this.serviceRequestId);
    const obj = {
      'serviceRequestId': this.serviceRequestId
    };
    const url = 'service/claim';
    this.gs.generalServiceInfo(url, 'post', obj)
            .subscribe(
              res => {
                const response: any = res.status;
                console.log(response);
                if (response === 'success') {
                  this.ss.ToasterMessage(res['message']);
                document.getElementById('modalButton').click();
                this.getticketmatrix();
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
                // }
              },
              () => {
              }
            );
  }
  statusChange(value) {
    this.searchdata = value;
    this.filterSearching =  true;
    this.ticketList();
  }
  searchClick() {
    this.showSearch = !this.showSearch;
    this.filterSearching =  true;
    this.searchValue = '';
      }
  clearfilter() {
    this.searchdata = null;
    // this.showSearch = false;
    this.showSearch = !this.showSearch;
    
    this.ticketList();
  }
  getWorkflowType() {
    const url = 'service/getWorkflowTypeList';
    this.gs.generalServiceInfo(url, 'post', '')
            .subscribe(
              res => {
                this.workFlowDetails = res['data'];
                console.log(this.workFlowDetails);
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
                // }
              },
              () => {
              }
            );
  }

  // This function is to clear everything and reload the details from the start
  clearData() {
   this.bsRangeValue = null;
   this.startdate = null;
    this.enddate = null;
    this.pageIndex = 0;
    this.rangeDates = null;
    this.workFlowType = '0';
    this.workFlowDetailsvalue = 0;
    this.searchdata = null;
    this.userrole = this.userrole;
    this.searchValue = '';
    this.filterSearching =  false;
    // pageSize = 10;
    this.ticketList();
    this.showSearch = false;
  }

  refresh() {
    // this.searchdata = '';
    // this.ticketCell = 'Open';
    // this.searchValue = '';
    // this.userrole = this.ticketListdata[0].userRole;
    // this.enddate = null;
    // this.startdate = null;
    // this.departmentId = '0';
    this.getticketmatrix();
    // this.departmentListvalue = 0;
    // this.workFlowDetailsvalue = 0;
    // this.workFlowType = null;
    // this.ticketList();

  }
  clear() {
    this.departmentId = '0';
    this.departmentListvalue = 0;
    this.getticketmatrix();
  }
  // getTimezone() {
  //   this.gs.gettimezone('https://www.timeanddate.com/time/zones/')
  //           .subscribe(
  //             res => {
  //               this.timezonelist = res;
  //               console.log(this.timezonelist);
  //             }
  //           );
  // }
}
// this.workFlowDetails = res['data']['serviceRequestList'];
// if (res['data']['serviceRequestList']) {
//   res['data']['serviceRequestList'].forEach((ele) => {
//     if (this.workFlowDetails.length !== 0) {
//       this.workFlowDetails.forEach(element => {
//         if (element.workflowType !== ele.workflowType) {
//           this.workFlowDetails.push(ele);
//         console.log(this.workFlowDetails);
//         }
//       });
//       // if (this.workFlowDetails.workflowType !== ele.workflowType) {
//       //   this.workFlowDetails.push(ele);
//       //   console.log(this.workFlowDetails);
//       // }
//     } else {
//       this.workFlowDetails.push(ele);
//     }
//   });
//
// }