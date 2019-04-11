import { Directive, ElementRef, HostListener, ViewContainerRef, Input} from '@angular/core';
import * as _ from 'lodash';
// import { WalletCreatInfoComponent } from './home/userdashboard/wallet-creat-info/wallet-creat-info.component';
@Directive({
  selector: '[inputkey]'
})
export class InputexpDirective {
    i: any = -1;
    @Input() componentRef:any;
    constructor(private eRef: ElementRef, private _view: ViewContainerRef) { }
    ngOnInit() {
      // this.eRef.nativeElement.value = "3"
      var component = (<any>this._view);
      //TODO: add initialization code here
    }
  // @HostListener('keyup') onkeyup(){
  //   if(this.eRef.nativeElement.value === " "){
  //     this.eRef.nativeElement.value= "";
  //   }
  //   if (!/^[a-zA-Z]*$/g.test(this.eRef.nativeElement.value)) {
  //     this.eRef.nativeElement.value= "";
  // }
  // }
  // @HostListener('document:keydown', ['$event'])
  // handleKeydownEvent(event: KeyboardEvent) {//preventing default event
  //     if(event.which == 40||event.which == 38){
  //       event.preventDefault();
  //       console.log("hi");
  //     }
  // };
  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(this.eRef.nativeElement.getAttribute("aria-expanded")=="true"){
      var childs = document.querySelectorAll("#dropdown-basic > li");
      if(event.which == 40) { // for key down
          event.preventDefault();
          // document.querySelector("#dropdown-basic").setAttribute("class", "dropdown-menu form-control ng-star-inserted show");
          _.forEach(childs, function(value) {
            value.classList.remove('bgColor04');
          })
          this.i++;
          if(this.i >= (childs.length-1)) {
            this.i = childs.length-1;
          }
          childs[this.i].classList.add('bgColor04');
      } else if(event.which == 38) { // for key up
          event.preventDefault();  
          _.forEach(childs, function(value) {
            value.classList.remove('bgColor04');
          })
          this.i--;
          if(this.i <= 0) {
            this.i = 0;
          }
          childs[this.i].classList.add('bgColor04');
      }
    if (event.which == 13) {
      console.log(this.componentRef);
      this.eRef.nativeElement.value = document.querySelector("#dropdown-basic li.bgColor04").innerHTML;
      this.componentRef.model.username = this.eRef.nativeElement.value;
      // this.cw.model.username = this.eRef.nativeElement.value;
      // this.eRef.nativeElement.setAttribute("ng-reflect-model",this.eRef.nativeElement.value);
      this.eRef.nativeElement.parentElement.setAttribute("class", 'group');
      this.eRef.nativeElement.setAttribute("aria-expanded", false);
      document.querySelector("#dropdown-basic").setAttribute("class", "dropdown-menu form-control ng-star-inserted");
    }
    //   if (!/^[a-zA-Z]*$/g.test(this.eRef.nativeElement.value)) {
    //     this.eRef.nativeElement.value= "";
    // }
  }
}
}
