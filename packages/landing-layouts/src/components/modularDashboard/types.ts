import type { serverClient } from "@ulld/api/serverClient"
import { HTMLProps } from "react"

export const mainPlotTypes = [
  "Notes",
  "Tasks"
] as const

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

export type TaskListsData = Awaited<ReturnType<typeof serverClient.toDo.getTaskLists>>


export type MainPlotFilterType = typeof mainPlotTypes[number]

export type NoteFilterType = "lastAccess"

export type TasksByCompletion = Awaited<
        ReturnType<typeof serverClient.toDo.getTasksByCompletionDate>
    >

export type TaskManagerOverview = Awaited<ReturnType<typeof serverClient.toDo.getTaskManagerOverview>>


export type TaggableData = {
    tags: string[];
    topics: string[];
    subjects: string[];
}

export type TaggableFilterType = keyof TaggableData
