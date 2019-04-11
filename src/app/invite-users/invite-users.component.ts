import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GeneralService } from '../general.service';
import{SharedService} from '../shared.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-invite-users',
  templateUrl: './invite-users.component.html',
  styleUrls: ['./invite-users.component.css']
})
export class InviteUsersComponent implements OnInit {
  focusedElement:any;
  modalRef: BsModalRef;
  modalrefrence: BsModalRef;
  name = "";
  fname = [];
  inviteresult: any;
  itemValue: any = {
    userName:'',
    userEmailid:'',
    userrole:undefined,
  };
  template: TemplateRef<any>
  response:any;
  constructor(private toastr: ToastrService,
    private router: Router,private modalService: BsModalService,private gs: GeneralService,private ss:SharedService) {



  }

  ngOnInit() {
    this.ss.openuserinvite$.subscribe(

      res =>{
        this.response = res;
        this.openModal();
      }
    )
  }
  public focusFunction(element){
    this.focusedElement=element;
  }
  changeroleType(role) {

  }
  openModal(){
    this.modalRef = this.modalService.show(this.template);
  }
  inviteUser(successtemplate: TemplateRef<any>, template: TemplateRef<any>) {
    this.name = this.itemValue.userName;
    this.fname = this.name.split(" ")



    let obj;
    obj = {
      'firstName': this.fname[0],

      'username': this.itemValue.userEmailid,
      'typeOfUser': this.itemValue.userrole
     };
     let url;
    url = 'user/invite';
     this.gs.generalServiceInfo(url, 'post', obj)
            .subscribe(
              res => {
                this.inviteresult = res;
                // this.modalRef = this.modalService.hide(template);
                this.modalrefrence = this.modalService.show(successtemplate);
                // this.listUser();
              },
              e => {
                if(e.status==403){
                  this.router.navigate(['']);
                  // this.toastr.error('Your Session has Expired');
                  sessionStorage.removeItem('firstLogin');
                  sessionStorage.removeItem('useremailid');
                  sessionStorage.removeItem('accessToken');
                }
              },
          () => {
          }
      );
  }
  openpoup(){
    this.modalRef = this.modalService.show(this.template);
  }
}
