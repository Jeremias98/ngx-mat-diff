import { State } from './state'

export class Keep implements State {

    line: string;

    constructor(line: string) {
        this.line = line;
    }

    symbol(): string {
        return "";
    }
    color(): string {
        return "black";
    }

    getLine() {
        return this.line;
    }

}