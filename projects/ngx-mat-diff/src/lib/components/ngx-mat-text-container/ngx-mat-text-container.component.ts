import { Component, OnInit, Input } from '@angular/core';
import { NgxMatDiffService } from '../../ngx-mat-diff.service';

@Component({
  selector: 'ngx-mat-text-container',
  templateUrl: './ngx-mat-text-container.component.html',
  styleUrls: ['./ngx-mat-text-container.component.scss']
})
export class NgxMatTextContainerComponent implements OnInit {

  constructor(public diffService: NgxMatDiffService) { }

  ngOnInit() {
  }

  getStyle(color: string) {
    return { color: color };
  }

}
