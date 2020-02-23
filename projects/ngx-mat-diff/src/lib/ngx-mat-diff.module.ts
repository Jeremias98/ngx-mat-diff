import { NgModule } from '@angular/core';
import { NgxMatDiffComponent } from './ngx-mat-diff.component';
import { NgxMatDiffService } from './ngx-mat-diff.service';
import { CommonModule } from '@angular/common';
import { NgxMatTextContainerComponent } from './components/ngx-mat-text-container/ngx-mat-text-container.component';



@NgModule({
  declarations: [NgxMatDiffComponent, NgxMatTextContainerComponent],
  imports: [
    CommonModule
  ],
  exports: [NgxMatDiffComponent],
  providers: [NgxMatDiffService]
})
export class NgxMatDiffModule { }
