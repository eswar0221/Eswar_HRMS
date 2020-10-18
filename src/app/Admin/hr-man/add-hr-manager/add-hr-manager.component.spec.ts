import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHrManagerComponent } from './add-hr-manager.component';

describe('AddHrManagerComponent', () => {
  let component: AddHrManagerComponent;
  let fixture: ComponentFixture<AddHrManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHrManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHrManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
