import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardflowComponent } from './onboardflow.component';

describe('OnboardflowComponent', () => {
  let component: OnboardflowComponent;
  let fixture: ComponentFixture<OnboardflowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardflowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
