import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmployeeSalaryComponent } from './edit-employee-salary.component';

describe('EditEmployeeSalaryComponent', () => {
  let component: EditEmployeeSalaryComponent;
  let fixture: ComponentFixture<EditEmployeeSalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmployeeSalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmployeeSalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
