import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTimingSheetComponent } from './add-timing-sheet.component';

describe('AddTimingSheetComponent', () => {
  let component: AddTimingSheetComponent;
  let fixture: ComponentFixture<AddTimingSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTimingSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTimingSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
