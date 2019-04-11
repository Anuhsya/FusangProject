import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-google-auth',
  templateUrl: './google-auth.component.html',
  styleUrls: ['./google-auth.component.scss']
})
export class GoogleAuthComponent implements OnInit {

  focusedElement: any;
  userName: any;
  scretKey = '';
  firstLoginn;
  googleauth: Boolean = true;
  model: any = {
    secretKey: '',
    verificationCode: ''

  };
  username = '';
  url = '';
  ress = '';
  ress1 = '';
  secondurl = '';
  response: any = [];
  userId: any = [];
  roles: any;
  role: string;
  // url = 'https://www.google.com/chart?chs=200x200&chld=M%7C0&cht=qr&chl=otpauth://totp/fusang%3A'
  verificationCodeValid: Boolean = true;
  imageUrl: any = '';
  fisrtLoginValue: any;
  angularxQrCode: any = null;
  constructor(private gs: GeneralService, private router: Router,
    private ss: SharedService,
     private toastr: ToastrService) {
      let res = JSON.parse(sessionStorage.getItem('firstLogin'));
      this.fisrtLoginValue = JSON.parse(sessionStorage.getItem('firstLogin'));
      console.log(res);
      if (res !== null) {
      this.userId = res['userId'];
      this.firstLoginn = res['isFirstLogin'];
      this.model.secretKey = res['userSecret'];
      this.userName = res['firstName'];
      this.imageUrl = res['profilePicUrl'];
      this.roles = res['roles'];
      // this.roles.forEach(element => {
      //   if (element === 'USER_ADMIN') {
      //     this.role = 'superUser';
      //   } else if (element === 'ADMIN_VERIFIER' || element === 'ADMIN_CHECKER' || element === 'ADMIN_APPROVER') {
      //     this.role = 'Admin';
      //   } else if (element === 'USER_SIGNER' || element === 'USER_VIEWER') {
      //     this.role = 'User';
      //   }
      // });
      if ((this.roles.indexOf('USER_ADMIN') >= 0)) {
        this.role = 'superUser';
      // tslint:disable-next-line:max-line-length
      } else if ((this.roles.indexOf('USER') >= 0)) {
        this.role = 'User';
      // tslint:disable-next-line:max-line-length
      } else if (this.roles.indexOf('ADMIN_VERIFIER') >= 0 || this.roles.indexOf('ADMIN_CHECKER') >= 0 || this.roles.indexOf('ADMIN_APPROVER') >= 0  ) {
        this.role = 'Admin';
      // tslint:disable-next-line:max-line-length
      } else {
        this.role = 'Fusang User';
      }
      if ( this.imageUrl === null ) {
        this.imageUrl = './assets/images/sidebar/profile.svg';
      }
    } else {
      this.firstLoginn = 1;
      this.ss.firstLogin$.subscribe(res1 => res = res1 );
    }

      this.username = window.sessionStorage.getItem('useremailid');
     const uri = this.username;
     if (uri !== null) {
      this.ress = encodeURIComponent(uri);
       this.ress1 = uri;
     }
     this.secondlogin(this.model.secretKey);
     }

  ngOnInit() {
      //  const res = JSON.parse(sessionStorage.getItem('firstLogin'));
      if (!this.ss.validVal(this.fisrtLoginValue)) {
          this.router.navigate(['/']);
      }
       if ( this.imageUrl === null || this.imageUrl === '') {
        this.imageUrl = './assets/images/sidebar/profile.svg';
      }
       document.getElementById('loggedInImage').setAttribute('src', this.imageUrl);
    if (this.firstLoginn === 1) {
         this.authType(2);
    }

  }
  public focusFunction(element) {
    this.focusedElement = element;
  }
  authType(id) {
    this.gs.generalServiceInfo('user/chooseAuthType?authType=' + id, 'post', '')
      .subscribe(
        res => {
          this.model.secretKey = res['data']['userSecret'];
          this.firstlogin(this.model.secretKey);
            },
        e => {
          if (e.status === 403) {
            this.backtologinscreen();
          } else if (e.status === 502) {
            this.ss.ToasterMessage('System has encountered some technical problem. Please try again.');
            document.getElementById('modalButton1').click();
          }
        },
        () => {
        }
      );
  }


  firstlogin(val) {
    const basicurl = 'https://chart.googleapis.com/chart?chs=95x95&chld=M%7C0&cht=qr&chl=otpauth://totp/fusang%3A';
     this.url = basicurl + this.ress + '%3Fsecret%3D' + val + '%26issuer%3Dfusang' ;
     this.angularxQrCode = 'otpauth://totp/fusang:' + this.ress1 + '?secret=' + val + '&issuer:fusang';
      }

  yubikeyauth(val, id) {
    this.googleauth = !this.googleauth;
    this.authType(id);
  }
  vcValidation(event) {
    if (event.length === 6) {
      this.verificationCodeValid = false;
    } else {
      this.verificationCodeValid = true;
    }
  }
  validate() {
    // tslint:disable-next-line:prefer-const
    const obj: any = {};
    obj.verificationCode = this.model.verificationCode;

    this.gs.generalServiceInfo('user/validate', 'post', obj)
      .subscribe(
        res => {
          const response: any = res.status;
          if (response === 'success') {
            // this.ss.ToasterMessage(res['message']);
            // document.getElementById('modalButton').click();
          this.lastloggedin();
          } else {
            this.ss.ToasterMessage(res['message']);
            document.getElementById('modalButton1').click();
          }
        },
        e => {
          if (e.status === 403 || e.status === 401) {
            this.backtologinscreen();
          } else if (e.status === 502) {
            this.ss.ToasterMessage('System has encountered some technical problem. Please try again.');
            document.getElementById('modalButton1').click();
          }
        },
        () => {
        }
      );
  }
 secondlogin(val) {
   const basicurl = 'https://chart.googleapis.com/chart?chs=95x95&chld=M%7C0&cht=qr&chl=otpauth://totp/fusang%3A';
   this.secondurl = basicurl + this.ress + '%3Fsecret%3D' + val + '%26issuer%3Dfusang';

   }

   lastloggedin() {

    const url = 'user/login/save';
    const obj = {
        'userId' : this.userId,
      };
      this.gs.generalServiceInfo(url, 'post', obj)
      .subscribe(
        res => {
          this.response = res;
          if (this.role === 'superUser' || this.role === 'User') {
            this.router.navigateByUrl('/fusang/walletcreate');
          } else {
            this.router.navigateByUrl('/fusang/ticket');
          }
        },
        e => {
          if (e.status === 403) {
            this.backtologinscreen();
          } else if (e.status === 502) {
            this.ss.ToasterMessage('System has encountered some technical problem. Please try again.');
            document.getElementById('modalButton1').click();
          }
        },
        () => {
        }
      );
  }

  // Added below code to allow only numbers when you go to the application each time
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
  backtologinscreen() {
            this.router.navigate(['']);
            // this.ss.ToasterMessage('Your Session has Expired');
            // document.getElementById('modalButton1').click();
            sessionStorage.removeItem('firstLogin');
            sessionStorage.removeItem('useremailid');
            sessionStorage.removeItem('accessToken');
  }
  }
