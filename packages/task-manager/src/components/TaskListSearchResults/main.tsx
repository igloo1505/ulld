import { TaskListSearchResultProps } from "../../types";
import { Card, CardDescription, CardHeader, CardTitle } from "@ulld/tailwind/card";
import {TaskListSearchResultBody} from "./body"

const TaskListSearchResult = ({ item }: TaskListSearchResultProps) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{item.label}</CardTitle>
                <CardDescription>
                    {`${item._count.tasks} Tasks`}
                </CardDescription>
            </CardHeader>
            <TaskListSearchResultBody
                listId={item.id} 
            />
        </Card>
    );
};

TaskListSearchResult.displayName = "TaskListSearchResult";

export default TaskListSearchResult;
