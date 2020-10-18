import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewTasksComponent } from './emp-view-tasks.component';

describe('EmpViewTasksComponent', () => {
  let component: EmpViewTasksComponent;
  let fixture: ComponentFixture<EmpViewTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpViewTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpViewTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
