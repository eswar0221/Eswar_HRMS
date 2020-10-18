import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpBankAcComponent } from './emp-bank-ac.component';

describe('EmpBankAcComponent', () => {
  let component: EmpBankAcComponent;
  let fixture: ComponentFixture<EmpBankAcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpBankAcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpBankAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
