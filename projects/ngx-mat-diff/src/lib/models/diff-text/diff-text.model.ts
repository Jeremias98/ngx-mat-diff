import { NgxMatDiffService } from '../../ngx-mat-diff.service';
import { ElementRef, HostListener, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';

export abstract class DiffText implements OnInit, AfterViewInit {

    diffService: NgxMatDiffService;
    element: ElementRef;
    cdr: ChangeDetectorRef;

    constructor(element: ElementRef, diffService: NgxMatDiffService, cdr: ChangeDetectorRef) {
        this.diffService = diffService;
        this.element = element;
        this.cdr = cdr;
    }

    abstract setText();

    ngOnInit(): void {
        this.setText();
    }

    ngAfterViewInit(): void {
        this.setText();
        this.cdr.detectChanges();
    }

    getValue(): string {
        let textValue: string = this.element.nativeElement.value ? this.element.nativeElement.value : this.element.nativeElement.innerText;
        return textValue;
    }

    @HostListener('keyup') onKeyUp() {
        this.setText();
    }
}