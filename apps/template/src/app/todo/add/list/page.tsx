// ULLD: protected-path pageFor:taskManager/AddTaskList
import React from "react";
import AddTaskList, { PageProps } from "#/components/slots/taskManager/addList";
import { serverClient } from "#/trpc/mainServer";
import { PickPageParams } from "@ulld/utilities/types";
import { DisableBookmark } from "@ulld/utilities/disableBookmark";

const AddTaskListPageTemplate = async (props: PickPageParams<PageProps>) => {
    let editing: undefined | PageProps["editing"] = undefined;
    if (props.searchParams?.editing) {
        editing = await serverClient.toDo.getToDoListById(
            parseInt(props.searchParams.editing),
        );
    }
    return (
        <>
            <DisableBookmark />
            <AddTaskList {...props} isModal={false} editing={editing} />
        </>
    );
};

AddTaskListPageTemplate.displayName = "AddTaskListPageTemplate";

export default AddTaskListPageTemplate;
