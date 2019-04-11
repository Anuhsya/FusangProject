import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../../general.service';
import { SharedService } from '../../../shared.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import * as _ from 'lodash';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  loginResponse: any = JSON.parse(sessionStorage.getItem('firstLogin'));
  invalidphone = false;
  focusedElement: any;
  imageUrl: any = './assets/images/sidebar/profile.svg';
  // model: any = {
  //   country: '',
  //   lastName: '',
  //   phoneNumber: '',
  //   code: '',
  //   firstName : '',
  //   email: ''
  // };
  countrylist: any = [];
  getProfileInfo: any;
  editUser: Boolean = true;
  roles: any;
  countryPhonelen: any;
  filteredOptions: any = [];
  countrylist1: any = [];
  code: any;
  phonelength: any;
  dataLodedSuccessfully: Boolean =  false;
  constructor(private toastr: ToastrService, private router: Router,
    private gs: GeneralService, private shared: SharedService, private formBuilder: FormBuilder) { 

      const res = JSON.parse(sessionStorage.getItem('firstLogin'));
      if ( res === null) {
        this.router.navigate(['']);
      } else {
    // this.userName = res['firstName'];
    // this.imageUrl = res['profilePicUrl'];
    this.roles = res['roles'];
      }

    }
  ngOnInit() {
    this.getcountrylist();
  }
  public focusFunction(element) {
    this.focusedElement = element;
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
                this.getProfileDetails();
      },
      e => {
      },
      () => {
      }
    );
  }
  public getProfileDetails() {
    this.gs
    .generalServiceInfo('user/getUserProfileDetails', 'post', '')
    .subscribe(
      res => {
        this.getProfileInfo = res['data'];
        this.shared.FirstLogin1(this.getProfileInfo);
        this.invalidphone = false;
       // this.model['firstName'] = this.getProfileInfo.firstName;
       // this.model['lastName'] = this.getProfileInfo.lastName;
        // this.model['code'] = this.getProfileInfo.code;
        // this.model['phoneNumber'] = this.getProfileInfo.phoneNumber;
        // for (let i = 0; i < this.countrylist.length; i++) {
        //   if (this.countrylist[i].name === this.getProfileInfo.country) {
        //     this.model['country'] = this.countrylist[i].name;
        //   }
        // }

        // this.countrylist.forEach(element => {
        //     if (element.name === this.getProfileInfo.country) {
        //     this.model['country'] = element.name;
        //     this.countryPhonelen = element.length;
        //     this.model['code'] = element.dial_code;
        //   }
        // });

        for (let i = 0; i < this.countrylist.length; i++) {
          if (this.countrylist[i].name === this.getProfileInfo.country) {
            this.code = this.countrylist[i].dial_code;
            this.countryPhonelen = this.countrylist[i].length;
          }
        }

      //  this.model['email'] = this.getProfileInfo.emailId;
        this.imageUrl = this.getProfileInfo.imageUrl;
        if ( this.imageUrl === null ) {
          this.imageUrl = './assets/images/sidebar/profile.svg';
        }
        this.loginResponse.profilePicUrl = this.imageUrl;
        this.shared.FirstLogin(this.loginResponse);

        this.dataLodedSuccessfully =  true;
      },
      e => {
        this.dataLodedSuccessfully =  false;
      },
      () => {


      }
    );
  }

  onChange(val) {
    if (val != null) {
      val = val.toString();
      if (val.length.toString()  ===  this.countryPhonelen) {
        this.invalidphone = false;
      } else {
        this.invalidphone = true;
      }
    } else {
      this.getProfileInfo.phoneNumber = '';
    }
   }

  // getCode(eve) {
  //   console.log(this.countrylist);
  //   let i;
  //     i = _.findIndex(this.countrylist, function(o) {
  //           return (o.name === eve);
  //           });
  //   this.countryPhonelen = this.countrylist[i].length;
  //    this.model.phoneNumber = '';

  //   this.countrylist.forEach((element) => {
  //     if (eve.toLowerCase() === element.name.toLowerCase()) {
  //       this.model.code = element.dial_code;
  //           }
  //   });
  // }
  public profileUpdate() {
    const reqParam = {
      'country': this.getProfileInfo.country,
      'firstName': this.getProfileInfo.firstName,
      'lastName': this.getProfileInfo.lastName,
      // 'code': this.model.code,
      'phoneNumber': this.getProfileInfo.phoneNumber
    };
    this.gs
    .generalServiceInfo('user/update', 'post', reqParam)
    .subscribe(
      res => {
        this.getProfileDetails();
        this.shared.ToasterMessage('Profile updated successfully');
        window.top.close();
        document.getElementById('modalButton').click();
      },
      e => {
        this.shared.ToasterMessage('Profile update unsuccessfull');
        document.getElementById('modalButton1').click();
      },
      () => {


      }
    );
  }
  public readURL(arg) {
    if (arg.currentTarget.files && arg.currentTarget.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {};
      reader.readAsDataURL(arg.target.files[0]);
      const formData = new FormData();
      console.log(arg.target.files[0]);
      // tslint:disable-next-line:max-line-length
      // const filename = arg.currentTarget.files[0].name.slice(arg.currentTarget.files[0].name.indexOf('.') + 1 , arg.currentTarget.files[0].name.length);
      const filename = arg.currentTarget.files[0].type;
      // this.uploadedFile.push(arg.currentTarget.files[0]);
      // tslint:disable-next-line:max-line-length
      if ((arg.currentTarget.files[0].size < 2078630) && (filename === 'image/jpeg' || filename === 'image/jpg' || filename === 'image/png')) {
      formData.append('file', arg.target.files[0]);
      this.gs
        .fileuploadService('user/upload/profile', formData)
        .subscribe(
          res => {
            this.shared.ToasterMessage('Profile image updated successfully');
            document.getElementById('modalButton').click();
            this.getProfileDetails();
          },
          e => {
            this.shared.ToasterMessage('Profile image update unsuccessfull');
            document.getElementById('modalButton1').click();
          },
          () => {


          }
        );
      } else {
          this.shared.ToasterMessage('Please upload image of type png/jpeg/jpg with size less than 2mb');
          document.getElementById('modalButton1').click();
        }
    }
  }

  getTheValue() {
    this.filteredOptions = this._filter(this.getProfileInfo.country);
  }
  // This function will filter the value and show in the dropdown.
  private _filter(value) {
    if (value !== '' && value !== null) {
      const filterValue = value.toLowerCase();
      return this.countrylist1.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
    }
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    this.getProfileInfo.phoneNumber = '';
    this.getProfileInfo.country = event.option.value;
    this.countrylist.forEach((element) => {
      if (event.option.value.toLowerCase() === element.name.toLowerCase()) {
        this.code = element.dial_code;
        this.countryPhonelen = element.length;
        console.log(this.countryPhonelen);
        this.phonelength = element.length;
        // this.getProfileInfo.phoneNo = this.code + ' ';
      }
    });
  }

}
