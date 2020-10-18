import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProvidentFundComponent } from './add-provident-fund.component';

describe('AddProvidentFundComponent', () => {
  let component: AddProvidentFundComponent;
  let fixture: ComponentFixture<AddProvidentFundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProvidentFundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProvidentFundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
