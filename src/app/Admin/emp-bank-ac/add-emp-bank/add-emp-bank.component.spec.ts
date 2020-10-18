import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmpBankComponent } from './add-emp-bank.component';

describe('AddEmpBankComponent', () => {
  let component: AddEmpBankComponent;
  let fixture: ComponentFixture<AddEmpBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmpBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmpBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
