type XYPlotType = "line" | "bar" | "scatter"

export type XYPlotDataItem = {
    x: number[]
    y: number[]
    type: XYPlotType
    label?: string
    color?: string
    icon?: string
}


export type RootShadProps = {
    minHeight?: number | string
}


export interface XYPlotProps extends RootShadProps {
    data:  XYPlotDataItem[]
}
