import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToasterInfoModalComponent } from './toaster-info-modal.component';

describe('ToasterInfoModalComponent', () => {
  let component: ToasterInfoModalComponent;
  let fixture: ComponentFixture<ToasterInfoModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToasterInfoModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToasterInfoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
