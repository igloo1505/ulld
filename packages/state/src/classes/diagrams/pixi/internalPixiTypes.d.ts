import { PixiPoint } from "#/classes/pixi/PixiPoint"

export interface PixiPointProps {
    x: number
    y: number
    size?: number
    color?: string
    label?: string
    labelPosition?: "top" | "left" | "right" | "bottom"
}


export interface PixiDiagramProps {
    id: string
    width: number | "max"
    height?: number | "max"
    background?: boolean
    points: PixiPointProps[]
}


export interface CompletePixiDiagramProps extends PixiDiagramProps {
    height: number
    width: number
    points: PixiPoint[]
}
