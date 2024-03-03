import { DateTime } from '#/classes/data/dateTime';
import { todoTaskSchema } from '#/classes/prismaMdxRelations/zod/todo';
import CodeEditorModalClientWrapper from '#/components/inputs/codeEditor/codeEditorClientWrapper';
import { Button } from '#/components/shad/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '#/components/shad/ui/card';
import SerializedMdxStringDisplay from '#/components/specificTypeDisplay/markdown/mdx/serializedMdxStringDisplay';
import TextWithLabel from '#/components/ui/textWithLabel';
import RouteModalBackButton from '#/components/util/routeModalBackButton';
import { serverClient } from '#/trpc/serverClient'
import clsx from 'clsx';
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { CheckIcon } from 'lucide-react';
dayjs.extend(advancedFormat)
import { redirect } from 'next/navigation'
import React from 'react'



interface ToDoListTaskDetailModalProps {
    taskId: string | number
    isModal?: boolean
}

interface CardDescItemProps {
    itemKey: string
    children: React.ReactNode
}


const CardDescriptionItem = ({ itemKey, children }: CardDescItemProps) => {
    const id = `item-${itemKey.replaceAll(" ", "")}`
    return (
        <TextWithLabel
            label={itemKey}
            id={id}
            className={"text-muted-foreground "}
        >
            {children}
        </TextWithLabel>
    )
}

const ToDoListTaskDetailModal = async ({ taskId, isModal }: ToDoListTaskDetailModalProps) => {
    const t = await serverClient.toDo.getToDoDetails({
        toDoId: typeof taskId === "string" ? parseInt(taskId) : taskId
    })
    if (!t) return redirect("/todo")
    const task = await todoTaskSchema.parseAsync(t)
    const isComplete = task.status === "Done"
    const hasNote = Boolean(task.details)
    const ids = {
        title: `${task.id}-title`,
        content: `${task.id}-content`,
        addNoteBtn: `${task.id}-add-note-btn`,
    }

    return (
        <>
            <Card className={"max-w-[min(768px,90vw)]"}>
                <CardHeader>
                    <CardTitle id={ids.title}>
                        <SerializedMdxStringDisplay
                            data={task.task}
                        />
                    </CardTitle>
                    <CardDescription>
                        {task.dueAt && <CardDescriptionItem
                            itemKey={"Due"}
                        >
                            {new DateTime(task.dueAt).formatDate()}
                        </CardDescriptionItem>}
                    </CardDescription>
                </CardHeader>
                <div id={ids.content} className={clsx("min-h-[100px] p-4", hasNote ? "" : "flex flex-col justify-center items-center")}>
                    {task.details ? <SerializedMdxStringDisplay
                        data={task.details}
                    /> : <Button id={ids.addNoteBtn} variant="secondary">Add Note</Button>}
                </div>
                <CardFooter className={"flex flex-row justify-end items-center gap-6"}>
                    <Button size="icon" variant={isComplete ? undefined : "destructive"}>
                        <CheckIcon className={"w-4 h-4"} />
                    </Button>
                    {isModal && <RouteModalBackButton />}
                </CardFooter>
            </Card >
            <CodeEditorModalClientWrapper
                appendClickListenerId={ids.addNoteBtn}
                itemId={task.id}
                action="editNoteById"
                isModalChild
            />
        </>
    )
}


ToDoListTaskDetailModal.displayName = "ToDoListTaskDetailModal"


export default ToDoListTaskDetailModal;
