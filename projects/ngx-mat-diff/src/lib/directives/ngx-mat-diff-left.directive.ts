import { Directive, ElementRef, AfterViewInit, OnInit, HostListener, ChangeDetectorRef } from '@angular/core';
import { NgxMatDiffService } from '../ngx-mat-diff.service';

@Directive({
  selector: '[ngxMatDiffLeft]'
})
export class NgxMatDiffLeftDirective implements OnInit, AfterViewInit {

  constructor(public el: ElementRef, public diffService: NgxMatDiffService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.setText();
  }

  setText() {
    this.diffService.setLeftText(this.getValue());
  }

  getValue(): string {
    let textValue: string = this.el.nativeElement.value ? this.el.nativeElement.value : this.el.nativeElement.innerText;
    return textValue;
  }

  ngAfterViewInit(): void {
    this.setText();
    this.cdr.detectChanges();
  }

  @HostListener('keyup') onKeyUp() {
    this.setText();
  }


}
