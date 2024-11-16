// Slot: taskManager/AddTaskList type:component propsExtends:AddTaskListProps
import React from "react";
import {AddTaskListProps} from "@ulld/task-manager/types"
import REPLACEME from "#/components/REPLACEMEcomponent";

export interface PageProps extends AddTaskListProps {}

const AddTaskListTemplate = (props: PageProps) => {
    return <REPLACEME {...props} />
};

AddTaskListTemplate.displayName = "REPLACEME";

export default AddTaskListTemplate;
