import React from 'react'
import dynamic from "next/dynamic"
import type { MP } from './modelViewInternal'
const ModelViewComponent = dynamic(() =>  import("./modelViewInternal").then((a) => a.ModelViewInternal), {ssr: false})

export const ModelView = (props: MP) => {
return (
    <ModelViewComponent {...props} />
)
}


ModelView.displayName = "ModelViewWrapper"


export default ModelView;
