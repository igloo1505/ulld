import { MathHandler } from "../MathHandler"

export class CoordinateSystemObjectBase extends MathHandler {
    coords: number[]
    private _x: number
    private _y: number
    private _z?: number
    private _trueCenter: number[]
    constructor(x: number, y: number, z?: number, public label?: string, public color?: string) {
        super()
        this._x = x
        this._y = y
        this._z = z
        this.coords = [x, y]
        if (z) this.coords.push(z)
        !this.color && (this.color = "#3b82f6")
        this._trueCenter = z ? [y, y, z] : [x, y]
    }

    get trueCenter(): number[] {
        return this._trueCenter
    }
    set trueCenter(val: number[]) {
        this._trueCenter = val
    }
    get x() {
        return this._x
    }
    get y() {
        return this._y
    }
    get z(): number | undefined {
        return this._z
    }
    set x(x: number) {
        this._x = x
        this.coords[0] = x
    }
    set y(y: number) {
        this._y = y
        this.coords[1] = y
    }
    set z(z: number) {
        this._z = z
        this.coords[2] = z
    }
}
