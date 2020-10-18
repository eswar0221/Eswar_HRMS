import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDesignationsComponent } from './edit-designations.component';

describe('EditDesignationsComponent', () => {
  let component: EditDesignationsComponent;
  let fixture: ComponentFixture<EditDesignationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDesignationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDesignationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
