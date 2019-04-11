// tslint:disable-next-line:import-blacklist
import { Subject ,  Observable } from 'rxjs';
import { AppComponent } from './app.component';
import {Injectable, Component} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import * as _ from 'lodash';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

// @Injectable({
//   providedIn: 'root'
// })

export class SharedService {

    // Variable Decalarations
    public loc = location.href;
    public locSplit = this.loc.split('/');
    public fbaseUrl = this.locSplit[0] + '//' + this.locSplit[2];
    private newBaseUrl = this.fbaseUrl;
    xsrfToken: any;
    editInfo: any;



    // Observable string sources
    private yubiInfo = new Subject<any>();
    private SharedTypeInfo = new Subject<any>();
    public firstLogin = new Subject<any>();
    public walletid = new Subject<any>();
    public workflowObjectfromadmin  = new Subject<any>();
    public toasterMessage = new Subject<any>();
    public tableData = new Subject<any>();
    public totalTableData = new Subject<any>();
    public displayedColumn = new Subject<any>();
    public workflowObject = new Subject<any>();
    public firstLogin1 = new Subject<any>();

  private openuserinvite = new Subject <any>();
  private loadSubject = new Subject<any>();
public loadSubject$ = this.loadSubject.asObservable();
public SharedTypeInfo$ = this.SharedTypeInfo.asObservable();
    // Observable string streams
    public yubiInfo$ = this.yubiInfo.asObservable();
    public firstLogin$ = this.firstLogin.asObservable();
    public firstLogin1$ = this.firstLogin1.asObservable();
    public walletid$ = this.walletid.asObservable();
    public workflowObjectfromadmin$ = this.workflowObjectfromadmin.asObservable();
    public openuserinvite$ = this.openuserinvite.asObservable();
    public toasterMessage$ = this.toasterMessage.asObservable();
    public tableData$ = this.tableData.asObservable();
    public displayedColumn$ = this.displayedColumn.asObservable();
    public workflowObject$ = this.workflowObject.asObservable();
    public totalTableData$ = this.totalTableData.asObservable();


    token: any = '';
    tempValue: any = '';
    WorkflowObject(workflowObject) {
      this.workflowObject.next(workflowObject);
    }
    TotalTableData(totalTableData) {
      this.totalTableData.next(totalTableData);
    }
    getValid(param) {
      this.yubiInfo.next(param);
    }
    setToken(token) {
      return sessionStorage.setItem('accessToken', token);
    }
    getToken() {
      return sessionStorage.getItem('accessToken');
    }
    ToasterMessage(val) {
      this.toasterMessage.next(val);
   }
   TableData(val) {
    this.tableData.next(val);
 }
 DisplayedColumn(val) {
  this.displayedColumn.next(val);
}
    FirstLogin(val) {
       this.firstLogin.next(val);
      sessionStorage.setItem('firstLogin', JSON.stringify(val));
    }
    FirstLogin1(val) {
      this.tempValue = '';
      this.tempValue = JSON.parse(sessionStorage.getItem('firstLogin'));
      this.tempValue.firstName = val.firstName;
      this.tempValue.profilePicUrl = val.imageUrl;
      sessionStorage.setItem('firstLogin', JSON.stringify(this.tempValue));
      this.firstLogin1.next(val);
    }
    Walletid(val) {
      this.walletid.next(val);
      sessionStorage.setItem('walletid', JSON.stringify(val));
    }
    WorkflowObjectfromadmin(val) {
      this.workflowObjectfromadmin.next(val);
      sessionStorage.setItem('workflowObjectfromadmin', JSON.stringify(val));
    }
    showLoading(param: boolean) {
      if (param === true) {
        this.loadSubject.next(true);
      } else {
        this.loadSubject.next(false);
      }
    }
    storedValue(value) {
      this.SharedTypeInfo.next(value);
    }
    validVal(val) {
      if (val === undefined || val === null || val === '') {
        return false;
      } else {
        return true;
      }
    }
  }
