import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeceasedLookupComponent } from './deceased-lookup.component';

describe('DeceasedLookupComponent', () => {
  let component: DeceasedLookupComponent;
  let fixture: ComponentFixture<DeceasedLookupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeceasedLookupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeceasedLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
