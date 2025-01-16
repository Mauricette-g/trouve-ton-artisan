import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeilleursArtisansComponent } from './meilleurs-artisans.component';

describe('MeilleursArtisansComponent', () => {
  let component: MeilleursArtisansComponent;
  let fixture: ComponentFixture<MeilleursArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeilleursArtisansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeilleursArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
