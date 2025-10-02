import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UploadBicyclePage } from './upload-bicycle.page';

describe('UploadBicyclePage', () => {
  let component: UploadBicyclePage;
  let fixture: ComponentFixture<UploadBicyclePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadBicyclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
