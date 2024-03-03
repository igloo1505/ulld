import { Graphics } from "pixi.js";
import type { Application } from 'pixi.js'
import { Point } from "../math/Point";


export class PixiPoint extends Point {
    constructor(x: number, y: number, z?: number, public label?: string, public color?: string) {
        super(x, y, z, label, color)
    }

    inPixiCoords(app: Application) {
        return [app.screen.height / 2 + this.trueCenter[0], app.screen.height / 2 - this.trueCenter[1]]
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
}
