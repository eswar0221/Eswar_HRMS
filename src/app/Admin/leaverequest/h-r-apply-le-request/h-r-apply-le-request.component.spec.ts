import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HRApplyLeRequestComponent } from './h-r-apply-le-request.component';

describe('HRApplyLeRequestComponent', () => {
  let component: HRApplyLeRequestComponent;
  let fixture: ComponentFixture<HRApplyLeRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HRApplyLeRequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HRApplyLeRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
