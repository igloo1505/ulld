import { numberBool } from "@ulld/utilities/numberUtils";
import * as numbers from "numbers";
// NOTE: Statistics stuff to add
// numbers.statistic.randomSample(lower, upper, n);
// numbers.statistic.correlation(array1, array2);

export class NumericList {
    constructor(public value: number[]) { }
    static fromLinSpace(a: number, b: number, dataPoints: number): NumericList {
        let dp = Math.abs(a - b) / dataPoints;
        let shouldSubtract = a - b > 0;
        return new NumericList(
            Array(dataPoints)
                .fill(dp)
                .map((d, i) => (shouldSubtract ? a - d * (i + 1) : a + d * (i + 1))),
        );
    }
    static fromRange(a: number, b: number, delta: number = 1) {
        let shouldSubtract = a - b > 0;
        let d: number[] = [Math.floor(a)];
        do {
            let prv = d.at(-1);
            if (!numberBool(prv)) {
                d.push(0);
            } else {
                d.push(shouldSubtract ? prv! - delta : prv! + delta);
            }
        } while (d[d.length - 1] < b);
        return new NumericList(d)
    }
    private applyOperation(
        n: number | NumericList | number[],
        operation: (a: number, b: number) => number,
    ) {
        if (typeof n === "number") {
            this.value = this.value.map((d) => operation(d, n));
        } else if (Array.isArray(n)) {
            this.value = this.value.map((d, i) => operation(d, n[i]));
        } else {
            this.value = this.value.map((d, i) => operation(d, n.value[i]));
        }
    }
    apply(fnc: (n: number) => number) {
        this.value = this.value.map((d) => fnc(d));
    }
    multiply(n: number | NumericList | number[]) {
        this.applyOperation(n, (a, b) => a * b);
    }
    divide(n: number | NumericList | number[]) {
        this.applyOperation(n, (a, b) => a / b);
    }
    add(n: number | NumericList | number[]) {
        this.applyOperation(n, (a, b) => a + b);
    }
    pow(n: number | NumericList | number[]) {
        this.applyOperation(n, (a, b) => a ** b);
    }
    subtract(n: number | NumericList | number[]) {
        this.applyOperation(n, (a, b) => a - b);
    }
    /** Returns the root nearest to 0 if the values cross the x axis, otherwise returns undefined. */
    rootIndex() {
        let minMax = this.minMax();
        if (minMax[1] < 0 || minMax[0] > 0) return;
        return this.nearest(0)[1];
    }
    round() {
        this.value = this.value.map((n) => Math.round(n));
    }
    floor() {
        this.value = this.value.map((n) => Math.floor(n));
    }
    toFixed(digits: number = 2) {
        return this.value.map((n) => n.toFixed(digits));
    }
    ceil() {
        this.value = this.value.map((n) => Math.ceil(n));
    }
    cumProduct() {
        let value = this.value[0];
        for (const n of this.value.slice(1)) {
            value = value * n;
        }
        return value;
    }
    cumSum() {
        let value = this.value[0];
        for (const n of this.value.slice(1)) {
            value = value + n;
        }
        return value;
    }
    std() { }
    /** Returns an array of two numbers. The first is the numerical value that is nearest to specified value, and the second is the index of that number. */
    nearest(nearestTo: number): [number, number] {
        let d = [Math.abs(this.value[0] - nearestTo), 0] as [number, number];
        this.value.slice(1).forEach((n, i) => {
            let nt = Math.abs(n - nearestTo);
            if (nt < d[0]) {
                d = [nt, i + 1];
            }
        });
        return d;
    }
    /** Returns a difference between lists if a list is provided, other wise returns a running difference. */
    diff(list?: NumericList) {
        if (list) {
            if (list.value.length !== this.value.length) {
                console.log(`Cannot subtract lists with different lengths.`);
            }
            return new NumericList(this.value.map((n, i) => n - list.value[i]));
        } else {
            let data: number[] = [this.value[0]];
            for (const n of this.value.slice(1)) {
                data.push(n - data[data.length - 1]);
            }
            return new NumericList(data);
        }
    }
    min() {
        let n = this.value[0];
        for (const k of this.value.slice(1)) {
            if (k < n) {
                n = k;
            }
        }
        return n;
    }
    max() {
        let n = this.value[0];
        for (const k of this.value.slice(1)) {
            if (k > n) {
                n = k;
            }
        }
        return n;
    }
    maxIndices() {
        let targetVal = this.max();
        return this.value
            .map((n, i) => ({ idx: i, isValue: n === targetVal }))
            .filter((a) => a.isValue)
            .map((n) => n.idx);
    }
    minIndices() {
        let targetVal = this.min();
        return this.value
            .map((n, i) => ({ idx: i, isValue: n === targetVal }))
            .filter((a) => a.isValue)
            .map((n) => n.idx);
    }
    average() {
        return this.cumSum() / this.value.length;
    }
    minMax() {
        return [this.min(), this.max()] as [number, number];
    }
    /** Returns an integer representing the number of occurances of the provided number. */
    count(n: number) {
        return this.value.filter((a) => a === n).length;
    }
    range() {
        let minMax = this.minMax();
        return minMax[1] - minMax[0];
    }
    mean() {
        return numbers.statistic.mean(this.value);
    }
    median() {
        return numbers.statistic.median(this.value);
    }
    mode() {
        return numbers.statistic.mode(this.value);
    }
    correlation(n: NumericList) {
        return numbers.statistic.correlation(this.value, n.value);
    }
    covariance(n: NumericList) {
        return numbers.statistic.covariance(this.value, n.value);
    }
    getExponentialRegressionFunc(): (
        val: number | number[],
    ) => number | NumericList {
        let f = numbers.statistic.exponentialRegression(this.value);
        return (val) => {
            let newVal = f(val);
            if (Array.isArray(newVal)) {
                return new NumericList(newVal);
            } else {
                return newVal;
            }
        };
    }
    getLinearRegressionFunc(
        n: NumericList,
    ): (val: number | number[]) => number | number[] {
        let f = numbers.statistic.linearRegression(this.value, n.value);
        return (val) => {
            let newVal = f(val);
            if (Array.isArray(newVal)) {
                return new NumericList(newVal);
            } else {
                return newVal;
            }
        };
    }
    standardDeviation() {
        return numbers.statistic.standardDev(this.value);
    }
    quantile(quantileIndex: number, quantiles: number = 100){
        return numbers.statistic.quantile(this.value, quantileIndex, quantiles)
    }
    summary(): {
        mean: number;
        firstQuartile: number;
        median: number;
        thirdQuartile: number;
        standardDev: number;
    }{
        return numbers.statistic.report(this.value)
    }
}
