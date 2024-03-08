import React from 'react'
import ReduxProvider from '#/state/ReduxProvider'
import { PlotlyOptionsThreeD } from '#/types/plotly/plotlyTypes'
import { PlotDataHandlerThreeD } from '#/classes/plotly/PlotDataHandler3d'
import ThreeDPlotlyHandler from './3dPlotlyHandler'



const SurfacePlot = (props: PlotlyOptionsThreeD) => {
    const data = new PlotDataHandlerThreeD({
        ...props,
        types: props.functions.map(() => "surface")
    })
    data.generate()
    data.options.functions = undefined!
    return (
        <ReduxProvider>
            <ThreeDPlotlyHandler data={data.plots} options={data.options} layout={data.layout} />
        </ReduxProvider>
    )
}


SurfacePlot.displayName = "SurfacePlot"


export default SurfacePlot;
