import React from "react";
import XYPlot from "../../../components/embeddable/XYPlot/main";
import Line from "../../../components/embeddable/XYPlot/embeddableTraces/line";

interface LinePlotEmbeddableDemoProps { }

const LinePlotEmbeddableDemo = (props: LinePlotEmbeddableDemoProps) => {
    return (
        <XYPlot
            grid
        >
            <Line 
            label={"$\\gamma$"}
            f={(v, spc) => 1 / Math.sqrt(1 - v**2 / spc.const.c**2)}
        />
        </XYPlot>
    );
};

LinePlotEmbeddableDemo.displayName = "LinePlotEmbeddableDemo";

export default LinePlotEmbeddableDemo;
