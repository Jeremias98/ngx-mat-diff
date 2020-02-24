import { NgxMatDiffLeftDirective } from './ngx-mat-diff-left.directive';
import { NgxMatDiffService } from '../../ngx-mat-diff.service';
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

@Component({
  template: `<textarea ngxMatDiffLeft></textarea>`
})
class TestTextAreaComponent { constructor(public diffService: NgxMatDiffService) { } }

describe('NgxMatDiffLeftDirective using Textarea', () => {

  let fixtureTextArea: ComponentFixture<TestTextAreaComponent>;
  let componentTextArea: TestTextAreaComponent;

  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestTextAreaComponent, NgxMatDiffLeftDirective],
      providers: [NgxMatDiffService]
    });
    fixtureTextArea = TestBed.createComponent(TestTextAreaComponent);
    componentTextArea = fixtureTextArea.componentInstance;
  });

  it('Should create an instance', () => {
    const directiveEl = fixtureTextArea.debugElement.query(By.directive(NgxMatDiffLeftDirective));
    expect(directiveEl).toBeTruthy();
  });

  it('Should get value from textarea', () => {
    const directiveEl = fixtureTextArea.debugElement.query(By.directive(NgxMatDiffLeftDirective));
    const directiveInstance: NgxMatDiffLeftDirective = directiveEl.injector.get(NgxMatDiffLeftDirective);

    inputEl = fixtureTextArea.debugElement.query(By.css('textarea'));

    inputEl.nativeElement.value = 'Expected value';
    expect(directiveInstance.getValue()).toBe('Expected value');

  });

});

@Component({
  template: `<div ngxMatDiffLeft>Expected inner text</div>`
})
class TestDivComponent { constructor(public diffService: NgxMatDiffService) { } }

describe('NgxMatDiffLeftDirective using innerText', () => {

  let fixtureDivComponent: ComponentFixture<TestDivComponent>;
  let componentDiv: TestDivComponent;

  let inputEl: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestDivComponent, NgxMatDiffLeftDirective],
      providers: [NgxMatDiffService]
    });

    fixtureDivComponent = TestBed.createComponent(TestDivComponent);
    componentDiv = fixtureDivComponent.componentInstance;
  });

  it('Should create an instance', () => {
    const directiveEl = fixtureDivComponent.debugElement.query(By.directive(NgxMatDiffLeftDirective));
    expect(directiveEl).toBeTruthy();
  });

  it('Should get inner text from div', () => {
    const directiveEl = fixtureDivComponent.debugElement.query(By.directive(NgxMatDiffLeftDirective));
    const directiveInstance: NgxMatDiffLeftDirective = directiveEl.injector.get(NgxMatDiffLeftDirective);

    inputEl = fixtureDivComponent.debugElement.query(By.css('div'));

    // inputEl.nativeElement.value = 'Expected inner text';
    expect(directiveInstance.getValue()).toBe('Expected inner text');

  });

});