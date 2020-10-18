import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstimatesComponent } from './edit-estimates.component';

describe('EditEstimatesComponent', () => {
  let component: EditEstimatesComponent;
  let fixture: ComponentFixture<EditEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
