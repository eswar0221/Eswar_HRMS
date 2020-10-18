import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingSheetComponent } from './timing-sheet.component';

describe('TimingSheetComponent', () => {
  let component: TimingSheetComponent;
  let fixture: ComponentFixture<TimingSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
