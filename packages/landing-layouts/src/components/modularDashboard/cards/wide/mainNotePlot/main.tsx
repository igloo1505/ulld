"use client"
import { serverClient } from '@ulld/api/serverClient'
import { TimePeriodOption } from '@ulld/utilities/dateTime'
import React, { useState } from 'react'
import CardContainer from '../../../util/cardContainer'
import TaskListCardDetails from './taskListDetailsRow'



interface MainTasklistPlotProps {
    initialData: Awaited<ReturnType<typeof serverClient.toDo.getTasksByCompletionDate>>
    totalNotes: number
}

const MainTasklistPlot = ({ initialData, totalNotes }: MainTasklistPlotProps) => {
    const [timePeriod, setTimePeriod] = useState<TimePeriodOption>("All Time")
    return (
        <CardContainer className={"w-full h-full flex flex-col justify-center items-center"}>
            <TaskListCardDetails
                totalNotes={totalNotes}
                active={timePeriod}
                onChange={setTimePeriod}
            />
            <div className={"flex-grow"}>
                Plot goes here
            </div>
        </CardContainer>
    )
}


MainTasklistPlot.displayName = "MainTasklistPlot"


export default MainTasklistPlot;
