import { State } from './state'

export class Remove implements State {

    line: string;

    constructor(line: string) {
        this.line = line;
    }

    symbol(): string {
        return "-";
    }
    color(): string {
        return "red";
    }
    
    getLine() {
        return this.line;
    }

}