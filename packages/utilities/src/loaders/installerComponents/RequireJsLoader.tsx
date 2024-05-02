import Script, { ScriptProps } from 'next/script';
import React from 'react'


const RequireJsLoader = (props: ScriptProps) => {
    return (
        <Script
            id="load-requireJs"
            src="/utils/require.js"
            async
            {...props}
        />
    )
}


RequireJsLoader.displayName = "RequireJsLoader"


export default RequireJsLoader;
