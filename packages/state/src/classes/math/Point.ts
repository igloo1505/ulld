import { Application, Graphics } from "pixi.js";
import { CoordinateSystemObjectBase } from "./CoordSystemObjectBase";

export class Point extends CoordinateSystemObjectBase {
    constructor(x: number, y: number, z?: number, public label?: string, public color?: string) {
        super(x, y, z, label)
    }
    inPixiCoords(app: Application) {
        return [app.screen.height / 2 - this.trueCenter[0], app.screen.height / 2 - this.trueCenter[1]]
    }
    toPixi(app: Application) {
        let p = new Graphics()
        let color = this.color || "#3b82f6"
        p.beginFill(color)
        p.lineStyle(3, color)
        p.drawCircle(0, 0, 4)
        let pcoords = this.inPixiCoords(app)
        p.x = pcoords[0]
        p.y = pcoords[1]
        app.stage.addChild(p)
        return p
    }
    applyScalar(scalar: number) {
        this.x = scalar * this.x
        this.y = scalar * this.y
        if (this.z) {
            this.z = scalar * this.z
        }
        this.trueCenter = this.trueCenter?.map((c) => c * scalar) as number[]
    }
}
