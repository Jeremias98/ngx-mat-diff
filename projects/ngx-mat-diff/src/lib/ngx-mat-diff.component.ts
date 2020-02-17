import { Component, OnInit } from '@angular/core';
import { NgxMatDiffService } from './ngx-mat-diff.service';

@Component({
  selector: 'ngx-mat-diff',
  templateUrl: './ngx-mat-diff.template.html',
  styles: ['./ngx-mat-diff.style.scss']
})
export class NgxMatDiffComponent implements OnInit {

  constructor(public diffService: NgxMatDiffService) { }

  left: string = "La casa grande es de madera";
  right: string = "La casa chica es de madera";

  ngOnInit() {
    this.diffService.setLeftText(this.left);
    this.diffService.setRightText(this.right);
  }

}
