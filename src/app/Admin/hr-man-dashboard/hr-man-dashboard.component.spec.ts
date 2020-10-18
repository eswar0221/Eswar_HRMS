import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrManDashboardComponent } from './hr-man-dashboard.component';

describe('HrManDashboardComponent', () => {
  let component: HrManDashboardComponent;
  let fixture: ComponentFixture<HrManDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrManDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrManDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
