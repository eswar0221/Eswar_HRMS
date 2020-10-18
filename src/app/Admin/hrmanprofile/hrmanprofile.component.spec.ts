import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrmanprofileComponent } from './hrmanprofile.component';

describe('HrmanprofileComponent', () => {
  let component: HrmanprofileComponent;
  let fixture: ComponentFixture<HrmanprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrmanprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrmanprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
