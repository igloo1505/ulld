"use client";
import React, { useEffect, useState } from "react";
import {
    Card,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@ulld/tailwind/card";
import { ModalPageContainer } from "@ulld/ui/modalPage";
import { useEditorModalSyncedValue } from "@ulld/hooks/useEditorModalSyncedValue";
import { useAppConfig } from "@ulld/hooks/useAppConfig";
import { MdxContentCLIENT } from "@ulld/render/mdx/client";
import { TaskDetailsProps } from "../../types";
import { Button } from "@ulld/tailwind/button";
import { cn } from "@ulld/utilities/cn";
import { DateTime } from "@ulld/utilities/dateTime";
import { RouteModalBackButton } from "@ulld/ui/routeModalBackground";
import AnimatedCheckbox from "@ulld/ui/animatedCheckbox";
import { client } from "@ulld/api/client";
import { useDebounceCallback } from "@ulld/hooks/useDebounceCallback";

const TaskDetailComponentInner = ({ data, isModal }: TaskDetailsProps) => {
    const [task, _setTask] = useState<TaskDetailsProps["data"]>(data);
    const [revertStatus, setRevertStatus] = useState(
        !task.status
            ? ("ToDo" as "ToDo")
            : task.status === "Done"
                ? ("ToDo" as "ToDo")
                : task.status,
    );

    const [internalNote, setInternalNote, showMdxModal] =
        useEditorModalSyncedValue(
            `task-note-${task?.id || "-1"}`,
            task?.details || "",
        );

    const setTask = async (newData: TaskDetailsProps["data"]) => {
        let res = await client.toDo.updateTask.mutate(newData);
        if (res) {
            _setTask(data);
        }
    };

    const debouncedUpdateTaskDetails = useDebounceCallback(
        (newData: TaskDetailsProps["data"]) => {
            setTask(newData);
        },
        1000,
        {
            leading: true,
        },
    );

    useEffect(() => {
        debouncedUpdateTaskDetails({
            ...task,
            details: internalNote,
        });
    }, [internalNote]);

    const ids = {
        title: `${task.id}-title`,
        content: `${task.id}-content`,
        addNoteBtn: `${task.id}-add-note-btn`,
    };
    const [appConfig] = useAppConfig();
    const isComplete = task.status === "Done";
    const hasNote = Boolean(task.details);

    const handleToggleComplete = async () => {
        let newData =
            task.status === "Done"
                ? {
                    ...task,
                    status: revertStatus,
                }
                : {
                    ...task,
                    status: "Done" as "Done",
                };
        setTask(newData);
    };

    return (
        <Card className={"max-w-[min(768px,90vw)]"}>
            <CardHeader>
                <CardTitle id={ids.title}>
                    <MdxContentCLIENT inline content={task.task} />
                </CardTitle>
                <CardDescription>
                    {new DateTime(task.dueAt, appConfig as any).formatDate()}
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
                    <Button
                        id={ids.addNoteBtn}
                        variant="secondary"
                        onClick={() =>
                            showMdxModal({
                                language: "mdx",
                            })
                        }
                    >
                        Add Note
                    </Button>
                )}
            </div>
            <CardFooter className={"flex flex-row justify-end items-center gap-6"}>
                <AnimatedCheckbox
                    checked={isComplete}
                    classes={{
                        outerContainer: "w-4 h-4",
                    }}
                    onClick={handleToggleComplete}
                />
                {isModal && <RouteModalBackButton />}
            </CardFooter>
        </Card>
    );
};

const TaskDetailComponent = (props: TaskDetailsProps) => {
    if (props.isModal) {
        return (
            <ModalPageContainer>
                <TaskDetailComponentInner {...props} />
            </ModalPageContainer>
        );
    }
    return (
        <div
            className={
                "w-full h-full flex flex-col justify-center items-center p-8 md:px-16"
            }
        >
            <TaskDetailComponentInner {...props} />
        </div>
    );
};

TaskDetailComponent.displayName = "TaskDetailComponent";

export default TaskDetailComponent;
