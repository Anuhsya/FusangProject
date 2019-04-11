import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-toaster-info-modal',
  templateUrl: './toaster-info-modal.component.html',
  styleUrls: ['./toaster-info-modal.component.css']
})
export class ToasterInfoModalComponent implements OnInit {

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
      if (document.getElementById('modalButton2close')) {
         document.getElementById('modalButton2close').click();
      }
    }, 5000);
  }
  closeWindow() {
    this.modalRef.hide();
  }
}
