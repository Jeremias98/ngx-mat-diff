import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatDiffComponent } from './ngx-mat-diff.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgxMatDiffService } from './ngx-mat-diff.service';

describe('NgxMatDiffComponent', () => {
  let component: NgxMatDiffComponent;
  let fixture: ComponentFixture<NgxMatDiffComponent>;
  let diffService: NgxMatDiffService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMatDiffComponent],
      providers: [
        NgxMatDiffService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    diffService = new NgxMatDiffService();
    fixture = TestBed.createComponent(NgxMatDiffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should have a left text container', () => {
    let textarea: DebugElement = fixture.debugElement.query(By.css('.left-text-container'));
    expect(textarea).toBeTruthy();
  });

  it('Should have a right text container', () => {
    let textarea: DebugElement = fixture.debugElement.query(By.css('.right-text-container'));
    expect(textarea).toBeTruthy();
  });

  // it('Should have a left text container with', () => {
  //   let textarea: DebugElement = fixture.debugElement.query(By.css('.left-text-container'));
  //   expect(textarea).toBeTruthy();
  // });

  // it('Should have a right text container', () => {
  //   let textarea: DebugElement = fixture.debugElement.query(By.css('.right-text-container'));
  //   expect(textarea).toBeTruthy();
  // });
});
