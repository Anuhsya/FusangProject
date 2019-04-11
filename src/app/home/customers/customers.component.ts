import { Component, OnInit, TemplateRef } from '@angular/core';
import { GeneralService } from '../../general.service';
import { SharedService } from '../../shared.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  phoneNumber: any;
  customerValue: String = 'customer';
  filteredValues: any = [];
  totalFilteredValues: any = [];
  msg: any;
  model: any = {};
  modalRef: BsModalRef;
  showCustomer = Boolean(false);
  showticket = Boolean(true);
  tableData: any = [];
  columns: string[] = ['firstname', 'username', 'status'];
  newColumns: any[] = [
    {
      'name': 'First Name',
      'value': 'firstname'
    },
    {
      'name': 'User Name',
      'value': 'username'
    },
    {
      'name': 'Status',
      'value': 'status'
    }
  ];
  userRelationshipManagerMap: any = [];
  x: any;
  fullformData: any = {};
  tabData: any = [];
  mycolumns: string[];
  showSearch = false;
  basicForm: any;
  filteredOptions: any;
  basicmodel: any = {firstName: '',
  lastName: '',
  country: '',
  phoneNo: '',
  email: ''
};
  countrylist: any = [];
  code: '';
  phonelength: any;
  countrylist1: any = [];
  successRef: BsModalRef;
  basic = true;
  approver = false;
  dataList: any = {};
  countryPhonelen: any;
  invalidphone: Boolean = false;
  clientId: any;
  workflowObject: any;
  constructor(private fb: FormBuilder, private gs: GeneralService, private ss: SharedService, private modalService: BsModalService) {
    this.workflowObject = JSON.parse(sessionStorage.getItem('workflowObject1'));
    console.log(this.workflowObject );
  this.clientId = this.workflowObject.id;
  console.log(this.clientId );
   }

  ngOnInit() {
    this.listUser();
    this.basicForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      username: ['', [Validators.required, Validators.email]],
      country: ['', [Validators.required]],
      phoneNumber: ['', [Validators.required]]
  });
    console.log(this.basicForm.get('phoneNumber').errors);
    this.getcountrylist();
    this.getinvitedata();

  this.filteredOptions = this.basicForm
  .get('country')
  .valueChanges
  .pipe(
    map(value => {
      return this._filter(value);
    })
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
        console.log(this.code);
        this.phonelength = element.length;
        this.basicmodel.phoneNo = this.code + ' ';
      }
    });

  }

  inviteCustomer(invitetemplate: TemplateRef<any>) {
    // this.basicmodel=
    this.modalRef = this.modalService.show(invitetemplate, Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
    this.showbasic();
    this.basicForm.reset();
    this.phoneNumber='';
    this.code = '';
    this. model = {};
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
  invitedSuccessfull(successtemplate: TemplateRef<any> , msg, template: TemplateRef<any>) {

    Object.keys(this.model).forEach((el) => {
      let deptId: any, index: any;
      deptId = '';
      deptId = el.split('_')[1];
      index = _.findIndex(this.userRelationshipManagerMap, function(o) { return o.departmentId === deptId; });
      if (index === -1) {
        this.userRelationshipManagerMap.push({'departmentId': deptId});
      }
    });

    this.userRelationshipManagerMap.forEach(dept => {
      let data: any, userTotalData: any;
      data = [], userTotalData = [];
      Object.keys(this.model).forEach((user) => {
        let type: any, deptId: any, obj: any;
        obj = {};
        type = user.split('_')[0];
        deptId = user.split('_')[1];
        if (deptId === dept.departmentId) {
          obj['userRole'] = this.model[user].userRole;
          obj['userType'] = {
            'type': type,
            'id': this.model[user].id
          };
          data.push(obj);
        }
        // console.log('data', data);
      });
      data.forEach(userObject => {
        let userData: any, userInfo: any;
        userInfo = {};
        userData = _.filter(data, (o) => {
          return o.userRole === userObject.userRole;
        });
        userData.forEach(ui => {
          userInfo['userRole'] = ui.userRole;
          userInfo[ui.userType.type] = ui.userType.id;
        });
        userTotalData.push(userInfo);
      });
      userTotalData = _.uniqBy(userTotalData, 'userRole');
      dept['relationshipManagerDetails'] = userTotalData;
    });
    this.fullformData.isCustomer = true;
   this.fullformData.roleDepartmentDetails = [];
   this.fullformData.roleDepartmentDetails.push({
     'departmentId' : null,
     'userRole' : 'USER'
   });
    this.fullformData.userRelationshipManagerMap = this.userRelationshipManagerMap;
    console.log(this.fullformData);
    const url = 'user/invite';
    this.gs.generalServiceInfo(url, 'post', this.fullformData)
    .subscribe(
      res => {
        this.msg = res['message'];
        this.listUser();
      },
      e => {
      },
      () => {
      }
    );
    // this.userRelationshipManagerMap.push()
    // console.log( this.AccountManagementList);
    this.modalRef.hide();
    this.successRef = this.modalService.show(successtemplate, Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
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
      },
      e => {
      },
      () => {
      }
    );
  }
  showbasic() {
    this.basic = true;
    this.approver = false;
  }
  showapprover() {
    Object.keys(this.basicForm.value).forEach(element => {
      this.fullformData[element] = this.basicForm.value[element];

    });
    this.basic = false;
    this.approver = true;
  }
  closeTab() {
    this.successRef.hide();
    // if(this.msg.toLowerCase() == 'USER invited successfully!'.toLowerCase()){
    //   window.close();
    // }
  }
  nexttab() {
    Object.keys(this.basicForm.value).forEach(element => {
      this.fullformData[element] = this.basicForm.value[element];

    });
    console.log( this.fullformData);
    this.showapprover();
  }
  onDeptSelect(item) {
    // const url = '/assets/json/deptList' + item.id + '.json';
    const url = 'department/getUserDepartmentRoleList';

    // this.gs.localfileinfo(url)
    let data: any;
    data = {
      'id': item.id
    };
    this.gs.generalServiceInfo(url, 'post', data)
    .subscribe(
      res => {
        // this.x = res;
        this.dataList = res['data'];
        console.log(res);
      },
      e => {
      },
      () => {
      }
    );
  }
  onFocus(val) {
    // console.log(val);
    this.filteredValues = this.dataList[val];
    this.totalFilteredValues = this.dataList[val];
  }
  onValChange(val, mod) {
    if (typeof(val) === 'string' || val === '') {
      // console.log('number');
      this.filteredValues = _.filter(this.totalFilteredValues, (o) => {
        return o.name.toLowerCase().indexOf(val.toLowerCase()) > -1;
      });
    } else {
    }
  }
  displayFn(user): string {
    if (user === null || user === undefined || user === '') {
      return '';
    } else {
      return user ? user.name : user;
    }
  }

  listUser() {
    const reqParam = {
      'isCustomer': true,
      'page': 0,
      'size': 0
    };
    this.gs.generalServiceInfo('user/getUsersList', 'post', reqParam)
      .subscribe(
        res => {
          this.tableData = [];
          if ( res['status'].toString() === 'success') {

            // this.ss.TotalTableData(res['data']);
            sessionStorage.setItem('totalLength', res['data'].totalItems );
            sessionStorage.setItem('workflowObject', JSON.stringify(res['data']['userList']));
          res['data']['userList'].forEach((element) => {
            if ( element.userStatus !== null) {
            element.userStatus = element.userStatus.split('Pre').join('');
            element.userStatus = element.userStatus.split('Post').join('');
                this.tableData.push({
                'firstname': element.firstName.toLowerCase(),
               'username': element.emailId,
               'status': element.userStatus,
               'id':  element.id
              });
            }
      });
      this.ss.TableData(this.tableData);
      this.ss.DisplayedColumn(this.newColumns);
      sessionStorage.setItem('displaycolumns' , JSON.stringify(this.newColumns));
      sessionStorage.setItem('tableData' , JSON.stringify(this.tableData));
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
}
