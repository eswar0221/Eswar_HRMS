import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHRLeavesComponent } from './all-hr-leaves.component';

describe('AllHRLeavesComponent', () => {
  let component: AllHRLeavesComponent;
  let fixture: ComponentFixture<AllHRLeavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllHRLeavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllHRLeavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
