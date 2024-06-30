import React, { ReactNode } from "react";
import { BasePlotProps } from "../../types";
import { InvalidVariablesWarning } from "./invalidVariables";

export const PlotContainer = ({
    title,
    children,
    validVariables,
    desc,
}: BasePlotProps & { children: ReactNode, validVariables: boolean }) => {
    if(!validVariables){
        return <InvalidVariablesWarning />
    }
    return (
        <div className={"w-full h-fit inline-block"}>
            {title && <h3 className={"text-lg font-semibold"}>{title}</h3>}
            {children}
            {desc && <p className={"text-sm text-muted-foreground"}>{desc}</p>}
        </div>
    );
};

PlotContainer.displayName = "PlotContainer";
