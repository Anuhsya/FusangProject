import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletCreatInfoComponent } from './wallet-creat-info.component';

describe('WalletCreatInfoComponent', () => {
  let component: WalletCreatInfoComponent;
  let fixture: ComponentFixture<WalletCreatInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalletCreatInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalletCreatInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
