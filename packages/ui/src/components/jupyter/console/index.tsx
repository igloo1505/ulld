import JupyterContextWrapper from '#/components/wrappers/jupyter';
import { Console } from '@datalayer/jupyter-react';
import React from 'react'


interface JupyterConsoleProps {

}

const JupyterConsole = (props: JupyterConsoleProps) => {
    return (
        <JupyterContextWrapper>
            <Console />
        </JupyterContextWrapper>
    )
}


JupyterConsole.displayName = "JupyterConsole"


export default JupyterConsole;
