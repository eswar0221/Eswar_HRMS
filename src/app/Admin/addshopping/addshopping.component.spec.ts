import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshoppingComponent } from './addshopping.component';

describe('AddshoppingComponent', () => {
  let component: AddshoppingComponent;
  let fixture: ComponentFixture<AddshoppingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshoppingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
