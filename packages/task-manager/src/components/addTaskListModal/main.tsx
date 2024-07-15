"use client";
import { useEffect, useState } from "react";
import { useToast } from "@ulld/tailwind/use-toast";
import { useForm, zodResolver } from "@ulld/full-form/form";
import { client } from "@ulld/api/client";
import Link from "next/link";
import { TagTopicSubjectList } from "@ulld/api/schemas/taggable/tagTopicSubjectList";
import { Button } from "@ulld/tailwind/button";
import {
    addTodoListSchema,
    AddToDoListSchema,
} from "@ulld/api/plugins/native/todo/zod/general";
import { ToDoSearchParams } from "@ulld/parsers/plugins/todos";
import { formatSearchAllParams } from "@ulld/state/searchParamSchemas/utilities/formatSearchAllParams";
import { AddTaskListProps } from "../../types";
import { DialogWithForm } from "@ulld/ui/dialogWithForm";
import {
    TaggableComboBox,
    TaggableComboBoxProps,
} from "@ulld/full-form/taggableCombobox";
import { TextInput } from "@ulld/full-form/textInput";
import { z } from "zod";

const emptyTaggableData = {
    tags: [],
    topics: [],
    subjects: [],
};

const taggableProps: TaggableComboBoxProps<
    z.output<typeof addTodoListSchema>,
    any
>[] = [
        {
            name: "tags",
            label: "Tags",
            type: "tag"
        },
        {
            name: "topics",
            label: "Topics",
            type: "topic"
        },
        {
            name: "subjects",
            label: "Subjects",
            type: "subject"
        },
    ];

const AddTaskListModal = ({
    isModal,
    editing,
}: AddTaskListProps) => {
    const { toast } = useToast();

    const form = useForm<AddToDoListSchema>({
        resolver: zodResolver(addTodoListSchema),
        defaultValues: {
            label: "",
            ...emptyTaggableData,
        },
    });

    useEffect(() => {
        if(editing){
            form.setValue("label", editing.label)
            form.setValue("topics", editing.topics.map((f) => f.value))
            form.setValue("tags", editing.tags.map((f) => f.value))
            form.setValue("subjects", editing.subjects.map((f) => f.value))
        }
    }, [editing])

    const handleSubmit = async (data: AddToDoListSchema) => {
        let res = await client.toDo.createNewTodoList.mutate(data);
        if (res) {
            toast({
                title: "Success",
                description: (
                    <div className={"flex flex-col justify-center items-start gap-1"}>
                        <div className={""}>
                            The following to-do list was created successfully:
                        </div>
                        <Link
                            className={"font-semibold linkColor"}
                            href={`/todo?${formatSearchAllParams<ToDoSearchParams>({
                                listNames: [data.label],
                            })}`}
                        >
                            {data.label}
                        </Link>
                    </div>
                ),
            });
        }
    };

    return (
        <DialogWithForm
            open
            form={form}
            isModal={isModal}
            title="Create a new To-Do list"
            onSubmit={handleSubmit}
            withButtons={false}
        >
            <div className={"w-full flex flex-col justify-center items-center md:justify-around md:items-center md:flex-row"}>
                {taggableProps.map((p) => {
                    return <TaggableComboBox multiple {...p} />;
                })}
            </div>
            <TextInput name="label" label="Label" className={"col-span-3"} />
            <div className={"w-full flex flex-row justify-end items-center px-4"}>
                <Button
                    onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        handleSubmit(form.getValues());
                    }}
                >
                    Save
                </Button>
            </div>
        </DialogWithForm>
    );
};

AddTaskListModal.displayName = "AddTaskListModal";

export default AddTaskListModal;
