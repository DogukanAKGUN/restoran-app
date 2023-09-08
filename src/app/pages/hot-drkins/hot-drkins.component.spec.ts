import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotDrkinsComponent } from './hot-drkins.component';

describe('HotDrkinsComponent', () => {
  let component: HotDrkinsComponent;
  let fixture: ComponentFixture<HotDrkinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotDrkinsComponent]
    });
    fixture = TestBed.createComponent(HotDrkinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
