import { Directive, ElementRef, AfterViewInit, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { NgxMatDiffService } from '../../ngx-mat-diff.service';
import { DiffText } from '../../models/diff-text/diff-text.model';

@Directive({
  selector: '[ngxMatDiffRight]'
})
export class NgxMatDiffRightDirective extends DiffText implements OnInit, AfterViewInit {

  constructor(public el: ElementRef, public diffService: NgxMatDiffService, public cdr: ChangeDetectorRef) {
    super(el, diffService, cdr);
  }

  setText() {
    this.diffService.setRightText(this.getValue());
  }

}
