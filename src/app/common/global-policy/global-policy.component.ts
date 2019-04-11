import { Component, OnInit, TemplateRef } from '@angular/core';
import { GeneralService } from '../../general.service';
import { Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import * as _ from 'lodash';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-global-policy',
  templateUrl: './global-policy.component.html',
  styleUrls: ['./global-policy.component.css']
})
export class GlobalPolicyComponent implements OnInit {
  modalRefauth: BsModalRef;
  verificationCodeValid = false;
  authmodel: any = {};
  modalRef: BsModalRef;
  policy: Boolean = true;
  compilance: Boolean = false;
  showwalletfield: Boolean = false;
  showipaddress: Boolean = false;
  view: Boolean = false;
  initialvalue: Boolean = true;
  usertyperesponse: any = [];
  deepStorage: any = [];
  secureStorage: any = [];
  highFrequency: any = [];
  policyDetails: any = [];
  isEdit: Boolean = false;
  secureStorageedit: Boolean = false;
  deepStorageedit: Boolean = false;
  highFrequencyedit: Boolean = false;
  requestobj: any = {};
  sldeepstorageId: any = '';
  slsecurestorageId: any = '';
  slhighfrquencyId: any = '';
  policyupdatedetails: any = [];
  WalletTypeId: any = '';
  countrytimezonelist: any = [];
  countrytimezonelist1: any = [];
  getProfileInfo: any = [];
  filteredOptions: any = [];
  valumecape: any = 'Daily';
  config = {
    backdrop: true,
    ignoreBackdropClick: true,
    keyboard: false
  };
  uitofmeasureerror: any = false;
  endtimestamperror: Boolean = false;
  timestamperror: Boolean = false;
  starttimeerror: Boolean = false;
  endtimeerror: Boolean = false;
  validate: Boolean = false;
  policyList: any = [];
  tempValue: any;
  policyListData: any = {};
  constructor(private generalservice: GeneralService, private router: Router,
     private ss: SharedService, private modalService: BsModalService) { }

  ngOnInit() {
    this.getpolicyDetails();
    this.getcountryTimezone();
   
  }
  showpolicyconfig() {
    this.policy = true;
    this.compilance = false;
  }
  showacompilance() {
    this.policy = false;
    this.compilance = true;
  }
  editpolicy(value, successtemplate: TemplateRef<any>) {
    this.requestobj['typeOfWalletId'] = value;
    if (this.WalletTypeId === '') {
    this.WalletTypeId = value;
    this.isEdit = true;
    if (value === 0) {
      this.secureStorageedit = true;
      this.highFrequencyedit = true;
      this.policyList = this.policyListData.deepStorage.policyDetail;
      this.policyDetails = this.deepStorage;
      console.log(this.policyDetails);
    } else if (value === 1) {
      this.deepStorageedit = true;
      this.highFrequencyedit = true;
      this.policyList = this.policyListData.secureStorage.policyDetail;
      this.policyDetails = this.secureStorage;
    } else if (value === 2) {
      this.secureStorageedit = true;
      this.deepStorageedit = true;
      this.policyList = this.policyListData.highfrequency.policyDetail;
      this.policyDetails = this.highFrequency;
    }
    this.view = true;
    this.initialvalue = false;
  }  else if (this.WalletTypeId !== value ) {
    this.tempValue = value;
    this.modalRef = this.modalService.show(successtemplate, Object.assign({}, { class: 'whitelist modal-lg' }, this.config));
     }
  }
  getpolicyDetails() {
        const url = 'user/policy/getGlobalWalletTypePolicy';
      this.generalservice.generalServiceInfo(url, 'post', '')
                          .subscribe(
                            res => {
                              this.usertyperesponse = res['data'];
                              this.usertyperesponse.forEach(element => {
                                if (element.userType === 'DeepStorage') {
                                  this.sldeepstorageId = element.id;
                                  this.deepStorage = element.rules;
                                  console.log(this.deepStorage);
                                } else if (element.userType === 'SecureStorage') {
                                  this.slsecurestorageId = element.id;
                                  this.secureStorage = element.rules;
                                } else if (element.userType === 'HighFrequency') {
                                  this.slhighfrquencyId = element.id;
                                  this.highFrequency = element.rules;
                                }
                              });
                              this.getPolicyList();
                            },
                            e => {
                            },
                            () => {
                            }
                          );
    }
    authSuccess() {
      const obj: any = {};
      obj.verificationCode = this.authmodel.googleCode;
      this.generalservice.generalServiceInfo('user/validatedToPerformAction', 'post', obj)
        .subscribe(
          res => {
            const response: any = res.status;
            if (response === 'success') {
              this.modalRefauth.hide();
              this.authmodel.googleCode = '';
              this.updatedetails();
            } else if (response === 'failure') {
              this.ss.ToasterMessage(res['message']);
              document.getElementById('modalButton1').click();
              this.authmodel.googleCode = '';
            }
          },
          e => {
            if (e.status === 403) {
              this.router.navigate(['']);
              // this.ss.ToasterMessage('Your Session has Expired');
              this.authmodel.googleCode = '';
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
    updatedetails() {
      const sum: any = Number(this.policyDetails.minimumBalance) + Number(this.policyDetails.transactionVolumeCap);
      if (sum > 100) {
        this.ss.ToasterMessage('You have exceeded the sum of transaction volume cap and minimum balance more than 100%');
        document.getElementById('modalButton1').click();
      } else {
        this.requestobj.rules = this.policyDetails;
      const url = 'user/policy/updateGlobalWalletTypePolicy';
      this.generalservice.generalServiceInfo(url, 'post', this.requestobj)
                        .subscribe(
                          res => {
                            this.policyupdatedetails = res;
                            const response: any = res.status;
                            if (response === 'success') {
                              this.ss.ToasterMessage(res['message']);
                            document.getElementById('modalButton').click();
                            this.router.navigate(['/fusang/policy']);
                            this.cancelrequest();
                            } else {
                              this.ss.ToasterMessage(res['message']);
                              document.getElementById('modalButton1').click();
                            }
                          },
                          () => {
                          }
                        );
      }
    }
    cancelrequest() {
      this.validate = false;
      this.timestamperror = false;
      this.endtimestamperror = false;
      this.starttimeerror = false;
      this.endtimeerror = false;
      this.view = false;
      this.initialvalue = true;
      this.WalletTypeId  = '';
      this.isEdit = false;
      this.secureStorageedit = false;
      this.deepStorageedit = false;
      this.highFrequencyedit = false;
      this.getpolicyDetails();
    }
    getcountryTimezone() {
      const url = '/assets/timezonelist.json';
      this.generalservice.localfileinfo(url)
      .subscribe(
        res => {
          this.countrytimezonelist = res['timeZoneList'];
          this.countrytimezonelist.forEach((element) => {
            this.countrytimezonelist1.push(element);
          });
        },
        e => {
        },
        () => {
        }
      );
    }
    getPolicyList() {
      const url = '/assets/json/policy.json';
      this.generalservice.localfileinfo(url)
      .subscribe(
        res => {
          this.policyListData = res['data'];
        },
        e => {
        },
        () => {
        }
      );
    }
    // Timezone related
    onSelectionChanged(event: MatAutocompleteSelectedEvent) {
      this.validate = false;
        this.policyDetails.walletTimeZone = event.option.value;
      this.countrytimezonelist.forEach((element) => {
        if (event.option.value.toLowerCase() === element.name.toLowerCase()) {
           }
      });
    }
    getTheValue(value) {
      this.validate = true;
      this.filteredOptions = this._filter(value);
    }
     // This function will filter the value and show in the dropdown.
  private _filter(value) {
    if (value !== '') {
      const filterValue = value.toLowerCase();
      return this.countrytimezonelist1.filter(option => option.toLowerCase().indexOf(filterValue) >= 0);
    }
  }
  confirmClime() {
    // this.WalletTypeId = this.WalletTypeId;
        this.getpolicyDetails();
        this.validate = false;
        this.timestamperror = false;
        this.endtimestamperror = false;
        this.starttimeerror = false;
        this.endtimeerror = false;
        this.isEdit = true;
        this.WalletTypeId = this.tempValue;
        if (this.WalletTypeId === 0) {
          this.secureStorageedit = true;
          this.highFrequencyedit = true;
          this.deepStorageedit = false;
          this.policyList = this.policyListData.deepStorage.policyDetail;
          this.policyDetails = this.deepStorage;
        } else if (this.WalletTypeId === 1) {
          this.deepStorageedit = true;
          this.highFrequencyedit = true;
          this.secureStorageedit = false;
          this.policyList = this.policyListData.secureStorage.policyDetail;
          this.policyDetails = this.secureStorage;
        } else if (this.WalletTypeId === 2) {
          this.secureStorageedit = true;
          this.deepStorageedit = true;
          this.highFrequencyedit = false;
          this.policyList = this.policyListData.highfrequency.policyDetail;
          this.policyDetails = this.highFrequency;
        }
        this.view = true;
        this.initialvalue = false;
    }
     checkunitofmeasure(val) {
      console.log(val);
      const term = val;
const re = new RegExp('^[0-9]{1,4}\d*$');
      if (!(re.test(term)) || this.policyDetails.transactionUnitOfMeasure > 1440) {
        this.uitofmeasureerror = true;
      } else {
        this.uitofmeasureerror = false;
      }
    }
    numberOnly(event): boolean {
      const charCode = (event.which) ? event.which : event.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false;
      }
      return true;
    }
    vcValidation(event) {
      if (event.length === 6) {
        this.verificationCodeValid = true;
      } else {
        this.verificationCodeValid = false;
      }
    }
    authPublic(auth: TemplateRef<any>) {
      this.modalRefauth = this.modalService.show(auth, Object.assign({}, { class: 'invite-cus-pop modal-lg' }, this.config));
    }
    CloseAuth() {
      this.modalRefauth.hide();
      this.authmodel.googleCode = '';
    }
    // timestampvalidation() {
    //   if (this.policyDetails.transactionTimeStart >= this.policyDetails.transactionTimeEnd) {
    //     this.timestamperror = true;
    //   } else {
    //     this.timestamperror = false;
    //     this.endtimestamperror = false;
    //   }
    // }
    // endtranstampvalidation() {
    //   if (this.policyDetails.transactionTimeStart >= this.policyDetails.transactionTimeEnd) {
    //     this.endtimestamperror = true;
        
    //   } else {
    //     this.endtimestamperror = false;
    //     this.timestamperror = false;
    //   }
    // }

    timestampvalidation() {
      this.endtimestamperror = false;
      const term = this.policyDetails.transactionTimeStart;
      const re = new RegExp('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');
      if (!(re.test(term))) {
        this.starttimeerror = true;
      } else if (re.test(term)) {
        const timeParts = term.split(':');
        const timeendparts = this.policyDetails.transactionTimeEnd;
        const endtime = timeendparts.split(':');
        const startTime = (+timeParts[0] * (60000 * 60)) + (+timeParts[1] * 60000);
        const endTime = (+endtime[0] * (60000 * 60)) + (+endtime[1] * 60000);
        this.starttimeerror = false;
        if (startTime >= endTime) {
          this.timestamperror = true;
        } else {
          this.timestamperror = false;
          this.endtimestamperror = false;
        }
      }
    }
    endtranstampvalidation() {
      this.timestamperror = false;
      const term = this.policyDetails.transactionTimeEnd;
      const re = new RegExp('^([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$');
      if (!(re.test(term))) {
        this.endtimeerror = true;
      } else if (re.test(term)) {
        const timeParts = term.split(':');
        const timeendparts = this.policyDetails.transactionTimeStart;
        const endtime = timeendparts.split(':');
        const  endTime = (+timeParts[0] * (60000 * 60)) + (+timeParts[1] * 60000);
        const startTime = (+endtime[0] * (60000 * 60)) + (+endtime[1] * 60000);
        this.endtimeerror = false;
        if (startTime >= endTime) {
          this.endtimestamperror = true;
        } else {
          this.endtimestamperror = false;
          this.timestamperror = false;
        }
      }
    }
}
