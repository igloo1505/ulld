import { Console } from '@datalayer/jupyter-react';
import React from 'react'
import { JupyterContextWrapper } from '../jupyterProvider';


interface JupyterConsoleProps {

}

export const JupyterConsole = (props: JupyterConsoleProps) => {
    return (
        <JupyterContextWrapper>
            <Console />
        </JupyterContextWrapper>
    )
}


JupyterConsole.displayName = "JupyterConsole"
