import React from 'react'
import Script from 'next/script';


interface RequireJsLoaderProps {

}

export const RequireJsLoader = (props: RequireJsLoaderProps) => {
return (
        <Script
            id="load-requireJs"
            src="/scripts/require.js"
            async
            strategy="lazyOnload"
            {...props}
        />
)
}


RequireJsLoader.displayName = "RequireJsLoader"
