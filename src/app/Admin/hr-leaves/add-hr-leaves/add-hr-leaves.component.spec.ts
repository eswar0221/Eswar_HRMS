import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHrLeavesComponent } from './add-hr-leaves.component';

describe('AddHrLeavesComponent', () => {
  let component: AddHrLeavesComponent;
  let fixture: ComponentFixture<AddHrLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHrLeavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHrLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
