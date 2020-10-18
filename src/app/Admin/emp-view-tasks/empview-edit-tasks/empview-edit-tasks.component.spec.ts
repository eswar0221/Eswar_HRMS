import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpviewEditTasksComponent } from './empview-edit-tasks.component';

describe('EmpviewEditTasksComponent', () => {
  let component: EmpviewEditTasksComponent;
  let fixture: ComponentFixture<EmpviewEditTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpviewEditTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpviewEditTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
