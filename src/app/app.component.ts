import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { GeneralService } from './general.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  showPageLoading: Boolean = false;
constructor(
  private generalService: GeneralService,
  private router: Router,
  private toastr: ToastrService,
  private ss: SharedService) {

    this.ss.loadSubject$.subscribe(res => {
      if (res === true) {
        this.showPageLoading = true;
      } else {
        this.showPageLoading = false;
      }
    });
if (sessionStorage.getItem('accessToken') !== null) {
  generalService.generalServiceInfo('auth/logout', 'post', '')
    .subscribe(
      res => {
        router.navigate(['']);
      // this.ss.ToasterMessage('Your Session has Expired');
      // document.getElementById('modalButton1').click();
      sessionStorage.removeItem('firstLogin');
      sessionStorage.removeItem('useremailid');
      sessionStorage.removeItem('accessToken');
      },
      e => {
        if (e.status === 403) {
          router.navigate(['']);
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
window.onpopstate = function(event) {
  // router.navigate(['']);
   history.go(1);
  generalService.generalServiceInfo('auth/logout', 'post', '')
    .subscribe(
      res => {
        // toastr.error('Your Session has Expired');
        // ss.ToasterMessage('Your Session has Expired');
        // document.getElementById('modalButton1').click();
        sessionStorage.removeItem('firstLogin');
        sessionStorage.removeItem('useremailid');
        sessionStorage.removeItem('accessToken');
        router.navigate(['']);
            },
            e => {
              if (e.status === 403) {
                // toastr.error('Your Session has Expired');
                // ss.ToasterMessage('Your Session has Expired');
                // document.getElementById('modalButton1').click();
                sessionStorage.removeItem('firstLogin');
                sessionStorage.removeItem('useremailid');
                sessionStorage.removeItem('accessToken');
                router.navigate(['']);
              } else if (e.status === 502) {
                ss.ToasterMessage('System has encountered some technical problem. Please try again.');
                document.getElementById('modalButton1').click();
              }
                  },
            () => {
            }
          );
};
}
ngOnInit() {
}
logout() {
  console.log();
}

}
