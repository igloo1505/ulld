"use client"
import React from 'react'
import { Jupyter, JupyterProps } from "@datalayer/jupyter-react"
import { useSearchParams } from 'next/navigation'
import "#/styles/notebook.scss"
import { ParsedAppConfig, getInternalConfig } from '@ulld/configschema'


interface JupyterContextWrapperProps {
    children: React.ReactNode
    startKernel?: boolean
    collaborative?: boolean
    darkMode?: boolean
    terminals?: boolean
    _config?: ParsedAppConfig
}


export const JupyterContextWrapper = ({ children, darkMode, terminals, collaborative, startKernel = false, _config }: JupyterContextWrapperProps) => {
    const sp = useSearchParams()
    const config = _config || getInternalConfig(sp)
    const jupyterBaseUrl = `http://127.0.0.1:${config.jupyter.jupyterPort}`
    const jupyterSocketUrl = `ws://127.0.0.1:${config.jupyter.jupyterPort}`
    const jupyterProps: Omit<JupyterProps, "children"> = {
        jupyterServerHttpUrl: jupyterBaseUrl,
        jupyterServerWsUrl: jupyterSocketUrl,
        jupyterToken: config.jupyter.jupyterToken,
        startDefaultKernel: true,
        ...(typeof terminals !== "undefined" && { terminals: terminals }),
        /* disableCssLoading: true, */
        colorMode: darkMode === false ? "light" : "dark",
        defaultKernelName: "python3",
        ...config.jupyter.jupyterReactProps
    }


    return (
        <Jupyter
            {...jupyterProps}
        >
            {children as any}
        </Jupyter>
    )
}


JupyterContextWrapper.displayName = "JupyterContextWrapper"
