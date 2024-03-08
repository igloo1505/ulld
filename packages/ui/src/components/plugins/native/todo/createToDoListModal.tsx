"use client"
import DialogWithForm from '#/components/layout/dialogWithForm'
import FullFormInput from '#/components/layout/uniqueLayouts/fullForm/fullFormInput'
import FullFormTagSubjectTopicGroup from '#/components/layout/uniqueLayouts/fullForm/fullFormTagTopicAndSubjectGroup'
import { client } from '#/trpc/client'
import { TagTopicSubjectList } from '#/zod/local/zodGeneralSchemas'
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { addTodoListSchema, AddToDoListSchema } from './zod/general'
import { useToast } from '#/components/shad/ui/use-toast'
import { formatSearchAllParams } from '#/lib/formatting/formatSearchAllParams'
import { ToDoSearchParams } from '#/zod/local/todo'
import Link from 'next/link'
import { Button } from '#/components/shad/ui/button'


interface CreateToDoListModalProps {
    defaultTaggableData?: TagTopicSubjectList
    isModal?: boolean
}

const emptyTaggableData = {
    tags: [],
    topics: [],
    subjects: []
}

const CreateToDoListModal = ({ isModal, defaultTaggableData }: CreateToDoListModalProps) => {
    const [taggableData, setTaggableData] = useState<TagTopicSubjectList>(emptyTaggableData)
    const { toast } = useToast()

    const gatherData = async () => {
        let res = await client.search.getUniqueTagTopicAndSubjects.query()
        if (res) {
            setTaggableData(res)
        }
    }

    useEffect(() => {
        if (!defaultTaggableData) {
            gatherData()
        } else {
            setTaggableData(defaultTaggableData)
        }
    }, [defaultTaggableData])


    const form = useForm({
        resolver: zodResolver(addTodoListSchema),
        defaultValues: {
            label: "",
            ...emptyTaggableData
        }
    })

    const handleSubmit = async (data: AddToDoListSchema) => {
        let res = await client.toDo.createNewTodoList.mutate(data)
        if (res) {
            toast({
                title: "Success",
                description: (<div className={"flex flex-col justify-center items-start gap-1"}>
                    <div className={""}>The following to-do list was created successfully:</div>
                    <Link
                        className={"font-semibold linkColor"}
                        href={`/todo?${formatSearchAllParams<ToDoSearchParams>({
                            listNames: [data.label]
                        })}`}
                    >{data.label}</Link>
                </div>)
            })
        }
    }

    return (
        <DialogWithForm
            open
            form={form}
            isModal={isModal}
            title="Create a new To-Do list"
            onSubmit={handleSubmit}
            withButtons={false}
        >
            <FullFormTagSubjectTopicGroup taggableData={taggableData}>
                <FullFormInput
                    name="label"
                    label="Label"
                    className={"col-span-3"}
                />
            </FullFormTagSubjectTopicGroup>
            <div className={"w-full flex flex-row justify-end items-center px-4"}>
                <Button
                    onClick={(e) => {
                        e.stopPropagation()
                        e.preventDefault()
                        handleSubmit(form.getValues())
                    }}
                >
                    Save
                </Button>
            </div>
        </DialogWithForm>
    )
}


CreateToDoListModal.displayName = "CreateToDoListModal"


export default CreateToDoListModal;
