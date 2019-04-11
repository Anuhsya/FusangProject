import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenarateReportComponent } from './genarate-report.component';

describe('GenarateReportComponent', () => {
  let component: GenarateReportComponent;
  let fixture: ComponentFixture<GenarateReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenarateReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenarateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
