import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalPolicyComponent } from './global-policy.component';

describe('GlobalPolicyComponent', () => {
  let component: GlobalPolicyComponent;
  let fixture: ComponentFixture<GlobalPolicyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalPolicyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalPolicyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
