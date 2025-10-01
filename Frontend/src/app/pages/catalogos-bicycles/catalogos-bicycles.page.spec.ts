import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CatalogosBicyclesPage } from './catalogos-bicycles.page';

describe('CatalogosBicyclesPage', () => {
  let component: CatalogosBicyclesPage;
  let fixture: ComponentFixture<CatalogosBicyclesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogosBicyclesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
