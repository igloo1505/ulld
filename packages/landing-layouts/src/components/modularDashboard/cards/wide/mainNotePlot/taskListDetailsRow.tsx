import React from "react";
import TimePeriodButtonGroup, {
    TimePeriodButtonGroupProps,
} from "./timePeriodButtons";
import TaskDetailHeaderItem from "./taskDetailHeaderItem";
import TaskListDetailsTopRightCard from "./taskListCardDetailsTopRight";
import { useDashboardContext } from "../../../util/provider";

interface TaskListCardDetailsProps extends TimePeriodButtonGroupProps { }
const TaskListCardDetails = ({
    ...props
}: TaskListCardDetailsProps) => {
    const state = useDashboardContext()
    return (
        <div className={"w-full flex flex-col-reverse @[520px]/dashboard:grid @[520px]/dashboard:grid-cols-2 p-4"}>
            <div className={"w-full flex flex-col justify-between items-start"}>
                <div className={"flex flex-row justify-start items-center space-x-4"}>
                    <TaskDetailHeaderItem label="Total Notes" content={state.filteredNotes.length || 0} />
                    <TaskDetailHeaderItem
                        label="Overdue Tasks"
                        content={state.overdueCount || 0}
                    />
                </div>
                <TimePeriodButtonGroup {...props} />
            </div>
            <TaskListDetailsTopRightCard />
        </div>
    );
};

TaskListCardDetails.displayName = "TaskListCardDetails";

export default TaskListCardDetails;
