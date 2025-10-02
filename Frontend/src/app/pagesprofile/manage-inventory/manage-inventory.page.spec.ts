import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageInventoryPage } from './manage-inventory.page';

describe('ManageInventoryPage', () => {
  let component: ManageInventoryPage;
  let fixture: ComponentFixture<ManageInventoryPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageInventoryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
