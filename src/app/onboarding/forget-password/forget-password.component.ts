import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { GeneralService } from '../../general.service';
import { SharedService } from '../../shared.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {
  focusedElement: any;
  title = 'Forgot Password';
  modalRef: BsModalRef;
  modalrefrence: BsModalRef;
  model: any = {
    emailId: '',
   };
   forgetResponse: any = [];
  constructor(private toastr: ToastrService,
    private router: Router,
    private gs: GeneralService,
    private modalService: BsModalService,
    private ss: SharedService) { }

  ngOnInit() {
  }
  public focusFunction(element) {
    this.focusedElement = element;
  }
  forgetPass() {
    const url = 'auth/forgotPassword';
    this.gs.forgetPassInfo(url, 'post', this.model)
    .subscribe(
      res => {
        this.forgetResponse = res;
        const response: any  = res.status;
        if (response === 'success') {
          this.ss.ToasterMessage(res['message']);
          document.getElementById('modalButton').click();
          this.router.navigate(['']);

        } else if (response === 'failure') {
          this.ss.ToasterMessage(res['message']);
          document.getElementById('modalButton1').click();
        }
        // console.log(response);
        // this.toastr.success('A link has been sent Tregister emailid ' + this.model.emailId + ' to reset Password');
      },
      e => {
        this.toastr.error(e.message);
      },
      () => {
      }
    );
  }
  gotosigninpage() {
    this.router.navigate(['']);
  }
}
