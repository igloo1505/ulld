import React from 'react'
import LocalDevelopmentPageWrapper from "@ulld/utilities/localDevelopmentPageWrapper"
import LinePlotEmbeddableDemo from '../../demos/embeddable/linePlot/main'


interface EmbeddableLinePlotDemoPageProps {

}

const EmbeddableLinePlotDemoPage = (props: EmbeddableLinePlotDemoPageProps) => {
return (
        <LocalDevelopmentPageWrapper>
            <LinePlotEmbeddableDemo />
        </LocalDevelopmentPageWrapper>
)
}


EmbeddableLinePlotDemoPage.displayName = "EmbeddableLinePlotDemoPage"


export default EmbeddableLinePlotDemoPage;
