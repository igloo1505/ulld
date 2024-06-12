import React from "react";

interface NoNoteTypesFoundProps { }

const NoNoteTypesFound = (props: NoNoteTypesFoundProps) => {
    return (
        <h3 className={"text-xl text-muted-foreground"}>
            You haven't created any note types. Add at least one to continue
            generating your config.
        </h3>
    );
};

NoNoteTypesFound.displayName = "NoNoteTypesFound";

export default NoNoteTypesFound;
