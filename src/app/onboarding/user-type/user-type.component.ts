import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.css']
})
export class UserTypeComponent implements OnInit {
  usertyperesponse: any = [];
  deepStorage: any = [];
  secureStorage: any = [];
  highFrequency: any = [];
  userTypeId: any = '';
  deepStorageId: any;
  secureStorageId: any;
  highFrequencyId: any;
  accessToken: any = '';
  constructor(private generalservice: GeneralService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getusertype();
    this.route.queryParams.subscribe(params => {
      this.accessToken = params['accessToken'];
  });
    // this.accessToken = this.route.queryParams['accessToken'];
    // let loc, id, firstName, username;
    // loc = location.href;
    // id = loc.split('?')[1].split('id=')[1].split('&')[0];
    // firstName = loc.split('?')[1].split('firstName=')[1].split('&')[0];
    // username = loc.split('?')[1].split('username=')[1].split('&')[0];
    // this.model.id = id;
    // this.model.firstName = firstName;
    // this.model.username = username;
    // this.model.id= "1";
    // this.model.firstName = "Ashutosh";
    // this.model.username = "tiwariak31@gmil.com";
  }
  getusertype () {
    const url = 'wallet/getUserType';
    this.generalservice.getUserType(url)
                        .subscribe(
                          res => {
                            this.usertyperesponse = res['data'];
                            this.usertyperesponse.forEach((element) => {
                              if (element.userType === 'DeepStorage') {
                                this.deepStorage = element;
                              } else if (element.userType === 'SecureStorage') {
                                this.secureStorage = element;
                              } else if (element.userType === 'HighFrequency') {
                                this.highFrequency = element;
                              }
                            });
                            // this.deepStorageId = this.usertyperesponse.deepStorageId ;
                            // this.secureStorageId = this.usertyperesponse.secureStorageId;
                            // this.highFrequencyId = this.usertyperesponse.highFrequencyId ;
                          },
                          e => {
                          },
                          () => {
                          }
                        );
  }

  gotosignup(userTypeId) {
    this.userTypeId = userTypeId;
    sessionStorage.setItem('userTypeId', JSON.stringify(this.userTypeId));
    this.router.navigateByUrl('/sign-up?accessToken=' + this.accessToken);
  }

}

