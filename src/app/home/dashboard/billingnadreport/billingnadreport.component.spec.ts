import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingnadreportComponent } from './billingnadreport.component';

describe('BillingnadreportComponent', () => {
  let component: BillingnadreportComponent;
  let fixture: ComponentFixture<BillingnadreportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingnadreportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingnadreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
