import React from "react";
import { ConfigurationFormData } from "../../staticData";
import NoteTypeItem from "./noteTypeItem";
import NoNoteTypesFound from "./noNoteTypesFound";

interface NoteTypesListProps {
    items: ConfigurationFormData["noteTypes"];
    setItems: (newItems: ConfigurationFormData["noteTypes"]) => void
    removeItem: (newItems: ConfigurationFormData["noteTypes"][number]) => void
    editItem: (index: number) => void
}

const NoteTypesList = ({ items, setItems, removeItem, editItem}: NoteTypesListProps) => {
    return (
        <div className={"w-full flex flex-col justify-center items-center gap-4"}>
            {items.length ? (
                items.map((item, i) => {
                    return <NoteTypeItem key={`${item.icon}-${i}`} editItem={() => editItem(i)} removeItem={() => removeItem(item)} item={item} />
                })
            ) : (
                <NoNoteTypesFound />
            )}
        </div>
    );
};

NoteTypesList.displayName = "NoteTypesList";

export default NoteTypesList;
