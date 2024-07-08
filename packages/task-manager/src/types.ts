import { UniqueTaggables } from "@ulld/utilities/types";

export interface TaskDetailsPageProps {
    isModal: boolean;
}

export interface AddTaskProps {
    isModal: boolean;
    existingTaggables: UniqueTaggables;
}

export type AddTaskListProps = AddTaskProps
