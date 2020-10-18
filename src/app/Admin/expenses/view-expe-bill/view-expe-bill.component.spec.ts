import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExpeBillComponent } from './view-expe-bill.component';

describe('ViewExpeBillComponent', () => {
  let component: ViewExpeBillComponent;
  let fixture: ComponentFixture<ViewExpeBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewExpeBillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewExpeBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
