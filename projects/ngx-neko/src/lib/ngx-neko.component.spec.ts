import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNekoComponent } from './ngx-neko.component';

describe('NgxNekoComponent', () => {
  let component: NgxNekoComponent;
  let fixture: ComponentFixture<NgxNekoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxNekoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxNekoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
