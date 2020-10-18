import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddticketsComponent } from './addtickets.component';

describe('AddticketsComponent', () => {
  let component: AddticketsComponent;
  let fixture: ComponentFixture<AddticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
