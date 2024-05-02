"use client"
import React, { useId } from 'react'
import { INotebookProps, Notebook as JupyterNotebook } from "@datalayer/jupyter-react"
import NotebookToolbar from './notebookToolbar'
import NotebookCellSidebarMenu from './cellSidebarMenu'
import { ParsedAppConfig } from '@ulld/configschema/types'
import { getInternalConfig } from '@ulld/configschema/zod/getInternalConfig'
import { makeValidId } from '@ulld/utilities/identity'
import { JupyterContextWrapper } from '../jupyterProvider'


type NotebookProps = ({
    path: string
    content?: undefined
    prefer: "fs" | "db"
    darkMode?: boolean
    _config?: ParsedAppConfig
}) | ({
    path?: undefined | string
    content: string
    prefer: "fs" | "db"
    darkMode?: boolean
    _config?: ParsedAppConfig
})



const Notebook = ({ path, darkMode, content, prefer, _config }: NotebookProps) => {
    const id = useId()
    const config = _config || getInternalConfig()
    const notebookProps: Partial<INotebookProps> = {
        uid: path ? makeValidId(path) : `notebook-${id}`,
        CellSidebar: NotebookCellSidebarMenu,
        height: typeof window === "undefined" ? "100vh" : `${window.innerHeight}px`,
        path: path,
        nbformat: Boolean(content && !path) ? typeof content === "string" ? JSON.parse(content) : content : undefined,
        Toolbar: NotebookToolbar,
        ...config.jupyter.jupyterNotebookProps
    }


    return (
        <div className={"jupyterUI jupyter-foldable-outputs w-full max-w-full h-fit relative"}>
            <JupyterContextWrapper
                startKernel
                darkMode={darkMode}
            /* terminals */
            >
                <JupyterNotebook
                    {...notebookProps}
                />
            </JupyterContextWrapper>
        </div>
    )

}


Notebook.displayName = "Notebook"


export default Notebook;
