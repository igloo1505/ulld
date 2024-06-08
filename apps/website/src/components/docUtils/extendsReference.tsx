import React from "react";
import { staticDocsData } from "#/staticData/docs"

interface ExtendsProps {
    extends: string;
}

const Extends = (props: ExtendsProps) => {
    return (
        <div className={"w-fit"}>
            <span className={"font-bold"}>Extends:</span>
            <span></span>
        </div>
    );
};

Extends.displayName = "Extends";

export default Extends;
