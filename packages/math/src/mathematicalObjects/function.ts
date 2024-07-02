import { NumericList } from "../utilityObjects/list";
import { linspace } from "../utils/main";
import * as numbers from "numbers";

export type FuncType = (n: number, ...x: number[]) => number;

type RangeType = [number, number][]

export class ExtendedFunction {
    _f: FuncType;
    private argLength: number
    constructor(func: FuncType) {
        this._f = func;
        this.argLength = func.length
    }
    get f(){
        return this._f
    }
    set f(fnc: FuncType){
        this._f = fnc
        this.argLength = fnc.length
    }
    /** Calculates the limit at x */
    limit(
        x: number,
        approach: "left" | "right" | "middle" = "middle",
    ) {
        return numbers.calculus.limit(this.f, x, approach);
    }
    /** Using the Simpson method to approximate an integral. This is unfortunately significantly less accurate than other methods in data oriented libraries like Python's Scipy. */
    integrate(x1: number, x2: number, errorBounds: number = 0.001){
        return numbers.calculus.adaptiveSimpson(this.f, x1, x2, errorBounds)
    }
    /** Differentiate f at x. */
    diff(x: number){
        return numbers.calculus.pointDiff(this.f, x)
    }
    getNumericList(x1: number, x2: number, dataPoints: number = 200){
        if(this.argLength !== 1){
            return console.log(`You might not want to use this method for your function. It currently only supports functions of a single variable.`)
        }
        let x = linspace(x1, x2, dataPoints)
        return new NumericList(x.map((d) => this.f(d)))
    }
}


const f = new ExtendedFunction((x: number) => Math.E**x)

const l = f.getNumericList(0, 10, 10)

console.log(l)
