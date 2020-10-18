import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageForgotPassComponent } from './manage-forgot-pass.component';

describe('ManageForgotPassComponent', () => {
  let component: ManageForgotPassComponent;
  let fixture: ComponentFixture<ManageForgotPassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageForgotPassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageForgotPassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
