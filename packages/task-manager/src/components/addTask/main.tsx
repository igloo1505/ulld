"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver, useForm } from "@ulld/full-form/form";
import { useToast } from "@ulld/tailwind/use-toast";
import { Button } from "@ulld/tailwind/button";
import { DateInput } from "@ulld/full-form/dateInput";
import { TextInput } from "@ulld/full-form/textInput";
import { SelectInput } from "@ulld/full-form/select";
import { ComboboxInput } from "@ulld/full-form/combobox";
import { DialogWithForm } from "@ulld/ui/dialogWithForm";
import { client } from "@ulld/api/client";
import {
    ToDoListAddTaskSchema,
    todoListAddTaskSchema,
} from "@ulld/api/plugins/native/todo/zod/general";
import { AddTaskProps } from "../../types";
import { toDoItemStatusData } from "@ulld/utilities/toDoStatusData"

const ToDoListAddTaskModal = ({
    isModal,
    lists,
    searchParams: sp,
}: AddTaskProps) => {
    const router = useRouter();
    const { toast } = useToast();
    const form = useForm<ToDoListAddTaskSchema>({
        resolver: zodResolver(todoListAddTaskSchema),
        defaultValues: {
            status: "ToDo",
        },
    });

    const setInitialList = () => {
        if (sp?.listId) {
            let l = lists.find((a) => a.id === parseInt(sp.listId as string));
            if (l) {
                return form.setValue("listName", l.label);
            }
        }
        if (lists && lists.length) {
            return form.setValue("listName", lists[0].label);
        }
    };

    useEffect(() => {
        setInitialList();
    }, [lists, sp]);

    const handleSubmit = async (_data: ToDoListAddTaskSchema) => {
        let data = todoListAddTaskSchema.parse(_data);
        let listId = lists.find((l) => l.label === data.listName)?.id;
        if (!listId) {
            return toast({
                title: "Oh no.",
                description: "Did you choose a list for this task?",
            });
        }
        let res = await client.toDo.createNewToDo.mutate({
            ...data,
            listId,
        });
        if (res) {
            toast({
                title: "Success",
                description: `This task has been added to ${data.listName}`,
            });
            if (isModal) {
                router.back();
            } else {
                form.reset();
            }
        }
    };

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
            <div
                className={"grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-4 gap-y-4"}
            >
                <ComboboxInput
                    name="listName"
                    options={lists.map((x) => ({
                        label: x.label,
                        value: x.label
                    }))}
                    label="List"
                    placeholder="Which to-do list?"
                    classes={{
                        button: "w-full",
                        formItem: "w-full testFormItemClass"
                    }}
                />
                <ComboboxInput
                    label="Status"
                    name="status"
                    classes={{
                        button: "w-full"
                    }}
                    options={toDoItemStatusData}
                    placeholder="Status"
                />
            </div>
            <div
                className={"grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-4 gap-y-4"}
            >
                <SelectInput
                    label="Priority"
                    name={"priority"}
                    options={Array(11).map((n, i) => {
                        return {
                            value: `${i}`,
                            label: `${i}`,
                        };
                    })}
                    placeholder={"Priority"}
                />
                <TextInput name="task" label="Task" />
            </div>
            <div
                className={
                    "w-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-x-4 gap-y-4"
                }
            >
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
                            e.stopPropagation();
                            e.preventDefault();
                            handleSubmit(form.getValues());
                        }}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </DialogWithForm>
    );
};

ToDoListAddTaskModal.displayName = "ToDoListAddTaskModal";

export default ToDoListAddTaskModal;
