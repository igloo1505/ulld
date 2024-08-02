import { clampInArray } from "@ulld/utilities/general"

export const localStorageKeys = {
    timePeriodFilter: "ulld-main-dashboard-card-timePeriod",
    plotFilter: "ulld-dashboard-main-plot-filter"
}


export const plotColorArray = Array(5).fill(0).map((x, i) => `hsl(var(--chart-${i + 1}))`)


export const clampInColorArray = (idx: number) => clampInArray(idx, plotColorArray)
