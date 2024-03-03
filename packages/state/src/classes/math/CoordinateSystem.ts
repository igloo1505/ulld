import { Application } from "pixi.js";
import { MathHandler } from "../MathHandler";
import { Point } from "./Point";
import { PixiPoint } from "../pixi/PixiPoint";
import assert from "assert";



export class CoordinateSystem<T extends Point | PixiPoint> extends MathHandler {
    private _points: T[] = []
    maxScalar?: number
    constructor(public width: number, public height: number) {
        super()
    }
    pointMap(f: (p: T) => void) {
        this.points.forEach((p) => f(p))
    }
    get points(): T[] {
        return this._points
    }
    set points(p: T[]) {
        this._points = p
    }
    transformOriginToCenter() {
        this.pointMap((p) => {
            p.x = p.x + this.width / 2
            p.y = p.y + this.height / 2
        })
    }
    xs() {
        return this.points.map((p) => p.trueCenter[0])
    }
    ys() {
        return this.points.map((p) => p.trueCenter[1])
    }
    zs() {
        return this.points.map((p) => p.trueCenter[2])
    }
    getMaxScalar() {
        let xs = this.xs()
        let ys = this.ys()
        let _x = this.minMax(xs)
        let _y = this.minMax(ys)
        let vals: number[] = []
        Array.from([_y.max || 0, _y.min || 0, _x.max || 0, _x.min || 0]).forEach((h: number, i: number) => {
            if (h) {
                if (i < 2) {
                    vals.push(Math.abs(this.height / (2 * h)))
                }
                if (i > 2) {
                    vals.push(Math.abs(this.width / (2 * h)))
                }
            }
        })
        let { min } = this.minMax(vals)
        return min || 1
    }
    scale(ofMax: number = 1) {
        let scalar = this.getMaxScalar()
        this.pointMap((p) => p.applyScalar(scalar * ofMax))
    }
}
