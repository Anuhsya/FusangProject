import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
// import { GeneralService } from '../general.service';
import { GeneralService } from '../../general.service';
import { SharedService } from '../../shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
// import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  // modalRef: BsModalRef;
  // @ViewChild('errorMessage') errorMessage: ElementRef;
  // @ViewChild('successMessage') successMessage: ElementRef;
  focusedElement: any;
  title = 'Sign In';
  model: any = {
    username: '',
    password: ''
   };
   checked: Boolean = false;
  loginResponse: any = [];
  response: any = [];

  constructor(private toastr: ToastrService,
    private router: Router,
    private gs: GeneralService,
    private ss: SharedService) { }

  ngOnInit() {
  }
  public focusFunction(element) {
    this.focusedElement = element;
  }
  public checkboxChange() {
    this.checked = !this.checked;
  }
  signIn() {
    // window.sessionStorage.setItem('useremailid', this.model.username);
    this.gs.loginService('auth/signin', this.model)
      .subscribe(
        res => {
          const response: any = res.status;
          console.log(response);
          if ( response === 'success') {
            this.loginResponse = res['data'];
            window.sessionStorage.setItem('useremailid', this.model.username);
          this.ss.setToken(this.loginResponse['accessToken']);
          this.ss.FirstLogin(this.loginResponse);
          this.ss.ToasterMessage(res['message']);
          document.getElementById('modalButton').click();
          if (this.loginResponse['authType'] === 1) {
            this.router.navigate(['/yubikey-authentication']);
          } else {
            this.router.navigate(['/google-authentication']);
          }
          } else if (response === 'failure') {
            this.ss.ToasterMessage(res['message']);
          document.getElementById('modalButton1').click();
          }
          // if (res['statusMessage'] === 'SUCCESS') {
            // this.toastr.success(this.loginResponse.message);
            // this.modalRef = this.modalService.show(this.successMessage);
            // this.toasterModalComponent.showSuccess();
            // else if (this.loginResponse['authType'] === 2 && this.loginResponse['isFirstLogin'] === 2) {
            //   sessionStorage.removeItem('firstLogin');
            //   this.ss.FirstLogin(this.loginResponse);
            //    this.router.navigate(['/google-authentication']);
            // } else if (this.loginResponse['authType'] === 0 && this.loginResponse['isFirstLogin'] === 1) {
            //   sessionStorage.removeItem('firstLogin');
            //   this.ss.FirstLogin(this.loginResponse);
            //   this.router.navigate(['/google-authentication']);
            // } else if (this.loginResponse['authType'] === 2 && this.loginResponse['isFirstLogin'] === 1) {
            //   sessionStorage.removeItem('firstLogin');
            //   this.router.navigate(['/google-authentication']);
            // }
          // } else {
          //   this.toastr.error('UserName/Password is incorrect');
          // }
        },
        e => {
          this.ss.ToasterMessage(e.error.message);
          document.getElementById('modalButton1').click();
          if (e.status === 403 || e.status === 401) {
            this.router.navigate(['']);
          }

        },
        () => {
        }
      );

  }
  forgetPassLink() {
    this.router.navigate(['/forget-password']);
  }
}
