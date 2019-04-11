import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  typeOfTab: string;
  typeOfUser: Boolean = true;
  roles: any;
  role: string;
  superAdmin: boolean;
  constructor(private router: Router, private ss: SharedService) {
    const res = JSON.parse(sessionStorage.getItem('firstLogin'));
    console.log(res);
    if  (res != null) {
      this.roles = res['roles'];
      // this.roles.forEach(element => {
      //   if (element === 'USER_ADMIN') {
      //     this.role = 'superUser';
      //   } else if (element === 'ADMIN_VERIFIER' || element === 'ADMIN_CHECKER' || element === 'ADMIN_APPROVER') {
      //     this.role = 'Admin';
      //   }  else if (element === 'USER') {
      //     this.role = 'Customer';
      //   } else if (element === 'USER_SIGNER' || element === 'USER_VIEWER') {
      //     this.role = 'User';
      //   }
      // });
      // tslint:disable-next-line:max-line-length
      if ((this.roles.indexOf('USER_ADMIN') >= 0 )) {
        this.role = 'superUser';
      // tslint:disable-next-line:max-line-length
      } else if ((this.roles.indexOf('USER') >= 0) ) {
        this.role = 'User';
      // tslint:disable-next-line:max-line-length
      } else if (this.roles.indexOf('ADMIN_VERIFIER') >= 0 || this.roles.indexOf('ADMIN_CHECKER') >= 0 || this.roles.indexOf('ADMIN_APPROVER') >= 0 ) {
        this.role = 'Admin';
      // tslint:disable-next-line:max-line-length
      } else {
        this.role = 'Fusang User';
      }

      if ((this.roles.indexOf('SUPER_ADMIN') >= 0 )) {
          this.superAdmin = true;
      }
      console.log(this.role);
    if (res['typeOfUser'] === 'User') {
      this.typeOfUser = false;
    }
  }
  }
  ngOnInit() {
    this.ss.SharedTypeInfo$.subscribe(res => {
      this.typeOfTab = res;
    });
  }
  userProfile() {
    this.router.navigate(['/fusang/ticket']);
  }
}
