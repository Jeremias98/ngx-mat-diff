import { NgxMatDiffLeftDirective } from './ngx-mat-diff-left.directive';
import { NgxMatDiffService } from '../ngx-mat-diff.service';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<textarea ngxMatDiffLeft></textarea><div class='result'>{{diffService.getLeftText()}}</div>`
})
class TestComponent { constructor(public diffService: NgxMatDiffService) { } }

describe('NgxMatDiffLeftDirective', () => {

  let fixture: ComponentFixture<TestComponent>;
  let component: TestComponent;
  let inputEl: DebugElement;
  let resultEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent, NgxMatDiffLeftDirective],
      providers: [NgxMatDiffService]
    });
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('textarea'));
    resultEl = fixture.debugElement.query(By.css('.result'));
  });

  it('Should create an instance', () => {
    const directiveEl = fixture.debugElement.query(By.directive(NgxMatDiffLeftDirective));
    expect(directiveEl).toBeTruthy();
  });

  it('should get value from textarea', () => {
    const directiveEl = fixture.debugElement.query(By.directive(NgxMatDiffLeftDirective));
    const directiveInstance: NgxMatDiffLeftDirective = directiveEl.injector.get(NgxMatDiffLeftDirective);

    inputEl.nativeElement.value = 'Holis';
    expect(directiveInstance.getValue()).toBe('Holis');

  });
});
