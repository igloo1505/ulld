import React, { ReactNode, useEffect } from "react";
import { useDashboardContext, useDashboardDispatch } from "./provider";
import { useLocalStorage } from "@ulld/hooks/useLocalStorage";
import { TimePeriodOption } from "@ulld/utilities/dateTime";
import { useIsomorphicLayoutEffect } from "@ulld/hooks/useIsomorphicEffect";
import { filterItemsByTimePeriod } from "../../../util/utilityFunctions";
import { localStorageKeys } from "../../../util/staticData";

interface DashboardInnerProviderProps {
    children: ReactNode;
}

const DashboardInnerProvider = ({ children }: DashboardInnerProviderProps) => {
    const dispatch = useDashboardDispatch();
    const state = useDashboardContext();

    const [timePeriod] = useLocalStorage<TimePeriodOption>(
        localStorageKeys.timePeriodFilter,
    );

    const [plotFilterType] = useLocalStorage(localStorageKeys.plotFilter);

    useEffect(() => {
        dispatch({
            type: "setPlotFilterType",
            payload: plotFilterType,
        });
    }, [plotFilterType]);

    useIsomorphicLayoutEffect(() => {
        let items = filterItemsByTimePeriod(
            state.notes,
            timePeriod,
            (n) => n.lastAccess!,
        );
        dispatch({
            type: "setFilteredNotes",
            payload: {
                filteredNotes: items,
                timePeriod: timePeriod,
            },
        });
    }, [timePeriod]);
    return <>{children}</>;
};

DashboardInnerProvider.displayName = "DashboardInnerProvider";

export default DashboardInnerProvider;
