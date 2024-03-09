/* TEMPORARY: Not currently in use. Delete if not needed. */
"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React, { MouseEvent, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import ToDoListFormStepOne from './steps/one'
import ToDoListFormStepTwo from './steps/two'
import ToDoListFormStepThree from './steps/three'
import type { serverClient } from '@ulld/api'
import { ToDoZodSchema, todoZodFormSchema } from '@ulld/parsers'
import SideFormContainer from '../../layouts/sideMenu/sideFormContainer'





interface ToDoFormProps {
    editing?: Awaited<ReturnType<typeof serverClient.toDo.getToDoDetails>>
}

const getNextDefaultTime = () => {
    let n = new Date()
    n.setDate(n.getDate() + 1)
    n.setHours(9)
    n.setMinutes(0)
    n.setSeconds(0)
    return n
}


/* TODO: Still need to handle this to do list almost entirely. Form not submitting and page not displaying retrieved data. */
const ToDoForm = ({ editing }: ToDoFormProps) => {
    const [stepState, _setStep] = useState(1)
    const step = useRef<number>(stepState)
    const setStep = (n: number) => {
        step.current = n
        _setStep(n)
    }
    const form = useForm<ToDoZodSchema>({
        resolver: zodResolver(todoZodFormSchema),
        defaultValues: {
            id: editing?.id || undefined,
            task: editing?.task || "",
            details: editing?.details || "",
            dueAt: editing?.dueAt || getNextDefaultTime(),
            tags: editing?.tags ? editing.tags.map((e) => e.value) : [],
            topics: editing?.topics ? editing.topics.map((e) => e.value) : [],
            category: editing?.category ? [editing.category] : [],
            topicInput: "",
            tagInput: ""
        }
    })

    const resetCategories = () => {
        form.setValue("category", [])
    }

    const saveToDo = () => {
        let data = form.getValues()
        console.log(JSON.stringify(data, null, 4))
    }


    const handleNext = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        if (step.current <= 2) {
            setStep(step.current + 1)
            return
        } else {
            saveToDo()
        }
    }


    return (
        <SideFormContainer
            form={form}
            onSubmit={handleNext}
            onBackClick={step.current <= 1 ? undefined : () => setStep(step.current - 1)}
            submitBtnText="Next"
        >
            <ToDoListFormStepOne
                currentStep={step.current}
                form={form}
            />
            <ToDoListFormStepTwo
                currentStep={step.current}
                resetCategories={resetCategories}
                form={form}
            />
            <ToDoListFormStepThree
                currentStep={step.current}
                form={form}
            />
        </SideFormContainer>
    )
}


ToDoForm.displayName = "ToDoForm"


export default ToDoForm;
