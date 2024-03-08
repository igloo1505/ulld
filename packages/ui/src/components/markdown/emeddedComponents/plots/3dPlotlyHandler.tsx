"use client"
import React, { useEffect, useState } from 'react'
import Plot from 'react-plotly.js';
import { RootState } from '#/state/store';
import { connect } from 'react-redux';
import { applyPlotlyTheme } from '#/styles/plotly/applyTheme';
import { htmlEm } from '#/actions/dom';
import { PlotlyHandlerProps, TwoDPlotTypes } from '#/types/plotly/plotlyTypes';
import { ModeBarDefaultButtons } from 'plotly.js';
import { plotlyRemovedButtons } from '#/styles/plotly/hideModebarButtons';


const connector = connect((state: RootState, props: any) => ({
    darkmode: state.UI.darkmode,
    props: props
}))



const ThreeDPlotlyHandler = connector(({ data, layout, options, darkmode }: PlotlyHandlerProps<TwoDPlotTypes>) => {
    const [initialRender, setInitialRender] = useState(true)
    const [weirdWayOfHandlingDarkState, setWeirdWayOfHandlingDarkState] = useState(1)
    const finalConfig = applyPlotlyTheme(layout, data, initialRender ? Boolean(htmlEm()?.classList.contains("dark")) : darkmode)

    useEffect(() => {
        setInitialRender(false)
    }, [])
    useEffect(() => {
        setWeirdWayOfHandlingDarkState(weirdWayOfHandlingDarkState + 1)
    }, [darkmode])


    return (
        <div className={"w-full h-fit flex justify-center items-center my-6"}>
            <div className={"relative rounded-lg overflow-hidden w-screen h-[450px]"}>
                <Plot
                    /* PERFORMANCE: Tried to port over the way plotly handles themes in python to the web and wound up with tons of extra properties for plot types that aren't being used. Clean this up when you have time. */
                    /// @ts-ignore
                    data={finalConfig.plots}
                    layout={finalConfig.layout}
                    className={"w-full h-[350px] md:h-[450px]"}
                    config={{
                        typesetMath: true,
                        displaylogo: false,
                        responsive: true,
                        autosizable: true,
                        staticPlot: Boolean(options.static),
                        /* TODO: Adjust the alignmenet or only show export as image button in the future. For right now this is just getting in the way. */
                        modeBarButtonsToRemove: plotlyRemovedButtons
                    }}
                    revision={weirdWayOfHandlingDarkState}
                />
            </div>
        </div>
    )
})


ThreeDPlotlyHandler.displayName = "ThreeDPlotlyHandler"


export default ThreeDPlotlyHandler;
