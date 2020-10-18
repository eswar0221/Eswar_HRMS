import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpBankComponent } from './edit-emp-bank.component';

describe('EditEmpBankComponent', () => {
  let component: EditEmpBankComponent;
  let fixture: ComponentFixture<EditEmpBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmpBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
