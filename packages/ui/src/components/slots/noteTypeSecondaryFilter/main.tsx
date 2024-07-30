import React from "react";
import { NoteTypeSecondaryFilterProps } from "../../../types/general";
import clsx from "clsx";
import TaggableList from "./taggableList";
import { ArrayUtilities } from "@ulld/utilities/arrayUtilities";

const NoteTypeSecondaryFilter = ({
    data,
    noteType,
    searchParams: sp,
}: NoteTypeSecondaryFilterProps) => {
    if (!noteType) {
        return null;
    }
    return (
        <div
            className={clsx(
                "w-full h-fit",
                Boolean(
                    data.topics.length > 0 ||
                    data.subjects.length > 0 ||
                    data.tags.length > 0,
                ) && "mb-3",
            )}
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
