import { ReactNode } from "react"
// TODO: Turn this back on when can import it properly after install.
// import {ExtendedMath} from "@ulld/math/extendedMath"
export type ExtendedMath = any


export type Variable = {
    label: string
    initialValue?: number
}

export type BasePlotProps = {
    id?: string
    title?: ReactNode
    desc?: ReactNode
    dataPoints?: number
    variables?: Variable[]
}

export type BasicPlotTraceProps = {
    color?: string
}


export type MathFunc = (math: ExtendedMath) => number

export type LineAndScatterProps = {
    min?: number | MathFunc
    max?: number | MathFunc
    fnc: (x: number, math: ExtendedMath) => number
}

export type BasePlot2dProps = {

} & BasePlotProps
