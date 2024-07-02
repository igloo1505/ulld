import { ExtendedFunction, FuncType } from "./mathematicalObjects/function";
import {Vector} from "./mathematicalObjects/linalg/vector"
import * as numbers from "numbers"
import { NumericList } from "./utilityObjects/list";
import { linspace } from "./utils/main";


export class ExtendedMath {
    js: Math = Math
    var: Record<string, number> = {}
    constructor() { }
    linspace(a: number, b: number, dataPoints: number): NumericList {
         return new NumericList(linspace(a, b, dataPoints))
    }
    percentDiff(a: number, b: number) {
        return ((a - b) / a) * 100;
    }
    vector(props: ConstructorParameters<typeof Vector>){
         return new Vector(...props)
    }
    applyVariables(otherVariables: Record<string, number>){
        this.var = {
            ...this.var,
            ...otherVariables
        }
    }
    factorial(n: number): number {
        return numbers.basic.factorial(n)
    }
    /** greatest common denominator */
    gcd(a: number, b: number): number{
        return numbers.basic.gcd(a, b)
    }
    /** least common multiple */
    lcm(a: number, b: number): number {
        return numbers.basic.lsm(a, b)
    }
    /** Adds some useful methods to a function class. Your function will be available at the 'f' property of that class. */
    getExtendedFunction(f: FuncType){
        return new ExtendedFunction(f)
    }
    equalWithMargin(a: number, b: number, errorMargin: number = 0.000005): boolean{
        return numbers.basic.numbersEqual(a, b, errorMargin)
    }
    primeFactors(n: number): number{
        return numbers.prime.factorization(n)
    }
    /** The Stirling gamma approximation. Returns n for Gamma of n. */
    stirlingGamma(n: number): number {
        return numbers.calculus.StirlingGamma(n)
    }
}

