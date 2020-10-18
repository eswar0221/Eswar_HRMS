import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpInvoiceComponent } from './exp-invoice.component';

describe('ExpInvoiceComponent', () => {
  let component: ExpInvoiceComponent;
  let fixture: ComponentFixture<ExpInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
