// ULLD: protected-path pageFor:taskManager/TaskDetails
import React from "react";
import TaskManagerTaskDetails from "#/components/slots/taskManager/taskDetail";
import { serverClient } from "@ulld/api/serverClient";
import { todoTaskSchema } from "@ulld/parsers/plugins/todos";
import { redirect } from "next/navigation";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

interface TaskDetailsPageProps {
    params: {
        taskId: string;
    };
}

const TaskDetailsPage = async ({
    params: { taskId },
}: TaskDetailsPageProps) => {
    let t = await serverClient.toDo.getToDoDetails({
        toDoId: typeof taskId === "string" ? parseInt(taskId) : taskId,
    });

    if (!t) return redirect("/todo");
    const task = await todoTaskSchema.parseAsync(t);

    return (
        <>
            <DisableBookmark />
            <TaskManagerTaskDetails isModal={false} data={task} />
        </>
    );
};

TaskDetailsPage.displayName = "TaskDetailsPage";

export default TaskDetailsPage;
