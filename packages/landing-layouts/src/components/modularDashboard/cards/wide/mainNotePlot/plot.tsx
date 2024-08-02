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
    <div className={"w-full flex-grow h-[150px]"}>
       { plotFilterType === "Notes" && <NotesPlot /> }
       { plotFilterType === "Tasks" && <TaskListCompletionPlot /> }
    </div>
  );
};

MainCardPlot.displayName = "MainCardPlot";

export default MainCardPlot;
