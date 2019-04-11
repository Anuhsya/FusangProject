import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InviteCustomersComponent } from './invite-customers.component';

describe('InviteCustomersComponent', () => {
  let component: InviteCustomersComponent;
  let fixture: ComponentFixture<InviteCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InviteCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InviteCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
