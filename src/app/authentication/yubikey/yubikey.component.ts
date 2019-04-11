import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';

@Component({
  selector: 'app-yubikey',
  templateUrl: './yubikey.component.html',
  styleUrls: ['./yubikey.component.css']
})
export class YubikeyComponent implements OnInit {
  title: any = 'Yubikey authentication';
  isValid: Boolean;
  constructor(private ss: SharedService) {
    this.ss.yubiInfo$
      .subscribe(
        res => {
          this.isValid = res;
        }
      );
   }

  ngOnInit() {
    this.isValid = true;
  }
  // @Input('isValid') isValid:Boolean;
yubikeyRes = function() {
  this.isValid = false;
};

 yubiResponse() {
   this.ss.getValid(false);
 }
}
