import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManviewleavesComponent } from './manviewleaves.component';

describe('ManviewleavesComponent', () => {
  let component: ManviewleavesComponent;
  let fixture: ComponentFixture<ManviewleavesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManviewleavesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManviewleavesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
