import type { serverClient } from "@ulld/api/serverClient"
import { HTMLProps } from "react"


type XYPlotType = "line" | "bar"

export type XYPlotDataItem = {
    x: number[]
    y: number[]
    type: XYPlotType
}


export interface BaseCardProps {
    cardProps?: Omit<HTMLProps<HTMLDivElement>, "className">
    className?: string
}

export type ModularDashboardData = Awaited<ReturnType<typeof serverClient.universalNotes.getUserOverview>>
