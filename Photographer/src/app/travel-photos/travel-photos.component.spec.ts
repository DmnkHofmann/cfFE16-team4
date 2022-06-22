import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelPhotosComponent } from './travel-photos.component';

describe('TravelPhotosComponent', () => {
  let component: TravelPhotosComponent;
  let fixture: ComponentFixture<TravelPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TravelPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
