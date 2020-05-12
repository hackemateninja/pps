import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcModalComponent } from './upc-modal.component';

describe('UpcModalComponent', () => {
  let component: UpcModalComponent;
  let fixture: ComponentFixture<UpcModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
