"use client"
import React, { JSXElementConstructor, ReactElement, useMemo } from 'react'
import dayjs from 'dayjs'
import { Calendar, Views, dayjsLocalizer } from 'react-big-calendar'
import { EventInput } from '@fullcalendar/core'
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop'
import timezone from 'dayjs/plugin/timezone'
import "react-big-calendar/lib/sass/styles.scss"
import "react-big-calendar/lib/addons/dragAndDrop/styles.css"
import "../calendar.scss"
import { CalendarSearchParams } from '@ulld/state'

dayjs.extend(timezone)

const djLocalizer = dayjsLocalizer(dayjs)


const DnDCalendar = withDragAndDrop(Calendar)


interface MainCalendarProps {
    searchParams: CalendarSearchParams
    events: EventInput[]
    defaultDate?: Date
}


const ColoredDateCellWrapper: React.FC<{ children: ReactElement<any, string | JSXElementConstructor<any>> }> = ({ children }: { children: ReactElement<any, string | JSXElementConstructor<any>> }) => {
    return React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: 'lightblue',
        },
    })
}


const MainCalendar = ({ searchParams, events, defaultDate: _defaultDate }: MainCalendarProps) => {
    const { components, defaultDate, max, views } = useMemo(
        () => ({
            components: {
                /* timeSlotWrapper: ColoredDateCellWrapper, */
            },
            defaultDate: _defaultDate ? _defaultDate : new Date(),
            max: dayjs().endOf('day').subtract(1, 'hours').toDate(),
            views: [
                Views.MONTH,
                Views.WEEK,
                Views.DAY,
                Views.AGENDA
            ],
        }),
        []
    )

    return (
        <div className={"w-full h-[768px] max-h-screen flex justify-center items-center px-8 py-6"}>
            <DnDCalendar
                className={"w-full max-w-screen-xl"}
                /* TODO: Come back and rework this entire calendar component, but especially find the source of this type error for the components prop. Currently just copying the demo from https://github.com/jquense/react-big-calendar/blob/master/stories/demos/exampleCode/dayjs.js to get the baseline up and running, but will begin to divert from the demo and focus on integrating the Ulld theme shortly. */
                components={components}
                defaultDate={defaultDate}
                events={events || []}
                localizer={djLocalizer}
                max={max}
                showMultiDayTimes
                step={60}
                views={views}
            />
        </div>
    )
}


MainCalendar.displayName = "MainCalendar"


export default MainCalendar;
