import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHrBankComponent } from './edit-hr-bank.component';

describe('EditHrBankComponent', () => {
  let component: EditHrBankComponent;
  let fixture: ComponentFixture<EditHrBankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHrBankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHrBankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
