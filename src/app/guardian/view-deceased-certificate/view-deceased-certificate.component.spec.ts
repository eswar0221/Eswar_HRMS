import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDeceasedCertificateComponent } from './view-deceased-certificate.component';

describe('ViewDeceasedCertificateComponent', () => {
  let component: ViewDeceasedCertificateComponent;
  let fixture: ComponentFixture<ViewDeceasedCertificateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDeceasedCertificateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDeceasedCertificateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
