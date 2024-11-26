import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample03Component } from './sample03.component';

describe('Sample03Component', () => {
  let component: Sample03Component;
  let fixture: ComponentFixture<Sample03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sample03Component],
    }).compileComponents();

    fixture = TestBed.createComponent(Sample03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
