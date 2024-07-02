import { Point } from "./point";
import { PosThree } from "../../types";
import * as numbers from "numbers"


export class Vector extends Point {
    constructor(
        public deltas: PosThree,
        position: PosThree = [0, 0, 0],
    ) {
        super(position);
    }
    i() {
        return this.deltas[0];
    }
    j() {
        return this.deltas[1];
    }
    k() {
        return this.deltas[2];
    }
    divide(n: number) {
        let newDeltas = this.deltas.map((a) => a / n) as PosThree;
        return new Vector(newDeltas, this.position);
    }
    multiply(n: number) {
        let newDeltas = this.deltas.map((a) => a * n) as PosThree;
        return new Vector(newDeltas, this.position);
    }
    add(v: Vector) {
        let newDeltas = this.deltas.map((a, i) => a + v.deltas[i]) as PosThree;
        return new Vector(newDeltas, this.position);
    }
    dot(vec: Vector) {
        return numbers.matrix.dotproduct(this.deltas, vec.deltas)
    }
    magnitude() {
        return Math.sqrt(this.deltas.map((a) => a ** 2).reduce((a, b) => a + b));
    }
    terminationPoint(){
        return new Point(this.position.map((a, i) => a + this.deltas[i]) as PosThree)
    }
    /** Sets this vector to it's equivalent unit vector. */
    normalize() {
        let mag = this.magnitude();
        this.deltas = this.deltas.map((a) => a / mag) as PosThree;
    }
    unit() {
        return this.divide(this.magnitude());
    }
    outer(v: Vector){
        return numbers.matrix.outer(this.deltas, v.deltas)
    }
}
