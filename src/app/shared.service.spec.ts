// tslint:disable-next-line:import-blacklist
import { Subject } from 'rxjs';
import { AppComponent } from './app.component';
import {Injectable, Component} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import * as _ from 'lodash';

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


    // Observable string streams
    public yubiInfo$ = this.yubiInfo.asObservable();
    token: any = '';

    getValid(param) {
      this.yubiInfo.next(param);
    }
    setToken(token) {
      this.token = token;
    }
    getToken() {
      return this.token;
    }
}
