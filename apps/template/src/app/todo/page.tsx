// ULLD: protected-path pageFor:taskManager/TaskManagerPage
import TaskManagerPage from "#/components/slots/taskManager/taskManagerPage";
import { serverClient } from "@ulld/api/serverClient";
import {
    getToDoSearchParams,
    TodoTaskOutput,
} from "@ulld/parsers/plugins/todos";
import { TaskManagerPageProps } from "@ulld/task-manager/types";
import React from "react";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";



const TaskListMainPageTemplate = async (
    props: Pick<TaskManagerPageProps, "searchParams">,
) => {
    const sp = getToDoSearchParams.parse(props.searchParams);
    const data = await serverClient.toDo.getToDos(sp);
    let tasks: TodoTaskOutput[] = [];
    data.todos?.forEach((l) => (tasks = tasks.concat(l.tasks)));
    return <>
              <DisableBookmark />
    <TaskManagerPage {...props} {...data} />
    </>
};

TaskListMainPageTemplate.displayName = "TaskListMainPageTemplate";

export default TaskListMainPageTemplate;
