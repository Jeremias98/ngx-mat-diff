import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatDiffComponent } from './ngx-mat-diff.component';

describe('NgxMatDiffComponent', () => {
  let component: NgxMatDiffComponent;
  let fixture: ComponentFixture<NgxMatDiffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatDiffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
