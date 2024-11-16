// ULLD: protected-path pageFor:taskManager/AddTaskList
import AddTaskList, {PageProps} from "#/components/slots/taskManager/addList";
import { PickPageParams } from "@ulld/utilities/types";
import React from "react";


const AddTaskListPageTemplate = async (props: PickPageParams<PageProps>) => {
    return <AddTaskList {...props} isModal />;
};

AddTaskListPageTemplate.displayName = "AddTaskListPageTemplate";

export default AddTaskListPageTemplate;
