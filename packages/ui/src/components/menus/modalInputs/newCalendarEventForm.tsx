import React from 'react'



interface NewCalendarEventFormProps {
    date?: Date | null
}

const NewCalendarEventForm = ({ date }: NewCalendarEventFormProps) => {
    return (
        <div className={"w-fit max-w-full flex flex-col justify-center items-center bg-popover text-popover-foreground z-[1]"}>{date?.toString()}</div>
    )
}


NewCalendarEventForm.displayName = "NewCalendarEventForm"


export default NewCalendarEventForm;
