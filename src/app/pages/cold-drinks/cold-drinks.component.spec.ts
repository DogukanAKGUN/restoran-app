import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColdDrinksComponent } from './cold-drinks.component';

describe('ColdDrinksComponent', () => {
  let component: ColdDrinksComponent;
  let fixture: ComponentFixture<ColdDrinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ColdDrinksComponent]
    });
    fixture = TestBed.createComponent(ColdDrinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
