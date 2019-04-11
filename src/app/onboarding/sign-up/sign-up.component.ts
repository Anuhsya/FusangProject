import { Component, OnInit , TemplateRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GeneralService } from '../../general.service';
import { ToastrService } from 'ngx-toastr';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../shared.service';

// import { FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  signupError; Boolean = false;
   // signupForm: FormGroup;
  submitted = false;
  countrylist: any = [];
  title = 'Sign Up';
  modalRef: BsModalRef;
  isAgreed: Boolean = false;
  errmsg: Boolean = false;
  countrycode: any = '';
  countryPhonelen: any;
  invalidphone: Boolean = false;
  focusedElement: any;
  selectedcountrylist: any;
  searchVal: any;
  isFusanguser: Boolean =  false;
  model: any = {
    country: '',
    lastName: '',
    phoneNumber: '',
    repassword: '',
    password: ''
  };
  itemValue = {
    'userName': '',
    'userEmailid': '',
    'userrole': ''  };
    public showPasswordCaution = false;
  getmodeldata: any;
  signupsuccessRef: BsModalRef;
  msg: any = 'testr';
  accessToken: any;
  userDetails: any = {};
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: false
  };
  loc: string;
  constructor(private router: Router,
     private modalService: BsModalService,
      private gs: GeneralService,
      private toastr: ToastrService,
      // private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private ss: SharedService) {
        this.route.queryParams.subscribe(params => {
          this.model.accessToken = params['accessToken'];
      });
      }

  ngOnInit() {
        this.getcountrylist();
  
    const getmodeldata = JSON.parse( sessionStorage.getItem('userTypeId'));
    if (getmodeldata !== null) {
    this.model.userTypeId = getmodeldata;
    // this.model.firstName = getmodeldata.firstName;
    // this.model.username = getmodeldata.username;
    this.isFusanguser = false;
    } else {
      this.model.userTypeId = null;
      // let loc, id, firstName, username;
    this.loc = location.hash;

    // id = loc.split('?')[1].split('id=')[1].split('&')[0];
    // firstName = loc.split('?')[1].split('firstName=')[1].split('&')[0];
    // username = loc.split('?')[1].split('username=')[1].split('&')[0];

    // this.model.id = id;
    // this.model.firstName = firstName;
    // this.model.username = username;
    this.isFusanguser = true;
    }
       }
   public focusFunction(element) {
    this.focusedElement = element;
  }
  public getCustomerDetails() {
    this.gs.loginService('user/getUserDetailsByToken?accessToken=' + this.model.accessToken, '')
    .subscribe(
      res => {
        if (res.status.toString() === 'failure') {

          this.ss.ToasterMessage(res['message']);
          document.getElementById('modalButton1').click();
         } else {
           this.userDetails = res['data'];
           this.model.username = this.userDetails['emailId'];
           this.model.firstName = this.userDetails['firstName'];
           this.model.lastName = this.userDetails['lastName'];
           this.model.phoneNumber = this.userDetails['phoneNumber'];
           this.model.country = this.userDetails['country'];
           this.selectedcountrylist = this.userDetails['country'];
           this.countrylist.forEach((element) => {
           if (element.name.toLowerCase() ===  this.selectedcountrylist.toLowerCase()) {
            this.countrycode = element.dial_code;
            this.countryPhonelen = element.length;
           }
          });
          }
      },
      e => {
        this.ss.ToasterMessage(e['message']);
        document.getElementById('modalButton1').click();
      },
      () => {
      }
    );

  }
  register(signupsuccess) {
    if (this.ss.validVal(this.model.country)) {
      this.errmsg = false;
    } else {
      this.errmsg = true;
    }

      if (
        this.model.password !== this.model.repassword ||
        this.model.password === '' ||
        this.model.repassword === '' ||
        this.model.password === undefined ||
        this.model.repassword === undefined
      ) {
        this.showPasswordCaution = true;
        return false;
      } else {
        this.showPasswordCaution = false;
        // return true;
        this.model.phoneNumber = this.model.phoneNumber.toString();
        if (this.invalidphone === true) {
          this.invalidphone = true;
        } else {
          console.log(this.model);
          this.invalidphone = false;
        let tempValue;
        tempValue = this.model;
        delete tempValue.firstName;
        delete tempValue.repassword;
          this.gs.loginService('auth/signup', this.model)
      .subscribe(
        res => {
          if (res.status.toString() === 'failure') {
            this.msg = res['message'];
            this.signupError = true;
            this.signupSuccess(signupsuccess);
            // this.toastr.error(res['message']);
           } else {
            this.msg = res['message'];
            this.signupError = false;
            this.signupSuccess(signupsuccess);
            if (this.isFusanguser) {
              this.router.navigate(['']);
            }
            }
        },
        e => {
          this.ss.ToasterMessage(e['message']);
          document.getElementById('modalButton1').click();
        },
        () => {
        }
      );
        }
      }
    }
    // this.router.navigateByUrl('/sign-in');
  // }/
  // openModal(template: TemplateRef<any>) {
  //   this.modalRef = this.modalService.show(template);
  // }
  countrySelected(val) {
    if (val !== null && val !== undefined && val !== '') {
    this.model.country = val.name;
    this.countrycode = val.dial_code;
    this.countryPhonelen = val.length;
    this.model.phoneNumber = '';
    } else {
      this.countrycode = '';
      this.model.country = '';
      this.model.phoneNumber = '';
    }
  }
  isChecked(e) {
    if (e.target.checked) {
      this.isAgreed = true;
    } else {
      this.isAgreed = false;
    }
  }

     openModal(template: TemplateRef<any>) {
     this.modalRef = this.modalService.show(template);
   }
  //  onFilterChange(eve: any) {
  // }
  uncheck(val) {
    this.isAgreed = val;
  }
  openModalWithClass(template: TemplateRef<any>, event) {
    console.log(event);
    this.itemValue.userName = '';
   this.itemValue.userEmailid = '';
   this.itemValue.userrole = '';
   if (event) {
    this.modalRef = this.modalService.show(
      template,
      Object.assign({}, { class: 'gray modal-lg' }, this.config)
    );
   }
  }



  getcountrylist() {
    const url = '/assets/countrylist.json';
    this.gs.localfileinfo(url)
    .subscribe(
      res => {
        this.countrylist = res['countrylist'];
        this.getCustomerDetails();
      },
      e => {
      },
      () => {
      }
    );
  }
  onChange(val) {
    if (this.ss.validVal(val)) {
      val = val.toString();
      if (val.length  ===  parseInt(this.countryPhonelen, 10)) {
        this.invalidphone = false;
      } else {
        this.invalidphone = true;
      }
    } else {
      this.model.phoneNumber = '';
    }
  }
  onOptionsSelected(val) {
    if (this.model.password !== val) {
      this.showPasswordCaution = true;
    } else {
      this.showPasswordCaution = false;
    }
  }
  signupSuccess(signupsuccess: TemplateRef<any>) {
    this.signupsuccessRef = this.modalService.show(signupsuccess, Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
  }

  ngOnDestroy() {
  }

}
