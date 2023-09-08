import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditItemsComponent } from './edit-items.component';

describe('EditItemsComponent', () => {
  let component: EditItemsComponent;
  let fixture: ComponentFixture<EditItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditItemsComponent]
    });
    fixture = TestBed.createComponent(EditItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
