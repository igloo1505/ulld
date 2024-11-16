// ULLD: protected-path pageFor:taskManager/AddTask
import React from "react";
import AddTaskModal, {
    PageProps,
} from "#/components/slots/taskManager/addTask";
import { serverClient } from "#/trpc/mainServer";
import { UniqueTaggables } from "@ulld/utilities/types";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

const AddTaskPageTemplate = async (props: PageProps) => {
    const uniqueTaggables =
        await serverClient.search.getUniqueTagTopicAndSubjects();
    const lists = await serverClient.toDo.getToDoLists();

    return (
        <>
            <DisableBookmark />
            <AddTaskModal
                {...props}
                isModal={false}
                lists={ArrayUtilities.beArray(lists)}
                existingTaggables={uniqueTaggables as UniqueTaggables}
            />
        </>
    );
};

AddTaskPageTemplate.displayName = "AddTaskPageTemplate";

export default AddTaskPageTemplate;
