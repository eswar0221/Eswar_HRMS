import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRegisterComponent } from './manage-register.component';

describe('ManageRegisterComponent', () => {
  let component: ManageRegisterComponent;
  let fixture: ComponentFixture<ManageRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
