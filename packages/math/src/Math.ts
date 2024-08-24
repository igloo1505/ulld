import { ExtendedFunction, FuncType } from "./mathematicalObjects/function";
import { Vector } from "./mathematicalObjects/linalg/vector";
import * as numbers from "numbers";
import { NumericList } from "./utilityObjects/list";
import { linspace } from "./utils/main";
import { AppConfigSchemaOutput } from "@ulld/configschema/types";
import constants from "./constants.json";
import { defaultConstantVariables } from "./defaultConstantVariables";

export class ExtendedMath {
    js: Math = Math;
    const: Record<string, number> = {};
    constructor(userDefinedConstants: AppConfigSchemaOutput["math"]["constants"]) {
        this.applyVariables(userDefinedConstants);
    }
    linspace(a: number, b: number, dataPoints: number): NumericList {
        return new NumericList(linspace(a, b, dataPoints));
    }
    percentDiff(a: number, b: number) {
        return ((a - b) / a) * 100;
    }
    vector(props: ConstructorParameters<typeof Vector>) {
        return new Vector(...props);
    }
    printVariables(stringify: boolean = false) {
        let defaultConsts: Record<string, string> = {};
        for (const k of defaultConstantVariables) {
            defaultConsts[k.variable] = k.constant;
        }
        let items: {
            variable: string;
            desc?: string;
            value: number;
        }[] = [];
        for (const c in this.const) {
            let label = c in defaultConsts ? defaultConsts[c] : c;
            items.push({
                variable: c,
                desc: constants.constants?.[label as keyof typeof constants.constants]
                    ?.name,
                value: this.const[c],
            });
        }
        if (stringify) {
            console.log(JSON.stringify(items, null, 2));
        } else {
            console.log(items);
        }
    }
    private applyVariables(otherVariables: Record<string, number> = {}) {
        let mainConstants: Record<string, number> = {};
        for (const c in constants.constants) {
            mainConstants[c] =
                constants.constants[c as keyof typeof constants.constants].value;
        }
        for (const k of defaultConstantVariables) {
            if (k.constant in constants.constants) {
                mainConstants[k.variable] = constants.constants[k.constant].value;
            }
        }
        this.const = {
            ...mainConstants,
            ...otherVariables,
        };
    }
    factorial(n: number): number {
        return numbers.basic.factorial(n);
    }
    /** greatest common denominator */
    gcd(a: number, b: number): number {
        return numbers.basic.gcd(a, b);
    }
    /** least common multiple */
    lcm(a: number, b: number): number {
        return numbers.basic.lsm(a, b);
    }
    /** Adds some useful methods to a function class. Your function will be available at the 'f' property of that class. */
    getExtendedFunction(f: FuncType) {
        return new ExtendedFunction(f);
    }
    equalWithMargin(
        a: number,
        b: number,
        errorMargin: number = 0.000005,
    ): boolean {
        return numbers.basic.numbersEqual(a, b, errorMargin);
    }
    primeFactors(n: number): number {
        return numbers.prime.factorization(n);
    }
    /** The Stirling gamma approximation. Returns n for Gamma of n. */
    stirlingGamma(n: number): number {
        return numbers.calculus.StirlingGamma(n);
    }
}
