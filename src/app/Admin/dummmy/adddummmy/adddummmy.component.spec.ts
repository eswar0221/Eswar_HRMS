import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddummmyComponent } from './adddummmy.component';

describe('AdddummmyComponent', () => {
  let component: AdddummmyComponent;
  let fixture: ComponentFixture<AdddummmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdddummmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdddummmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
