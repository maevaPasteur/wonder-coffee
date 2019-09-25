import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayeBtnComponent } from './paye-btn.component';

describe('PayeBtnComponent', () => {
  let component: PayeBtnComponent;
  let fixture: ComponentFixture<PayeBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayeBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
