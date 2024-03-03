import { Application } from "pixi.js"
import { CoordinateSystem } from "../math/CoordinateSystem"
import { PixiPoint } from "./PixiPoint"

export class PixiCoordinateSystem extends CoordinateSystem<PixiPoint> {
    constructor(public width: number, public height: number) {
        super(width, height)
    }
    toPixi(app: Application) {
        this.transformOriginToCenter()
        this.scale(0.8)
        this.pointMap((p) => {
            p.toPixi(app)
        })
    }
}
