import React from "react";
import NotesPlot from "./plots/notes";
import { useDashboardContext } from "../../../util/provider";
import TaskListCompletionPlot from "./plots/tasks";

interface MainCardPlotProps {
  /* filterType:  */
}

const MainCardPlot = ({}: MainCardPlotProps) => {
  const { plotFilterType } = useDashboardContext();
  return (
    <div className={"w-full flex-grow h-[150px] min-[650px]:max-h-full pr-2 pb-2"}>
       { plotFilterType === "Notes" && <NotesPlot /> }
       { plotFilterType === "Tasks" && <TaskListCompletionPlot /> }
    </div>
  );
};

MainCardPlot.displayName = "MainCardPlot";

export default MainCardPlot;
