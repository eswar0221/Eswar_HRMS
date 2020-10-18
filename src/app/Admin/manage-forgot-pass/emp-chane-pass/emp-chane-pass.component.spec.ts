import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpChanePassComponent } from './emp-chane-pass.component';

describe('EmpChanePassComponent', () => {
  let component: EmpChanePassComponent;
  let fixture: ComponentFixture<EmpChanePassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpChanePassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpChanePassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
