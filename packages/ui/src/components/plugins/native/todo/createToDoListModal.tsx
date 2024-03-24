"use client"
import { zodResolver } from '@hookform/resolvers/zod'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { Button } from '@ulld/tailwind/button'
import {  useToast } from '@ulld/tailwind/use-toast'
import { client } from '@ulld/api/client'
import { TextInput } from '@ulld/full-form/textInput'
import { TaggableSelectGroup } from '@ulld/full-form/taggableSelectGroup'
import { DialogWithForm } from '../../../modals/utils/dialogWithForm'
import { addTodoListSchema, AddToDoListSchema } from '@ulld/api/plugins/native/todo/zod/general'
import { TagTopicSubjectList } from '@ulld/api/schemas/taggable/tagTopicSubjectList'
import { ToDoSearchParams } from '@ulld/parsers/plugins/todos'
import { formatSearchAllParams } from '@ulld/state/searchParamSchemas/utilities/formatSearchAllParams'


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
            <TaggableSelectGroup taggableData={taggableData}>
                <TextInput
                    name="label"
                    label="Label"
                    className={"col-span-3"}
                />
            </TaggableSelectGroup>
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
