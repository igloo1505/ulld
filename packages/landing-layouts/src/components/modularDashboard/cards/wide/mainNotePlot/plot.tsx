import React from "react";
import { MainPlotFilterType } from "../../../types";
import { useLocalStorage } from "@ulld/hooks/useLocalStorage";
import NotesPlot, { NotesPlotProps } from "./plots/notes";
import { localStorageKeys } from "../../../util/staticData";

interface MainCardPlotProps extends NotesPlotProps {
    /* filterType:  */
}

const MainCardPlot = ({}: MainCardPlotProps) => {

    return (
        <div className={"w-full flex-grow h-[150px]"}>
            <NotesPlot />
        </div>
    );
};

MainCardPlot.displayName = "MainCardPlot";

export default MainCardPlot;
