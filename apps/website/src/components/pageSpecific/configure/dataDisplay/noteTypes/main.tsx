import React from "react";
import NoteTypeItem from "./noteTypeItem";
import NoNoteTypesFound from "./noNoteTypesFound";
import { useNoteTypeFormState } from "./useNoteTypeFormState";

const NoteTypesList = () => {
    const { noteTypes } = useNoteTypeFormState();
    return (
        <div className={"w-full flex flex-col justify-center items-center gap-4"}>
            {noteTypes?.length ? (
                noteTypes.map((item, i) => {
                    return (
                        <NoteTypeItem index={i} key={`${item.icon}-${i}`} item={item} />
                    );
                })
            ) : (
                <NoNoteTypesFound />
            )}
        </div>
    );
};

NoteTypesList.displayName = "NoteTypesList";

export default NoteTypesList;
