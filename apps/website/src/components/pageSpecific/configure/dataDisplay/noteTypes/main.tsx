import React from "react";
import { ConfigurationFormData } from "../../staticData";
import NoteTypeItem from "./noteTypeItem";

interface NoteTypesListProps {
    items: ConfigurationFormData["noteTypes"];
}

const NoteTypesList = ({ items }: NoteTypesListProps) => {
    return (
        <div className={"w-full flex flex-col justify-center items-center gap-4"}>
            {items.map((item) => {
                return <NoteTypeItem item={item} />;
            })}
        </div>
    );
};

NoteTypesList.displayName = "NoteTypesList";

export default NoteTypesList;
