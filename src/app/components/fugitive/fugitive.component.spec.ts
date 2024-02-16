import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FugitiveComponent } from './fugitive.component';

describe('FugitiveComponent', () => {
  let component: FugitiveComponent;
  let fixture: ComponentFixture<FugitiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FugitiveComponent]
    });
    fixture = TestBed.createComponent(FugitiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
