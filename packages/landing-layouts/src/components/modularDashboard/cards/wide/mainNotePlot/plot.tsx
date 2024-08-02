import React from "react";
import NotesPlot from "./plots/notes";

interface MainCardPlotProps {
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
