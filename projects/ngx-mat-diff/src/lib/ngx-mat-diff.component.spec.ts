import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatDiffComponent } from './ngx-mat-diff.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { NgxMatDiffService } from './ngx-mat-diff.service';
import { NgxMatTextContainerComponent } from './components/ngx-mat-text-container/ngx-mat-text-container.component';
import { NgxMatDiffLeftDirective } from './directives/ngx-mat-diff-left/ngx-mat-diff-left.directive';
import { NgxMatDiffRightDirective } from './directives/ngx-mat-diff-right/ngx-mat-diff-right.directive';

describe('NgxMatDiffComponent', () => {
  let component: NgxMatDiffComponent;
  let fixture: ComponentFixture<NgxMatDiffComponent>;
  let diffService: NgxMatDiffService;
  let spy: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NgxMatDiffComponent, NgxMatTextContainerComponent, NgxMatDiffLeftDirective],
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
});
