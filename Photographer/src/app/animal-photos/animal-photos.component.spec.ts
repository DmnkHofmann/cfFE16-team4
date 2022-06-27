import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalPhotosComponent } from './animal-photos.component';

describe('AnimalPhotosComponent', () => {
  let component: AnimalPhotosComponent;
  let fixture: ComponentFixture<AnimalPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimalPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimalPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
