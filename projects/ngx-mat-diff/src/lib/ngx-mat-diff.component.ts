import { Component, OnInit } from '@angular/core';
import { NgxMatDiffService } from './ngx-mat-diff.service';

@Component({
  selector: 'ngx-mat-diff',
  templateUrl: './ngx-mat-diff.template.html',
  styles: ['./ngx-mat-diff.style.scss']
})
export class NgxMatDiffComponent implements OnInit {

  constructor(public diffService: NgxMatDiffService) { }

  left: string = "juguemos en el bosque mientras el lobo no esta";
  right: string = "jurguemos en el vosque mmientras el lobo no esta";

  ngOnInit() {
    // this.diffService.setLeftText(this.left);
    // this.diffService.setRightText(this.right);
  }
  getStyle(color: string) {
    return { color: color };
  }
}
