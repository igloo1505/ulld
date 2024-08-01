import React, { ReactNode } from "react";

interface TaskDetailHeaderItemProps {
    label: ReactNode;
    content: ReactNode;
}

const TaskDetailHeaderItem = ({
    label,
    content,
}: TaskDetailHeaderItemProps) => {
    return (
        <div className={"flex flex-col justify-start items-start"}>
            <div className={"text-sm text-muted-foreground"}>{label}</div>
            <div className={"text-xl font-bold mb-4 pl-2"}>{content}</div>
        </div>
    );
};

TaskDetailHeaderItem.displayName = "TaskDetailHeaderItem";

export default TaskDetailHeaderItem;
