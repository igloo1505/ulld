import { DictionaryLetterListProps } from "../../../types/general";
import React from "react";
/* import { Step } from "fumadocs-ui/components/steps"; */


const DictionaryLetterListComponent = ({letter, children}: DictionaryLetterListProps) => {
    return <div className={"grid grid-cols-[auto_1fr]"}>
        <div className={"h-full w-fit flex flex-col justify-start items-center"}>
            <div className={"bg-secondary text-secondary-foreground rounded-full w-8 h-8 text-sm flex flex-col justify-center items-center"}>{letter === "number" ? "#" : letter}</div>
        </div>
        <div className={"w-full"}>
            {children}
        </div>
    </div>;
};

DictionaryLetterListComponent.displayName = "DictionaryLetterListComponent";

export default DictionaryLetterListComponent;
