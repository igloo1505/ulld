"use client"
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import React, { useMemo } from 'react'
import { HealthReport } from '@prisma/client'
import { ReturnedHealthReportSummary, getHealthReportFieldHintMap, healthReportRatingFieldKeys, healthReportFieldNameDisplayMap, healthReportRatingFieldHints } from "@ulld/api"



interface HealthReportSummaryBarPlotProps {
    report: ReturnedHealthReportSummary
}

const hintMap = getHealthReportFieldHintMap()

const getFormattedReportData = (r: HealthReportSummaryBarPlotProps["report"]) => {
    let data = []
    for (const k in r) {
        if (healthReportRatingFieldKeys.includes(k as keyof HealthReport)) {
            data.push({
                name: healthReportFieldNameDisplayMap[k as keyof HealthReport],
                rating: r[k as keyof typeof r]
            })
        }
    }
    return data
}


const getItemHint = (label: string): string | undefined => {
    let h = hintMap[label]
    if (!h) return undefined
    return healthReportRatingFieldHints[h]
}


const CustomToolTip = ({ active, payload, label }: {
    payload?: {
        payload: {
            name: string
            rating: number
        }
        value: number
    }[]
    label: string
    active: boolean
}) => {
    if (active && payload && payload.length) {
        let hint = getItemHint(label)
        return (
            <div className={"flex flex-col justify-center items-center bg-muted text-muted-foreground text-sm rounded-md border border-border max-w-[250px]"}>
                <p className="p-3">{`${label} : ${payload[0].value} / 10`}</p>
                <div className={"w-full h-[1px] bg-muted-foreground/60"} />
                {hint && <p className="p-3 text-center">{hint}</p>}
            </div>
        )
    } else {
        return null
    }
}

const HealthReportSummaryBarPlot = ({ report }: HealthReportSummaryBarPlotProps) => {
    const data = useMemo(() => getFormattedReportData(report), [report])
    return (
        <ResponsiveContainer
            width="100%"
            height={250}
        >
            <BarChart
                data={data}
                margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
            >
                <XAxis
                    type="category"
                    dataKey="name"
                    tick={false}
                /* allowDuplicatedCategory={false} */
                />
                <YAxis
                    range={[0, 10]}
                    domain={[0, 10]}
                    tickCount={3}
                />
                <Tooltip
                    content={
                        /* @ts-ignore */
                        <CustomToolTip />
                    }
                    cursor={{
                        fill: "transparent"
                    }}
                />
                <Bar
                    dataKey="rating"
                    fill="hsl(var(--primary))"
                    activeBar={{
                        fill: "hsl(var(--primary)/0.7)",
                    }}
                />
            </BarChart>
        </ResponsiveContainer>
    )
}


HealthReportSummaryBarPlot.displayName = "HealthReportSummaryBarPlot"


export default HealthReportSummaryBarPlot;
