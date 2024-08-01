import React from "react";
import TimePeriodButtonGroup, {
    TimePeriodButtonGroupProps,
} from "./timePeriodButtons";
import TaskDetailHeaderItem from "./taskDetailHeaderItem";

interface TaskListCardDetailsProps extends TimePeriodButtonGroupProps {
    totalNotes: number;
    overdueTaskCount?: number | null;
}

const TaskListCardDetails = ({
    totalNotes,
    overdueTaskCount = 0,
    ...props
}: TaskListCardDetailsProps) => {
    return (
        <div className={"w-full grid grid-cols-2 p-4"}>
            <div className={"w-full flex flex-col justify-between items-start"}>
                <div className={"flex flex-row justify-start items-center space-x-3"}>
                    <TaskDetailHeaderItem label="Total Notes" content={totalNotes} />
                    <TaskDetailHeaderItem label="Overdue Tasks" content={overdueTaskCount} />
                </div>
                <TimePeriodButtonGroup {...props} />
            </div>
            <div>Some other stuff</div>
        </div>
    );
};

TaskListCardDetails.displayName = "TaskListCardDetails";

export default TaskListCardDetails;
