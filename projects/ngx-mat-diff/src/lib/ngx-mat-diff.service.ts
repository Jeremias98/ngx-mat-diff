import { Injectable } from '@angular/core';
import { Frontier } from './clases/diff/frontier';
import { State } from './clases/state/state';
import { Insert } from './clases/state/insert';
import { Remove } from './clases/state/remove';
import { Keep } from './clases/state/keep';

@Injectable({
  providedIn: 'root'
})
export class NgxMatDiffService {

  private leftText: string;
  private rightText: string;

  constructor() {
    this.leftText = undefined;
    this.rightText = undefined;
  }

  diff(): State[] {
    let frontiers: Frontier[] = [];

    let leftMax: number = this.getLeftLength();
    let rightMax: number = this.getRightLength();

    let max: number = (leftMax + rightMax);

    if (!max) return [];

    for (let i = -max; i <= max; i++) {
      let frontier: Frontier = new Frontier();
      frontiers.push(frontier);
    }

    let x: number = undefined;
    let y: number = undefined;
    let oldX: number = undefined;
    let history: State[] = [];

    for (let d: number = 0; d <= max; d++) {
      for (let k: number = -d; k <= d; k += 2) {
        let goDown: boolean = (k == -d || (k != d && frontiers[k - 1].x < frontiers[k + 1].x));

        if (goDown) {
          oldX = frontiers[k + 1].x;
          history = frontiers[k + 1].history;
          x = oldX;
        }
        else {
          oldX = frontiers[k - 1].x;
          history = frontiers[k - 1].history;
          x = oldX + 1;
        }

        history = Object.assign([], history);
        y = x - k;

        if (1 <= y && y <= rightMax && goDown) {
          history.push(new Insert(this.getSplittedRightText()[y - 1]));
        }
        else if (1 <= x && x <= leftMax) {
          history.push(new Remove(this.getSplittedLeftText()[x - 1]));
        }

        while (x < leftMax && y < rightMax && this.getSplittedLeftText()[x] == this.getSplittedRightText()[y]) {
          x += 1;
          y += 1;
          history.push(new Keep(this.getSplittedLeftText()[x - 1]));
        }

        if (x >= leftMax && y >= rightMax) return history;
        else frontiers[k] = new Frontier(x, history);
      }
    }

  }

  getLeftText(): string {
    return this.leftText;
  }

  getRightText(): string {
    return this.rightText;
  }

  getSplittedLeftText(): string[] {
    if (!this.leftText) return [];
    return this.leftText.split(" ");
  }

  getSplittedRightText(): string[] {
    if (!this.rightText) return [];
    return this.rightText.split(" ");
  }

  getLeftLength(): number {
    return this.getSplittedLeftText().length;
  }

  getRightLength(): number {
    return this.getSplittedRightText().length;
  }

  setLeftText(text: string): void {
    this.leftText = text;
  }

  setRightText(text: string): void {
    this.rightText = text;
  }
}
