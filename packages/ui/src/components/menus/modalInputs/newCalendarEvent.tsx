import React from 'react'
import NewCalendarEventForm from './newCalendarEventForm'
import clsx from 'clsx'



interface NewCalendarEventFormProps {
    date?: Date | null
    closeModal: () => void
}

const NewCalendarEventModal = ({ date, closeModal }: NewCalendarEventFormProps) => {
    return (
        <div className={clsx("w-full h-full flex justify-center items-center px-4 py-4 fixed top-0 left-0 right-0 bottom-0 z-10 transition-transform duration-300", Boolean(date) ? "scale-100" : "scale-0")}>
            <NewCalendarEventForm date={date} />
            <div className={"w-full h-full bg-black bg-opacity-50 absolute"} onClick={closeModal} />
        </div>
    )
}


NewCalendarEventModal.displayName = "NewCalendarEventForm"


export default NewCalendarEventModal;
