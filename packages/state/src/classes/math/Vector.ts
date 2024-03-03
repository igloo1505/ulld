import { CoordinateSystemObjectBase } from "./CoordSystemObjectBase"


type Dimensions = "2d" | "3d"

export class Vector<T extends Dimensions> extends CoordinateSystemObjectBase {
    private magnitude: number
    private _unit?: number[]
    constructor(x: number, y: number, z?: T extends "2d" ? undefined : number, label?: string) {
        super(x, y, z, label)
        this.magnitude = this.sum(this.coords.map((n) => n ** 2)) ** (0.5)
    }
    unit() {
        if (this._unit) return this._unit
        let u = this.coords.map((n) => n / this.magnitude)
        this._unit = u
        return u
    }
}
