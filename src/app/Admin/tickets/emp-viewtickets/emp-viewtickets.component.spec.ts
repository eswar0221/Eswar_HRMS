import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpViewticketsComponent } from './emp-viewtickets.component';

describe('EmpViewticketsComponent', () => {
  let component: EmpViewticketsComponent;
  let fixture: ComponentFixture<EmpViewticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpViewticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpViewticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
