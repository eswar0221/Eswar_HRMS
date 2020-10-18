import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHrManagerComponent } from './edit-hr-manager.component';

describe('EditHrManagerComponent', () => {
  let component: EditHrManagerComponent;
  let fixture: ComponentFixture<EditHrManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHrManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHrManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
