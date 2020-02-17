import { NgModule } from '@angular/core';
import { NgxMatDiffComponent } from './ngx-mat-diff.component';
import { NgxMatDiffService } from './ngx-mat-diff.service';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [NgxMatDiffComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxMatDiffComponent],
  providers: [NgxMatDiffService]
})
export class NgxMatDiffModule { }
