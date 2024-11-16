// ULLD: protected-path pageFor:taskManager/AddTask
import AddTaskModal, {PageProps} from "#/components/slots/taskManager/addTask";
import { serverClient } from "#/trpc/mainServer";
import { AddTaskProps } from "@ulld/task-manager/types";
import { PickPageParams, UniqueTaggables } from "@ulld/utilities/types";
import React from "react";


const AddTaskModalPageTemplate = async (
    props: PickPageParams<PageProps>,
) => {
    const uniqueTaggables =
        await serverClient.search.getUniqueTagTopicAndSubjects();
    const lists = await serverClient.toDo.getToDoLists()

    return <AddTaskModal
        {...props}
        isModal 
        existingTaggables={uniqueTaggables as UniqueTaggables}
        lists={lists as AddTaskProps["lists"]}
    />;
};

AddTaskModalPageTemplate.displayName = "AddTaskModalPageTemplate";

export default AddTaskModalPageTemplate;
