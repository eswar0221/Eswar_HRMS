import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditManagedjobsComponent } from './edit-managedjobs.component';

describe('EditManagedjobsComponent', () => {
  let component: EditManagedjobsComponent;
  let fixture: ComponentFixture<EditManagedjobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditManagedjobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditManagedjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
