import {Vector} from "./mathematicalObjects/linalg/vector"


export class ExtendedMath {
    js: Math = Math
    var: Record<string, number> = {}
    constructor() { }
    linspace(a: number, b: number, dataPoints: number): number[] {
        let dp = Math.abs(a - b) / dataPoints;
        let shouldSubtract = a - b > 0;
        return Array(dataPoints)
            .fill(dp)
            .map((d, i) => (shouldSubtract ? a - d * (i + 1) : a + d * (i + 1)));
    }
    range(a: number, b: number){
    }
    percentDifference(a: number, b: number) {
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
    // factorial()
}

