import { State } from '../state/state';

export class Frontier {
    x: number;
    history: State[];

    constructor(x: number = 0, history: State[] = []) {
        this.x = x;
        this.history = history;
    }
}