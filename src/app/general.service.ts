
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers, } from '@angular/http';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
// tslint:disable-next-line:import-blacklist
import { throwError } from 'rxjs';



// import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
import { SharedService } from './shared.service';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class GeneralService {
//  uat
      //  public  ServerUrl = 'https://vault.fusang.co/api/';
//  uat2
                      //  public  ServerUrl = 'https://vault-testnet.fusang.co/api/';

   // dev
                                                             public  ServerUrl = 'http://18.136.41.127:8085/api/';
  tempdata: any = {};

   // test
                                                        //  public  ServerUrl = 'https://beta-vault.fusang.co/api/';

  // urld
            //  public  ServerUrl = 'https://security.fusang.co/api/';
    // prod
      // public  ServerUrl = 'http://54.169.9.253:8085/api/';
      // prod1
              // public  ServerUrl = 'https://vault-staging-api.fusang.co/api/';
            // prod2
              //  public  ServerUrl = 'https://vault-api.fusang.co/api/';
    constructor(private http: HttpClient, private ss: SharedService) {
      // const value = new XMLHttpRequest();
      //   const url = '/assets/json/constant.json';
      //   value.open('GET', url);
      //   value.send();
      //  value.onreadystatechange = (e) => {
      //      this.tempdata = JSON.parse(value.responseText);
      //      console.log(this.tempdata);
      //  };
    }

// this.ss.loadSubject$.subscribe(res => {
    //   if (res === true) {
    //     this.showPageLoading = true;
    //   } else {
    //     this.showPageLoading = false;
    //   }
    // });


    showPageLoading: any = [];
    public postRegisterHeaders() {
      let headers = new HttpHeaders();
      headers = headers
        .set('Content-Type', 'application/json')
        .set('Accept', 'application/json');
        // .set('Authorization', 'Bearer '+localStorage.getItem('token'))
      return headers;
    }
    // public forgetHeaders(){
    //   let headers = new HttpHeaders();
    //   headers = headers
    //   .set('Content-Type', 'application/json')
    //   .set('accept','application/json')
    //   return headers;
    //  }
    public postHeaders() {
      let headers = new HttpHeaders();
      headers = headers
        .set('Content-Type', 'application/json')
        .set('X-XSRF-TOKEN', this.ss.getToken());
      return headers;
    }
    public fileHeaders() {
      let headers = new HttpHeaders();
      headers = headers
        .set('X-XSRF-TOKEN', this.ss.getToken());
      return headers;
    }
    private getHeaders() {
      // I included these headers because otherwise FireFox
      // will request text/html

      let headers = new HttpHeaders();
      headers = headers
        .set('Accept', 'application/json')
        .set('Content-Type', 'application/json');
      // return headers;
      // let headers = new Headers();
      // headers.append('Accept', 'application/json');
      // headers.append('Content-Type', 'application/json');
      // headers.append('Authorization','Bearer '+localStorage.getItem('token'));
      return headers;
    }

    localfileinfo(url) {
    //  const url = '/assets/countrylist.json';
      return this.http.get(url, {
        headers: this.getHeaders()
      }).pipe(map((data: Response) => {
        return data;

      }), catchError(this.handleError), );
    }
    getRolelist() {
      const url = './assets/rolelist.json';
      return this.http.get(url, {
        headers: this.getHeaders()
      }).pipe(map((data: Response) => {
        return data;
      }), catchError(this.handleError), );
    }

    generalServiceInfo(url, method, req) {
      // this.ss.showLoading();
      this.ss.showLoading(true);
      const urlParam  =  this.ServerUrl  +  ''  + url;
      if (method === 'post') {
        return this.http
          .post(urlParam, req, {
            headers: this.postHeaders(),
            withCredentials: true
          })
          .pipe(
            map((data: Response) => {
              this.ss.showLoading(false);
              return data;
            }),
            catchError((error: HttpErrorResponse) => {
              this.ss.showLoading(false);
              return this.handleError(error);
            })
          );
      }
      if (method === 'get') {
        return this.http
        .get(urlParam,  {
            headers: this.getHeaders(),
            withCredentials: true
          })
          .pipe(
            map((data: Response) => {
              this.ss.showLoading(false);
              return data;
            }),
          catchError((error: HttpErrorResponse) => {
            this.ss.showLoading(false);
            return this.handleError(error);
          })
        );
      }
  }
//   generalwalletInfo(url, method, req) {
//     // this.ss.showLoading();
//     const urlParam  =  this.ServerUrl  +  ''  + url;
//     if (method === 'post') {
//       return this.http
//         .post(urlParam, req, {
//           headers: this.postHeaders(),
//           withCredentials: true
//         })
//         .pipe(
//           map((data: Response) => {
//             return data;
//           }),
//           catchError((error: HttpErrorResponse) => {
//             return this.handleError(error);
//           })
//         );
//     }
//     if (method === 'get') {
//       return this.http.get(urlParam, { headers: this.postHeaders() }).pipe(
//         map((data: Response) => {
//           return data;
//         }),
//         catchError((error: HttpErrorResponse) => {
//           return this.handleError(error);
//         })
//       );
//     }
// }
  loginService(url, req) {
    // localStorage.setItem('loggedInTime', new Date().getTime().toString());
    // this.startTime();
    this.ss.showLoading(true);
    const urlParam  =  this.ServerUrl  +  ''  + url;
    return this.http
      .post(urlParam, req, {
        headers: this.postRegisterHeaders(),
        withCredentials: true
      })
      .pipe(
        map((data: Response) => {
          this.ss.showLoading(false);
          return data;
          // this.ss.showLoading = false;
        },
        this.showPageLoading = false,
      ),
      catchError((error: HttpErrorResponse) => {
        this.ss.showLoading(false);
        return this.handleError(error);
      })
    );
  }

  fileuploadService(url, req) {
    this.ss.showLoading(true);
    const urlParam  =  this.ServerUrl  +  ''  + url;
    return this.http
      .post(urlParam, req, {
        headers: this.fileHeaders(),
        withCredentials: true
      })
      .pipe(
        map((data: Response) => {
          return data;
        }),
        catchError((error: HttpErrorResponse) => {
          this.ss.showLoading(false);
          return this.handleError(error);
        })
      );
  }

  getBitCoin(urlParam) {
    // const urlParam = 'https://mining-profit.com/api/btc-chart?range=' + range + '&exchanges=["' + type + '"]';
    // const urlParam = 'https://mining-profit.com/api/btc-chart?range=1d&exchanges=[%22bitstamp%22]';
    return this.http.get( urlParam ).pipe(
      map((data: Response) => {
        return data;
    }), catchError(this.handleError), );
  }
  gettransactionfee(urlParam) {
    return this.http.get(urlParam).pipe(
      map((data: Response) => {
        return data;
      }), catchError(this.handleError),
    );
  }
  autoSearch(url, method, req) {
    const urlParam  =  this.ServerUrl  +  ''  + url;
    if (method === 'post') {
      return this.http
        .post(urlParam, req, {
          headers: this.postHeaders(),
          withCredentials: true
        })
        .pipe(
          map((data: Response) => {
            return data;
          }),
          catchError((error: HttpErrorResponse) => {
            return this.handleError(error);
          })
        );
    }
}
  private handleError(error: HttpErrorResponse) {
    console.log(error);
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
    }
    // return an observable with a user-facing error message
    return throwError(error);
  }
  forgetPassInfo(url, method, req) {
    this.ss.showLoading(true);
    const urlParam  =  this.ServerUrl  +  ''  + url;
    if (method === 'post') {
      return this.http
        .post(urlParam, req, {
          headers: this.postRegisterHeaders(),
        })
        .pipe(
          map((data: Response) => {
            this.ss.showLoading(false);
            return data;
          }),
          catchError((error: HttpErrorResponse) => {
            this.ss.showLoading(false);
            return this.handleError(error);
          })
        );
    }
}
resetPassInfo(url, req) {
  this.ss.showLoading(true);
  const urlParam  =  this.ServerUrl  +  ''  + url;
  return this.http
      .post(urlParam, req, {
        headers: this.postRegisterHeaders(),
        // withCredentials: true
      })
      .pipe(
        map((data: Response) => {
          this.ss.showLoading(false);
          return data;
          // this.ss.showLoading = false;
        },
        this.showPageLoading = false,
      ),
      catchError((error: HttpErrorResponse) => {
        this.ss.showLoading(false);
        return this.handleError(error);
      })
    );
}

getUserType(url) {
  this.ss.showLoading(true);
  const urlParam  =  this.ServerUrl  +  ''  + url;
  return this.http
      .post(urlParam, {
        headers: this.postRegisterHeaders(),
        // withCredentials: true
      })
      .pipe(
        map((data: Response) => {
          this.ss.showLoading(false);
          return data;
          // this.ss.showLoading = false;
        },
        this.showPageLoading = false,
      ),
      catchError((error: HttpErrorResponse) => {
        this.ss.showLoading(false);
        return this.handleError(error);
      })
    );
}
}
