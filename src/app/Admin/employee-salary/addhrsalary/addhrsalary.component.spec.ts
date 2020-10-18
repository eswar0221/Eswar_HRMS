import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhrsalaryComponent } from './addhrsalary.component';

describe('AddhrsalaryComponent', () => {
  let component: AddhrsalaryComponent;
  let fixture: ComponentFixture<AddhrsalaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhrsalaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhrsalaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
