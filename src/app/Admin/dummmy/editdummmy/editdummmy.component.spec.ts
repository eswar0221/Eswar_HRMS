import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditdummmyComponent } from './editdummmy.component';

describe('EditdummmyComponent', () => {
  let component: EditdummmyComponent;
  let fixture: ComponentFixture<EditdummmyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditdummmyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditdummmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
