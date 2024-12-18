import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecherchesArtisansComponent } from './recherches-artisans.component';

describe('RecherchesArtisansComponent', () => {
  let component: RecherchesArtisansComponent;
  let fixture: ComponentFixture<RecherchesArtisansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecherchesArtisansComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecherchesArtisansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
