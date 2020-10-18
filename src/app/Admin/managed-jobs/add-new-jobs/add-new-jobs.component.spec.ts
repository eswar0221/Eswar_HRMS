import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewJobsComponent } from './add-new-jobs.component';

describe('AddNewJobsComponent', () => {
  let component: AddNewJobsComponent;
  let fixture: ComponentFixture<AddNewJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
