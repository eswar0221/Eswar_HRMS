import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEstimatesComponent } from './add-estimates.component';

describe('AddEstimatesComponent', () => {
  let component: AddEstimatesComponent;
  let fixture: ComponentFixture<AddEstimatesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEstimatesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEstimatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
