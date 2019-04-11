import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterErrorModalComponent } from './toaster-error-modal.component';

describe('ToasterErrorModalComponent', () => {
  let component: ToasterErrorModalComponent;
  let fixture: ComponentFixture<ToasterErrorModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToasterErrorModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
