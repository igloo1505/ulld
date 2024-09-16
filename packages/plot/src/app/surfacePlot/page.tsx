import React from 'react'
import LocalDevelopmentPageWrapper from "@ulld/utilities/localDevelopmentPageWrapper"
import PlotlySurfacePlotEmbeddableDemo from '../../demos/embeddable/plotly/surface/main'


interface EmbeddableLinePlotDemoPageProps {

}

const EmbeddableLinePlotDemoPage = (props: EmbeddableLinePlotDemoPageProps) => {
return (
        <LocalDevelopmentPageWrapper>
            <PlotlySurfacePlotEmbeddableDemo />
        </LocalDevelopmentPageWrapper>
)
}


EmbeddableLinePlotDemoPage.displayName = "EmbeddableLinePlotDemoPage"


export default EmbeddableLinePlotDemoPage;
