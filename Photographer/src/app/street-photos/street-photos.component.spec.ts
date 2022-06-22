import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreetPhotosComponent } from './street-photos.component';

describe('StreetPhotosComponent', () => {
  let component: StreetPhotosComponent;
  let fixture: ComponentFixture<StreetPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreetPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StreetPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
