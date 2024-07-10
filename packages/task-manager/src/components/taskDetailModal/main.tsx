import React from "react";
import {Card} from "@ulld/tailwind/card"
import { MdxContentCLIENT } from "@ulld/render/mdx/client"
import { Label } from "@ulld/tailwind/label";
import {TaskDetailsProps} from "../../types"



interface CardDescItemProps {
    itemKey: string
    children: React.ReactNode
}

const CardDescriptionItem = ({ itemKey, children }: CardDescItemProps) => {
    const id = `item-${itemKey.replaceAll(" ", "")}`
    return (

        <div className={"space-y-2 text-muted-foreground"}>
            <Label htmlFor={id}>{itemKey}</Label>
            <div id={id} className={""}>{children}</div>
        </div>
    )
}

const TaskDetailComponent = ({data: task, isModal}: TaskDetailsProps) => {

    const ids = {
        title: `${task.id}-title`,
        content: `${task.id}-content`,
        addNoteBtn: `${task.id}-add-note-btn`,
    }

    const isComplete = task.status === "Done"
    const hasNote = Boolean(task.details)

    return (
            <Card className={"max-w-[min(768px,90vw)]"}>
                <CardHeader>
                    <CardTitle id={ids.title}>
                    <MdxContentCLIENT
                           inline 
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
    )
};

TaskDetailComponent.displayName = "TaskDetailComponent";

export default TaskDetailComponent;
