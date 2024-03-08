import React from 'react'
import { ToDoListFormStepOneProps } from './one';
import DateTimeInput from '#/components/inputs/dateTimeInput';




const ToDoListFormStepThree = ({ form, currentStep }: ToDoListFormStepOneProps) => {
    if (currentStep !== 3) return null
    return (
        <DateTimeInput
            value={form.watch("dueAt")}
            handleChange={(d: Date | null) => {
                if (!d) return
                form.setValue("dueAt", d)
            }}
        />
    )
}


ToDoListFormStepThree.displayName = "ToDoListFormStepThree"


export default ToDoListFormStepThree;
