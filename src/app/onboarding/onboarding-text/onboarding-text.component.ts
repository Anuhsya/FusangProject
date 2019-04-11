import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-onboarding-text',
  templateUrl: './onboarding-text.component.html',
  styleUrls: ['./onboarding-text.component.css']
})
export class OnboardingTextComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input('title') titleOfpage: string;
}
