import { CalendarAndDateManager } from '#/classes/data/calendarAndDate'
import { Button } from '#/components/shad/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '#/components/shad/ui/card'
import { useToast } from '#/components/shad/ui/use-toast'
import { EventInput } from '@fullcalendar/core/index.js'
import axios from 'axios'
import clsx from 'clsx'
import Link from 'next/link'
import React from 'react'



interface CalendarDetailsModalProps {
    event?: EventInput | null
    closeModal: () => void
    removeEvent: (eventId?: string) => void
}

const CalendarDetailsModal = ({ event, closeModal, removeEvent }: CalendarDetailsModalProps) => {
    const { toast } = useToast()
    const handleDelete = async () => {
        if (!event) return
        let res = await axios.post("/api/organization/calendar/deleteEvent/", {
            eventId: event.id,
            calendarOptions: {}
        })
        if (res.data.success) {
            closeModal()
            toast({
                title: "Success",
                description: "Event deleted."
            })
            removeEvent(event?.id)
        }
    }

    return (
        <div className={clsx("w-full h-full flex justify-center items-center px-4 py-4 fixed top-0 left-0 right-0 bottom-0 z-10 transition-transform duration-300", Boolean(event) ? "scale-100" : "scale-0")}>
            <Card className={"z-10"}>
                <CardHeader>
                    {event?.title && <CardTitle>{event.title}</CardTitle>}
                    <CardDescription>
                        <div className={"w-full h-fit flex flex-col md:flex-row md:justify-between md:gap-8"}>
                            {event?.start && <div className={"grid grid-cols-[40px_1fr] md:flex md:flex-row md:items-center md:justify-center md:gap-2"}>
                                <span>Start:</span>
                                <span>{CalendarAndDateManager.formatDate(event.start.toString(), true)}</span>
                            </div>}
                            {event?.end && <div
                                className={"grid grid-cols-[40px_1fr] md:flex md:flex-row md:items-center md:justify-center md:gap-2"}
                            >
                                <span>End:</span>
                                <span>{CalendarAndDateManager.formatDate(event.end.toString(), true)}</span></div>}
                        </div>
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {event?.description}
                </CardContent>
                <CardFooter className={"flex flex-row justify-end items-center gap-4"}>
                    {event?.editPageUrl && <Link href={event.editPageUrl}>
                        <Button className={"bg-indigo-500 hover:bg-indigo-600"}>Edit</Button>
                    </Link>}
                    <Button variant="destructive" onClick={handleDelete}>Delete</Button>
                </CardFooter>
            </Card>
            <div className={"w-full h-full bg-black bg-opacity-50 absolute"} onClick={closeModal} />
        </div>
    )
}


CalendarDetailsModal.displayName = "CalendarDetailsModal"


export default CalendarDetailsModal;
