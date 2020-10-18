import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrApplyViewLeavesComponent } from './hr-apply-view-leaves.component';

describe('HrApplyViewLeavesComponent', () => {
  let component: HrApplyViewLeavesComponent;
  let fixture: ComponentFixture<HrApplyViewLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrApplyViewLeavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrApplyViewLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
