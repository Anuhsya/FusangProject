import { Component, OnInit , TemplateRef} from '@angular/core';
import { Router } from '@angular/router';
import { GeneralService } from '../../general.service';
import { ToastrService } from 'ngx-toastr';
import { SharedService } from '../../shared.service';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: false
  };
  modalRef: BsModalRef;
  logout = false;
  userName = '';
  imageUrl: any;
  roles: any;
  role: string;
  // tslint:disable-next-line:max-line-length
  constructor(private ss: SharedService, private generalService: GeneralService, private router: Router, private toastr: ToastrService ,private modalService: BsModalService) {

    const res = JSON.parse(sessionStorage.getItem('firstLogin'));
      if ( res === null) {
        this.router.navigate(['']);
      } else {
    this.userName = res['firstName'];
    this.imageUrl = res['profilePicUrl'];
    this.roles = res['roles'];
    // this.roles.forEach(element => {
    //   if (element === 'USER_ADMIN') {
    //     this.role = 'superUser';
    //   } else if (element === 'ADMIN_VERIFIER' || element === 'ADMIN_CHECKER' || element === 'ADMIN_APPROVER') {
    //     this.role = 'Admin';
    //   } else if (element === 'USER') {
    //     this.role = 'Customer';
    //   }  else if (element === 'USER_SIGNER' || element === 'USER_VIEWER') {
    //     this.role = 'User';
    //   }
    // });
    // tslint:disable-next-line:max-line-length
    if ((this.roles.indexOf('USER_ADMIN') >= 0)) {
      this.role = 'superUser';
    // tslint:disable-next-line:max-line-length
    } else if ((this.roles.indexOf('USER') >= 0)) {
      this.role = 'User';
    // tslint:disable-next-line:max-line-length
    } else if (this.roles.indexOf('ADMIN_VERIFIER') >= 0 || this.roles.indexOf('ADMIN_CHECKER') >= 0 || this.roles.indexOf('ADMIN_APPROVER') >= 0 ) {
      this.role = 'Admin';
    // tslint:disable-next-line:max-line-length
    } else {
      this.role = 'Fusang User';
    }
    if ( this.imageUrl === null ) {
      this.imageUrl = './assets/images/sidebar/profile.svg';
    }
      }

    //   this.ss.firstLogin$.subscribe(message => {
    //     this.userName = message['firstName'];
    //     this.imageUrl = message['profilePicUrl'];
    //     if ( this.imageUrl === null ) {
    //       this.imageUrl = './assets/images/sidebar/profile.svg';
    //     }

    // });
    this.ss.firstLogin1$.subscribe(message => {
      this.userName = message['firstName'];
      this.imageUrl = message['imageUrl'];
      if ( this.imageUrl === null ) {
        this.imageUrl = './assets/images/sidebar/profile.svg';
      }
    });



  }

  ngOnInit() {

document.getElementById('loggedInImage').setAttribute('src', this.imageUrl);
  }
  showDropDown() {
    if (this.logout === false) {
    this.logout = true;
    } else {
      this.logout = false;
    }
  }
  showDropDown1(event) {
    this.logout = event;
  }
  onClickOutside(event) {
    if (event && event['value'] === true) {
      this.hideLogout();
    }
  }
  hideLogout() {
    this.logout = false;
  }
  logOut() {

    this.generalService.generalServiceInfo('auth/logout', 'post', '')
    .subscribe(
      res => {
this.ss.ToasterMessage(res['message']);
document.getElementById('modalButton').click();
this.logout = false;
sessionStorage.removeItem('firstLogin');
sessionStorage.removeItem('useremailid');
sessionStorage.removeItem('accessToken');
this.router.navigate(['']);
      },
      e => {
        if (e.status === 403 ) {
          this.router.navigate(['']);
          // this.ss.ToasterMessage('Your Session has Expired');
          // document.getElementById('modalButton1').click();
          sessionStorage.removeItem('firstLogin');
          sessionStorage.removeItem('useremailid');
          sessionStorage.removeItem('accessToken');
        } else if (e.status === 502) {
          this.ss.ToasterMessage('System has encountered some technical problem. Please try again.');
          document.getElementById('modalButton1').click();
        } else {
        this.ss.ToasterMessage(e['message']);
        document.getElementById('modalButton1').click();
      }
            },
      () => {
      }
    );
  }
  cointypeSelected() {
  }
  confirmChecking(confirmchecking: TemplateRef<any>) {
    this.modalRef = this.modalService.show(confirmchecking, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
  }
}
