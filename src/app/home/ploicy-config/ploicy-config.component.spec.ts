import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PloicyConfigComponent } from './ploicy-config.component';

describe('PloicyConfigComponent', () => {
  let component: PloicyConfigComponent;
  let fixture: ComponentFixture<PloicyConfigComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PloicyConfigComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PloicyConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
