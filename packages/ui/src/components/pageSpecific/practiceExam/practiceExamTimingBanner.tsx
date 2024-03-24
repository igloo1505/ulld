"use client"
import { CalendarAndDateManager } from '@ulld/api/classes/data/calendarAndDate'
import React, { useEffect, useState } from 'react'



interface PracticeExamBannerProps {
    questionCount: number
    timeLimit: number
    running: boolean | "complete"
    setRunning: (v: boolean | "complete") => void
}


const PracticeExamBanner = ({ timeLimit, running, setRunning }: PracticeExamBannerProps) => {
    const [timer, setTimer] = useState<{ label: string, value: number } | null>(null)
    const timerCount = (_t: number) => {
        let t = _t - 1
        console.log("t: ", t)
        if (t <= 0) {
            setRunning("complete")
        }
        setTimer({
            value: t,
            label: CalendarAndDateManager.formattedQuantityToString(CalendarAndDateManager.formatTimeQuantity(t))
        })
        setTimeout(() => timerCount(t), 1000)
    }
    useEffect(() => {
        if (running) {
            timerCount(timeLimit)
        }
    }, [running])
    return (
        <div className={"w-full h-fit flex flex-row items-center justify-end"}>
            <div className={"w-fit flex flex-col justify-start items-end gap-3"}>
                <div>
                    {timer?.label || ""}
                </div>
                <div className="w-[300px] overflow-hidden h-4 bg-secondary rounded-3xl flex flex-row justify-start items-center" >
                    <div
                        id={'exam-progress-success-bar'}
                        className={"w-[100px] bg-green-500 h-full transition-all duration-300"}
                    />
                    <div
                        id={'exam-progress-fail-bar'}
                        className={"w-[100px] bg-red-500 h-full transition-all duration-300"}
                    />
                </div>
            </div>
        </div>
    )
}


PracticeExamBanner.displayName = "PracticeExamBanner"


export default PracticeExamBanner;
