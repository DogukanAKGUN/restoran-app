import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecreamComponent } from './icecream.component';

describe('IcecreamComponent', () => {
  let component: IcecreamComponent;
  let fixture: ComponentFixture<IcecreamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcecreamComponent]
    });
    fixture = TestBed.createComponent(IcecreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
