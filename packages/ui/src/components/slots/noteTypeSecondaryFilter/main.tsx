import React from "react";
import { NoteTypeSecondaryFilterProps } from "../../../types/general";
import TaggableList from "./taggableList";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";

const NoteTypeSecondaryFilter = ({
    data,
    noteType,
    searchParams: sp,
}: NoteTypeSecondaryFilterProps) => {
    if (!noteType || (!data.topics.length && !data.subjects.length && !data.tags.length)) {
        return null;
    }
    return (
        <div
            className={"h-fit w-full flex flex-col justify-center items-start md:items-start px-6 md:px-8 my-4"}
        >
            <TaggableList
                type="subject"
                label={noteType.subjectLabel}
                items={data.subjects}
                activeItems={sp?.subjects ? ArrayUtilities.beArray(sp?.subjects) : []}
                searchParams={sp}
                noteType={noteType}
            />
            <TaggableList
                type="topic"
                label={noteType.topicLabel}
                items={data.topics}
                activeItems={sp?.topics ? ArrayUtilities.beArray(sp.topics) : []}
                searchParams={sp}
                noteType={noteType}
            />
            <TaggableList
                type="tag"
                label={"Tags"}
                items={data.tags}
                activeItems={sp?.tags ? ArrayUtilities.beArray(sp.tags) : []}
                searchParams={sp}
                noteType={noteType}
            />
        </div>
    );
};

NoteTypeSecondaryFilter.displayName = "NoteTypeSecondaryFilter";

export default NoteTypeSecondaryFilter;
