import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanDrinksComponent } from './can-drinks.component';

describe('CanDrinksComponent', () => {
  let component: CanDrinksComponent;
  let fixture: ComponentFixture<CanDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CanDrinksComponent]
    });
    fixture = TestBed.createComponent(CanDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
