import React from "react";
import TimePeriodButtonGroup, {
  TimePeriodButtonGroupProps,
} from "./timePeriodButtons";

interface TaskListCardDetailsProps extends TimePeriodButtonGroupProps {
    totalNotes: number
}

const TaskListCardDetails = ({ totalNotes, ...props }: TaskListCardDetailsProps) => {
  return (
    <div className={"w-full grid grid-cols-2 p-4"}>
      <div className={"w-full flex flex-col justify-between items-start"}>
        <div>
                <div className={"text-sm text-muted-foreground"}>
                    Total Notes
                </div>
                <div className={"text-xl font-bold my-4"}>
                    {totalNotes}
                </div>
        </div>
        <TimePeriodButtonGroup {...props} />
      </div>
        <div>
            Some other stuff
        </div>
    </div>
  );
};

TaskListCardDetails.displayName = "TaskListCardDetails";

export default TaskListCardDetails;
