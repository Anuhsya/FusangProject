import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-toaster-error-modal',
  templateUrl: './toaster-error-modal.component.html',
  styleUrls: ['./toaster-error-modal.component.css']
})
export class ToasterErrorModalComponent implements OnInit {

  modalRef: BsModalRef;
  message: any;
  constructor(  private modalService: BsModalService, private ss: SharedService) {
    this.ss.toasterMessage$.subscribe(res => {
        this.message = res;
    });
  }

  ngOnInit() {
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    setTimeout(function() {
      if (document.getElementById('modalButton1close')) {
      document.getElementById('modalButton1close').click();
     }
    },
    5000);
  }
  closeWindow() {
    this.modalRef.hide();
  }

}
