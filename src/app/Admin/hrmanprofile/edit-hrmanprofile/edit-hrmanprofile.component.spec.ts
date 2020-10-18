import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHrmanprofileComponent } from './edit-hrmanprofile.component';

describe('EditHrmanprofileComponent', () => {
  let component: EditHrmanprofileComponent;
  let fixture: ComponentFixture<EditHrmanprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHrmanprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHrmanprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
