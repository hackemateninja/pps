import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintPickSlipComponent } from './print-pick-slip.component';

describe('PrintPickSlipComponent', () => {
  let component: PrintPickSlipComponent;
  let fixture: ComponentFixture<PrintPickSlipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintPickSlipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintPickSlipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
