// ULLD: protected-path pageFor:taskManager/TaskDetails
import TaskManagerTaskDetails from "#/components/slots/taskManager/taskDetail";
import { serverClient } from "@ulld/api/serverClient";
import { todoTaskSchema } from "@ulld/parsers/plugins/todos";
import { redirect } from "next/navigation";
import React from "react";

interface TaskDetailsModalPageProps {
    params: {
        taskId: string;
    };
}


const TaskDetailsModalPage = async ({
    params: { taskId },
}: TaskDetailsModalPageProps) => {
    let t = await serverClient.toDo.getToDoDetails({
        toDoId: typeof taskId === "string" ? parseInt(taskId) : taskId,
    });

    if (!t) return redirect("/todo")
    const task = await todoTaskSchema.parseAsync(t)

    return <TaskManagerTaskDetails
        isModal={true}
        data={task}
    />;
};

TaskDetailsModalPage.displayName = "TaskDetailsModalPage";

export default TaskDetailsModalPage;
