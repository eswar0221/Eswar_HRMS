import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpRegAllComponent } from './emp-reg-all.component';

describe('EmpRegAllComponent', () => {
  let component: EmpRegAllComponent;
  let fixture: ComponentFixture<EmpRegAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpRegAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpRegAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
