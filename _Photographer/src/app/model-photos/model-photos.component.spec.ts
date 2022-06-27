import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelPhotosComponent } from './model-photos.component';

describe('ModelPhotosComponent', () => {
  let component: ModelPhotosComponent;
  let fixture: ComponentFixture<ModelPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModelPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
