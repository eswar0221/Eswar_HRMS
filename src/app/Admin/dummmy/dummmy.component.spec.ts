import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DummmyComponent } from './dummmy.component';

describe('DummmyComponent', () => {
  let component: DummmyComponent;
  let fixture: ComponentFixture<DummmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DummmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DummmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
