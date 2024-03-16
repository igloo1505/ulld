import React from 'react'
import Script from 'next/script';


interface RequireJsLoaderProps {

}

export const RequireJsLoader = (props: RequireJsLoaderProps) => {
return (
        <Script
            id="load-requireJs"
            src="./require.js"
            async
            {...props}
        />
)
}


RequireJsLoader.displayName = "RequireJsLoader"
