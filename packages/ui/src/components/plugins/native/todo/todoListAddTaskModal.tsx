"use client"
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { priorityStrings } from './ToDoListPrioritySelect'
import { useToast } from '@ulld/tailwind/use-toast'
import { Button } from '@ulld/tailwind/button'
import { DateInput } from '@ulld/full-form/dateInput'
import { TextInput } from '@ulld/full-form/textInput'
import { SelectInput } from '@ulld/full-form/select'
import { TaggableComboBox } from '@ulld/full-form/taggableCombobox'
import { DialogWithForm } from '../../../modals/utils/dialogWithForm'
import { ToDoListStatus } from '@ulld/database/internalDatabaseTypes'
import { client } from '@ulld/api/client'
import { ToDoListAddTaskSchema, todoListAddTaskSchema } from '@ulld/api/plugins/native/todo/zod/general'
import { AddTaskSearchParams } from './schemas'




interface ToDoListAddTaskModalProps {
    isModal?: boolean
    sp: AddTaskSearchParams
    lists: { label: string, id: number }[]
}



const ToDoListAddTaskModal = ({ isModal, lists, sp }: ToDoListAddTaskModalProps) => {
    const router = useRouter()
    const { toast } = useToast()
    const form = useForm<ToDoListAddTaskSchema>({
        resolver: zodResolver(todoListAddTaskSchema),
        defaultValues: {
            status: ToDoListStatus.ToDo
        }
    })

    const setInitialList = () => {
        if (sp?.listId) {
            let l = lists.find((a) => a.id === parseInt(sp.listId as string))
            if (l) {
                return form.setValue("listName", l.label)
            }
        }
        if (lists && lists.length) {
            return form.setValue("listName", lists[0].label)
        }
    }

    useEffect(() => {
        setInitialList()
    }, [lists, sp])


    const handleSubmit = async (_data: ToDoListAddTaskSchema) => {
        let data = todoListAddTaskSchema.parse(_data)
        let listId = lists.find((l) => l.label === data.listName)?.id
        if (!listId) {
            return toast({
                title: "Oh no.",
                description: "Did you choose a list for this task?"
            })
        }
        let res = await client.toDo.createNewToDo.mutate({
            ...data,
            listId
        })
        if (res) {
            toast({
                title: "Success",
                description: `This task has been added to ${data.listName}`
            })
            if (isModal) {
                router.back()
            } else {
                form.reset()
            }
        }
    }

    return (
        <DialogWithForm
            open
            grow
            form={form}
            isModal={isModal}
            title="Add New Task"
            onSubmit={handleSubmit}
            withButtons={false}
        >
            <div className={"grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-4 gap-y-6"}>
                <TaggableComboBox
                    formItemClasses="justify-around"
                    options={lists.map((l) => l.label)}
                    name="listName"
                    label="List"
                    placeholder="Which to-do list?"
                    buttonClasses="w-full"
                />
                <TextInput
                    name="task"
                    label="Task"
                />
            </div>
            <div className={"grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-4 gap-y-6"}>
                <SelectInput
                    label="Priority"
                    name={"priority"}
                    options={priorityStrings.map((n) => {
                        return {
                            value: n,
                            content: n
                        }
                    })}
                    placeholder={"Priority"}
                />
                <TaggableComboBox
                    label="Status"
                    name="status"
                    buttonClasses={"w-full"}
                    formItemClasses={"justify-around w-full"}
                    options={Object.keys(ToDoListStatus)}
                    placeholder="Status"
                    replaceUnderscores
                />
            </div>
            <div className={"w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-4 gap-y-6"}>
                <DateInput
                    name="dueAt"
                    label="Due"
                    buttonClasses="!w-full"
                    withTime={false}
                />
                <div className={"w-full flex flex-row justify-end items-end h-full"}>
                    <Button
                        className={"w-full min-w-[200px] md:w-fit md:min-w-fit"}
                        onClick={(e) => {
                            e.stopPropagation()
                            e.preventDefault()
                            handleSubmit(form.getValues())
                        }}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </DialogWithForm>
    )
}


ToDoListAddTaskModal.displayName = "ToDoListAddTaskModal"


export default ToDoListAddTaskModal;
