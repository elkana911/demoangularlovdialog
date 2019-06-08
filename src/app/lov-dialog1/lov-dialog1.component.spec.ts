import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LovDialog1Component } from './lov-dialog1.component';

describe('LovDialog1Component', () => {
  let component: LovDialog1Component;
  let fixture: ComponentFixture<LovDialog1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LovDialog1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LovDialog1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
