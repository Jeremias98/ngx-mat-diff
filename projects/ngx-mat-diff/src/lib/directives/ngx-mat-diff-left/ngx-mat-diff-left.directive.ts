import { Directive, ElementRef, AfterViewInit, OnInit, ChangeDetectorRef } from '@angular/core';
import { NgxMatDiffService } from '../../ngx-mat-diff.service';
import { DiffText } from '../../models/diff-text/diff-text.model';

@Directive({
  selector: '[ngxMatDiffLeft]'
})
export class NgxMatDiffLeftDirective extends DiffText implements OnInit, AfterViewInit {

  constructor(public el: ElementRef, public diffService: NgxMatDiffService, public cdr: ChangeDetectorRef) {
    super(el, diffService, cdr);
  }

  setText() {
    this.diffService.setLeftText(this.getValue());
  }

}
