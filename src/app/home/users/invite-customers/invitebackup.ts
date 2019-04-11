// import { Component, OnInit, TemplateRef } from '@angular/core';
// import {FormBuilder, FormGroup} from '@angular/forms';
// import { BsModalService } from 'ngx-bootstrap/modal';
// import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
// import { GeneralService } from '../../../general.service';
// import { Router, ActivatedRoute } from '@angular/router';
// import { SharedService } from '../../../shared.service';
// import { ToastrService } from 'ngx-toastr';
// import { TitleCasePipe } from '@angular/common';
// import { DomSanitizer } from '@angular/platform-browser';
// import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
// import {Observable} from 'rxjs';
// import {map, startWith, switchMap} from 'rxjs/operators';
// import { MatAutocompleteSelectedEvent } from '@angular/material';
// import {ErrorStateMatcher} from '@angular/material/core';

// @Component({
//   selector: 'app-invite-customers',
//   templateUrl: './invite-customers.component.html',
//   styleUrls: ['./invite-customers.component.css']
// })
// export class InviteCustomersComponent implements OnInit {
//   am=[];
//   typeObj={
//   "primary":'',
//     "backup":'',
//     "userRole":''
//   }
//   dpControl = new FormControl('', [
//     Validators.email,
    
//   ]);
//   modalRef: BsModalRef;
//   basic:Boolean = false;
//   approver:Boolean = false;
//   cusclass:any=[];
//   countrylist:any=[];
//   countrylist1:any=[];
//   basicmodel:any={firstName:'',
//                   lastName: '',
//                   country:'',
//                   phoneNo:'',
//                   email:''
//                 };
//   model:any={};
//   AccountManagementList:any=[]
//   AccountManagementverifier:any={};
//   AccountManagementchecker:any={};
//   AccountManagementapprover:any={};
//   TransactionManagementverifier:any={};
//   TransactionManagementchecker:any={};
//   TransactionManagementapprover:any={};
//   ComplienceManagementverifier:any={};
//   ComplienceManagementchecker:any={};
//   ComplienceManagementapprover:any={};
//   PolicyManagementverifier:any={};
//   PolicyManagementchecker:any={};
//   PolicyManagementapprover:any={};
//   TechnicalManagementapprover:any={};
//   TechnicalManagementchecker:any={};
//   TechnicalManagementverifier:any={};
//   userRelationship:any={}
//   userRelationshipManagerMap:any=[]
//   approvermodel:any;
//   x:any;
//   filteredOptions: Observable<string[]>;
//   code: any;
//   phonelength: any;
//   successRef: BsModalRef;
//   complianceRef: BsModalRef;
//   policyRef: BsModalRef;
//   signupsuccessRef: BsModalRef;
//   rejectRef: BsModalRef;
//   confirmRef: BsModalRef;
//   departmentLists: any = [];
//   departmentSubListsVerfier: any;
//   basicForm: any;
//   approverForm: any;
//   appService: any;
//   constructor(private _domSanitizer: DomSanitizer, private modalService: BsModalService,
//     private router: Router, private gs: GeneralService, private ss: SharedService, private toastr: ToastrService,
//      private titlecasePipe: TitleCasePipe,private fb: FormBuilder ) { }

//   ngOnInit() {
//     this.basicForm = this.fb.group({
//       firstName: ['', Validators.required],
//       lastName: ['', Validators.required],
//       email: ['', [Validators.required, Validators.email]],
//       country: ['', [Validators.required]],
//       phone: ['', [Validators.required, Validators.minLength(10)]]
//   });

//   // this.approverForm = this.fb.group({
//   //   account:{"verifier":['', Validators.required]},
//   //   transaction:{},
//   //   complience:{},
//   //   policy:{},
//   //   technical:{}
//   // });
//   // this.array= this.departmentLists.verifier

//     this.getcountrylist();
//     this.getinvitedata();
//     // this.filteredOptions = this.basicForm.get('country').valueChanges.pipe(
//     //   startWith(''),
//     //   switchMap(value => {
//     //     return this._filter(value)})
//     // );
//     this.departmentLists.verifier=

//     this.filteredOptions = this.basicForm
//   .get('country')
//   .valueChanges
//   .pipe(
//     map(value => {
//       return this._filter(value)})
//    );
    
//     this.showbasic();
//     // this.showapprover();
//   }
//   onSelectionChanged(event: MatAutocompleteSelectedEvent) {
//     this.basicmodel.country=event.option.value;

//     this.countrylist.forEach((element) => {
//       if(event.option.value.toLowerCase()===element.name.toLowerCase()){
//         this.code = element.dial_code;
//         console.log(this.code);
//         this.phonelength = element.length;
//         this.basicmodel.phoneNo= this.code+" ";
//       }
//     });

//   }

//   inviteCustomer(invitetemplate: TemplateRef<any>, template: TemplateRef<any>) {
//     this.modalRef = this.modalService.show(invitetemplate,Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
//   }
//   private _filter(value){
//     if(value !=""){
//     const filterValue = value.toLowerCase();
//     return this.countrylist1.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
//   }
//   }
//   getcountrylist() {
//     const url = '/assets/countrylist.json';
//     this.gs.localfileinfo(url)
//     .subscribe(
//       res => {
//         this.countrylist = res['countrylist'];
//         this.countrylist.forEach((element) => {
//           this.countrylist1.push(element.name);
//         });
//       },
//       e => {
//       },
//       () => {
//       }
//     );
//   }
//   invitedSuccessfull(successtemplate: TemplateRef<any>, template: TemplateRef<any>){
//    //logic here
//     this.userRelationshipManagerMap.push()
//     console.log( this.AccountManagementList);
//     this.modalRef.hide();
//     this.successRef = this.modalService.show(successtemplate,Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
//   }

//   signupSuccess(signupsuccess: TemplateRef<any>, template: TemplateRef<any>){
//     this.signupsuccessRef = this.modalService.show(signupsuccess,Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
//   }


//   policyInsights(policyinsights: TemplateRef<any>, template: TemplateRef<any>) {
//     this.policyRef = this.modalService.show(policyinsights,Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
//   }
//   complianceInsights(complianceinsights: TemplateRef<any>, template: TemplateRef<any>) {
//     this.complianceRef = this.modalService.show(complianceinsights,Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
//   }
//   confirmChecking(confirmchecking: TemplateRef<any>){
//     this.confirmRef = this.modalService.show(confirmchecking,Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
//   }
//   rejectVerification(rejectverification: TemplateRef<any>){
//     this.rejectRef = this.modalService.show(rejectverification,Object.assign({}, { class: 'invite-cus-pop modal-lg' }));
//   }
//   getinvitedata(){
//     const url = '/assets/json/inviteaccordion.json';
//     this.gs.localfileinfo(url)
//     .subscribe(
//       res => {
//         this.x = res;
//       },
//       e => {
//       },
//       () => {
//       }
//     );
//   }
//   showbasic() {
//     this.basic = true;
//     this.approver = false;
//   }
//   showapprover() {
//     this.basic = false;
//     this.approver = true;
//   }
//   nexttab(){
//     console.log(this.basicForm);
//     this.showapprover()
//   }
//   getAccountMgtList(id){
//     this.userRelationship["departmentId"] = id;
//    console.log( this.userRelationship);
//     let obj = {
//       'id' : id
//     }
//     const url = 'department/getUserDepartmentRoleList';
//     this.gs.generalServiceInfo(url, 'post', obj)
//             .subscribe(
//               res => {
//                 this.departmentLists = res['data'];
//                 // this.departmentLists.forEach((element) => {
//                 //   if(element.userRole)
//                 //   this.departmentSubListsVerfier.push(element.emailId);
//                 // });
//                 console.log(this.departmentLists);
//               },
//               e => {
//               },
//               () => {
//               }
//             )

//             this.deletearr(id);
//   }
//   deletearr(id){
//   //  let index= id-1;
//   var index=1;
//     this.userRelationshipManagerMap.forEach(element => {
//       if(element.departmentId==id){
//          index--;
//       }
//       else{
//         index++;
//       }
//     });
//     this.userRelationshipManagerMap.splice(index, 1)
//     console.log("data after removing"+JSON.stringify(this.userRelationshipManagerMap))

//   }
//   pushintoarr(id,Managementverifier, Managementchecker,Managementapprover,role){
//     if(Managementverifier.primary!=undefined && 
//       Managementchecker.primary!=undefined && 
//       Managementapprover.primary!=undefined){
//       let relationshipManagerDetails= [];
//       let userRelationship = {"departmentId":"","relationshipManagerDetails":[]};
//       // relationshipManagerDetails.push(AccountManagementverifier,AccountManagementchecker,AccountManagementapprover);
//       userRelationship.departmentId= id;
//       Managementverifier.userRole = "ACCOUNT_VERIFIER";
//       Managementchecker.userRole = "ACCOUNT_CHECKER";
//       Managementapprover.userRole = "ACCOUNT_APPROVER";

//       userRelationship.relationshipManagerDetails.push(Managementverifier,Managementchecker,Managementapprover);
//       this.userRelationshipManagerMap.push(userRelationship);
      
//       console.log(JSON.stringify(this.userRelationshipManagerMap));
//     }
// }
// }
