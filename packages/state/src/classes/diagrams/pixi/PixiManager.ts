import { MathHandler } from '#/classes/MathHandler'
import { PixiCoordinateSystem } from '#/classes/pixi/PixiCoordinateSystem'
import { PixiPoint } from '#/classes/pixi/PixiPoint'
import * as PIXI from 'pixi.js'
import { PixiDiagramProps } from './internalPixiTypes'


type PixiOptions = Partial<PIXI.IApplicationOptions>

export class DiagramManager extends MathHandler {
    props: PixiDiagramProps
    appOptions: PixiOptions
    app: PIXI.Application
    labelList: string[]
    labelStyle: PIXI.TextStyle
    labelIndices: { [k: string]: number } = {}
    s: PixiCoordinateSystem
    constructor(props: PixiDiagramProps) {
        super()
        this.labelList = "ZYXWVUTSRQPONMLKJIHGFEDCBA".split("")
        this.appOptions = this.parseProps(props)
        this.props = props
        this.labelStyle = new PIXI.TextStyle({
            fontFamily: "Arial, Helvetica, sans-serif",
            fontSize: 20
        });
        this.app = new PIXI.Application(this.appOptions);
        this.s = new PixiCoordinateSystem(this.app.screen.width, this.app.screen.height)
        this.s.points = this.props.points.map((p): PixiPoint => new PixiPoint(p.x, p.y))
        // TODO: Remove this when not debugging.
        // globalThis.__PIXI_APP__ = this.app;
        this.s.toPixi(this.app)
    }

    getLabel(point: PIXI.Point & {label?: string}) {
        let l = point.label || this.labelList[this.labelList.length - 1]
        if (!point.label) {
            this.labelList.pop()
        }
        if (this.labelIndices[l]) {
            // TODO: Come back and see if latex will work here.
            l = `${l}${this.labelIndices[l]}`
            this.labelIndices[l] = this.labelIndices[l] + 1
        }
        if (!this.labelIndices[l]) {
            this.labelIndices[l] = 1
        }
        const text = new PIXI.Text(l, this.labelStyle);
    }

    parseProps(props: PixiDiagramProps): PixiOptions {
        let vw = window?.innerWidth || 640
        let p: Partial<PIXI.IApplicationOptions> = {}
        p.width = Boolean(props.width === "max" || !props.width) ? vw : props.width as number
        p.height = typeof props.height === "number" ? props.height : p.width
        if (props.background !== false) (p.background = "transparent")
        p.view = document.getElementById(props.id) as HTMLCanvasElement
        p.autoDensity = true
        p.resolution = window?.devicePixelRatio || 1
        p.backgroundAlpha = 0
        return p as PixiOptions
    }
}
