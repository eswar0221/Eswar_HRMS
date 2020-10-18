import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrBankComponent } from './hr-bank.component';

describe('HrBankComponent', () => {
  let component: HrBankComponent;
  let fixture: ComponentFixture<HrBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
