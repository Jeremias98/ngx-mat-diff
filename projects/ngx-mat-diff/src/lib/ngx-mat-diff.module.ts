import { NgModule } from '@angular/core';
import { NgxMatDiffComponent } from './ngx-mat-diff.component';
import { NgxMatDiffService } from './ngx-mat-diff.service';
import { CommonModule } from '@angular/common';
import { NgxMatTextContainerComponent } from './components/ngx-mat-text-container/ngx-mat-text-container.component';
import { NgxMatDiffRightDirective } from './directives/ngx-mat-diff-right/ngx-mat-diff-right.directive';
import { NgxMatDiffLeftDirective } from './directives/ngx-mat-diff-left/ngx-mat-diff-left.directive';



@NgModule({
  declarations: [NgxMatDiffComponent, NgxMatTextContainerComponent, NgxMatDiffRightDirective, NgxMatDiffLeftDirective],
  imports: [
    CommonModule
  ],
  exports: [NgxMatDiffComponent],
  providers: [NgxMatDiffService]
})
export class NgxMatDiffModule { }
