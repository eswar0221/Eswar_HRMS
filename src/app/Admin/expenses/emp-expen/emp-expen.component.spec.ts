import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpExpenComponent } from './emp-expen.component';

describe('EmpExpenComponent', () => {
  let component: EmpExpenComponent;
  let fixture: ComponentFixture<EmpExpenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpExpenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpExpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
