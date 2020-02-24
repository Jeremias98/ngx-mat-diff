import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatTextContainerComponent } from './ngx-mat-text-container.component';

describe('NgxMatTextContainerComponent', () => {
  let component: NgxMatTextContainerComponent;
  let fixture: ComponentFixture<NgxMatTextContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatTextContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatTextContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

});
