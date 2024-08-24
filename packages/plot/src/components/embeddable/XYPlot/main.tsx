import React from "react";
import { xyPlotPropSchema, XYPlotProps } from "./utils/schemas";
import { XYPlotProvider } from "./context";
import XYPlotContainer from "./container";
import { ChartChildren, StoredPlotData } from "./types";
import { readAppConfig } from "@ulld/developer/readAppConfig";
import CreateInitialPlotData from "./utils/createInitialPlotData";
import { getRandomId } from "@ulld/utilities/identity";

const XYPlot = async ({
    children,
    ...p
}: XYPlotProps & { children: ChartChildren }) => {
    let props = xyPlotPropSchema.parse(p) as StoredPlotData;
    let appConfig = await readAppConfig();
    const plotId = p.id || getRandomId();
    props.plotId = plotId;
    const modifiedChildren = {
        ...(children as object),
        props: {
            ...children.props,
            ...props,
            userDefinedConstants: appConfig.math.constants
        },
    };
    return (
        <>
            <CreateInitialPlotData data={props} />
            <XYPlotProvider
                initialValues={{
                    plotId
                }}
            >
                <XYPlotContainer {...props}>
                    {modifiedChildren as typeof children}
                </XYPlotContainer>
            </XYPlotProvider>
        </>
    );
};

XYPlot.displayName = "XYPlot";

export default XYPlot;
