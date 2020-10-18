import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHrBankComponent } from './add-hr-bank.component';

describe('AddHrBankComponent', () => {
  let component: AddHrBankComponent;
  let fixture: ComponentFixture<AddHrBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHrBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHrBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
