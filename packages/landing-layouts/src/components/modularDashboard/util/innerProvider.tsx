import React, { ReactNode, useEffect } from "react";
import { useDashboardContext, useDashboardDispatch } from "./provider";
import { useLocalStorage } from "@ulld/hooks/useLocalStorage";
import { TimePeriodOption } from "@ulld/utilities/dateTime";
import { useIsomorphicLayoutEffect } from "@ulld/hooks/useIsomorphicEffect";
import { localStorageKeys } from "./staticData";
import { filterItemsByTimePeriod } from "./utilityFunctions";
import {
  MainPlotFilterType,
  ModularDashboardData,
  TaskManagerOverview,
} from "../types";

interface DashboardInnerProviderProps {
  children: ReactNode;
  initialModularData: ModularDashboardData;
  initialTaskData: TaskManagerOverview;
}

const DashboardInnerProvider = ({
  children,
  initialModularData: data,
  initialTaskData: taskData,
}: DashboardInnerProviderProps) => {
  const dispatch = useDashboardDispatch();
  const state = useDashboardContext();

  const [timePeriod] = useLocalStorage<TimePeriodOption>(
    localStorageKeys.timePeriodFilter,
  );

  const [plotFilterType] = useLocalStorage<MainPlotFilterType>(
    localStorageKeys.plotFilter,
  );

  useEffect(() => {
    if (data && !state.notes.length) {
      dispatch({
        type: "setInitialModularData",
        payload: data,
      });
    }
  }, [data]);

  useEffect(() => {
    if (taskData && !state.taskLists.length) {
      dispatch({
        type: "setInitialTaskData",
        payload: taskData,
      });
    }
  }, [taskData]);

  useEffect(() => {
    dispatch({
      type: "setPlotFilterType",
      payload: plotFilterType,
    });
  }, [plotFilterType]);

  const setFilteredNotes = () => {
    let items = filterItemsByTimePeriod(
      state.notes,
      timePeriod,
      (n) => n.firstSync!,
    );
    dispatch({
      type: "setFilteredNotes",
      payload: {
        filteredNotes: items,
        timePeriod: timePeriod,
      },
    });
  };

  useEffect(() => {
    if (state.notes.length && !state.filteredNotes.length) {
      setFilteredNotes();
    }
  }, [state.notes]);

  useIsomorphicLayoutEffect(() => {
    setFilteredNotes();
  }, [timePeriod]);

  return <>{children}</>;
};

DashboardInnerProvider.displayName = "DashboardInnerProvider";

export default DashboardInnerProvider;
