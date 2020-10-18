import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewsLeavesComponent } from './emp-views-leaves.component';

describe('EmpViewsLeavesComponent', () => {
  let component: EmpViewsLeavesComponent;
  let fixture: ComponentFixture<EmpViewsLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpViewsLeavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpViewsLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
