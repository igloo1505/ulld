import React from 'react'



interface InvalidVariablesWarningProps {

}

export const InvalidVariablesWarning = (props: InvalidVariablesWarningProps) => {
return (
    <div className={"w-full text-center text-lg text-red-500 dark:text-red-400"}>You seem to have made a mistake providing your plot variables. If you provide variables, you must also provide an id property.</div>
)
}


InvalidVariablesWarning.displayName = "InvalidVariablesWarning"
