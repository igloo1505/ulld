import { TaskManagerPageProps } from "../../types";
import { TodoTaskOutput } from "@ulld/parsers/plugins/todos";
import TaskManagerTable from "../TaskManagerTable/main";
import { TaskListNav } from "../TaskListNav/main";

export interface PageProps extends TaskManagerPageProps { }

const TaskManagerPage = ({ lists, todos, searchParams: sp }: PageProps) => {
    const activeLists = lists.filter((a) => a.active);
    const activeListIds = activeLists.map((f) => f.id);

    let tasks: TodoTaskOutput[] = [];
    todos?.forEach((l) => (tasks = tasks.concat(l.tasks)));

    return (
        <div className="hidden h-full flex-1 flex-col space-y-8 p-8 md:flex">
            {activeLists.length > 0 && (
                <div className="flex items-center justify-between space-y-2">
                    <div>
                        <h2 className="text-2xl font-bold tracking-tight">Tasks</h2>
                        <p className="text-muted-foreground">{activeLists[0]?.label}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <TaskListNav
                            activeLists={activeLists}
                            listNameValue={activeLists[0]}
                        />
                    </div>
                </div>
            )}
            <TaskManagerTable
                items={tasks || []}
                lists={lists}
                activeLists={activeLists}
                searchParams={sp}
                activeListIds={activeListIds}
            />
        </div>
    );
};

TaskManagerPage.displayName = "TaskManagerPage";

export default TaskManagerPage;
