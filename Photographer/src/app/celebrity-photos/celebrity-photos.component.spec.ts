import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CelebrityPhotosComponent } from './celebrity-photos.component';

describe('CelebrityPhotosComponent', () => {
  let component: CelebrityPhotosComponent;
  let fixture: ComponentFixture<CelebrityPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CelebrityPhotosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CelebrityPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
