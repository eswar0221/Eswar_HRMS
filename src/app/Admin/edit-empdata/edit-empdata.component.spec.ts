import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEmpdataComponent } from './edit-empdata.component';

describe('EditEmpdataComponent', () => {
  let component: EditEmpdataComponent;
  let fixture: ComponentFixture<EditEmpdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEmpdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEmpdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
