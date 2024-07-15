"use client";
import { useEffect, useState } from "react";
import { client } from "@ulld/api/client";
import {  buttonVariants } from "@ulld/tailwind/button";
import Link from "next/link";
import { Paths } from "@ulld/utilities/paths";
import { cn } from "@ulld/utilities/cn";

interface TaskListSearchResultBodyProps {
    listId: number;
}

export const TaskListSearchResultBody = ({
    listId,
}: TaskListSearchResultBodyProps) => {
    const [overdue, setOverdue] = useState(0);
    const getOverdue = async () => {
        let res = await client.toDo.getOverdueTasksByListId.query(listId);
        setOverdue(res?._count.tasks || 0);
    };

    useEffect(() => {
        getOverdue();
    }, []);

    return (
        <div className={"w-full flex flex-row justify-end items-center gap-4"}>
            {overdue && (
                <div
                    className={cn(buttonVariants({ variant: "destructive" }), "cursor-default")}
                >{`${overdue} overdue`}</div>
            )}
            <Link
                href={Paths.getTaskListPath(listId)}
                className={buttonVariants({ variant: "secondary" })}
            >
                View List
            </Link>
        </div>
    );
};

TaskListSearchResultBody.displayName = "TaskListSearchResultBody";
