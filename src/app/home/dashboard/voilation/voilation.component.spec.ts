import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoilationComponent } from './voilation.component';

describe('VoilationComponent', () => {
  let component: VoilationComponent;
  let fixture: ComponentFixture<VoilationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoilationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoilationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
