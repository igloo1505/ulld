"use client"
import React from "react";
import dynamic from "next/dynamic";
const SurfacePlot = dynamic(
    () => import("../../../../components/embeddable/plotly/3d/surface/main"),
    { ssr: false },
);

interface PlotlySurfacePlotEmbeddableDemoProps { }

const PlotlySurfacePlotEmbeddableDemo = (
    props: PlotlySurfacePlotEmbeddableDemoProps,
) => {
    return <SurfacePlot
        setX={(m) => m.fromLinSpace(-10, 10, 100)}
        f={(n) => n**2}
    />;
};

PlotlySurfacePlotEmbeddableDemo.displayName = "PlotlySurfacePlotEmbeddableDemo";

export default PlotlySurfacePlotEmbeddableDemo;
