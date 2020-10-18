import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrManComponent } from './hr-man.component';

describe('HrManComponent', () => {
  let component: HrManComponent;
  let fixture: ComponentFixture<HrManComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrManComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrManComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
