import { ComponentPropsWithoutRef, JSXElementConstructor, ReactElement, ReactNode } from "react"
import type { ChartContainer } from "../../../lib/shad/shadChart"

export type ChartConfigType = ComponentPropsWithoutRef<typeof ChartContainer>["config"]

export type ChartChildren = ReactNode & ReactElement<any, string | JSXElementConstructor<any>>


export interface XYPlotItem {
    type: "line" | "bar"
    id: string
    x: number[]
    y: number[]
    label: ReactNode
    color: string
}


export type CalculatedPlotParams = {
    index: number
}
