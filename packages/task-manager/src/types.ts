import { UniqueTaggables } from "@ulld/utilities/types";
import {serverClient} from "@ulld/api/serverClient"

export interface TaskDetailsProps {
    isModal: boolean;
    data: Awaited<ReturnType<typeof serverClient.toDo.getToDoDetails>>
}

export interface AddTaskProps {
    isModal: boolean;
    existingTaggables: UniqueTaggables;
}

export type AddTaskListProps = AddTaskProps
