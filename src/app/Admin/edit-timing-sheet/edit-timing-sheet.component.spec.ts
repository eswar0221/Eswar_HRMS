import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTimingSheetComponent } from './edit-timing-sheet.component';

describe('EditTimingSheetComponent', () => {
  let component: EditTimingSheetComponent;
  let fixture: ComponentFixture<EditTimingSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTimingSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTimingSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
