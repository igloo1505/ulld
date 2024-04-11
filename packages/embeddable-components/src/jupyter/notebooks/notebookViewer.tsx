"use client"
import React from 'react'
import { Viewer } from "@datalayer/jupyter-react"


interface NotebookViewerProps {
    content: string | object
}

const NotebookViewer = ({ content }: NotebookViewerProps) => {
    return (
        <Viewer
            nbformat={typeof content === "string" ? JSON.parse(content) : content}
            outputs={true}
        />
    )
}


NotebookViewer.displayName = "NotebookViewer"


export default NotebookViewer;
