"use client"
import { DiagramManager } from '#/classes/PixiManager'
import { PixiDiagramProps } from '#/types/diagrams'
import React, { useEffect, useId, useRef } from 'react'



const PixiDiagram = (props: PixiDiagramProps) => {
    const id = useId()
    useEffect(() => {
        const manager = new DiagramManager({ ...props, id: id })
    }, [])
    return (
        <div className={"w-full flex justify-center items-center"}>
            <canvas className={"pixi-canvas rounded-lg"} id={id}></canvas>
        </div>
    )

}

PixiDiagram.displayName = "PixiDiagram"


export default PixiDiagram;
