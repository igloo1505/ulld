import React from 'react'
import ReduxProvider from '#/state/ReduxProvider'
import { PlotlyOptions, TwoDPlotTypes } from '#/types/plotly/plotlyTypes'
import { PlotDataHandler } from '#/classes/plotly/PlotDataHandler'
import TwoDPlotlyHandler from './2dPlotlyHandler'


const LinePlot = (props: PlotlyOptions<TwoDPlotTypes>) => {
    const data = new PlotDataHandler({
        ...props,
        types: props.functions.map(() => "scatter")
    })
    data.generate()
    data.options.functions = undefined!

    /* TODO: Consider removing all of these Redux providers around the plots if darkmode can be triggered a different way. Need to be able to listen to a state object and not just a DOM property. */
    return (
        <ReduxProvider>
            <TwoDPlotlyHandler data={data.plots} options={data.options} layout={data.layout} />
        </ReduxProvider>
    )
}


LinePlot.displayName = "LinePlot"


export default LinePlot;
