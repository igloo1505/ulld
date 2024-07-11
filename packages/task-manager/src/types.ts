import { UniqueTaggables } from "@ulld/utilities/types";
import {serverClient} from "@ulld/api/serverClient"

export interface TaskDetailsProps {
    isModal: boolean;
    data: Awaited<ReturnType<typeof serverClient.toDo.getToDoDetails>>
}


export interface AddTaskSearchParams {
    listName?: string
    editing?: string
    listId?: string
}


export interface AddTaskProps {
    isModal: boolean;
    existingTaggables: UniqueTaggables;
    sp: AddTaskSearchParams
    lists: { label: string, id: number }[]
}

export type AddTaskListProps = Pick<AddTaskProps, "isModal" | "existingTaggables">

export interface TaskManagerPageProps {

}
