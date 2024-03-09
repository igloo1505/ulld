import { serverClient, DateTime } from '@ulld/api';
import { todoTaskSchema } from '@ulld/parsers';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter, Button } from '@ulld/tailwind';
import clsx from 'clsx';
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { CheckIcon } from 'lucide-react';
dayjs.extend(advancedFormat)
import { redirect } from 'next/navigation'
import React from 'react'
import CodeEditorModalClientWrapper from '../../../inputs/codeEditor/codeEditorClientWrapper';
import RouteModalBackButton from '../../../landing/hero/util/routeModalBackButton';
import TextWithLabel from '../../../text/textWithLabel';
import { replaceRecursively } from '@ulld/utilities';
import { MdxContentSERVER } from '../../..';



interface ToDoListTaskDetailModalProps {
    taskId: string | number
    isModal?: boolean
}

interface CardDescItemProps {
    itemKey: string
    children: React.ReactNode
}


const CardDescriptionItem = ({ itemKey, children }: CardDescItemProps) => {
    const id = `item-${replaceRecursively(itemKey, " ", "")}`
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
                        <MdxContentSERVER
                            content={task.task}
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
                    {task.details ? <MdxContentSERVER
                        content={task.details}
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
