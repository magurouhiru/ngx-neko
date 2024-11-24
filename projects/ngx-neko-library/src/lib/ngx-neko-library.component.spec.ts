import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxNekoLibraryComponent } from './ngx-neko-library.component';

describe('NgxNekoLibraryComponent', () => {
  let component: NgxNekoLibraryComponent;
  let fixture: ComponentFixture<NgxNekoLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxNekoLibraryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NgxNekoLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
