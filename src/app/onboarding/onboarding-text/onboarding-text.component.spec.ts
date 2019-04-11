import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnboardingTextComponent } from './onboarding-text.component';

describe('OnboardingTextComponent', () => {
  let component: OnboardingTextComponent;
  let fixture: ComponentFixture<OnboardingTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnboardingTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnboardingTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
