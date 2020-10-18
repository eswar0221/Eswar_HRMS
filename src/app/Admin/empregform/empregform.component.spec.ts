import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpregformComponent } from './empregform.component';

describe('EmpregformComponent', () => {
  let component: EmpregformComponent;
  let fixture: ComponentFixture<EmpregformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpregformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpregformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
