import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxesModalComponent } from './boxes-modal.component';

describe('BoxesModalComponent', () => {
  let component: BoxesModalComponent;
  let fixture: ComponentFixture<BoxesModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxesModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
