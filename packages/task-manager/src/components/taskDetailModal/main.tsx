import React from "react";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@ulld/tailwind/card";
import { CheckIcon } from "lucide-react";
import { useEditorModalSyncedValue } from "@ulld/hooks/useEditorModalSyncedValue";
import { useAppConfig } from "@ulld/hooks/useAppConfig";
import { MdxContentCLIENT } from "@ulld/render/mdx/client";
import { Label } from "@ulld/tailwind/label";
import { TaskDetailsProps } from "../../types";
import { redirect } from "next/navigation";
import { Button } from "@ulld/tailwind/button";
import { cn } from "@ulld/utilities/cn";
import { DateTime } from "@ulld/utilities/dateTime";
import { RouteModalBackButton } from "@ulld/ui/routeModalBackground";

interface CardDescItemProps {
    itemKey: string;
    children: React.ReactNode;
}

const CardDescriptionItem = ({ itemKey, children }: CardDescItemProps) => {
    const id = `item-${itemKey.replaceAll(" ", "")}`;
    return (
        <div className={"space-y-2 text-muted-foreground"}>
            <Label htmlFor={id}>{itemKey}</Label>
            <div id={id} className={""}>
                {children}
            </div>
        </div>
    );
};

/* PRIORITY: Come back and actually sync the updated note here once everything is building properly. */
const TaskDetailComponent = ({ data: task, isModal }: TaskDetailsProps) => {
    const [internalNote, setInternalNote, showMdxModal] =
        useEditorModalSyncedValue(`task-note-${task?.id || "-1"}`, task?.details || "");

    if (!task) {
        return redirect("/todo");
    }

    const ids = {
        title: `${task.id}-title`,
        content: `${task.id}-content`,
        addNoteBtn: `${task.id}-add-note-btn`,
    };
    const [appConfig] = useAppConfig();
    const isComplete = task.status === "Done";
    const hasNote = Boolean(task.details);

    return (
        <Card className={"max-w-[min(768px,90vw)]"}>
            <CardHeader>
                <CardTitle id={ids.title}>
                    <MdxContentCLIENT inline content={task.task} />
                </CardTitle>
                <CardDescription>
                    {task.dueAt && (
                        <CardDescriptionItem itemKey={"Due"}>
                            {new DateTime(task.dueAt, appConfig).formatDate()}
                        </CardDescriptionItem>
                    )}
                </CardDescription>
            </CardHeader>
            <div
                id={ids.content}
                className={cn(
                    "min-h-[100px] p-4",
                    hasNote ? "" : "flex flex-col justify-center items-center",
                )}
            >
                {task.details ? (
                    <MdxContentCLIENT content={task.details} />
                ) : (
                    <Button id={ids.addNoteBtn} variant="secondary">
                        Add Note
                    </Button>
                )}
            </div>
            <CardFooter className={"flex flex-row justify-end items-center gap-6"}>
                <Button size="icon" variant={isComplete ? undefined : "destructive"}>
                    <CheckIcon className={"w-4 h-4"} />
                </Button>
                {isModal && <RouteModalBackButton />}
            </CardFooter>
        </Card>
    );
};

TaskDetailComponent.displayName = "TaskDetailComponent";

export default TaskDetailComponent;
