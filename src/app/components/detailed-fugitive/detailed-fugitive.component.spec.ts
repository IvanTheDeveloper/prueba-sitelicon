import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedFugitiveComponent } from './detailed-fugitive.component';

describe('DetailedFugitiveComponent', () => {
  let component: DetailedFugitiveComponent;
  let fixture: ComponentFixture<DetailedFugitiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailedFugitiveComponent]
    });
    fixture = TestBed.createComponent(DetailedFugitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
