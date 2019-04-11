import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-toaster-modal',
  templateUrl: './toaster-modal.component.html',
  styleUrls: ['./toaster-modal.component.css']
})
export class ToasterModalComponent implements OnInit {
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
      if (document.getElementById('modalButtonClose')) {
       document.getElementById('modalButtonClose').click();
      }
      },
    5000);
  }
  closeWindow() {
    this.modalRef.hide();
  }
}
