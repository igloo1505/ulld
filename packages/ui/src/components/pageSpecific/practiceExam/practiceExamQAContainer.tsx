"use client"
import type { serverClient } from '@ulld/api'
import React, { useState } from 'react'


export type QAReturnItems = Awaited<ReturnType<typeof serverClient.qa.getQaExam>>


interface ExamProgressState {
    currentIndex: number
    length: number
    successIds: string[]
    failureIds: string[]
}

interface PracticeExamQAContainerProps {
    items: QAReturnItems
    onComplete: (data: ExamProgressState) => void
}



const PracticeExamQAContainer = ({ items, onComplete }: PracticeExamQAContainerProps) => {
    const [progressState, setProgressState] = useState<ExamProgressState>({
        currentIndex: 0,
        length: items.length,
        successIds: [],
        failureIds: []
    })

    const success = () => {
        if (progressState.currentIndex === progressState.length - 1) {
            let d = {
                ...progressState,
                successIds: [...progressState.successIds, items[progressState.currentIndex].id]
            }
            setProgressState(d)
            onComplete(d)
            return
        } else {
            setProgressState({
                ...progressState,
                currentIndex: progressState.currentIndex + 1,
                successIds: [...progressState.successIds, items[progressState.currentIndex].id]
            })
        }
    }

    const fail = () => {
        if (progressState.currentIndex === progressState.length - 1) {
            let d = {
                ...progressState,
                failureIds: [...progressState.failureIds, items[progressState.currentIndex].id]
            }
            setProgressState(d)
            onComplete(d)
            return
        } else {
            setProgressState({
                ...progressState,
                currentIndex: progressState.currentIndex + 1,
                failureIds: [...progressState.failureIds, items[progressState.currentIndex].id]
            })
        }
    }

    return (
        <div className={"w-full h-fit flex flex-col justify-start items-center gap-4"}>
            <div className={"w-full h-fit flex flex-col justify-center items-center gap-4"}>

            </div>
        </div>
    )
}


PracticeExamQAContainer.displayName = "PracticeExamQAContainer"


export default PracticeExamQAContainer;
