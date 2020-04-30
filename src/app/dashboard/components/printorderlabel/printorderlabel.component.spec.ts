import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintorderlabelComponent } from './printorderlabel.component';

describe('PrintorderlabelComponent', () => {
  let component: PrintorderlabelComponent;
  let fixture: ComponentFixture<PrintorderlabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintorderlabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintorderlabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
