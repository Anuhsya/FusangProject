import { Component, OnInit ,TemplateRef } from '@angular/core';
//  import { BsModalService } from 'ngx-bootstrap/modal';
//  import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
//  import { SharedService } from '.././shared.service';


@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.scss']
})
export class TermsConditionComponent implements OnInit {
  // bsModalRef: BsModalRef;
  //  modalRef: BsModalRef;
  //  checkbox:boolean=true;
  //  button:boolean;

  constructor( ) {}

  ngOnInit() {
    // this.list.push('PROFIT!!!');
  }

  // openModal(template: TemplateRef<any>) {
  // this.modalRef = this.modalService.show(template);
  // }

  // buttonAccept(checkbox)
  // {
  //   this.checkbox=checkbox;
  //   this.button=true;
  // }
  // buttonDecline(checkbox)
  // {
  //   this.checkbox=!checkbox;
  // }
}
