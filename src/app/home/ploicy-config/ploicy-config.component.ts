import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../../general.service';
import { SharedService } from '../../shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ploicy-config',
  templateUrl: './ploicy-config.component.html',
  styleUrls: ['./ploicy-config.component.css']
})
export class PloicyConfigComponent implements OnInit {
  policy: Boolean = true;
  compilance: Boolean = false;
  showwalletfield: Boolean = false;
  showipaddress: Boolean = false;
  ipaddresslist: any = [];
  walletaddress: any = [];
  policylist: any = [];
  WalletAddressWhitelist: any = [];
  policyType: any = '';
  itemvalue: any = {};
  ownerId: any = [];
  walletaddressinfo: any = [];
  policyupdatedresponse: any = [];
  Daily: any = 'Daily';
  obj: any = {
    'minimumBalance': '',
    'transactionLimit': '',
    'transactionTimeEnd': '',
    'transactionTimeStart': '',
    'transactionUnitOfMeasure': '',
    'transactionVolumeCap': '',
    'userId': '',
    'walletAddressWhitelist': [],
    'walletAddresslist': [
    ]
   };
   roles: any;
  role: string;
  walletid: any = '';
  constructor(private generalservice: GeneralService, private ss: SharedService, private router: Router) {
    const res = JSON.parse(sessionStorage.getItem('firstLogin'));
    const response = JSON.parse(sessionStorage.getItem('walletid'));
    this.walletid = response;
    if (res !== null) {
    this.ownerId = res['userId'];
    this.roles = res['roles'];
    this.roles.forEach(element => {
      if (element.toLowerCase() === 'user') {
        this.role = 'Customer';
      } else if (element.toLowerCase() === 'admin') {
        this.role = 'Admin';
      } else {
        this.role = 'User';
      }
    });
    }
   }

  ngOnInit() {
    this.loadpolicies();
  }
  showpolicyconfig() {
    this.policy = true;
    this.compilance = false;
  }
  addipaddress() {
    this.showipaddress = true;
  }
addwalletaddress() {
  if (this.WalletAddressWhitelist.length === 0) {
    this. showwalletfield = true;
  }
  if (this.itemvalue.walletaddress) {
    this.WalletAddressWhitelist.push(this.itemvalue.walletaddress);
  // this.obj.walletAddresslist.push(this.WalletAddressWhitelist);

  this.itemvalue.walletaddress = '';
  this. showwalletfield = true;

  }
  // this.obj.walletAddresslist.push(this.itemvalue.walletaddress);
}
removewalletaddress(i) {
  console.log(this.WalletAddressWhitelist);
  this.WalletAddressWhitelist.splice(i, 1);
  console.log(this.WalletAddressWhitelist);
}
removeipaddress() {
}

loadpolicies() {
const obj = {
  'walletId' : this.walletid
};
const url = 'user/policy/get-policy';
this.generalservice.generalServiceInfo(url, 'post', obj)
                    .subscribe(
                      res => {
                        this.policylist = res['data'];
                        console.log(this.policylist);
                        this.WalletAddressWhitelist = this.policylist.walletAddressWhitelist;
                        this.policyType = this.policylist.userType;
                      },
                      e => {
                      },
                      () => {
                      }
                    );

}
updatedetails() {
  this.obj = {
    'maximumAllowedIp': '' ,
    'minimumBalance': this.policylist.minimumBalance,
    'transactionLimit': this.policylist.transactionLimit,
    'transactionTimeEnd': this.policylist.transactionTimeEnd,
    'transactionTimeStart': this.policylist.transactionTimeStart,
    'transactionUnitOfMeasure': this.policylist.transactionUnitOfMeasure,
    'transactionVolumeCap': this.policylist.transactionVolumeCap,
    'maximumAllowedWallets' : this.policylist. maximumAllowedWallets,
    'tts': this.policylist.tts,
    'tte': this.policylist.tte,
    'walletAddressWhitelist': '',
    'walletId': this.walletid,
    'walletAddresslist': [
    ]

   };
  this.policylist['WalletAddresslist'] = [];
  if (this.itemvalue.walletaddress) {
    this.WalletAddressWhitelist.push(this.itemvalue.walletaddress);
  }
  // this.policylist.WalletAddresslist = this.WalletAddressWhitelist;
  // this.walletaddressinfo.push(this.WalletAddressWhitelist);
  this.WalletAddressWhitelist.forEach(element => {
    this.obj.walletAddresslist.push(element);
  });
// this.policylist.WalletAddresslist.push(this.WalletAddressWhitelist);
this.policylist['userId'] = this.ownerId;
const url = 'user/policy/update-policy';
this.generalservice.generalServiceInfo(url, 'post', this.obj)
                    .subscribe(
                      res => {
                        const response: any = res.status;
                        if (response === 'success') {
                          this.ss.ToasterMessage(res['message']);
                          document.getElementById('modalButton1').click();
                        this.loadpolicies();
                        this.router.navigateByUrl('/fusang/walletcreate');
                        } else if (response === 'failure') {
                          this.ss.ToasterMessage(res['message']);
                          document.getElementById('modalButton1').click();
                        }
                      },
                      e => {
                      },
                      () => {
                      }
                    );
}
removewalletaddress1() {
}
cancelrequest() {
  this.router.navigate(['/fusang/walletcreate']);
}
}
