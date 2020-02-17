import { State } from './state'

export class Insert implements State {

    line: string;

    constructor(line: string) {
        this.line = line;
    }

    symbol(): string {
        return "+";
    }
    color(): string {
        return "green";
    }

    getLine() {
        return this.line;
    }

}